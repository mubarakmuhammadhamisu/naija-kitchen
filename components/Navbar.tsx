"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, Flame } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reservation", label: "Reservations" },
  { href: "#events", label: "Events" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(2);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-naija-dark/95 backdrop-blur-md border-b border-naija-border shadow-2xl shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-9 h-9 bg-naija-red rounded-lg flex items-center justify-center group-hover:bg-naija-red-hover transition-colors duration-200">
                <Flame size={18} className="text-white" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-syne font-800 text-xl text-white tracking-tight">
                Naija
              </span>
              <span className="text-[10px] font-outfit font-600 text-naija-amber tracking-[0.2em] uppercase -mt-0.5">
                Kitchen
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-outfit font-500 text-white/75 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button
              aria-label="Open cart"
              className="relative w-10 h-10 flex items-center justify-center rounded-full border border-naija-border hover:border-naija-red/50 transition-colors duration-200"
            >
              <ShoppingCart size={18} className="text-white/80" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-naija-red rounded-full text-[10px] font-bold flex items-center justify-center text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book CTA */}
            <Link
              href="#reservation"
              className="hidden sm:inline-flex items-center gap-2 bg-naija-red hover:bg-naija-red-hover text-white text-sm font-syne font-700 px-5 py-2.5 rounded-lg btn-red-glow transition-all duration-200"
            >
              Book a Table
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-naija-border text-white/80"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-naija-card border-t border-naija-border px-4 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-outfit font-500 text-white/80 hover:text-white hover:bg-naija-card-2 px-4 py-3 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#reservation"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-naija-red text-white text-sm font-syne font-700 px-5 py-3 rounded-lg btn-red-glow"
          >
            Book a Table
          </Link>
        </nav>
      </div>
    </header>
  );
}
