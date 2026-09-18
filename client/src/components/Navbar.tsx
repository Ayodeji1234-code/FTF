
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Impact", path: "/impact" },
  { name: "News", path: "/news" },
];

const moreLinks = [
  { name: "Mission", path: "/mission" },
  { name: "Gallery", path: "/gallery" },
  { name: "Get Involved", path: "/get-involved" },
  { name: "Volunteer", path: "/volunteer" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMoreOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobile = () => {
    setMobileOpen((value) => {
      const newValue = !value;
      document.body.style.overflow = newValue ? "hidden" : "";
      return newValue;
    });
  };

  return (
    <header className="relative z-50">
      {/* TOP NAVBAR */}
      <div className="border-b border-white/10 bg-[#050817]/95 backdrop-blur-xl">
        <div className="ftf-container">
          <div className="flex h-[72px] items-center justify-between">
            {/* LOGO + FOUNDATION NAME */}
            <Link
              to="/"
              className="flex min-w-0 items-center gap-3"
              aria-label="Favored Tribe Foundation home"
            >
              <img
                src="/logo.png"
                alt="Favored Tribe Foundation"
                className="h-11 w-auto max-w-[58px] object-contain"
              />

             <span className="max-w-[180px] truncate font-['Poppins'] text-xs font-bold leading-tight text-white sm:max-w-[210px] sm:text-sm">
  Favored Tribe Foundation
</span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center lg:flex">
              <nav className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-white/10 text-[#4DD0E1]"
                          : "text-[#C2CADA] hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* MORE */}
                <div className="relative ml-1">
                  <button
                    type="button"
                    onClick={() => setMoreOpen((value) => !value)}
                    aria-expanded={moreOpen}
                    className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                      moreOpen
                        ? "bg-white/10 text-[#4DD0E1]"
                        : "text-[#C2CADA] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    More

                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        moreOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {moreOpen && (
                    <div className="absolute right-0 top-12 w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#111A2D]/95 p-2 shadow-2xl backdrop-blur-xl">
                      {moreLinks.map((link) => (
                        <NavLink
                          key={link.path}
                          to={link.path}
                          onClick={() => setMoreOpen(false)}
                          className={({ isActive }) =>
                            `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                              isActive
                                ? "bg-[#5E35B1]/20 text-[#4DD0E1]"
                                : "text-[#C2CADA] hover:bg-white/5 hover:text-white"
                            }`
                          }
                        >
                          {link.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              </nav>

              {/* DESKTOP CTA */}
              <Link
                to="/donate"
                className="ftf-btn-primary ml-4 px-5 py-2.5 text-sm"
              >
                Support Us
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={toggleMobile}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex h-screen flex-col overflow-y-auto bg-[#050817] lg:hidden">
          {/* MOBILE MENU HEADER */}
          <div className="border-b border-white/10">
            <div className="ftf-container">
              <div className="flex h-[72px] items-center justify-between">
                {/* MOBILE LOGO + NAME */}
                <Link
                  to="/"
                  onClick={closeMobile}
                  className="flex min-w-0 items-center gap-3"
                  aria-label="Favored Tribe Foundation home"
                >
                  <img
                    src="/logo.png"
                    alt="Favored Tribe Foundation"
                    className="h-10 w-auto max-w-[52px] object-contain"
                  />

                  <span className="max-w-[190px] font-['Poppins'] text-sm font-bold leading-tight text-white">
                    Favored Tribe Foundation
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={closeMobile}
                  aria-label="Close menu"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                >
                  <X size={22} />
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE LINKS */}
          <div className="ftf-container flex-1 py-8">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `block rounded-2xl px-5 py-4 text-base font-semibold transition ${
                      isActive
                        ? "bg-[#5E35B1]/20 text-[#4DD0E1]"
                        : "text-[#C2CADA] hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* MORE LINKS */}
              <div className="pt-7">
                <p className="px-5 pb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6F7B91]">
                  More
                </p>

                {moreLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      `block rounded-2xl px-5 py-4 text-base font-semibold transition ${
                        isActive
                          ? "bg-[#5E35B1]/20 text-[#4DD0E1]"
                          : "text-[#C2CADA] hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </nav>

            {/* MOBILE CTA */}
            <div className="mt-8">
              <Link
                to="/donate"
                onClick={closeMobile}
                className="ftf-btn-primary flex w-full items-center justify-center"
              >
                Support Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

