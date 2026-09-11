import {
  Newspaper,
  CalendarDays,
  ArrowRight,
  Heart,
  Megaphone,
  Users,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const stories = [
  {
    icon: GraduationCap,
    category: "Education",
    title: "Creating meaningful learning opportunities",
    description:
      "Favored Tribe Foundation is committed to strengthening opportunities that enable children to learn, participate, develop, and benefit from quality education.",
  },
  {
    icon: Users,
    category: "Family Empowerment",
    title: "Strengthening families and caregivers",
    description:
      "Families and caregivers play an important role in children's development. Our approach recognises the importance of strengthening their knowledge, skills, resilience, and capacity.",
  },
  {
    icon: Megaphone,
    category: "Child Protection",
    title: "Keeping children safe and protected",
    description:
      "We promote children's rights, safety, dignity, and well-being while supporting efforts to prevent and respond to abuse, neglect, exploitation, and violence.",
  },
];

const focusAreas = [
  "Education & Learning",
  "Family Empowerment",
  "Child Protection",
  "Community Engagement",
  "Partnerships & Collaboration",
  "Evidence & Learning",
];

export default function News() {
  return (
    <main className="ftf-page">
      {/* HERO */}
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
              <span className="text-[#4DD0E1]">purpose and impact.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              Follow Favored Tribe Foundation as we grow, build partnerships,
              develop programmes, engage communities, and work towards better
              futures for children and families.
            </p>
          </div>
        </div>
      </section>

      {/* LATEST UPDATE */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#17102f] via-[#12182c] to-[#091827] p-8 md:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#5e35b1]/20 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#4DD0E1]/20 bg-[#4DD0E1]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#4DD0E1]">
                  <Newspaper size={14} />
                  Foundation Update
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl">
                  Building a strong foundation for lasting change.
                </h2>

                <p className="mt-5 leading-8 text-[#AEB9CD]">
                  Favored Tribe Foundation is an emerging child-focused
                  organisation committed to building strong governance,
                  safeguarding, programme quality, accountability, monitoring
                  and learning systems, partnerships, and sustainable resource
                  mobilisation.
                </p>

                <p className="mt-4 leading-8 text-[#AEB9CD]">
                  As the Foundation grows, we are committed to growing
                  deliberately — prioritising quality, accountability,
                  community relevance, and measurable results.
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
            </article>

            <div className="ftf-card p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                <CalendarDays size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Upcoming stories
              </h3>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                This space will feature verified updates about FTF programmes,
                community activities, partnerships, events, and milestones as
                they take place.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-[#4DD0E1]">
                  Stay connected
                </p>

                <p className="mt-2 text-sm leading-6 text-[#AEB9CD]">
                  Check back for new stories and announcements from Favored
                  Tribe Foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="ftf-section bg-[#080d20]">
        <div className="ftf-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our focus
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              What we're working towards.
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              Our stories are connected by one overarching strategic focus:
              <span className="font-semibold text-white">
                {" "}
                Child Development.
              </span>
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stories.map((story) => {
              const Icon = story.icon;

              return (
                <article key={story.title} className="ftf-card p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5e35b1]/20 text-[#4DD0E1]">
                      <Icon size={24} />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#71809A]">
                      {story.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-snug text-white">
                    {story.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#AEB9CD]">
                    {story.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Follow our journey
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                From ideas to meaningful action.
              </h2>

              <p className="mt-5 leading-8 text-[#AEB9CD]">
                As our work develops, our news and events will provide a
                transparent view of what we are doing, who we are working with,
                and what we are learning.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1d293e] px-5 py-4"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-[#4DD0E1]" />
                  <span className="text-sm font-semibold text-[#D6DDEA]">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="ftf-section bg-[#080d20]">
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
                  Help us turn purpose into progress.
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

      {/* CONTACT CTA */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Have a story to share?
            </h2>

            <p className="mt-4 leading-7 text-[#AEB9CD]">
              For enquiries, partnership opportunities, community
              collaborations, or information about FTF's work, get in touch
              with our team.
            </p>

            <div className="mt-7">
              <Link to="/contact" className="ftf-btn-primary">
                Contact Favored Tribe Foundation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}