
import {
  Target,
  BarChart3,
  Users,
  BookOpen,
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const impactAreas = [
  {
    icon: BookOpen,
    title: "Education",
    text: "We seek to improve children's opportunities to access, participate in and benefit from quality learning and development.",
  },
  {
    icon: Users,
    title: "Family Empowerment",
    text: "We strengthen the knowledge, skills, resilience and capacity of families and caregivers so children can thrive.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection",
    text: "We promote children's rights, safety and dignity while strengthening protective environments around them.",
  },
];

const measurementAreas = [
  "Reach and participation",
  "Quality of programme delivery",
  "Changes in knowledge and skills",
  "Family and caregiver capacity",
  "Child well-being and protection",
  "Community and institutional capacity",
];

const principles = [
  {
    icon: Target,
    title: "Purpose-driven",
    text: "Our programmes are designed around clear child development outcomes and the conditions that support them.",
  },
  {
    icon: BarChart3,
    title: "Evidence-informed",
    text: "We aim to use relevant evidence, data and learning to inform decisions and improve programme quality.",
  },
  {
    icon: Lightbulb,
    title: "Learning-focused",
    text: "We treat monitoring, evaluation and learning as tools for improvement rather than simply reporting.",
  },
  {
    icon: HeartHandshake,
    title: "Accountable",
    text: "We remain responsible to children, families, communities, partners, supporters and other stakeholders.",
  },
];

const theorySteps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Opportunities",
    text: "Meaningful learning opportunities",
  },
  {
    number: "02",
    icon: Users,
    title: "Strength",
    text: "Stronger families and caregivers",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Safety",
    text: "Safe and protective environments",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Outcomes",
    text: "Improved well-being and opportunity",
  },
];

export default function Impact() {
  return (
    <main className="ftf-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(94,53,177,0.22),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(77,208,225,0.10),transparent_30%)]" />

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#5e35b1]/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#4DD0E1]/5 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-4xl ftf-fade-up">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4DD0E1]/10 bg-[#4DD0E1]/10 text-[#4DD0E1]">
              <BarChart3 className="h-7 w-7" />
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4DD0E1]">
              Our Impact
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Making change that can be understood, measured and improved.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              We are committed to responsible, evidence-informed programming
              that puts children at the centre and continually learns from
              what works.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT APPROACH
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Our Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                Impact begins with stronger conditions for children.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#AEB9CD]">
                We understand impact as more than the number of activities
                delivered. Our focus is on whether our work contributes to
                better conditions for children to learn, grow, thrive and
                realise their potential.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
                This means connecting our programmes to children, families,
                communities and the systems around them.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#D8DCEF]">
                <CheckCircle2 className="h-5 w-5 text-[#4DD0E1]" />
                <span>Children remain at the centre of our approach.</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-[#111A2D] p-8 md:p-10">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#5E35B1]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/20">
                  <Target className="h-7 w-7 text-[#B9A4FF]" />
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-[#4DD0E1]">
                  Our overarching goal
                </p>

                <h3 className="mt-4 text-2xl font-bold leading-tight text-white md:text-3xl">
                  Children are better able to learn, grow, thrive and realise
                  their full potential.
                </h3>

                <div className="mt-8 h-px bg-white/10" />

                <p className="mt-6 leading-7 text-[#AEB9CD]">
                  We pursue this through integrated interventions,
                  partnerships, evidence, learning and accountable delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THREE IMPACT AREAS
      ========================================================= */}
      <section className="border-y border-white/5 bg-[#091023]">
        <div className="ftf-container ftf-section">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Where We Seek Change
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Three connected areas of impact
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              Our strategic focus on Child Development is advanced through
              Education, Family Empowerment and Child Protection.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {impactAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="ftf-card group p-8 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10 transition duration-300 group-hover:bg-[#4DD0E1]/15">
                    <Icon className="h-7 w-7 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#AEB9CD]">
                    {area.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MONITORING, EVALUATION & LEARNING
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Monitoring, Evaluation & Learning
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                Learning from what we do.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#AEB9CD]">
                As FTF grows, we are committed to developing strong monitoring,
                evaluation and learning systems that help us understand our
                reach, assess programme quality and learn how our interventions
                are contributing to change.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
                The purpose is simple: to make better decisions, improve
                programme quality and remain accountable to the people and
                communities we serve.
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-[#111A2D] p-8 md:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                  <BarChart3 className="h-6 w-6 text-[#4DD0E1]" />
                </div>

                <div>
                  <p className="font-['Poppins'] text-lg font-bold text-white">
                    Areas we aim to understand
                  </p>

                  <p className="text-sm text-[#7F8CA5]">
                    Across our programmes and partnerships
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {measurementAreas.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4DD0E1]" />

                    <span className="text-[#D8DCEF]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THEORY OF CHANGE
      ========================================================= */}
      <section className="border-y border-white/5 bg-[#091023]">
        <div className="ftf-container ftf-section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our Theory of Change
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              From stronger conditions to greater opportunity.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              When children have meaningful learning opportunities, families
              are strengthened and protective environments are improved,
              children are better positioned to develop the capabilities they
              need to thrive.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-4">
            {theorySteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-3xl border border-white/5 bg-[#111A2D] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#4DD0E1]/15"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#5E35B1]/15 text-[#4DD0E1]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="mt-5 block font-['Poppins'] text-sm font-bold text-[#4DD0E1]">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#AEB9CD]">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT PRINCIPLES
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Responsible Impact
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              How we approach accountability
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#AEB9CD]">
              We are building an organisation that values responsible
              programme delivery, continuous learning and accountability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="ftf-card p-7 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5E35B1]/15">
                    <Icon className="h-6 w-6 text-[#B9A4FF]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
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

      {/* =========================================================
          FUTURE IMPACT
      ========================================================= */}
      <section className="border-t border-white/5 bg-[#091023]">
        <div className="ftf-container py-20">
          <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-[#5E35B1]/20 via-[#111A2D] to-[#4DD0E1]/10 p-8 md:p-14">
            <div className="relative z-10 max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                <Handshake className="h-6 w-6 text-[#4DD0E1]" />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Looking Ahead
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                Building the systems behind lasting impact.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
                As an emerging organisation, we are deliberately building our
                governance, safeguarding, programme quality, monitoring and
                learning, financial and operational systems and partnerships
                to support responsible growth.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-['Poppins'] font-bold text-[#4DD0E1] transition hover:gap-3"
              >
                Learn more about our journey
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-[100px]" />

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-[100px]" />
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-white/5 bg-[#050817]">
        <div className="ftf-container py-16 text-center">
          <HeartHandshake className="mx-auto h-10 w-10 text-[#4DD0E1]" />

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Help create meaningful change.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#AEB9CD]">
            Stronger outcomes are possible when communities, organisations
            and individuals work together around a shared purpose.
          </p>

          <Link
            to="/get-involved"
            className="ftf-btn-primary mt-8"
          >
            Get Involved
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
