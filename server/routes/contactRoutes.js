import express from "express";
import { Resend } from "resend";

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in your name, email and message.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Favored Tribe Foundation <onboarding@resend.dev>",
      to: ["favoredtribefoundation@gmail.com"],
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

        <h3>Message</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>

        <hr>

        <p>
          This message was submitted through the Favored Tribe Foundation website.
        </p>
      `,
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Unable to send your message right now.",
      });
    }

    res.json({
      success: true,
      message: "Your message has been sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

export default router;