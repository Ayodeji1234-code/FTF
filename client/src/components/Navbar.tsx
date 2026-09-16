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
  };

  return (
    <header className="relative z-50">
      <div className="border-b border-white/10 bg-[#050817]/95 backdrop-blur-xl">
        <div className="ftf-container">
          {/* DESKTOP / TOP BAR */}
          <div className="flex h-[72px] items-center justify-between">
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={closeMobile}
            >
              <img
                src="/logo.png"
                alt="Favored Tribe Foundation"
                className="h-10 w-auto object-contain"
              />

              <div className="hidden sm:block">
                <p className="text-sm font-bold leading-tight text-white">
                  Favored Tribe
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#71809A]">
                  Foundation
                </p>
              </div>
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

              {/* CTA */}
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
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* MOBILE NAVIGATION */}
          {mobileOpen && (
            <div className="border-t border-white/10 py-5 lg:hidden">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#5E35B1]/20 text-[#4DD0E1]"
                          : "text-[#C2CADA] hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* MOBILE MORE */}
                <div className="pt-4">
                  <p className="px-4 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6F7B91]">
                    More
                  </p>

                  {moreLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
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

                {/* MOBILE CTA */}
                <div className="pt-4">
                  <Link
                    to="/donate"
                    onClick={closeMobile}
                    className="ftf-btn-primary w-full"
                  >
                    Support Us
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}