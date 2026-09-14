
import {
  Heart,
  ShieldCheck,
  HandHeart,
  ArrowRight,
  CheckCircle2,
  Mail,
  BookOpen,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const waysToGive = [
  {
    icon: HandHeart,
    title: "Make a Donation",
    text: "Your financial support can help contribute to programmes that strengthen education, family empowerment and child protection.",
  },
  {
    icon: Heart,
    title: "Give With Purpose",
    text: "Every contribution can help Favored Tribe Foundation pursue its mission and build stronger conditions for children and families.",
  },
  {
    icon: ShieldCheck,
    title: "Support Responsibly",
    text: "We are committed to responsible stewardship, accountability and transparency in the management of resources.",
  },
];

const donationPrinciples = [
  "Children's well-being remains at the centre",
  "Resources are managed responsibly",
  "We value transparency and accountability",
  "Programme quality matters",
  "We learn and improve continuously",
  "Support contributes to sustainable impact",
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
              vulnerable and disadvantaged children to learn, grow, thrive and
              realise their full potential.
            </p>

            <div className="mt-9">
              <a
                href="#donation"
                className="ftf-btn-primary"
              >
                Explore Ways to Give
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY GIVE */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Why Give?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Help create stronger conditions for children.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              Favored Tribe Foundation works across three interconnected
              areas: Education, Family Empowerment and Child Protection.
              Support from individuals, organisations and partners can help us
              pursue this work while building the systems needed for
              responsible growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {waysToGive.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="ftf-card p-8 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                    <Icon className="h-7 w-7 text-[#4DD0E1]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#AEB9CD]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DONATION AREA */}
      <section
        id="donation"
        className="border-y border-white/5 bg-[#091023]"
      >
        <div className="ftf-container ftf-section">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-[32px] border border-[#4DD0E1]/15 bg-[#111A2D] p-8 text-center md:p-12">
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
                Favored Tribe Foundation is currently putting the necessary
                donation and resource mobilisation systems in place. Official
                donation details will be published here once they are ready.
              </p>

              <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/5 bg-[#091023] p-6">
                <p className="text-sm leading-7 text-[#D8DCEF]">
                  For now, if you would like to support our work, sponsor an
                  initiative, or discuss another way of contributing, please
                  reach out to us directly.
                </p>
              </div>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="ftf-btn-primary"
                >
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

              <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-[#AEB9CD] sm:flex-row sm:gap-6">
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
          </div>
        </div>
      </section>

      {/* RESPONSIBLE STEWARDSHIP */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Responsible Stewardship
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                Giving should be accompanied by accountability.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
                Favored Tribe Foundation is committed to managing resources
                responsibly and remaining accountable to children, families,
                partners, supporters and the communities we serve.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {donationPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-[#111A2D] p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4DD0E1]" />

                  <span className="text-sm leading-6 text-[#D8DCEF]">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOUR SUPPORT CONNECTS TO */}
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
              Our work recognises that children thrive when they have access
              to education, supportive families and safe environments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* EDUCATION */}
            <div className="rounded-3xl border border-white/5 bg-[#111A2D] p-8 text-center transition duration-300 hover:-translate-y-1">
              <BookOpenIcon />

              <h3 className="mt-5 text-xl font-bold text-white">
                Education
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#AEB9CD]">
                Helping create meaningful opportunities for learning,
                participation and development.
              </p>
            </div>

            {/* FAMILY EMPOWERMENT */}
            <div className="rounded-3xl border border-white/5 bg-[#111A2D] p-8 text-center transition duration-300 hover:-translate-y-1">
              <UsersIcon />

              <h3 className="mt-5 text-xl font-bold text-white">
                Family Empowerment
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#AEB9CD]">
                Strengthening families and caregivers around children so they
                can better support their well-being and development.
              </p>
            </div>

            {/* CHILD PROTECTION */}
            <div className="rounded-3xl border border-white/5 bg-[#111A2D] p-8 text-center transition duration-300 hover:-translate-y-1">
              <ShieldIcon />

              <h3 className="mt-5 text-xl font-bold text-white">
                Child Protection
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#AEB9CD]">
                Promoting safety, dignity, rights and protective environments
                where children can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER WAYS TO SUPPORT */}
      <section className="ftf-section">
        <div className="ftf-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              More Ways to Help
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              You can make a difference in more ways than one.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              While our donation systems are being prepared, you can still
              contribute your time, skills, ideas or network to the work of
              Favored Tribe Foundation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* VOLUNTEER */}
            <div className="ftf-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                <Users className="h-7 w-7 text-[#4DD0E1]" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Volunteer
              </h3>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                Give your time, skills and experience to support initiatives
                that serve children and families.
              </p>

              <Link
                to="/volunteer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#4DD0E1] transition hover:text-white"
              >
                Become a Volunteer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* PARTNER */}
            <div className="ftf-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/15">
                <HandHeart className="h-7 w-7 text-[#B9A4FF]" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Partner With Us
              </h3>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                Organisations, professionals and individuals can reach out to
                explore meaningful ways to collaborate.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#4DD0E1] transition hover:text-white"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* SPREAD THE WORD */}
            <div className="ftf-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                <Heart className="h-7 w-7 text-[#4DD0E1]" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Spread the Word
              </h3>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                Help us reach more people by sharing our mission, programmes
                and opportunities with your network.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#4DD0E1] transition hover:text-white"
              >
                Connect With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/5 bg-[#050817]">
        <div className="ftf-container py-20">
          <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-[#5E35B1]/20 via-[#111A2D] to-[#4DD0E1]/10 p-8 text-center md:p-14">
            <div className="relative z-10">
              <Heart className="mx-auto h-10 w-10 fill-[#4DD0E1] text-[#4DD0E1]" />

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Every child. Every family. Every future.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#AEB9CD]">
                Join us in transforming futures through kindness.
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
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:border-[#4DD0E1]/40 hover:bg-white/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-[100px]" />

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-[100px]" />
          </div>
        </div>
      </section>
    </main>
  );
}

/* Small icon helpers */

function BookOpenIcon() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
      <BookOpen className="h-7 w-7 text-[#4DD0E1]" />
    </div>
  );
}

function UsersIcon() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/15">
      <Users className="h-7 w-7 text-[#B9A4FF]" />
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
      <ShieldCheck className="h-7 w-7 text-[#4DD0E1]" />
    </div>
  );
}

