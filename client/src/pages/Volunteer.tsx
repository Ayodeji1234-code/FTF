import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  Heart,
  Users,
  GraduationCap,
  HandHeart,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const serviceAreas = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description:
      "Help create meaningful learning opportunities and support children's participation in education.",
  },
  {
    icon: Users,
    title: "Family Empowerment",
    description:
      "Support families and caregivers through knowledge, encouragement, and practical assistance.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection",
    description:
      "Support efforts that promote children's safety, dignity, rights, and well-being.",
  },
  {
    icon: HandHeart,
    title: "Community Support",
    description:
      "Work alongside communities and partners to create stronger environments for children.",
  },
  {
    icon: Heart,
    title: "Events & Outreach",
    description:
      "Support outreach activities, awareness campaigns, events, and community initiatives.",
  },
  {
    icon: Users,
    title: "Skills & Professional Support",
    description:
      "Share your professional knowledge, technical skills, creativity, or experience.",
  },
];

const principles = [
  "Respect for children, families, and communities",
  "Commitment to safeguarding and child well-being",
  "Integrity and responsible use of resources",
  "Collaboration and willingness to learn",
  "Professionalism and reliability",
  "Accountability in every contribution",
];

const volunteerAreas = [
  "Education & Learning",
  "Family Empowerment",
  "Child Protection",
  "Community Support",
  "Events & Outreach",
  "Skills & Professional Support",
  "Other",
];

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    motivation: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/volunteer`,
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
        data?.message ||
          "Thank you for your interest. Your application has been received.",
      );

      setStatusType("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        area: "",
        motivation: "",
      });
    } catch (error) {
      console.error("Volunteer form error:", error);

      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to submit your application. Please try again.",
      );

      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="ftf-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#5e35b1]/20 blur-3xl" />

        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-3xl ftf-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#4DD0E1]/20 bg-[#4DD0E1]/10 px-4 py-2 text-sm font-semibold text-[#4DD0E1]">
              <Heart size={16} />
              Volunteer with FTF
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Give your time.
              <span className="block text-[#4DD0E1]">
                Help transform futures.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              Your time, skills, and compassion can help create better
              conditions for children and families to learn, grow, and thrive.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#volunteer-form" className="ftf-btn-primary">
                Become a Volunteer
                <ArrowRight size={18} />
              </a>

              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-[#4DD0E1]/30 hover:bg-white/10"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WAYS TO VOLUNTEER
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Ways to contribute
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Find a way to serve that fits your strengths.
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              Volunteers can contribute across different areas of our work as
              programmes and partnerships continue to grow.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="ftf-card p-6 transition duration-300 hover:-translate-y-1 hover:border-[#4DD0E1]/20"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-2 leading-7 text-[#AEB9CD]">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE VALUE
      ========================================================= */}
      <section className="ftf-section bg-[#080d20]">
        <div className="ftf-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Our expectations
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Volunteer with purpose.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[#AEB9CD]">
                Because our work involves children and families, every
                volunteer is expected to contribute with respect,
                responsibility, safeguarding, and professionalism.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#4DD0E1]"
                  />

                  <span className="text-sm leading-6 text-[#D6DDEA]">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VOLUNTEER FORM
      ========================================================= */}
      <section id="volunteer-form" className="ftf-section">
        <div className="ftf-container">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                <Heart size={28} />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Volunteer application
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Tell us how you would like to contribute.
              </h2>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                Complete the form and our team will review your application.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="ftf-card mt-10 p-6 md:p-9"
            >
              <div className="grid gap-5 md:grid-cols-2">
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Full Name <span className="text-[#4DD0E1]">*</span>
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
                    className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-4 py-3.5 text-white outline-none transition placeholder:text-[#68748a] focus:border-[#4DD0E1]/50"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Email Address <span className="text-[#4DD0E1]">*</span>
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
                    className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-4 py-3.5 text-white outline-none transition placeholder:text-[#68748a] focus:border-[#4DD0E1]/50"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-4 py-3.5 text-white outline-none transition placeholder:text-[#68748a] focus:border-[#4DD0E1]/50"
                  />
                </div>

                {/* AREA */}
                <div>
                  <label
                    htmlFor="area"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Area of Interest{" "}
                    <span className="text-[#4DD0E1]">*</span>
                  </label>

                  <select
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-4 py-3.5 text-white outline-none transition focus:border-[#4DD0E1]/50"
                  >
                    <option value="" disabled>
                      Select an area
                    </option>

                    {volunteerAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* MOTIVATION */}
              <div className="mt-5">
                <label
                  htmlFor="motivation"
                  className="mb-2 block text-sm font-semibold text-white"
                >
                  Why would you like to volunteer with FTF?
                </label>

                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your interests, skills, experience, or how you would like to contribute..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0b1022] px-4 py-3.5 text-white outline-none transition placeholder:text-[#68748a] focus:border-[#4DD0E1]/50"
                />
              </div>

              {/* STATUS */}
              {status && (
                <div
                  role="alert"
                  className={`mt-5 flex items-start gap-3 rounded-xl border px-4 py-4 text-sm leading-6 ${
                    statusType === "success"
                      ? "border-[#4DD0E1]/20 bg-[#4DD0E1]/10 text-[#B9F4F8]"
                      : "border-red-400/20 bg-red-400/10 text-red-200"
                  }`}
                >
                  {statusType === "success" ? (
                    <CheckCircle2
                      className="mt-0.5 shrink-0"
                      size={20}
                    />
                  ) : (
                    <AlertCircle
                      className="mt-0.5 shrink-0"
                      size={20}
                    />
                  )}

                  <span>{status}</span>
                </div>
              )}

              {/* SUBMIT */}
              <div className="mt-7">
                <button
                  type="submit"
                  disabled={loading}
                  className="ftf-btn-primary w-full justify-center sm:w-auto"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#17102f] via-[#12182c] to-[#091827] p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#5e35b1]/20 blur-3xl" />

            <div className="relative grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                  Transforming futures through kindness
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  Your contribution can make a difference.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-[#AEB9CD]">
                  Join Favored Tribe Foundation in creating stronger
                  conditions for children and families to thrive.
                </p>
              </div>

              <Link
                to="/get-involved"
                className="ftf-btn-primary whitespace-nowrap"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}