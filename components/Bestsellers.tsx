"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingCart, ExternalLink, Star } from "lucide-react";

type Dish = { name: string; desc: string; price: string; tag?: string; rating: number; img: string; };

const DISHES: Dish[] = [
  { name: "Party Jollof",          desc: "Smoky party-style jollof rice with grilled chicken.",       price: "₦4,500", tag: "Best Seller",  rating: 4.9, img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=500&q=80" },
  { name: "Suya Platter",          desc: "Spicy grilled beef suya with onions & sauce.",              price: "₦3,800", tag: "Popular",      rating: 4.8, img: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=500&q=80" },
  { name: "Ofada Rice & Ayamase",  desc: "Local brown rice with designer stew.",                     price: "₦4,200", tag: "Chef's Pick",  rating: 4.9, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80" },
  { name: "Pepper Soup",           desc: "Spicy goat meat pepper soup to warm your soul.",           price: "₦3,200",                     rating: 4.7, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80" },
  { name: "Efo Riro",              desc: "Sautéed spinach with assorted meat/fish.",                 price: "₦4,000",                     rating: 4.8, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },
  { name: "Egusi Soup & Eba",      desc: "Rich melon seed soup with golden eba.",                    price: "₦3,600", tag: "Traditional", rating: 4.9, img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=80" },
];

export default function Bestsellers() {
  const scrollRef  = useRef<HTMLListElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".bs-animate").forEach((el, i) => {
              setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, mq.matches ? 0 : i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      aria-labelledby="bestsellers-heading"
      className="relative bg-naija-dark py-20 lg:py-28 overflow-hidden"
    >
      <div className="glow-blob w-[400px] h-[400px] bg-naija-amber/5 top-0 right-0" aria-hidden="true" />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div
            className="bs-animate flex flex-col gap-3"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-naija-amber rounded-full" aria-hidden="true" />
              <span className="text-naija-amber text-xs font-syne font-700 tracking-[0.2em] uppercase">Chef&apos;s Specials</span>
            </div>
            <h2 id="bestsellers-heading" className="font-syne font-800 text-4xl sm:text-5xl text-white leading-tight tracking-tight">
              Taste Our Bestsellers
            </h2>
            <div className="flex items-center gap-1" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-1 bg-naija-red/50 rounded-full" style={{ transform: `rotate(${i % 2 === 0 ? 8 : -8}deg)` }} />
              ))}
            </div>
          </div>

          <div
            className="bs-animate flex items-center gap-3"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
            role="group"
            aria-label="Scroll dish carousel"
          >
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border border-naija-border flex items-center justify-center text-white/60 hover:text-white hover:border-naija-red/50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll dishes left"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border border-naija-border flex items-center justify-center text-white/60 hover:text-white hover:border-naija-red/50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll dishes right"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Scrollable list */}
        <ul
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto carousel-scroll pb-4 list-none"
          aria-label="Bestselling dishes carousel"
        >
          {DISHES.map((dish, i) => (
            <li key={dish.name} className="shrink-0 w-[280px]">
              <DishCard dish={dish} index={i} />
            </li>
          ))}
        </ul>

        <div
          className="bs-animate mt-10 flex justify-center"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <Link
            href="#menu"
            className="inline-flex items-center gap-2 border border-naija-border hover:border-white/30 text-white font-syne font-700 text-sm px-8 py-3.5 rounded-lg btn-outline-glow"
            aria-label="View the full Naija Kitchen menu"
          >
            <ExternalLink size={15} aria-hidden="true" />
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

function DishCard({ dish, index }: { dish: Dish; index: number }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article
      className="dish-card group w-full bg-naija-card border border-naija-border rounded-2xl overflow-hidden card-hover"
      style={{ animationDelay: `${index * 80}ms` }}
      aria-label={`${dish.name} — ${dish.price}`}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={dish.img}
          alt={`${dish.name}: ${dish.desc}`}
          fill
          sizes="280px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-naija-card via-transparent to-transparent" aria-hidden="true" />

        {dish.tag && (
          <span className="absolute top-3 left-3 bg-naija-red text-white text-[10px] font-syne font-700 uppercase tracking-wider px-2.5 py-1 rounded-full">
            {dish.tag}
          </span>
        )}

        <div className="dish-overlay absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 flex items-center justify-center">
          <button
            type="button"
            onClick={handleAdd}
            className="bg-white text-naija-dark font-syne font-700 text-xs px-4 py-2 rounded-full flex items-center gap-2 hover:bg-naija-amber transition-colors duration-200"
            aria-label={added ? `${dish.name} added to cart` : `Quick add ${dish.name} to cart`}
            aria-live="polite"
          >
            <ShoppingCart size={13} aria-hidden="true" />
            {added ? "Added!" : "Quick Add"}
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-syne font-700 text-white text-base">{dish.name}</h3>
          <p className="text-white/50 text-xs font-outfit mt-1 leading-relaxed">{dish.desc}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-syne font-800 text-naija-amber text-lg">{dish.price}</span>
          <div
            className="flex items-center gap-1"
            role="img"
            aria-label={`Rating: ${dish.rating} out of 5`}
          >
            <Star size={12} className="text-naija-amber fill-naija-amber" aria-hidden="true" />
            <span className="text-white/50 text-xs font-outfit">{dish.rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
