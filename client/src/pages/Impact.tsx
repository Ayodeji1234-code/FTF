
import {
  BarChart3,
  Target,
  BookOpen,
  Users,
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const measurementAreas = [
  "Reach and participation",
  "Programme quality",
  "Changes in knowledge and skills",
  "Family and caregiver capacity",
  "Child well-being and protection",
  "Community and institutional capacity",
];

const impactAreas = [
  {
    icon: BookOpen,
    title: "Education",
    text: "Children have meaningful opportunities to learn and develop knowledge, skills, and confidence.",
  },
  {
    icon: Users,
    title: "Family Empowerment",
    text: "Families and caregivers have stronger capacity to support children's development.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection",
    text: "Children experience safer, more protective environments where their rights and dignity are respected.",
  },
];

const principles = [
  {
    icon: Target,
    title: "Purpose-driven",
    text: "Our programmes are designed around clear child development outcomes.",
  },
  {
    icon: BarChart3,
    title: "Evidence-informed",
    text: "We use relevant evidence and data to guide decisions and improve quality.",
  },
  {
    icon: Lightbulb,
    title: "Learning-focused",
    text: "Monitoring and evaluation help us learn, adapt, and improve.",
  },
  {
    icon: HeartHandshake,
    title: "Accountable",
    text: "We remain responsible to the children, families, communities, and partners we serve.",
  },
];

export default function Impact() {
  return (
    <main className="ftf-page">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#050817]">

        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5E35B1]/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">

          <div className="max-w-4xl ftf-fade-up">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our Impact
            </span>

            <h1 className="mt-5 font-['Poppins'] text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Making change that can be{" "}
              <span className="text-[#4DD0E1]">
                understood and improved.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              We are committed to responsible, evidence-informed work that
              puts children at the centre and learns continuously from what we
              do.
            </p>

          </div>
        </div>
      </section>

      {/* ================= WHAT IMPACT MEANS ================= */}
      <section className="ftf-section bg-[#0B1022]">

        <div className="ftf-container">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                What Impact Means
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
                More than counting activities.
              </h2>

              <p className="mt-5 leading-8 text-[#AEB9CD]">
                For FTF, impact is about whether our work contributes to better
                conditions for children to learn, grow, thrive, and realise
                their potential.
              </p>

              <div className="mt-7 flex items-start gap-3">

                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#4DD0E1]" />

                <p className="text-sm leading-7 text-[#D8DCEF]">
                  Children remain at the centre of how we define meaningful
                  change.
                </p>

              </div>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#1D293E] p-8 md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/20">
                <Target className="h-7 w-7 text-[#B9A4FF]" />
              </div>

              <span className="mt-6 block text-sm font-bold uppercase tracking-[0.15em] text-[#4DD0E1]">
                Our overarching goal
              </span>

              <h3 className="mt-4 font-['Poppins'] text-2xl font-bold leading-tight text-white md:text-3xl">
                Children are better able to learn, grow, thrive, and realise
                their potential.
              </h3>

              <p className="mt-5 leading-7 text-[#AEB9CD]">
                We pursue this through purposeful programmes, partnerships,
                evidence, learning, and accountable delivery.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= THREE FOUNDATIONS ================= */}
      <section className="ftf-section bg-[#050817]">

        <div className="ftf-container">

          <div className="max-w-2xl">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Where We Seek Change
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Three foundations of impact.
            </h2>

            <p className="mt-4 leading-7 text-[#AEB9CD]">
              Our work connects opportunities for children with stronger
              families and safer environments.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {impactAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="ftf-card p-7"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                    <Icon className="h-6 w-6 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-5 font-['Poppins'] text-xl font-bold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#AEB9CD]">
                    {area.text}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= MEASUREMENT ================= */}
      <section className="ftf-section bg-[#0B1022]">

        <div className="ftf-container">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>

              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Measuring What Matters
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Learning from what we do.
              </h2>

              <p className="mt-5 leading-8 text-[#AEB9CD]">
                As FTF grows, we are committed to developing monitoring,
                evaluation, and learning systems that help us understand our
                reach, assess programme quality, and improve our work.
              </p>

              <p className="mt-4 leading-8 text-[#AEB9CD]">
                The goal is simple: make better decisions and remain
                accountable to the people and communities we serve.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#1D293E] p-7 md:p-9">

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                  <BarChart3 className="h-5 w-5 text-[#4DD0E1]" />
                </div>

                <div>

                  <h3 className="font-['Poppins'] font-bold text-white">
                    Areas we aim to understand
                  </h3>

                  <p className="text-sm text-[#7F8CA5]">
                    Across our programmes and partnerships
                  </p>

                </div>

              </div>

              <div className="mt-7 space-y-4">

                {measurementAreas.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4DD0E1]" />

                    <span className="text-sm text-[#D8DCEF]">
                      {item}
                    </span>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="ftf-section bg-[#050817]">

        <div className="ftf-container">

          <div className="mx-auto max-w-2xl text-center">

            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Responsible Impact
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              How we approach accountability.
            </h2>

            <p className="mt-4 leading-7 text-[#AEB9CD]">
              We are building an organisation that values responsible
              delivery, continuous learning, and accountability.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="ftf-card p-7 transition duration-300 hover:-translate-y-1"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                    <Icon className="h-5 w-5 text-[#B9A4FF]" />
                  </div>

                  <h3 className="mt-5 font-['Poppins'] text-lg font-bold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#AEB9CD]">
                    {principle.text}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= LOOKING AHEAD ================= */}
      <section className="ftf-section bg-[#0B1022]">

        <div className="ftf-container">

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1D293E] to-[#11182B] p-8 md:p-12">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-[100px]" />

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-[100px]" />

            <div className="relative max-w-3xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                <Handshake className="h-6 w-6 text-[#4DD0E1]" />
              </div>

              <span className="mt-6 block font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Looking Ahead
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                Building the foundation for lasting impact.
              </h2>

              <p className="mt-5 leading-8 text-[#AEB9CD]">
                As an emerging organisation, we are intentionally building
                strong governance, safeguarding, programme quality, monitoring,
                learning, financial, operational, and partnership systems to
                support responsible growth.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 font-['Poppins'] font-bold text-[#4DD0E1] transition hover:gap-3"
              >
                Learn more about our journey
                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
