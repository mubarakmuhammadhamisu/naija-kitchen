"use client";

import { useEffect, useRef } from "react";
import { Utensils, Leaf, Users, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Utensils,
    iconBg: "bg-naija-red/15",
    iconColor: "text-naija-red",
    title: "Authentic Recipes",
    desc: "Traditional Nigerian recipes passed down through generations.",
  },
  {
    icon: Leaf,
    iconBg: "bg-green-500/15",
    iconColor: "text-green-400",
    title: "Fresh Ingredients",
    desc: "Locally sourced ingredients, prepared fresh every single day.",
  },
  {
    icon: Users,
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    title: "Great Atmosphere",
    desc: "Relax in our warm, modern space designed for good food & vibes.",
  },
  {
    icon: Zap,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    title: "Fast & Reliable",
    desc: "Quick service, easy reservations and reliable experience.",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>(".feat-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-naija-card border-y border-naija-border">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
      >
        {FEATURES.map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.title}
              className="feat-card group flex items-start gap-4 px-6 py-7 bg-naija-card hover:bg-naija-card-2 transition-colors duration-300 cursor-default"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease",
              }}
            >
              <div
                className={`shrink-0 w-11 h-11 ${feat.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={20} className={feat.iconColor} />
              </div>
              <div>
                <h3 className="font-syne font-700 text-white text-sm mb-1">
                  {feat.title}
                </h3>
                <p className="text-white/50 text-xs font-outfit leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
