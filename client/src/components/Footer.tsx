import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo } from "../data/contact";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050817]">
      {/* MAIN FOOTER */}
      <div className="ftf-container py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">
          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="Favored Tribe Foundation home"
            >
              <img
                src="/logo.png"
                alt="Favored Tribe Foundation"
                className="h-20 w-auto max-w-[240px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#AEB8CA]">
              Transforming futures through kindness by strengthening the
              conditions that enable children and families to thrive.
            </p>

            <Link
              to="/get-involved"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4DD0E1] transition hover:text-white"
            >
              Be part of the work
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.15em] text-white">
              Explore
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                to="/about"
                className="block text-sm text-[#AEB8CA] transition hover:text-[#4DD0E1]"
              >
                About
              </Link>

              <Link
                to="/programs"
                className="block text-sm text-[#AEB8CA] transition hover:text-[#4DD0E1]"
              >
                Programs
              </Link>

              <Link
                to="/impact"
                className="block text-sm text-[#AEB8CA] transition hover:text-[#4DD0E1]"
              >
                Impact
              </Link>

              <Link
                to="/news"
                className="block text-sm text-[#AEB8CA] transition hover:text-[#4DD0E1]"
              >
                News
              </Link>

              <Link
                to="/gallery"
                className="block text-sm text-[#AEB8CA] transition hover:text-[#4DD0E1]"
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* TAKE ACTION */}
          <div>
            <h3 className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.15em] text-white">
              Take Action
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                to="/get-involved"
                className="block text-sm text-[#AEB8CA] transition hover:text-[#4DD0E1]"
              >
                Get Involved
              </Link>

              <Link
                to="/volunteer"
                className="block text-sm text-[#AEB8CA] transition hover:text-[#4DD0E1]"
              >
                Volunteer
              </Link>

              <Link
                to="/donate"
                className="block text-sm text-[#AEB8CA] transition hover:text-[#4DD0E1]"
              >
                Donate
              </Link>

              <Link
                to="/contact"
                className="block text-sm text-[#AEB8CA] transition hover:text-[#4DD0E1]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-['Poppins'] text-sm font-bold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#4DD0E1]"
                />

                <span className="text-sm leading-6 text-[#AEB8CA]">
                  {contactInfo.country}
                </span>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-[#4DD0E1]"
                />

                <a
                  href={contactInfo.email.href}
                  className="break-all text-sm leading-6 text-[#AEB8CA] transition hover:text-[#4DD0E1]"
                >
                  {contactInfo.email.label}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-[#4DD0E1]"
                />

                <div className="space-y-1.5">
                  {contactInfo.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block text-sm text-[#AEB8CA] transition hover:text-[#4DD0E1]"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4DD0E1] transition hover:text-white"
            >
              Contact us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-white/10">
        <div className="ftf-container flex flex-col gap-3 py-5 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-[#718097]">
            © {new Date().getFullYear()} Favored Tribe Foundation. All
            rights reserved.
          </p>

          <p className="text-[#718097]">
            Transforming Futures Through Kindness
          </p>
        </div>
      </div>
    </footer>
  );
}