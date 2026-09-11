import {
  HeartHandshake,
  Users,
  Handshake,
  Gift,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Building2,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const involvementOptions = [
  {
    icon: Users,
    title: "Volunteer",
    text: "Give your time, skills and energy to support work that creates better opportunities and conditions for children.",
    link: "/volunteer",
    action: "Volunteer with us",
  },
  {
    icon: Handshake,
    title: "Partner",
    text: "Work with us through shared purpose, complementary expertise, mutual accountability and measurable results.",
    link: "/contact",
    action: "Become a partner",
  },
  {
    icon: Gift,
    title: "Donate",
    text: "Support our mission by contributing resources that can help strengthen opportunities for children and families.",
    link: "/donate",
    action: "Support our work",
  },
  {
    icon: Megaphone,
    title: "Advocate",
    text: "Use your voice to promote the rights, dignity, safety and opportunities of children.",
    link: "/contact",
    action: "Start a conversation",
  },
];

const partnerTypes = [
  {
    icon: Building2,
    title: "Government & Institutions",
    text: "Public institutions and organisations working to improve outcomes for children and families.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Academic Institutions",
    text: "Schools, educators and academic partners contributing knowledge, opportunities and expertise.",
  },
  {
    icon: HeartHandshake,
    title: "Development & Community Partners",
    text: "Development organisations, civil society groups, community leaders and other partners working toward shared goals.",
  },
];

const principles = [
  "Shared purpose",
  "Complementary expertise",
  "Mutual accountability",
  "Measurable results",
  "Transparency",
  "The best interests and well-being of children",
];

export default function GetInvolved() {
  return (
    <main className="ftf-page">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(94,53,177,0.22),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(77,208,225,0.10),transparent_30%)]" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-4xl ftf-fade-up">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#4DD0E1]">
              Get Involved
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              There is a place for you in this work.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              Lasting change is strengthened when individuals, communities,
              organisations and institutions come together around a shared
              commitment to children and families.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="ftf-btn-primary">
                Start a Conversation
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/donate"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:border-[#4DD0E1]/40 hover:bg-white/5"
              >
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Ways To Contribute
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Choose how you want to make a difference.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              Whether you give your time, resources, expertise or voice, your
              contribution can help strengthen the conditions children need
              to thrive.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {involvementOptions.map((option) => {
              const Icon = option.icon;

              return (
                <div key={option.title} className="ftf-card flex flex-col p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                    <Icon className="h-7 w-7 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {option.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#AEB9CD]">
                    {option.text}
                  </p>

                  <Link
                    to={option.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4DD0E1] transition hover:gap-3"
                  >
                    {option.action}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="border-y border-white/5 bg-[#091023]">
        <div className="ftf-container ftf-section">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Partnership & Collaboration
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                We believe lasting change is a collective effort.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#AEB9CD]">
                FTF seeks to work with organisations and individuals whose
                expertise, resources, networks or experience can contribute to
                better outcomes for children and families.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
                Our partnership model is built around shared purpose,
                complementary strengths and mutual accountability.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/5 bg-[#111A2D] p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4DD0E1]">
                Who can collaborate with us?
              </p>

              <div className="mt-7 space-y-5">
                {partnerTypes.map((partner) => {
                  const Icon = partner.icon;

                  return (
                    <div
                      key={partner.title}
                      className="flex gap-4 rounded-2xl border border-white/5 bg-[#0B1222] p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E35B1]/15">
                        <Icon className="h-5 w-5 text-[#B9A4FF]" />
                      </div>

                      <div>
                        <h3 className="font-['Poppins'] font-bold text-white">
                          {partner.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#AEB9CD]">
                          {partner.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP PRINCIPLES */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our Partnership Principles
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Collaboration with accountability.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              We want every partnership to contribute meaningfully to the
              well-being of children and the communities around them.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#111A2D] p-5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4DD0E1]" />

                <span className="text-sm font-medium text-[#D8DCEF]">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="border-y border-white/5 bg-[#091023]">
        <div className="ftf-container ftf-section">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/5 bg-gradient-to-br from-[#111A2D] to-[#0B1222] p-8 text-center md:p-12">
            <Users className="mx-auto h-10 w-10 text-[#4DD0E1]" />

            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
              Give your time. Share your skills.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              Volunteers can contribute across areas that support FTF's work,
              from programme support and communications to events, research,
              administration and community engagement.
            </p>

            <Link
              to="/volunteer"
              className="ftf-btn-primary mt-8"
            >
              Explore Volunteering
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-r from-[#5E35B1]/20 via-[#111A2D] to-[#4DD0E1]/10 p-8 md:p-14">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                  Support FTF
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                  Help strengthen opportunities for children.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
                  Your support can contribute to work that strengthens
                  education, families and child protection while helping us
                  build the systems needed for responsible growth.
                </p>
              </div>

              <Link to="/donate" className="ftf-btn-primary">
                Donate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-[100px]" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/5 bg-[#091023]">
        <div className="ftf-container py-16 text-center">
          <HeartHandshake className="mx-auto h-10 w-10 text-[#4DD0E1]" />

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Let's transform futures together.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#AEB9CD]">
            If you have an idea, resource, skill or partnership opportunity,
            we'd love to hear from you.
          </p>

          <Link
            to="/contact"
            className="ftf-btn-primary mt-8"
          >
            Contact Favored Tribe Foundation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}