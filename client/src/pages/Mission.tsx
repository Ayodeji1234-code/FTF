
import {
  Eye,
  Target,
  Heart,
  HeartHandshake,
  Handshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const commitments = [
  {
    icon: Heart,
    title: "Children first",
    text: "We place the well-being, dignity, safety, and potential of children at the centre of our work.",
  },
  {
    icon: ShieldCheck,
    title: "Protection and dignity",
    text: "We promote safe and supportive environments where children can learn, grow, and thrive.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    text: "We believe lasting change is strengthened through partnership and shared responsibility.",
  },
  {
    icon: Target,
    title: "Responsibility",
    text: "We are committed to responsible action, accountability, and meaningful results.",
  },
];

export default function Mission() {
  return (
    <main className="ftf-page">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050817]">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5E35B1]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-4xl ftf-fade-up">
            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our Mission & Vision
            </span>

            <h1 className="mt-5 font-['Poppins'] text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Transforming futures through{" "}
              <span className="text-[#4DD0E1]">kindness.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              We believe every child should have the opportunity to learn,
              grow, thrive, and realise their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="ftf-card p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                <Eye className="h-6 w-6 text-[#4DD0E1]" />
              </div>

              <span className="mt-6 block text-sm font-bold uppercase tracking-[0.15em] text-[#4DD0E1]">
                Our Vision
              </span>

              <h2 className="mt-3 font-['Poppins'] text-2xl font-bold text-white md:text-3xl">
                A future where every child can thrive.
              </h2>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                A world where every child has the opportunity to learn, grow,
                thrive, and realise their full potential.
              </p>
            </div>

            <div className="ftf-card p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                <Target className="h-6 w-6 text-[#B9A4FF]" />
              </div>

              <span className="mt-6 block text-sm font-bold uppercase tracking-[0.15em] text-[#B9A4FF]">
                Our Mission
              </span>

              <h2 className="mt-3 font-['Poppins'] text-2xl font-bold text-white md:text-3xl">
                Strengthening the conditions children need to flourish.
              </h2>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                To transform futures through kindness by strengthening the
                conditions that enable children to learn, grow, thrive, and
                realise their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT GUIDES OUR WORK */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                What Guides Our Work
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Circumstances should not define potential.
              </h2>

              <p className="mt-5 leading-8 text-[#AEB9CD]">
                We seek to reduce barriers and strengthen the environments
                around children so they have greater opportunities to learn,
                grow, and thrive.
              </p>

              <p className="mt-4 leading-8 text-[#AEB9CD]">
                This means looking beyond individual needs and considering the
                families, communities, and systems that shape children's lives.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#1D293E] p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                  <Heart className="h-6 w-6 text-[#4DD0E1]" />
                </div>

                <div>
                  <p className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.15em] text-[#4DD0E1]">
                    Our belief
                  </p>

                  <h3 className="mt-3 font-['Poppins'] text-2xl font-bold leading-tight text-white">
                    Every child deserves a fair opportunity to thrive.
                  </h3>

                  <p className="mt-4 leading-7 text-[#AEB9CD]">
                    We work toward a future where circumstances do not limit a
                    child's opportunity to reach their potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="max-w-2xl">
            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our Commitments
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              How we choose to work.
            </h2>

            <p className="mt-4 leading-7 text-[#AEB9CD]">
              Our purpose is reflected not only in what we do, but in how we
              carry out the work.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="ftf-card p-7 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                    <Icon className="h-5 w-5 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-5 font-['Poppins'] text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#AEB9CD]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">
          <div className="mx-auto max-w-3xl text-center">
            <HeartHandshake className="mx-auto h-10 w-10 text-[#4DD0E1]" />

            <h2 className="mt-6 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Turning purpose into action.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              Our mission guides the work we do today and the organisation we
              are building for tomorrow.
            </p>

            <Link
              to="/about"
              className="ftf-btn-primary mt-8"
            >
              Learn About Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

