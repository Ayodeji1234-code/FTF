import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Mission", path: "/mission" },
  { name: "Impact", path: "/impact" },
  { name: "News & Events", path: "/news" },
];

const moreLinks = [
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
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="border-b border-white/10 bg-[#050817]/95 backdrop-blur-xl">
        <div className="ftf-container">
          <div className="flex h-[72px] items-center justify-end">

            {/* =================================================
                DESKTOP NAVIGATION
                ================================================= */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-white/10 text-[#4dd0e1]"
                        : "text-[#c2cada] hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* =================================================
                  MORE DROPDOWN
                  ================================================= */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((value) => !value)}
                  className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-[#c2cada] transition hover:bg-white/5 hover:text-white"
                >
                  More

                  <ChevronDown
                    size={15}
                    className={`transition-transform ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {moreOpen && (
                  <div className="absolute right-0 top-12 w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#111a2d]/95 p-2 shadow-2xl backdrop-blur-xl">
                    {moreLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setMoreOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                            isActive
                              ? "bg-[#5e35b1]/20 text-[#4dd0e1]"
                              : "text-[#c2cada] hover:bg-white/5 hover:text-white"
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

            {/* =================================================
                DESKTOP CTA
                ================================================= */}
            <div className="ml-4 hidden lg:block">
              <Link
                to="/donate"
                className="ftf-btn-primary px-5 py-3 text-sm"
              >
                Support Us
              </Link>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
                ================================================= */}
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>

          {/* =================================================
              MOBILE NAVIGATION
              ================================================= */}
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
                          ? "bg-[#5e35b1]/20 text-[#4dd0e1]"
                          : "text-[#c2cada] hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* MOBILE EXPLORE */}
                <div className="pt-3">
                  <p className="px-4 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6f7b91]">
                    Explore
                  </p>

                  {moreLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                          isActive
                            ? "bg-[#5e35b1]/20 text-[#4dd0e1]"
                            : "text-[#c2cada] hover:bg-white/5 hover:text-white"
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