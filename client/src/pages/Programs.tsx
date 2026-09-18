
import {
  BookOpen,
  Users,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    number: "01",
    title: "Education",
    description:
      "Creating opportunities for children to learn, develop skills, build confidence, and reach their potential.",
    icon: BookOpen,
    points: [
      "Learning opportunities",
      "Mentorship",
      "Learning resources",
      "Skills development",
    ],
  },
  {
    number: "02",
    title: "Family Empowerment",
    description:
      "Supporting parents, caregivers, and families to create stable, supportive, and nurturing environments for children.",
    icon: Users,
    points: [
      "Parent and caregiver support",
      "Family resilience",
      "Knowledge and skills",
      "Child-centred homes",
    ],
  },
  {
    number: "03",
    title: "Child Protection",
    description:
      "Promoting children's rights, safety, dignity, and well-being while contributing to safer environments.",
    icon: ShieldCheck,
    points: [
      "Children's rights",
      "Safety and dignity",
      "Abuse prevention",
      "Safe environments",
    ],
  },
];

const approach = [
  {
    title: "Understand",
    text: "We listen to communities and understand the needs affecting children and families.",
  },
  {
    title: "Collaborate",
    text: "We work with communities, institutions, partners, and other stakeholders.",
  },
  {
    title: "Deliver",
    text: "We develop responsible programmes designed around identified needs.",
  },
  {
    title: "Learn",
    text: "We evaluate our work and use what we learn to improve.",
  },
];

const impactPath = [
  {
    label: "Conditions",
    title: "Supportive environments",
    text: "Learning opportunities, stronger families, and safer environments.",
  },
  {
    label: "Development",
    title: "Growing capabilities",
    text: "Children build knowledge, skills, confidence, and resilience.",
  },
  {
    label: "Potential",
    title: "Greater opportunities",
    text: "Children have stronger foundations to pursue their potential.",
  },
];

export default function Programs() {
  return (
    <main className="ftf-page">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#050817] py-24 md:py-32">

        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5E35B1]/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative">

          <div className="max-w-3xl ftf-fade-up">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our Programmes
            </span>

            <h1 className="mt-5 font-['Poppins'] text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Creating stronger conditions for{" "}
              <span className="text-[#4DD0E1]">
                children to thrive.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              Our work focuses on three connected areas that support children's
              development, strengthen families, and promote safer communities.
            </p>

          </div>
        </div>
      </section>

      {/* ================= THREE PILLARS ================= */}
      <section className="ftf-section bg-[#0B1022]">

        <div className="ftf-container">

          <div className="max-w-2xl">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our Focus
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Three areas. One purpose.
            </h2>

            <p className="mt-4 leading-7 text-[#AEB9CD]">
              We work across education, family empowerment, and child
              protection because children thrive when these areas work together.
            </p>

          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="ftf-card flex flex-col p-7 md:p-8"
                >

                  <div className="flex items-center justify-between">

                    <span className="font-['Poppins'] text-3xl font-extrabold text-[#4DD0E1]/20">
                      {pillar.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                      <Icon className="h-6 w-6 text-[#4DD0E1]" />
                    </div>

                  </div>

                  <h3 className="mt-7 font-['Poppins'] text-2xl font-bold text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#AEB9CD]">
                    {pillar.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">

                    {pillar.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm text-[#AEB9CD]"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DD0E1]" />
                        {point}
                      </li>
                    ))}

                  </ul>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="ftf-section bg-[#050817]">

        <div className="ftf-container">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Our Approach
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Thoughtful action. Continuous learning.
              </h2>

              <p className="mt-5 leading-7 text-[#AEB9CD]">
                We aim to understand needs, work collaboratively, deliver
                responsibly, and learn from every programme.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {approach.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#1D293E] p-6"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5E35B1]/20 font-['Poppins'] text-sm font-bold text-[#4DD0E1]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-5 font-['Poppins'] text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#AEB9CD]">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ================= IMPACT PATH ================= */}
      <section className="ftf-section bg-[#0B1022]">

        <div className="ftf-container">

          <div className="mx-auto max-w-3xl text-center">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our Impact Path
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Stronger conditions. Greater potential.
            </h2>

            <p className="mt-4 leading-7 text-[#AEB9CD]">
              Our programmes are designed to contribute to better conditions
              for children and families over time.
            </p>

          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">

            {impactPath.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-7 ${
                  index === 2
                    ? "border-[#4DD0E1]/20 bg-[#5E35B1]/10"
                    : "border-white/10 bg-[#1D293E]"
                }`}
              >

                <span
                  className={`text-sm font-bold uppercase tracking-wider ${
                    index === 1
                      ? "text-orange-400"
                      : "text-[#4DD0E1]"
                  }`}
                >
                  {item.label}
                </span>

                <h3 className="mt-3 font-['Poppins'] text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#AEB9CD]">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= SIMPLE CTA ================= */}
      <section className="border-t border-white/5 bg-[#050817]">

        <div className="ftf-container py-16 sm:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
              <HeartHandshake className="h-6 w-6 text-[#4DD0E1]" />
            </div>

            <h2 className="mt-5 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Interested in supporting our work?
            </h2>

            <p className="mt-4 leading-7 text-[#AEB9CD]">
              Whether you want to partner with us, support a programme, or
              learn more about our work, we'd love to hear from you.
            </p>

            <Link
              to="/contact"
              className="ftf-btn-primary mt-8"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

