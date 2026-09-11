import {
  Heart,
  ShieldCheck,
  HandHeart,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
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
    text: "Every contribution is directed toward supporting FTF's mission and building stronger conditions for children and families.",
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
              Your support can help transform futures.
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
                Support FTF
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
              FTF works across three interconnected areas: Education, Family
              Empowerment and Child Protection. Your support helps us pursue
              this work while building the systems needed for responsible
              growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {waysToGive.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="ftf-card p-8">
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
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                Make a Difference
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Every contribution matters.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
                We are currently developing our donation and resource
                mobilisation systems. To support Favored Tribe Foundation,
                please contact us directly for the appropriate giving
                information.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
                  Email Us
                </a>
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="rounded-[32px] border border-white/5 bg-[#111A2D] p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5E35B1]/20">
                <Heart className="h-7 w-7 fill-[#B9A4FF] text-[#B9A4FF]" />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                Interested in supporting FTF?
              </h3>

              <p className="mt-4 leading-7 text-[#AEB9CD]">
                Reach out to discuss donations, sponsorship, partnerships or
                other ways you can contribute to our mission.
              </p>

              <div className="mt-7 space-y-4">
                <a
                  href="mailto:favoredtribefoundation@gmail.com"
                  className="flex items-center gap-3 text-[#D8DCEF] transition hover:text-[#4DD0E1]"
                >
                  <Mail className="h-5 w-5 text-[#4DD0E1]" />
                  <span className="break-all text-sm">
                    favoredtribefoundation@gmail.com
                  </span>
                </a>

                <a
                  href="tel:08055638690"
                  className="flex items-center gap-3 text-[#D8DCEF] transition hover:text-[#4DD0E1]"
                >
                  <Phone className="h-5 w-5 text-[#4DD0E1]" />
                  <span className="text-sm">0805 563 8690</span>
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
                FTF is committed to managing resources responsibly and
                remaining accountable to children, families, partners,
                supporters and the communities we serve.
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
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/5 bg-[#111A2D] p-8 text-center">
              <BookOpenIcon />

              <h3 className="mt-5 text-xl font-bold text-white">
                Education
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#AEB9CD]">
                Helping create meaningful opportunities for learning and
                development.
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-[#111A2D] p-8 text-center">
              <UsersIcon />

              <h3 className="mt-5 text-xl font-bold text-white">
                Family Empowerment
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#AEB9CD]">
                Strengthening families and caregivers around children.
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-[#111A2D] p-8 text-center">
              <ShieldIcon />

              <h3 className="mt-5 text-xl font-bold text-white">
                Child Protection
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#AEB9CD]">
                Promoting safety, dignity, rights and protective environments.
              </p>
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