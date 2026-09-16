import {
  Newspaper,
  ArrowRight,
  Heart,
  Megaphone,
  Users,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Creating meaningful learning opportunities and supporting children's participation in education.",
  },
  {
    icon: Users,
    title: "Family Empowerment",
    description:
      "Strengthening families and caregivers with knowledge, skills, encouragement, and practical support.",
  },
  {
    icon: Megaphone,
    title: "Child Protection",
    description:
      "Promoting children's safety, dignity, rights, and well-being.",
  },
];

export default function News() {
  return (
    <main className="ftf-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#5e35b1]/20 blur-3xl" />

        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center ftf-fade-up">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#4DD0E1]">
              <Newspaper size={30} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              News & Events
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Stories of{" "}
              <span className="text-[#4DD0E1]">
                purpose and progress.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              Follow Favored Tribe Foundation as our programmes, partnerships,
              community activities, and impact continue to grow.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          LATEST UPDATE
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#17102f] via-[#12182c] to-[#091827] p-8 md:p-12">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#5e35b1]/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4DD0E1]/10 text-[#4DD0E1]">
                    <Newspaper size={22} />
                  </div>

                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#4DD0E1]">
                    Foundation Update
                  </span>
                </div>

                <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl">
                  Building a strong foundation for lasting change.
                </h2>

                <p className="mt-5 max-w-3xl leading-8 text-[#AEB9CD]">
                  Favored Tribe Foundation is growing deliberately, with a
                  focus on strong governance, safeguarding, programme quality,
                  accountability, partnerships, and sustainable resource
                  mobilisation.
                </p>

                <p className="mt-4 max-w-3xl leading-8 text-[#AEB9CD]">
                  As our work develops, this space will share verified updates,
                  community activities, partnerships, events, and milestones.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link to="/about" className="ftf-btn-primary">
                    Learn About FTF
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/impact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-[#4DD0E1]/30 hover:bg-white/10"
                  >
                    Our Impact Approach
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOCUS AREAS
      ========================================================= */}
      <section className="ftf-section bg-[#080d20]">
        <div className="ftf-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our focus
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              What our stories will reflect.
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              As FTF grows, our updates will follow the areas where we work to
              create meaningful change for children and families.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="ftf-card p-7 transition duration-300 hover:-translate-y-1 hover:border-[#4DD0E1]/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#AEB9CD]">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#71809A]">
              More programme updates, events, partnerships, and milestones will
              be shared here as they happen.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#17102f] via-[#12182c] to-[#091827] p-8 md:p-12">
            <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex items-center gap-2 text-[#4DD0E1]">
                  <Heart size={18} />

                  <span className="text-sm font-bold uppercase tracking-[0.15em]">
                    Be part of the journey
                  </span>
                </div>

                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  Help turn purpose into progress.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-[#AEB9CD]">
                  Volunteers, partners, communities, organisations, and
                  supporters all have a role to play in creating stronger
                  futures for children and families.
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