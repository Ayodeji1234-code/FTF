
import {
  ArrowRight,
  BookOpen,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: BookOpen,
    title: "Education",
    text: "Creating opportunities for children to learn and develop.",
  },
  {
    icon: Users,
    title: "Family Empowerment",
    text: "Strengthening families to create supportive environments for children.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection",
    text: "Promoting the safety, rights and dignity of every child.",
  },
];

export default function Home() {
  return (
    <main className="ftf-page">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_25%,rgba(94,53,177,0.18),transparent_32%),radial-gradient(circle_at_90%_65%,rgba(77,208,225,0.10),transparent_30%)]" />

        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#5E35B1]/10 blur-[120px]" />

        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#4DD0E1]/10 blur-[120px]" />

        <div className="ftf-container relative flex min-h-[calc(100vh-80px)] items-center py-16 sm:py-20 lg:py-24">

          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

            {/* ================= LEFT ================= */}
            <div className="ftf-fade-up">

              {/* Brand */}
              <div className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-[#4DD0E1]/25 bg-[#4DD0E1]/5 px-3 py-2.5 backdrop-blur-md sm:mb-8 sm:gap-4 sm:px-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                  <img
                    src="/logo.png"
                    alt="Favored Tribe Foundation logo"
                    className="h-9 w-9 object-contain brightness-125 contrast-110 sm:h-10 sm:w-10"
                  />
                </div>

                <span className="font-['Poppins'] text-[10px] font-extrabold leading-tight tracking-[0.06em] text-[#4DD0E1] sm:text-sm sm:tracking-wide md:text-base">
                  FAVORED TRIBE FOUNDATION
                </span>
              </div>

              {/* Main heading */}
              <h1 className="max-w-3xl font-['Poppins'] text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-[#F1F3FA] sm:text-6xl lg:text-[76px]">
                Creating hope.
                <br />

                <span className="text-[#4DD0E1]">
                  Changing lives.
                </span>

                <br />

                Building
                <br />

                futures.
              </h1>

              {/* Shorter description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#AEB9CD] sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
                We strengthen the conditions that help vulnerable and
                disadvantaged children learn, grow and thrive.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">

                <Link
                  to="/get-involved"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#6735C5] px-7 py-3.5 font-['Poppins'] font-bold text-white shadow-[0_10px_30px_rgba(103,53,197,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#7545D5] hover:shadow-[0_15px_40px_rgba(103,53,197,0.35)] sm:px-8 sm:py-4"
                >
                  Get Involved

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-7 py-3.5 font-['Poppins'] font-bold text-[#E7EAF3] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] sm:px-8 sm:py-4"
                >
                  Discover Our Story
                </Link>

              </div>

            </div>

            {/* ================= RIGHT PURPOSE CARD ================= */}
            <div className="relative block w-full">

              <div className="relative mx-auto w-full max-w-[545px] rounded-[28px] border border-white/10 bg-[#18233A] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.3)] sm:rounded-[38px] sm:p-8">

                <div className="rounded-[22px] border border-white/5 bg-[#080D1E] p-6 sm:rounded-[30px] sm:p-9">

                  {/* Logo */}
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-[#5E35B1]/20 ring-1 ring-[#4DD0E1]/10 sm:h-16 sm:w-16">
                    <img
                      src="/logo.png"
                      alt="Favored Tribe Foundation logo"
                      className="h-12 w-12 object-contain brightness-125 contrast-110 sm:h-14 sm:w-14"
                    />
                  </div>

                  {/* Label */}
                  <p className="mt-6 font-['Poppins'] text-xs font-bold tracking-[0.2em] text-[#4DD0E1] sm:mt-8 sm:text-sm sm:tracking-[0.28em]">
                    OUR PURPOSE
                  </p>

                  {/* Heading */}
                  <h2 className="mt-3 font-['Poppins'] text-2xl font-bold leading-tight text-[#E9ECF5] sm:mt-4 sm:text-3xl">
                    Every child deserves the opportunity to thrive.
                  </h2>

                  {/* Short purpose */}
                  <p className="mt-4 text-sm leading-6 text-[#AEB9CD] sm:text-base sm:leading-7">
                    We work with children, families and communities to create
                    stronger foundations for a better future.
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-white/10 sm:my-8" />

                  {/* Tagline */}
                  <p className="font-['Poppins'] text-base font-bold text-[#F1F3FA] sm:text-lg">
                    Transforming Futures
                  </p>

                  <p className="mt-2 font-['Poppins'] text-base font-bold text-[#4DD0E1] sm:text-lg">
                    Through Kindness
                  </p>

                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-[#5E35B1]/20 blur-[70px] sm:-right-10 sm:-top-10 sm:h-44 sm:w-44 sm:blur-[80px]" />

              <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-[#4DD0E1]/10 blur-[70px] sm:-bottom-10 sm:-left-10 sm:h-44 sm:w-44 sm:blur-[80px]" />

            </div>

          </div>
        </div>
      </section>


      {/* ================= WHAT WE FOCUS ON ================= */}
      <section className="ftf-section">

        <div className="ftf-container">

          {/* Section heading */}
          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              What We Focus On
            </p>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-white md:text-4xl">
              Helping children thrive
            </h2>

            <p className="mt-5 text-base leading-7 text-[#AEB9CD] sm:text-lg sm:leading-8">
              Our work focuses on the people and environments that shape a
              child's future.
            </p>

          </div>


          {/* Pillars */}
          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">

            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="ftf-card p-6 sm:p-8"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                    <Icon className="h-7 w-7 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-6 font-['Poppins'] text-xl font-bold text-white sm:text-2xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#AEB9CD]">
                    {pillar.text}
                  </p>

                  <Link
                    to="/programs"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#4DD0E1] transition-all hover:gap-3"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="border-t border-white/5 bg-[#091023]">

        <div className="ftf-container py-14 sm:py-20">

          <div className="relative overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-br from-[#5E35B1]/20 via-[#111A2D] to-[#4DD0E1]/10 p-6 sm:rounded-[32px] sm:p-14">

            <div className="relative z-10 max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Join the Movement
              </p>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-bold text-white md:text-5xl">
                Together, we can transform futures.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#AEB9CD] sm:text-lg sm:leading-8">
                Lasting change begins with collective action. Find a way to
                support children and families through Favored Tribe Foundation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/get-involved"
                  className="ftf-btn-primary"
                >
                  Get Involved
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:border-[#4DD0E1]/40 hover:bg-white/5"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            {/* Decorative glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-[100px]" />

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-[100px]" />

          </div>

        </div>

      </section>

    </main>
  );
}

