
import {
  Eye,
  Target,
  Heart,
  HeartHandshake,
  BookOpen,
  Users,
  ShieldCheck,
  Handshake,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const commitments = [
  {
    icon: Heart,
    title: "Children at the heart",
    text: "We place the well-being, dignity, safety and potential of children at the centre of our work.",
  },
  {
    icon: ShieldCheck,
    title: "Protection from harm",
    text: "We are committed to strengthening safe and protective environments where children can learn, grow and thrive.",
  },
  {
    icon: Users,
    title: "Family and community",
    text: "We recognise the important role of families, caregivers and communities in creating positive conditions for children.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We believe lasting change is strengthened through collaboration with communities, institutions and strategic partners.",
  },
  {
    icon: Lightbulb,
    title: "Learning and improvement",
    text: "We seek to learn from experience, use evidence and continuously improve the quality of our work.",
  },
  {
    icon: Target,
    title: "Responsible action",
    text: "We are committed to accountable delivery, responsible stewardship of resources and measurable results.",
  },
];

const journey = [
  {
    number: "01",
    title: "Opportunity",
    text: "Children have meaningful opportunities to learn and develop.",
  },
  {
    number: "02",
    title: "Strength",
    text: "Families and caregivers have stronger knowledge, skills and resilience.",
  },
  {
    number: "03",
    title: "Safety",
    text: "Children experience safer and more protective environments.",
  },
  {
    number: "04",
    title: "Potential",
    text: "Children are better positioned to develop their capabilities and realise their full potential.",
  },
];

const focusAreas = [
  {
    icon: BookOpen,
    title: "Education",
    text: "Expanding access to and participation in quality learning and development opportunities.",
  },
  {
    icon: Users,
    title: "Family Empowerment",
    text: "Strengthening the knowledge, skills, resilience and capacity of families and caregivers.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection",
    text: "Promoting the rights, safety and dignity of children while preventing and responding to harm.",
  },
];

export default function Mission() {
  return (
    <main className="ftf-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(94,53,177,0.22),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(77,208,225,0.12),transparent_30%)]" />

        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#5E35B1]/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#4DD0E1]/5 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-4xl ftf-fade-up">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4DD0E1]/10 bg-[#4DD0E1]/10">
              <Heart className="h-7 w-7 text-[#4DD0E1]" />
            </div>

            <p className="font-['Poppins'] text-sm font-semibold uppercase tracking-[0.22em] text-[#4DD0E1]">
              Our Mission & Vision
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Transforming futures through{" "}
              <span className="text-[#4DD0E1]">kindness.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              We believe every child should have the opportunity to learn,
              grow, thrive and realise their full potential—regardless of the
              circumstances into which they are born.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISION + MISSION
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid gap-7 lg:grid-cols-2">
            {/* VISION */}
            <div className="ftf-card group p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10 transition duration-300 group-hover:bg-[#4DD0E1]/15">
                <Eye className="h-7 w-7 text-[#4DD0E1]" />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-widest text-[#4DD0E1]">
                Our Vision
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                A future where every child can thrive.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#AEB9CD]">
                A world where every child has the opportunity to learn, grow,
                thrive and realise their full potential.
              </p>
            </div>

            {/* MISSION */}
            <div className="ftf-card group p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/20 transition duration-300 group-hover:bg-[#5E35B1]/30">
                <Target className="h-7 w-7 text-[#B9A4FF]" />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-widest text-[#B9A4FF]">
                Our Mission
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                Strengthening the conditions children need to flourish.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#AEB9CD]">
                To transform futures through kindness by strengthening the
                conditions that enable children to learn, grow, thrive and
                realise their full potential through education, family
                empowerment and child protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STRATEGIC FOCUS
      ========================================================= */}
      <section className="border-y border-white/5 bg-[#091023]">
        <div className="ftf-container ftf-section">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#4DD0E1]">
              Strategic Focus
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Child Development
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              Our work is centred on child development and supported by three
              interconnected areas that address the conditions in which
              children learn, grow and thrive.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="ftf-card group p-7 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                    <Icon className="h-7 w-7 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
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
          PHILOSOPHY
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#4DD0E1]">
              Our Philosophy
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Circumstances should not define potential.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#AEB9CD]">
              We seek to reduce the barriers that prevent children from
              reaching their potential, strengthen the environments around
              them and expand the opportunities available to them.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-[#4DD0E1]/10 bg-gradient-to-br from-[#111A2D] to-[#0B1222] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              {/* LEARN */}
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                  <BookOpen className="h-7 w-7 text-[#4DD0E1]" />
                </div>

                <span className="mt-5 block text-3xl font-extrabold text-[#4DD0E1]">
                  LEARN
                </span>

                <p className="mt-3 text-sm leading-6 text-[#AEB9CD]">
                  Education and learning opportunities
                </p>
              </div>

              {/* THRIVE */}
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/20">
                  <Users className="h-7 w-7 text-[#B9A4FF]" />
                </div>

                <span className="mt-5 block text-3xl font-extrabold text-[#B9A4FF]">
                  THRIVE
                </span>

                <p className="mt-3 text-sm leading-6 text-[#AEB9CD]">
                  Family empowerment and resilience
                </p>
              </div>

              {/* BE SAFE */}
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                  <ShieldCheck className="h-7 w-7 text-[#4DD0E1]" />
                </div>

                <span className="mt-5 block text-3xl font-extrabold text-[#4DD0E1]">
                  BE SAFE
                </span>

                <p className="mt-3 text-sm leading-6 text-[#AEB9CD]">
                  Child protection and well-being
                </p>
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
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#4DD0E1]">
              Theory of Change
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Creating the conditions for lasting change.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              Our approach connects opportunities for children with stronger
              families and safer environments.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((item) => (
              <div
                key={item.number}
                className="group rounded-3xl border border-white/5 bg-[#111A2D] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#4DD0E1]/15"
              >
                <div className="flex items-center justify-between">
                  <span className="font-['Poppins'] text-sm font-bold text-[#4DD0E1]">
                    {item.number}
                  </span>

                  <ArrowRight className="h-5 w-5 text-[#5E35B1] transition duration-300 group-hover:translate-x-1 group-hover:text-[#4DD0E1]" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#AEB9CD]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-[#5E35B1]/20 bg-[#5E35B1]/10 p-7 md:p-9">
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#4DD0E1]" />

              <p className="text-base leading-8 text-[#D8DCEF]">
                When children have meaningful learning opportunities, families
                and caregivers are strengthened, and children are surrounded
                by safe and protective environments, they are better positioned
                to develop knowledge, skills, confidence, resilience and
                capabilities. This contributes to improved well-being, stronger
                outcomes and greater opportunity to realise their potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMITMENTS
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#4DD0E1]">
              Our Commitment
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              How we choose to work
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              Our mission is not only about what we do, but also about the
              standard of responsibility, dignity and accountability with
              which we do it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="ftf-card group p-7 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10 transition duration-300 group-hover:bg-[#4DD0E1]/15">
                    <Icon className="h-6 w-6 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#AEB9CD]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-white/5 bg-[#091023]">
        <div className="ftf-container py-20">
          <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-[#17102f] via-[#111A2D] to-[#091827] p-8 text-center md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-[100px]" />

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                <HeartHandshake className="h-7 w-7 text-[#4DD0E1]" />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
                Be part of a future where every child can thrive.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
                Meaningful change becomes possible when people, organisations
                and communities work together.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/get-involved"
                  className="ftf-btn-primary"
                >
                  Get Involved
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:border-[#4DD0E1]/40 hover:bg-white/5"
                >
                  Explore Our Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

