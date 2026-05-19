"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

type Event = {
  date: string;
  month: string;
  title: string;
  time: string;
  location: string;
  tag: string;
  tagColor: string;
  img: string;
};

const EVENTS: Event[] = [
  {
    date: "21",
    month: "Jun",
    title: "Sunday Jollof Brunch",
    time: "11:00 AM – 3:00 PM",
    location: "Main Dining Hall",
    tag: "Weekly",
    tagColor: "bg-green-500/15 text-green-400 border-green-500/20",
    img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=400&q=80",
  },
  {
    date: "28",
    month: "Jun",
    title: "Suya & Cocktails Night",
    time: "7:00 PM – 11:00 PM",
    location: "Outdoor Terrace",
    tag: "Special",
    tagColor: "bg-naija-red/15 text-naija-red border-naija-red/20",
    img: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=400&q=80",
  },
  {
    date: "05",
    month: "Jul",
    title: "Nigerian Chef's Table",
    time: "6:00 PM – 10:00 PM",
    location: "Private Dining Room",
    tag: "Exclusive",
    tagColor: "bg-naija-amber/15 text-naija-amber border-naija-amber/20",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".ev-animate")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, i * 120);
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
    <section id="events" className="relative bg-naija-card py-20 lg:py-28 overflow-hidden">
      <div className="glow-blob w-[350px] h-[350px] bg-naija-amber/4 top-0 right-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="ev-animate flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-naija-amber" />
              <span className="text-naija-amber text-xs font-syne font-700 tracking-[0.2em] uppercase">
                Upcoming Events
              </span>
            </div>
            <h2 className="font-syne font-800 text-4xl sm:text-5xl text-white tracking-tight leading-tight">
              Good Vibes &amp;
              <br />
              <span className="text-gradient-amber">Great Food</span>
            </h2>
          </div>
          <Link
            href="#events"
            className="self-start sm:self-end inline-flex items-center gap-2 border border-naija-border hover:border-white/30 text-white font-syne font-700 text-sm px-5 py-2.5 rounded-lg btn-outline-glow"
          >
            All Events
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EVENTS.map((ev, i) => (
            <div
              key={i}
              className="ev-animate card-hover bg-naija-dark border border-naija-border rounded-2xl overflow-hidden group"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={ev.img}
                  alt={ev.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-naija-dark/80 to-transparent" />

                {/* Date badge */}
                <div className="absolute top-4 left-4 bg-naija-dark/80 backdrop-blur-sm border border-naija-border rounded-xl px-3 py-2 text-center min-w-[52px]">
                  <p className="font-syne font-800 text-naija-red text-xl leading-none">
                    {ev.date}
                  </p>
                  <p className="text-white/60 text-[10px] font-outfit uppercase tracking-wider mt-0.5">
                    {ev.month}
                  </p>
                </div>

                {/* Tag */}
                <span
                  className={`absolute top-4 right-4 text-[10px] font-syne font-700 uppercase tracking-wider px-2.5 py-1 rounded-full border ${ev.tagColor}`}
                >
                  {ev.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="font-syne font-700 text-white text-base group-hover:text-naija-amber transition-colors duration-200">
                  {ev.title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-white/45 text-xs font-outfit">
                    <Clock size={12} className="shrink-0" />
                    {ev.time}
                  </div>
                  <div className="flex items-center gap-2 text-white/45 text-xs font-outfit">
                    <MapPin size={12} className="shrink-0" />
                    {ev.location}
                  </div>
                </div>

                <Link
                  href="#reservation"
                  className="mt-1 flex items-center gap-1.5 text-naija-red text-xs font-syne font-700 hover:text-naija-amber transition-colors duration-200"
                >
                  Reserve Your Spot
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
