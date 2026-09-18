
import { Heart, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Donate() {
  return (
    <main className="ftf-page">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050817]">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5E35B1]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#4DD0E1]/10 blur-3xl" />

        <div className="ftf-container relative py-24 md:py-32">
          <div className="max-w-3xl ftf-fade-up">
            <p className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              Support Our Work
            </p>

            <h1 className="mt-5 font-['Poppins'] text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Give hope.
              <span className="block text-[#4DD0E1]">
                Help build a better future.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#AEB9CD] md:text-xl">
              Your generosity can help create stronger conditions for children
              and families to learn, grow, and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* DONATION STATUS */}
      <section id="donation" className="ftf-section bg-[#0B1022]">
        <div className="ftf-container">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-[32px] border border-[#4DD0E1]/15 bg-gradient-to-br from-[#111A2D] via-[#0B1222] to-[#10152A] p-8 text-center md:p-14">
              <div className="relative z-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4DD0E1]/10">
                  <Heart className="h-8 w-8 fill-[#4DD0E1] text-[#4DD0E1]" />
                </div>

                <p className="mt-7 font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
                  Donations Opening Soon
                </p>

                <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
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

                <div className="mt-7 text-sm text-[#AEB9CD]">
                  <a
                    href="mailto:favoredtribefoundation@gmail.com"
                    className="transition hover:text-[#4DD0E1]"
                  >
                    favoredtribefoundation@gmail.com
                  </a>
                </div>
              </div>

              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4DD0E1]/10 blur-[100px]" />

              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#5E35B1]/20 blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT IN OTHER WAYS */}
      <section className="ftf-section bg-[#050817]">
        <div className="ftf-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.2em] text-[#4DD0E1]">
              While You Wait
            </p>

            <h2 className="mt-4 font-['Poppins'] text-3xl font-extrabold text-white md:text-4xl">
              There are other ways to support the work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#AEB9CD]">
              You can still contribute your time, skills, ideas, or
              connections while our donation systems are being prepared.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/volunteer" className="ftf-btn-primary">
                Volunteer With Us
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-['Poppins'] font-bold text-white transition hover:border-[#4DD0E1]/40 hover:bg-white/5"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

