import express from "express";
import cors from "cors";
import { Resend } from "resend";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Favored Tribe Foundation <onboarding@resend.dev>",
      to: ["favoredtribefoundation@gmail.com"],
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

          <h3>Message</h3>
          <p>${message.replace(/\n/g, "<br />")}</p>

          <hr />

          <p>
            This message was submitted through the
            Favored Tribe Foundation website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Unable to send your message right now.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Contact server running on port ${PORT}`);
});