import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
      <section className="relative overflow-hidden bg-[#050817] px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#5e35b1]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#4dd0e1]/10 blur-3xl" />

        <div className="ftf-container relative">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4dd0e1]/20 bg-[#111a2d] px-4 py-2 text-sm font-semibold text-[#4dd0e1]">
              <MessageCircle size={16} />
              Let's connect
            </div>

            <h1 className="font-['Poppins'] text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              We would love to
              <span className="block text-[#4dd0e1]">
                hear from you.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#aeb9cd]">
              Whether you want to support our work, partner with Favored Tribe
              Foundation, volunteer, or simply learn more about what we do,
              your message matters to us.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="bg-[#080d1d] py-20 md:py-24">
        <div className="ftf-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT SIDE */}
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#4dd0e1]">
                Contact information
              </p>

              <h2 className="font-['Poppins'] text-3xl font-bold text-white md:text-4xl">
                Start a conversation with us.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-[#aeb9cd]">
                Favored Tribe Foundation believes lasting change is built
                through collaboration. Reach out to us and let's explore how
                we can work together to strengthen the conditions in which
                children learn, grow and thrive.
              </p>

              {/* Contact cards */}
              <div className="mt-10 space-y-4">
                {/* Phone */}
                <div className="ftf-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#b79cff]">
                      <Phone size={21} />
                    </div>

                    <div>
                      <p className="font-['Poppins'] font-semibold text-white">
                        Phone
                      </p>

                      <div className="mt-2 space-y-1">
                        {contactInfo.phones.map((phone) => (
                          <a
                            key={phone.href}
                            href={phone.href}
                            className="block text-[#aeb9cd] transition hover:text-[#4dd0e1]"
                          >
                            {phone.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="ftf-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4dd0e1]/10 text-[#4dd0e1]">
                      <Mail size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="font-['Poppins'] font-semibold text-white">
                        Email
                      </p>

                      <a
                        href={contactInfo.email.href}
                        className="mt-2 block break-all text-[#aeb9cd] transition hover:text-[#4dd0e1]"
                      >
                        {contactInfo.email.label}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="ftf-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#b79cff]">
                      <MapPin size={21} />
                    </div>

                    <div>
                      <p className="font-['Poppins'] font-semibold text-white">
                        Location
                      </p>

                      <p className="mt-2 text-[#aeb9cd]">
                        {contactInfo.country}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response */}
                <div className="ftf-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4dd0e1]/10 text-[#4dd0e1]">
                      <Clock3 size={21} />
                    </div>

                    <div>
                      <p className="font-['Poppins'] font-semibold text-white">
                        General enquiries
                      </p>

                      <p className="mt-2 leading-6 text-[#aeb9cd]">
                        Send us a message and our team will get back to you as
                        soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#aeb9cd]">
                  Follow Favored Tribe Foundation
                </p>

                <div className="flex gap-3">
                  <a
                    href={contactInfo.socials.instagram.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111a2d] font-['Poppins'] font-bold text-[#4dd0e1] transition hover:-translate-y-1 hover:border-[#4dd0e1]/40 hover:bg-[#4dd0e1]/10"
                  >
                    IG
                  </a>

                  <a
                    href={contactInfo.socials.facebook.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111a2d] font-['Poppins'] text-lg font-bold text-[#b79cff] transition hover:-translate-y-1 hover:border-[#b79cff]/40 hover:bg-[#5e35b1]/10"
                  >
                    f
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="ftf-card p-6 md:p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4dd0e1]">
                  Send a message
                </p>

                <h2 className="mt-2 font-['Poppins'] text-2xl font-bold text-white md:text-3xl">
                  How can we help?
                </h2>

                <p className="mt-3 text-[#aeb9cd]">
                  Fill in the form below and send your enquiry directly to
                  Favored Tribe Foundation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Full name <span className="text-[#4dd0e1]">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-white/10 bg-[#111a2d] px-5 py-4 text-white outline-none transition placeholder:text-[#6f7b91] focus:border-[#4dd0e1]/60 focus:ring-2 focus:ring-[#4dd0e1]/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Email address <span className="text-[#4dd0e1]">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-[#111a2d] px-5 py-4 text-white outline-none transition placeholder:text-[#6f7b91] focus:border-[#4dd0e1]/60 focus:ring-2 focus:ring-[#4dd0e1]/10"
                  />
                </div>

                {/* Phone */}
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
                    placeholder="0800 000 0000"
                    className="w-full rounded-2xl border border-white/10 bg-[#111a2d] px-5 py-4 text-white outline-none transition placeholder:text-[#6f7b91] focus:border-[#4dd0e1]/60 focus:ring-2 focus:ring-[#4dd0e1]/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Message <span className="text-[#4dd0e1]">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Tell us how we can help or how you would like to work with us..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#111a2d] px-5 py-4 text-white outline-none transition placeholder:text-[#6f7b91] focus:border-[#4dd0e1]/60 focus:ring-2 focus:ring-[#4dd0e1]/10"
                  />
                </div>

                {/* Status */}
                {status && (
                  <div
                    className={`flex items-start gap-3 rounded-2xl border px-4 py-4 text-sm ${
                      status.toLowerCase().includes("success")
                        ? "border-[#4dd0e1]/20 bg-[#4dd0e1]/10 text-[#9be8f2]"
                        : "border-red-400/20 bg-red-400/10 text-red-200"
                    }`}
                  >
                    <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
                    <p>{status}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="ftf-btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="bg-[#050817] py-20">
        <div className="ftf-container">
          <div className="grid gap-5 md:grid-cols-3">
            {/* Donate */}
            <a
              href="/donate"
              className="group rounded-3xl border border-white/10 bg-[#111a2d] p-7 transition hover:-translate-y-1 hover:border-[#4dd0e1]/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#b79cff]">
                <ArrowRight size={20} />
              </div>

              <h3 className="font-['Poppins'] text-xl font-bold text-white">
                Support our work
              </h3>

              <p className="mt-3 leading-6 text-[#aeb9cd]">
                Learn how you can support our work for children and families.
              </p>

              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#4dd0e1]">
                Donate
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </a>

            {/* Volunteer */}
            <a
              href="/volunteer"
              className="group rounded-3xl border border-white/10 bg-[#111a2d] p-7 transition hover:-translate-y-1 hover:border-[#4dd0e1]/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4dd0e1]/10 text-[#4dd0e1]">
                <ArrowRight size={20} />
              </div>

              <h3 className="font-['Poppins'] text-xl font-bold text-white">
                Become a volunteer
              </h3>

              <p className="mt-3 leading-6 text-[#aeb9cd]">
                Use your skills, time and passion to contribute to our mission.
              </p>

              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#4dd0e1]">
                Volunteer
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </a>

            {/* Programs */}
            <a
              href="/programs"
              className="group rounded-3xl border border-white/10 bg-[#111a2d] p-7 transition hover:-translate-y-1 hover:border-[#4dd0e1]/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#b79cff]">
                <ArrowRight size={20} />
              </div>

              <h3 className="font-['Poppins'] text-xl font-bold text-white">
                Explore our programmes
              </h3>

              <p className="mt-3 leading-6 text-[#aeb9cd]">
                Discover how education, family empowerment and child
                protection shape our work.
              </p>

              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#4dd0e1]">
                View programmes
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#0b1022] px-6 py-20 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#5e35b1]/20 blur-3xl" />

        <div className="ftf-container relative text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4dd0e1]">
            Favored Tribe Foundation
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-['Poppins'] text-3xl font-bold leading-tight text-white md:text-5xl">
            Together, we can help create futures filled with opportunity.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#aeb9cd]">
            Every child. Every family. Every future.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/get-involved" className="ftf-btn-primary">
              Get Involved
              <ArrowRight size={18} />
            </a>

            <a
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:border-[#4dd0e1]/40 hover:bg-white/10"
            >
              Explore our work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}