"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "5+", label: "Years of Experience" },
  { value: "50+", label: "Delicious Dishes" },
  { value: "10K+", label: "Happy Customers" },
  { value: "3", label: "Locations in Nigeria" },
];

export default function OurStory() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".story-animate")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0) translateX(0)";
                }, i * 120);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-naija-dark py-20 lg:py-28">
      {/* Ambient glow */}
      <div className="glow-blob w-[400px] h-[400px] bg-naija-red/6 bottom-0 left-0" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
      >
        {/* LEFT — Text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div
            className="story-animate inline-flex items-center gap-2 self-start"
            style={{
              opacity: 0,
              transform: "translateX(-20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <span className="w-6 h-[2px] bg-naija-red rounded-full" />
            <span className="text-naija-red text-xs font-syne font-700 tracking-[0.2em] uppercase">
              Our Story
            </span>
          </div>

          {/* Heading */}
          <div
            className="story-animate"
            style={{
              opacity: 0,
              transform: "translateX(-20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <h2 className="font-syne font-800 text-4xl sm:text-5xl leading-tight tracking-tight text-white">
              Experience Nigeria
              <br />
              <span className="text-gradient-amber">in Every Bite</span>
            </h2>
            {/* Squiggly underline */}
            <div className="mt-3 flex items-center gap-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-1 bg-naija-amber/40 rounded-full"
                  style={{ transform: `rotate(${i % 2 === 0 ? 8 : -8}deg)` }}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <p
            className="story-animate text-white/55 font-outfit text-base leading-relaxed max-w-md"
            style={{
              opacity: 0,
              transform: "translateX(-20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            Naija Kitchen is more than a restaurant — it&apos;s a celebration
            of our culture, our people and our incredible flavors. Born in
            Lagos, grown across Nigeria, we bring the heart of home cooking to
            every table.
          </p>

          {/* Stats Row */}
          <div
            className="story-animate grid grid-cols-4 gap-3 mt-2"
            style={{
              opacity: 0,
              transform: "translateX(-20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-syne font-800 text-naija-red text-2xl sm:text-3xl leading-none">
                  {stat.value}
                </span>
                <span className="text-white/45 text-[10px] font-outfit leading-tight mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="story-animate"
            style={{
              opacity: 0,
              transform: "translateX(-20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <Link
              href="#about"
              className="inline-flex items-center gap-2 bg-naija-red hover:bg-naija-red-hover text-white font-syne font-700 text-sm px-6 py-3 rounded-lg btn-red-glow"
            >
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT — Image Collage */}
        <div
          className="story-animate relative h-[480px] lg:h-[560px]"
          style={{
            opacity: 0,
            transform: "translateX(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Main large image */}
          <div className="absolute inset-0 w-[75%] h-[80%] rounded-2xl overflow-hidden border border-naija-border shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=700&q=85"
              alt="Chef grilling suya skewers"
              fill
              className="object-cover"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-naija-dark/30 via-transparent to-transparent" />
          </div>

          {/* Top-right small image */}
          <div className="absolute top-0 right-0 w-[40%] h-[42%] rounded-2xl overflow-hidden border border-naija-border shadow-xl shadow-black/40">
            <Image
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80"
              alt="Nigerian pepper soup"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom-right small image */}
          <div className="absolute bottom-0 right-0 w-[40%] h-[40%] rounded-2xl overflow-hidden border border-naija-border shadow-xl shadow-black/40">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80"
              alt="Naija Kitchen dining room"
              fill
              className="object-cover"
            />
          </div>

          {/* Dot pattern decoration */}
          <div
            className="absolute -top-4 -right-4 w-24 h-24 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle, #E8920A 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
            }}
          />

          {/* Bottom-left dot decoration */}
          <div
            className="absolute -bottom-4 -left-4 w-20 h-20 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, #C8221A 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
            }}
          />

          {/* Zigzag accent line */}
          <svg
            className="absolute bottom-12 left-[70%] opacity-30"
            width="60"
            height="16"
            viewBox="0 0 60 16"
          >
            <polyline
              points="0,8 10,2 20,14 30,2 40,14 50,2 60,8"
              fill="none"
              stroke="#E8920A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
