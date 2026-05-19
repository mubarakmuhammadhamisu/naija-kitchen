"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Camera, ZoomIn } from "lucide-react";

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=600&q=80",
    alt: "Party Jollof Rice",
    label: "Party Jollof",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=500&q=80",
    alt: "Suya Platter",
    label: "Suya Night",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
    alt: "Restaurant Interior",
    label: "Our Space",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80",
    alt: "Ofada Rice",
    label: "Ofada Special",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    alt: "Pepper Soup",
    label: "Pepper Soup",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80",
    alt: "Efo Riro",
    label: "Efo Riro",
    span: "",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".gal-item")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "scale(1)";
                }, i * 80);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="relative bg-naija-card py-20 lg:py-28 overflow-hidden">
      <div className="glow-blob w-[350px] h-[350px] bg-naija-red/5 top-0 left-0" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Camera size={16} className="text-naija-amber" />
            <span className="text-naija-amber text-xs font-syne font-700 tracking-[0.2em] uppercase">
              Food Gallery
            </span>
          </div>
          <h2 className="font-syne font-800 text-4xl sm:text-5xl text-white tracking-tight">
            Feast with Your Eyes
          </h2>
          <p className="text-white/45 font-outfit text-base max-w-md">
            Every dish tells a story. Explore the colors, textures, and soul of
            Naija Kitchen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`gal-item gallery-item relative rounded-2xl overflow-hidden cursor-pointer group border border-naija-border ${item.span}`}
              style={{
                opacity: 0,
                transform: "scale(0.95)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />

              {/* Label overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-white font-syne font-700 text-sm">
                  {item.label}
                </span>
                <ZoomIn size={18} className="text-white/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
