import express from "express";
import { Resend } from "resend";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import validator from "validator";

const router = express.Router();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

router.post("/volunteer", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      area,
      motivation,
    } = req.body;

    // Validate required fields
    if (!name || !email || !area) {
      return res.status(400).json({
        success: false,
        message:
          "Please fill in your name, email and area of interest.",
      });
    }

    // Validate types
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof area !== "string" ||
      (phone !== undefined &&
        phone !== null &&
        typeof phone !== "string") ||
      (motivation !== undefined &&
        motivation !== null &&
        typeof motivation !== "string")
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone?.trim() || null;
    const cleanArea = area.trim();
    const cleanMotivation = motivation?.trim() || null;

    // Validate email
    if (!validator.isEmail(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Length limits
    if (cleanName.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name is too long.",
      });
    }

    if (cleanEmail.length > 254) {
      return res.status(400).json({
        success: false,
        message: "Email address is too long.",
      });
    }

    if (cleanPhone && cleanPhone.length > 30) {
      return res.status(400).json({
        success: false,
        message: "Phone number is too long.",
      });
    }

    if (cleanArea.length > 150) {
      return res.status(400).json({
        success: false,
        message: "Area of interest is too long.",
      });
    }

    if (cleanMotivation && cleanMotivation.length > 5000) {
      return res.status(400).json({
        success: false,
        message:
          "Motivation is too long. Please keep it under 5,000 characters.",
      });
    }

    // Save application to database
    const application = await prisma.volunteerApplication.create({
      data: {
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        area: cleanArea,
        motivation: cleanMotivation,
      },
    });

    // Escape user input before inserting it into HTML
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(cleanPhone || "Not provided");
    const safeArea = escapeHtml(cleanArea);
    const safeMotivation = cleanMotivation
      ? escapeHtml(cleanMotivation).replace(/\n/g, "<br>")
      : "Not provided";

    // Send notification email
    const { data, error } = await resend.emails.send({
      from: "Favored Tribe Foundation <onboarding@resend.dev>",
      to: ["favoredtribefoundation@gmail.com"],
      replyTo: cleanEmail,
      subject: `New Volunteer Application from ${cleanName}`,
      html: `
        <h2>New Volunteer Application</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Area of Interest:</strong> ${safeArea}</p>

        <h3>Why they want to volunteer</h3>
        <p>${safeMotivation}</p>

        <hr>

        <p>
          This application was submitted through the
          Favored Tribe Foundation website.
        </p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message:
          "Your application was saved, but the email notification failed.",
        id: application.id,
      });
    }

    return res.json({
      success: true,
      message:
        "Thank you for your interest in volunteering with Favored Tribe Foundation. Your application has been received.",
      id: application.id,
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Volunteer application error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

export default router;