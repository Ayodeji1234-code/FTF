
import { useState } from "react";
import type { FormEvent } from "react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { contactInfo } from "../data/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Something went wrong. Please try again.",
        );
      }

      setStatus(
        data?.message || "Your message has been sent successfully.",
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="ftf-page">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050817]">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5E35B1]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-3xl ftf-fade-up">
            <p className="inline-flex items-center gap-2 font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              <MessageCircle className="h-4 w-4" />
              Contact Us
            </p>

            <h1 className="mt-5 font-['Poppins'] text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              We would love to
              <span className="block text-[#4DD0E1]">hear from you.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              Whether you want to support our work, volunteer, partner with us,
              or simply learn more, we would be glad to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            {/* CONTACT DETAILS */}
            <div>
              <p className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Get in touch
              </p>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                Start a conversation.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-[#AEB9CD]">
                Reach out to Favored Tribe Foundation and let us know how we
                can connect, collaborate, or support your interest in our
                work.
              </p>

              <div className="mt-8 space-y-4">
                {/* PHONE */}
                <div className="ftf-card p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                      <Phone className="h-5 w-5 text-[#B79CFF]" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Phone
                      </p>

                      <div className="mt-1 space-y-1">
                        {contactInfo.phones.map((phone) => (
                          <a
                            key={phone.href}
                            href={phone.href}
                            className="block text-sm text-[#AEB9CD] transition hover:text-[#4DD0E1]"
                          >
                            {phone.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="ftf-card p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                      <Mail className="h-5 w-5 text-[#4DD0E1]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        Email
                      </p>

                      <a
                        href={contactInfo.email.href}
                        className="mt-1 block break-all text-sm text-[#AEB9CD] transition hover:text-[#4DD0E1]"
                      >
                        {contactInfo.email.label}
                      </a>
                    </div>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="ftf-card p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                      <MapPin className="h-5 w-5 text-[#B79CFF]" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Location
                      </p>

                      <p className="mt-1 text-sm text-[#AEB9CD]">
                        {contactInfo.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#4DD0E1]/10 bg-[#4DD0E1]/5 p-5">
                <p className="text-sm leading-6 text-[#D8DCEF]">
                  Send us a message and our team will get back to you as soon
                  as possible.
                </p>
              </div>

              {/* SOCIALS */}
              <div className="mt-7">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#AEB9CD]">
                  Follow us
                </p>

                <div className="flex gap-3">
                  <a
                    href={contactInfo.socials.instagram.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#111A2D] text-sm font-bold text-[#4DD0E1] transition hover:border-[#4DD0E1]/40 hover:bg-[#4DD0E1]/10"
                  >
                    IG
                  </a>

                  <a
                    href={contactInfo.socials.facebook.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#111A2D] text-lg font-bold text-[#B79CFF] transition hover:border-[#B79CFF]/40 hover:bg-[#5E35B1]/10"
                  >
                    f
                  </a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="ftf-card p-6 md:p-8 lg:p-10">
              <div className="mb-7">
                <p className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                  Send a message
                </p>

                <h2 className="mt-3 font-['Poppins'] text-2xl font-extrabold text-white md:text-3xl">
                  How can we help?
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#AEB9CD]">
                  Fill in the form below and send your enquiry directly to
                  Favored Tribe Foundation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Full name <span className="text-[#4DD0E1]">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/10 bg-[#050817] px-4 py-3.5 text-white outline-none transition placeholder:text-[#6F7B91] focus:border-[#4DD0E1]/60 focus:ring-2 focus:ring-[#4DD0E1]/10"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Email address <span className="text-[#4DD0E1]">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#050817] px-4 py-3.5 text-white outline-none transition placeholder:text-[#6F7B91] focus:border-[#4DD0E1]/60 focus:ring-2 focus:ring-[#4DD0E1]/10"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="0800 000 0000"
                    className="w-full rounded-xl border border-white/10 bg-[#050817] px-4 py-3.5 text-white outline-none transition placeholder:text-[#6F7B91] focus:border-[#4DD0E1]/60 focus:ring-2 focus:ring-[#4DD0E1]/10"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Message <span className="text-[#4DD0E1]">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help or how you would like to work with us..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#050817] px-4 py-3.5 text-white outline-none transition placeholder:text-[#6F7B91] focus:border-[#4DD0E1]/60 focus:ring-2 focus:ring-[#4DD0E1]/10"
                  />
                </div>

                {/* STATUS */}
                {status && (
                  <div
                    role="alert"
                    className={`flex items-start gap-3 rounded-xl border px-4 py-4 text-sm ${
                      status.toLowerCase().includes("success")
                        ? "border-[#4DD0E1]/20 bg-[#4DD0E1]/10 text-[#9BE8F2]"
                        : "border-red-400/20 bg-red-400/10 text-red-200"
                    }`}
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0"
                      size={18}
                    />

                    <p>{status}</p>
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="ftf-btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-[18px] w-[18px]" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Stay connected
            </p>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Every conversation can be a starting point.
            </h2>

            <p className="mt-4 leading-7 text-[#AEB9CD]">
              Whether you are looking to volunteer, partner, support our work,
              or learn more about FTF, we are always open to hearing from you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

