
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
} from "lucide-react";
import { Link } from "react-router-dom";

const commitments = [
  {
    icon: Heart,
    title: "Children at the heart",
    text: "We place the well-being, dignity, safety, and potential of children at the centre of our work.",
  },
  {
    icon: ShieldCheck,
    title: "Protection from harm",
    text: "We work toward safe and protective environments where children can learn, grow, and thrive.",
  },
  {
    icon: Users,
    title: "Family and community",
    text: "We recognise the important role of families, caregivers, and communities in children's development.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We believe lasting change is strengthened through collaboration and shared responsibility.",
  },
  {
    icon: Lightbulb,
    title: "Learning and improvement",
    text: "We learn from experience, use evidence, and continuously improve our work.",
  },
  {
    icon: Target,
    title: "Responsible action",
    text: "We are committed to accountability, responsible stewardship, and meaningful results.",
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
          <div className="max-w-4xl">
            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Our Mission & Vision
            </span>

            <h1 className="mt-5 font-['Poppins'] text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Transforming futures through{" "}
              <span className="text-[#4DD0E1]">kindness.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              We believe every child should have the opportunity to learn,
              grow, thrive, and realise their full potential — regardless of
              the circumstances into which they are born.
            </p>
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* VISION */}
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

            {/* MISSION */}
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
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                What Guides Our Work
              </span>

              <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Circumstances should not define potential.
              </h2>

              <p className="mt-5 leading-8 text-[#AEB9CD]">
                We seek to reduce barriers, strengthen the environments around
                children, and expand the opportunities available to them.
              </p>

              <p className="mt-4 leading-8 text-[#AEB9CD]">
                Our work is centred on three connected foundations:
                <span className="font-semibold text-white">
                  {" "}
                  education, family empowerment, and child protection.
                </span>
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#1D293E] p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                  <BookOpen className="h-6 w-6 text-[#4DD0E1]" />
                </div>

                <h3 className="mt-5 font-['Poppins'] font-bold text-white">
                  Education
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#AEB9CD]">
                  Opportunities to learn and develop.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#1D293E] p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#5E35B1]/20">
                  <Users className="h-6 w-6 text-[#B9A4FF]" />
                </div>

                <h3 className="mt-5 font-['Poppins'] font-bold text-white">
                  Family
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#AEB9CD]">
                  Stronger families and caregivers.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#1D293E] p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                  <ShieldCheck className="h-6 w-6 text-[#4DD0E1]" />
                </div>

                <h3 className="mt-5 font-['Poppins'] font-bold text-white">
                  Protection
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#AEB9CD]">
                  Safer environments for children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENTS */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Our Commitments
            </span>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              How we choose to work.
            </h2>

            <p className="mt-4 leading-7 text-[#AEB9CD]">
              Our mission is not only about what we do, but also about the
              responsibility and care with which we do it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

      {/* SIMPLE STATEMENT */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">
          <div className="mx-auto max-w-4xl text-center">
            <Heart className="mx-auto h-10 w-10 text-[#4DD0E1]" />

            <h2 className="mt-6 font-['Poppins'] text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Every child deserves the opportunity to learn, grow, and thrive.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              We are committed to helping create the conditions that make that
              opportunity possible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1D293E] to-[#11182B] p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                  <HeartHandshake className="h-6 w-6 text-[#4DD0E1]" />
                </div>

                <h2 className="mt-6 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
                  Help us turn purpose into action.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-[#AEB9CD]">
                  Whether through partnership, volunteering, advocacy, or
                  support, there is a place for you in the work.
                </p>
              </div>

              <Link
                to="/get-involved"
                className="ftf-btn-primary whitespace-nowrap"
              >
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
