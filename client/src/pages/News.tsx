
import {
  Newspaper,
  ArrowRight,
  CalendarDays,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <main className="ftf-page">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050817]">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5E35B1]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center ftf-fade-up">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5E35B1]/20">
              <Newspaper className="h-7 w-7 text-[#4DD0E1]" />
            </div>

            <p className="mt-6 font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              News & Updates
            </p>

            <h1 className="mt-4 font-['Poppins'] text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Stories from the{" "}
              <span className="text-[#4DD0E1]">journey.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
              Follow the latest updates, activities, partnerships, events, and
              milestones from Favored Tribe Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* CURRENT STATE */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-[28px] border border-white/10 bg-[#1D293E] p-8 text-center md:p-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                <CalendarDays className="h-7 w-7 text-[#4DD0E1]" />
              </div>

              <p className="mt-6 font-['Poppins'] text-sm font-bold uppercase tracking-[0.18em] text-[#4DD0E1]">
                Updates coming soon
              </p>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                We are building the story.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#AEB9CD]">
                Favored Tribe Foundation is an emerging organisation. As our
                programmes and activities develop, this page will become a
                space for sharing verified stories, announcements, events,
                partnerships, and milestones.
              </p>

              <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#AEB9CD]">
                We believe in sharing meaningful updates rather than filling
                this space with information for the sake of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">
          <div className="max-w-2xl">
            <p className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              What to Expect
            </p>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Updates that matter.
            </h2>

            <p className="mt-5 leading-7 text-[#AEB9CD]">
              When there is something meaningful to share, you will find it
              here.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="ftf-card p-7">
              <h3 className="font-['Poppins'] text-xl font-bold text-white">
                Programme Updates
              </h3>
              <p className="mt-3 leading-7 text-[#AEB9CD]">
                News about activities, initiatives, and progress across our
                programmes.
              </p>
            </div>

            <div className="ftf-card p-7">
              <h3 className="font-['Poppins'] text-xl font-bold text-white">
                Partnerships & Events
              </h3>
              <p className="mt-3 leading-7 text-[#AEB9CD]">
                Announcements about collaborations, events, and community
                activities.
              </p>
            </div>

            <div className="ftf-card p-7">
              <h3 className="font-['Poppins'] text-xl font-bold text-white">
                Stories & Milestones
              </h3>
              <p className="mt-3 leading-7 text-[#AEB9CD]">
                Meaningful moments, organisational milestones, and stories from
                our journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="mx-auto h-10 w-10 text-[#4DD0E1]" />

            <h2 className="mt-6 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              Want to be part of the journey?
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              Learn more about our work or connect with us directly.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/about" className="ftf-btn-primary">
                About FTF
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

