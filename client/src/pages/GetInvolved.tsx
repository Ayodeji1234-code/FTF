import {
  HeartHandshake,
  Users,
  Handshake,
  Gift,
  Megaphone,
  ArrowRight,
  Building2,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const involvementOptions = [
  {
    icon: Users,
    title: "Volunteer",
    text: "Give your time, skills and energy to support children and communities.",
    link: "/volunteer",
    action: "Volunteer with us",
  },
  {
    icon: Handshake,
    title: "Partner",
    text: "Bring your expertise, resources or network to a shared purpose.",
    link: "/contact",
    action: "Start a conversation",
  },
  {
    icon: Gift,
    title: "Donate",
    text: "Support work that strengthens opportunities for children and families.",
    link: "/donate",
    action: "Explore giving",
  },
  {
    icon: Megaphone,
    title: "Advocate",
    text: "Use your voice to promote the dignity, safety and rights of children.",
    link: "/contact",
    action: "Get connected",
  },
];

const partnerTypes = [
  {
    icon: Building2,
    title: "Government & Institutions",
    text: "Public institutions and organisations working to improve outcomes for children and families.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Community Partners",
    text: "Educators, community organisations and development partners contributing knowledge and opportunities.",
  },
];

export default function GetInvolved() {
  return (
    <main className="ftf-page">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(94,53,177,0.22),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(77,208,225,0.10),transparent_30%)]" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-4xl ftf-fade-up">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#4DD0E1]">
              Get Involved
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              There is a place for you in this work.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              Lasting change happens when people, communities and organisations
              come together around a shared commitment to children and
              families.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="ftf-btn-primary">
                Start a Conversation
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/donate"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:border-[#4DD0E1]/40 hover:bg-white/5"
              >
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WAYS TO HELP */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Ways To Contribute
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Choose how you want to help.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              Your time, resources, skills or voice can help create better
              opportunities for children.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {involvementOptions.map((option) => {
              const Icon = option.icon;

              return (
                <div
                  key={option.title}
                  className="ftf-card flex flex-col p-6 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                    <Icon className="h-6 w-6 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {option.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#AEB9CD]">
                    {option.text}
                  </p>

                  <Link
                    to={option.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#4DD0E1] transition hover:gap-3"
                  >
                    {option.action}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="border-y border-white/5 bg-[#091023]">
        <div className="ftf-container ftf-section">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Partnership
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                Stronger together.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#AEB9CD]">
                We welcome partners whose expertise, resources, networks or
                experience can contribute to better outcomes for children and
                families.
              </p>

              <Link to="/contact" className="ftf-btn-primary mt-7">
                Discuss Partnership
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid gap-4">
              {partnerTypes.map((partner) => {
                const Icon = partner.icon;

                return (
                  <div
                    key={partner.title}
                    className="flex gap-4 rounded-2xl border border-white/5 bg-[#111A2D] p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5E35B1]/15">
                      <Icon className="h-5 w-5 text-[#B9A4FF]" />
                    </div>

                    <div>
                      <h3 className="font-['Poppins'] font-bold text-white">
                        {partner.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#AEB9CD]">
                        {partner.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid gap-6 md:grid-cols-2">
            {/* VOLUNTEER */}
            <div className="rounded-[28px] border border-white/5 bg-[#111A2D] p-8">
              <Users className="h-9 w-9 text-[#4DD0E1]" />

              <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
                Give your time.
              </h2>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                Volunteers can support programme activities, communications,
                research, events, administration and community engagement.
              </p>

              <Link
                to="/volunteer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4DD0E1]"
              >
                Explore volunteering
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* DONATE */}
            <div className="rounded-[28px] border border-white/5 bg-gradient-to-br from-[#5E35B1]/20 to-[#111A2D] p-8">
              <Gift className="h-9 w-9 text-[#4DD0E1]" />

              <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
                Support the work.
              </h2>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                Our official donation and payment systems are currently being
                prepared and will be published once ready.
              </p>

              <Link
                to="/donate"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4DD0E1]"
              >
                Explore giving
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/5 bg-[#050817]">
        <div className="ftf-container py-20 text-center">
          <HeartHandshake className="mx-auto h-10 w-10 text-[#4DD0E1]" />

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Let's transform futures together.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#AEB9CD]">
            Have an idea, skill, resource or partnership opportunity? We'd love
            to hear from you.
          </p>

          <Link to="/contact" className="ftf-btn-primary mt-8">
            Contact Favored Tribe Foundation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}