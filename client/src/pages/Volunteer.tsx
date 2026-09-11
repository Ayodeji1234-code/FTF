import {
  Heart,
  Users,
  GraduationCap,
  HandHeart,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const serviceAreas = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description:
      "Support activities that create meaningful learning opportunities and help children participate and benefit from quality education.",
  },
  {
    icon: Users,
    title: "Family Empowerment",
    description:
      "Support families and caregivers by contributing knowledge, skills, encouragement, and practical assistance that strengthen resilience.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection",
    description:
      "Support efforts that promote children's safety, dignity, rights, and protection from abuse, neglect, exploitation, and violence.",
  },
  {
    icon: HandHeart,
    title: "Community Support",
    description:
      "Work alongside communities and stakeholders to strengthen the environments in which children learn, grow, and thrive.",
  },
  {
    icon: Heart,
    title: "Events & Outreach",
    description:
      "Assist with community outreach, awareness activities, foundation events, and initiatives that connect people with meaningful causes.",
  },
  {
    icon: Users,
    title: "Skills & Professional Support",
    description:
      "Share relevant professional knowledge, technical skills, creative abilities, or expertise that can strengthen FTF's work.",
  },
];

const principles = [
  "Respect for children, families, and communities",
  "Commitment to safeguarding and child well-being",
  "Integrity and responsible use of resources",
  "Collaboration with staff, volunteers, and partners",
  "Willingness to learn and contribute meaningfully",
  "Professionalism, reliability, and accountability",
];

export default function Volunteer() {
  return (
    <main className="ftf-page">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#5e35b1]/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-3xl ftf-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#4DD0E1]/20 bg-[#4DD0E1]/10 px-4 py-2 text-sm font-semibold text-[#4DD0E1]">
              <Heart size={16} />
              Get involved
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Volunteer to help{" "}
              <span className="text-[#4DD0E1]">transform futures.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              Your time, skills, compassion, and commitment can contribute to
              creating better conditions for children and families to learn,
              grow, thrive, and realise their full potential.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="ftf-btn-primary">
                Become a Volunteer
                <ArrowRight size={18} />
              </Link>

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

      {/* INTRO */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Why volunteer with FTF?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Be part of a community committed to children.
              </h2>

              <p className="mt-5 leading-8 text-[#AEB9CD]">
                Favored Tribe Foundation believes that lasting change is
                strengthened through collective action. Volunteers can bring
                different experiences, skills, perspectives, and forms of
                support to our work with children, families, schools,
                communities, and partners.
              </p>

              <p className="mt-5 leading-8 text-[#AEB9CD]">
                Whether you have professional expertise, practical skills,
                creative abilities, or simply a willingness to serve,
                volunteering can be a meaningful way to contribute to our
                mission.
              </p>
            </div>

            <div className="ftf-card p-7 md:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                <Heart size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Every contribution matters.
              </h3>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                Meaningful transformation does not happen through one person
                alone. It happens when people bring their time, knowledge,
                resources, and compassion together around a shared purpose.
              </p>

              <div className="mt-6 h-px bg-white/10" />

              <p className="mt-5 text-sm font-semibold text-[#4DD0E1]">
                Transforming Futures Through Kindness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="ftf-section bg-[#080d20]">
        <div className="ftf-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Ways to contribute
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Find a way to serve that fits your strengths.
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              Volunteer opportunities can support different aspects of FTF's
              work and may evolve as our programmes and partnerships grow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div key={area.title} className="ftf-card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#AEB9CD]">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE VALUE */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Our expectations
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Volunteer with purpose and responsibility.
              </h2>

              <p className="mt-5 leading-8 text-[#AEB9CD]">
                Because our work involves children and families, volunteers
                are expected to uphold high standards of conduct,
                safeguarding, respect, accountability, and professionalism.
              </p>

              <p className="mt-5 leading-8 text-[#AEB9CD]">
                Specific requirements may vary depending on the nature of the
                volunteer role and the activity involved.
              </p>
            </div>

            <div className="ftf-card p-7 md:p-9">
              <div className="space-y-4">
                {principles.map((principle) => (
                  <div key={principle} className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-[#4DD0E1]"
                    />
                    <span className="leading-7 text-[#D6DDEA]">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="ftf-section bg-[#080d20]">
        <div className="ftf-container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#4DD0E1]">
              <Mail size={30} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Ready to contribute?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Let's explore how you can get involved.
            </h2>

            <p className="mt-5 leading-8 text-[#AEB9CD]">
              Tell us a little about yourself, your skills, your interests,
              and how you would like to contribute. Our team can discuss
              suitable opportunities with you.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="ftf-btn-primary">
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <a
                href="mailto:favoredtribefoundation@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-semibold text-[#D6DDEA] transition hover:border-[#4DD0E1]/30 hover:text-white"
              >
                <Mail size={18} />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#17102f] via-[#12182c] to-[#091827] p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#5e35b1]/20 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                  Every child. Every family. Every future.
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  Together, we can create lasting change.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-[#AEB9CD]">
                  Join Favored Tribe Foundation in strengthening the conditions
                  that enable children to learn, grow, thrive, and realise
                  their full potential.
                </p>
              </div>

              <Link to="/get-involved" className="ftf-btn-primary whitespace-nowrap">
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