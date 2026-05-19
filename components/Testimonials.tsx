"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

type Review = {
  name: string;
  role: string;
  avatar: string;
  review: string;
  rating: number;
  dish: string;
};

const REVIEWS: Review[] = [
  {
    name: "Adaeze Okonkwo",
    role: "Food Blogger, Lagos",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80",
    review:
      "The Party Jollof here is absolutely divine — it has that deep smoky flavour you only get at real Naija weddings. Naija Kitchen has nailed it completely. I come back every single week!",
    rating: 5,
    dish: "Party Jollof",
  },
  {
    name: "Emeka Obi",
    role: "Entrepreneur, Abuja",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    review:
      "Best suya in the city, no cap. The marinade is perfect and the atmosphere is just right for business meetings or family dinners. Outstanding service every time I visit.",
    rating: 5,
    dish: "Suya Platter",
  },
  {
    name: "Chioma Eze",
    role: "Nurse, Port Harcourt",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=100&h=100&q=80",
    review:
      "I was craving proper Ofada rice and Ayamase and this place delivered perfectly. The flavors are so authentic — tastes exactly like what my grandmother used to make.",
    rating: 5,
    dish: "Ofada Rice & Ayamase",
  },
  {
    name: "Tunde Adeyemi",
    role: "Software Engineer, Lagos",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    review:
      "The pepper soup warms the soul. The goat meat is incredibly tender and the broth is rich with spice. This is by far the best Nigerian restaurant I have been to.",
    rating: 5,
    dish: "Pepper Soup",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setActive((a) => (a + 1) % REVIEWS.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".testi-animate")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, i * 100);
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

  const review = REVIEWS[active];

  return (
    <section className="relative bg-naija-dark py-20 lg:py-28 overflow-hidden">
      <div className="glow-blob w-[400px] h-[400px] bg-naija-red/5 bottom-0 right-0" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="testi-animate text-center mb-14"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star size={16} className="text-naija-amber fill-naija-amber" />
            <span className="text-naija-amber text-xs font-syne font-700 tracking-[0.2em] uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="font-syne font-800 text-4xl sm:text-5xl text-white tracking-tight">
            What Our Guests Say
          </h2>
          <p className="text-white/40 font-outfit text-base mt-3">
            Real reviews from real Naija food lovers
          </p>
        </div>

        {/* Main review card */}
        <div
          className="testi-animate"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="testimonial-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={80} className="text-naija-amber" />
            </div>

            {/* Dish tag */}
            <span className="inline-block bg-naija-red/15 border border-naija-red/20 text-naija-red text-xs font-syne font-700 uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              Ordered: {review.dish}
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-naija-amber fill-naija-amber"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-outfit text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl">
              &ldquo;{review.review}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-naija-amber/30 shrink-0">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-syne font-700 text-white">{review.name}</p>
                <p className="text-white/45 text-sm font-outfit">{review.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div
          className="testi-animate mt-8 flex items-center justify-between"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Dots */}
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2 bg-naija-red"
                    : "w-2 h-2 bg-naija-border hover:bg-naija-subtle"
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-naija-border flex items-center justify-center text-white/60 hover:text-white hover:border-naija-red/50 transition-all duration-200"
              aria-label="Previous review"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-naija-red flex items-center justify-center text-white hover:bg-naija-red-hover transition-colors duration-200"
              aria-label="Next review"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Mini cards row - other reviews */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {REVIEWS.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                i === active
                  ? "border-naija-red/50 bg-naija-red/8"
                  : "border-naija-border bg-naija-card hover:border-naija-border/70"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    width={28}
                    height={28}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-white text-xs font-syne font-700 truncate">
                  {r.name.split(" ")[0]}
                </span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={9}
                    className="text-naija-amber fill-naija-amber"
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
