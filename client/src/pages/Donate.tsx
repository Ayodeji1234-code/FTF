import {
  Heart,
  ShieldCheck,
  HandHeart,
  ArrowRight,
  Mail,
  BookOpen,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const focusAreas = [
  {
    icon: BookOpen,
    title: "Education",
    text: "Creating meaningful opportunities for children to learn, participate and develop.",
  },
  {
    icon: Users,
    title: "Family Empowerment",
    text: "Strengthening families and caregivers so children have better support around them.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection",
    text: "Promoting safety, dignity and protective environments where children can thrive.",
  },
];

const otherWays = [
  {
    icon: Users,
    title: "Volunteer",
    text: "Give your time, skills and experience to support our work.",
    link: "/volunteer",
    action: "Become a Volunteer",
  },
  {
    icon: HandHeart,
    title: "Partner",
    text: "Bring your expertise, resources or network to a shared purpose.",
    link: "/contact",
    action: "Start a Conversation",
  },
  {
    icon: Heart,
    title: "Spread the Word",
    text: "Share our mission and help more people connect with our work.",
    link: "/contact",
    action: "Connect With Us",
  },
];

export default function Donate() {
  return (
    <main className="ftf-page">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(94,53,177,0.22),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(77,208,225,0.10),transparent_30%)]" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-4xl ftf-fade-up">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#4DD0E1]">
              Support Our Work
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Give hope. Help build a better future.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              Your generosity can help strengthen the conditions that enable
              children and families to learn, grow and thrive.
            </p>

            <div className="mt-9">
              <a href="#donation" className="ftf-btn-primary">
                Explore Ways to Give
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION STATUS */}
      <section id="donation" className="ftf-section">
        <div className="ftf-container">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-[32px] border border-[#4DD0E1]/15 bg-gradient-to-br from-[#111A2D] via-[#0B1222] to-[#10152A] p-8 text-center md:p-14">
              <div className="relative z-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                  <Heart className="h-8 w-8 fill-[#4DD0E1] text-[#4DD0E1]" />
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                  Donations Opening Soon
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                  We are preparing a secure way for you to give.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
                  Our official donation and payment systems are currently being
                  prepared. Donation details will be published here once they
                  are ready.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link to="/contact" className="ftf-btn-primary">
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <a
                    href="mailto:favoredtribefoundation@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:border-[#4DD0E1]/40 hover:bg-white/5"
                  >
                    <Mail className="h-5 w-5" />
                    Email Us
                  </a>
                </div>

                <div className="mt-7 flex flex-col items-center justify-center gap-2 text-sm text-[#AEB9CD] sm:flex-row sm:gap-5">
                  <a
                    href="mailto:favoredtribefoundation@gmail.com"
                    className="transition hover:text-[#4DD0E1]"
                  >
                    favoredtribefoundation@gmail.com
                  </a>

                  <span className="hidden text-white/20 sm:inline">•</span>

                  <a
                    href="tel:08055638690"
                    className="transition hover:text-[#4DD0E1]"
                  >
                    0805 563 8690
                  </a>
                </div>
              </div>

              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-[100px]" />

              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SUPPORT ENABLES */}
      <section className="border-y border-white/5 bg-[#091023]">
        <div className="ftf-container ftf-section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Our Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Supporting the whole environment around a child.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              We focus on the areas that help children build stronger
              foundations for learning, safety and development.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="ftf-card p-7 text-center transition duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                    <Icon className="h-7 w-7 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#AEB9CD]">
                    {area.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GIVING */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Responsible Giving
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                Your support deserves accountability.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
                We are committed to responsible stewardship and keeping the
                well-being of children and families at the centre of our work.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Children's well-being comes first",
                "Resources are managed responsibly",
                "Transparency and accountability",
                "Continuous learning and improvement",
              ].map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-[#111A2D] p-5"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#4DD0E1]" />

                  <span className="text-sm leading-6 text-[#D8DCEF]">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER WAYS TO HELP */}
      <section className="border-y border-white/5 bg-[#091023]">
        <div className="ftf-container ftf-section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              More Ways to Help
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              You can make a difference in more ways than one.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              While our donation systems are being prepared, you can still
              contribute your time, skills, ideas or network.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {otherWays.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="ftf-card flex flex-col p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4DD0E1]/10">
                    <Icon className="h-6 w-6 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#AEB9CD]">
                    {item.text}
                  </p>

                  <Link
                    to={item.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#4DD0E1] transition hover:gap-3"
                  >
                    {item.action}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/5 bg-[#050817]">
        <div className="ftf-container py-20 text-center">
          <Heart className="mx-auto h-10 w-10 fill-[#4DD0E1] text-[#4DD0E1]" />

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Every child. Every family. Every future.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#AEB9CD]">
            Join us in transforming futures through kindness.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/get-involved" className="ftf-btn-primary">
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
      </section>
    </main>
  );
}