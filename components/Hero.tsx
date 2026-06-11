"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ChevronDown, Star } from "lucide-react";

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&h=60&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=60&h=60&fit=crop&crop=face",
];

const AVATAR_NAMES = ["Adaeze", "Emeka", "Tunde", "Chioma"];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      el.querySelectorAll<HTMLElement>(".hero-animate").forEach((t) => {
        t.style.opacity = "1";
        t.style.transform = "none";
      });
      return;
    }
    el.querySelectorAll<HTMLElement>(".hero-animate").forEach((t, i) => {
      setTimeout(() => {
        t.style.opacity = "1";
        t.style.transform = "translateY(0) translateX(0)";
      }, 100 + i * 120);
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden bg-naija-dark"
    >
      {/* Ambient glow blobs — decorative */}
      <div className="glow-blob w-[600px] h-[600px] bg-naija-red/8 -top-40 -left-60" aria-hidden="true" />
      <div className="glow-blob w-[500px] h-[500px] bg-naija-amber/6 top-1/2 -right-40" aria-hidden="true" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
      />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-naija-amber/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-28 lg:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">

          {/* LEFT — Text */}
          <div className="flex flex-col gap-6 max-w-xl">
            <div
              className="hero-animate inline-flex items-center gap-2 self-start"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
            >
              <span className="w-8 h-[2px] bg-naija-red rounded-full" aria-hidden="true" />
              <span className="text-naija-red text-xs font-syne font-700 tracking-[0.2em] uppercase">
                Authentic Nigerian Cuisine
              </span>
            </div>

            <div
              className="hero-animate"
              style={{ opacity: 0, transform: "translateY(25px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
            >
              <h1 id="hero-heading" className="font-syne font-800 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                <span className="text-white block">Bold Flavors.</span>
                <span className="text-gradient-amber block mt-1">True Naija.</span>
              </h1>
            </div>

            <p
              className="hero-animate text-white/60 font-outfit text-base sm:text-lg leading-relaxed max-w-md"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
            >
              From smoky suya to rich jollof, every dish is crafted with love,
              tradition and the finest Nigerian ingredients.
            </p>

            <div
              className="hero-animate flex flex-wrap items-center gap-3"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
            >
              <Link
                href="#reservation"
                className="inline-flex items-center gap-2 bg-naija-red hover:bg-naija-red-hover text-white font-syne font-700 text-sm px-6 py-3.5 rounded-lg btn-red-glow"
                aria-label="Book a table — go to reservation form"
              >
                Book a Table
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="#menu"
                className="inline-flex items-center gap-2 border border-naija-border hover:border-white/30 text-white font-syne font-600 text-sm px-6 py-3.5 rounded-lg btn-outline-glow"
                aria-label="Explore our menu"
              >
                <BookOpen size={16} className="text-white/70" aria-hidden="true" />
                Explore Menu
              </Link>
            </div>

            {/* Social proof */}
            <div
              className="hero-animate flex flex-wrap items-center gap-5"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2.5" aria-label="Happy customer avatars" role="img">
                  {AVATAR_URLS.map((src, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-naija-dark overflow-hidden">
                      <Image
                        src={src}
                        alt={`${AVATAR_NAMES[i]}, satisfied customer`}
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-outfit font-600">Loved by 1,000+ customers</span>
                  <div
                    className="flex items-center gap-1"
                    role="img"
                    aria-label="Rating: 4.9 out of 5 stars, 250+ reviews"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="text-naija-amber fill-naija-amber" aria-hidden="true" />
                    ))}
                    <span className="text-white/50 text-[11px] ml-0.5">4.9 (250+ Reviews)</span>
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-2 bg-naija-card border border-naija-border rounded-full px-4 py-2"
                role="status"
                aria-label="Currently open — closes at 11:00 PM"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 open-pulse block" aria-hidden="true" />
                <div className="flex flex-col leading-none">
                  <span className="text-white text-xs font-syne font-700">Open Now</span>
                  <span className="text-white/40 text-[10px] font-outfit">Closes at 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Food Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div className="w-[420px] h-[420px] rounded-full bg-naija-amber/10 blur-3xl" />
            </div>
            <div className="absolute w-[480px] h-[480px] rounded-full border border-naija-amber/10" aria-hidden="true" />
            <div className="absolute w-[380px] h-[380px] rounded-full border border-naija-red/10" aria-hidden="true" />

            {/* Main food image */}
            <div className="relative z-10 hero-float">
              <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px]">
                <Image
                  src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=900&q=90"
                  alt="Naija Kitchen signature party jollof rice with grilled chicken"
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 460px"
                  className="object-cover rounded-full"
                  priority
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(ellipse at center, transparent 50%, #0A0A0A 85%)" }}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 100% Nigerian badge */}
            <div
              className="absolute top-8 right-4 lg:right-0 z-20 bg-naija-card border border-naija-border rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl"
              aria-label="100% Nigerian recipe"
            >
              <span className="text-naija-amber font-syne font-800 text-lg leading-none">100%</span>
              <span className="text-white/60 text-[8px] font-outfit uppercase tracking-wider text-center leading-tight mt-0.5">
                Nigerian<br />Recipe
              </span>
            </div>

            {/* Restaurant preview thumbnail */}
            <div className="absolute bottom-12 right-2 lg:right-0 z-20 w-24 h-24 rounded-2xl overflow-hidden border-2 border-naija-amber/30 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80"
                alt="Naija Kitchen restaurant interior — warm and welcoming dining space"
                width={96}
                height={96}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-10 lg:mt-14" aria-hidden="true">
          <span className="text-white/30 text-xs font-outfit tracking-wider uppercase">Scroll Down</span>
          <ChevronDown size={18} className="text-white/30 bounce-down" />
        </div>
      </div>
    </section>
  );
}
