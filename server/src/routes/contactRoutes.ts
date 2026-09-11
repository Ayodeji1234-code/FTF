import { Router } from "express";
import { Resend } from "resend";

const router = Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Favored Tribe Foundation <onboarding@resend.dev>",
      to: ["favoredtribefoundation@gmail.com"],
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

          <h3>Message</h3>
          <p>${String(message).replace(/\n/g, "<br />")}</p>

          <hr />

          <p>
            This message was submitted through the
            Favored Tribe Foundation website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Resend could not send the email.",
      });
    }

    console.log("Email sent successfully:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message.",
    });
  }
});

export default router;