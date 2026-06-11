"use client";

import { useEffect, useRef, useState, useId } from "react";
import { Clock, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const INFO_ITEMS = [
  { icon: Clock,  iconColor: "text-green-400",    iconBg: "bg-green-500/15",    title: "Opening Hours", lines: ["Mon – Sun", "10:00 AM – 11:00 PM", "Open Everyday"] },
  { icon: MapPin, iconColor: "text-naija-red",    iconBg: "bg-naija-red/15",    title: "Our Location",  lines: ["12, Admiralty Way,", "Lekki Phase 1,", "Lagos, Nigeria."] },
  { icon: Phone,  iconColor: "text-naija-amber",  iconBg: "bg-naija-amber/15",  title: "Call Us",       lines: ["+234 901 234 5678", "+234 803 456 7890"] },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", color: "bg-pink-600 hover:bg-pink-500",   icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { label: "Facebook",  href: "#", color: "bg-blue-600 hover:bg-blue-500",    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: "TikTok",    href: "#", color: "bg-black hover:bg-naija-card-2 border border-naija-border", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> },
  { label: "WhatsApp",  href: "#", color: "bg-green-600 hover:bg-green-500",  icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
];

export default function Reservation() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "2" });
  const uid = useId();

  const nameId   = `${uid}-name`;
  const phoneId  = `${uid}-phone`;
  const dateId   = `${uid}-date`;
  const guestsId = `${uid}-guests`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".res-animate").forEach((el, i) => {
              setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, mq.matches ? 0 : i * 100);
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
    <section
      id="reservation"
      aria-labelledby="reservation-heading"
      className="relative overflow-hidden bg-naija-dark py-20 lg:py-28"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=40')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-naija-dark/90" aria-hidden="true" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <div className="res-animate flex items-center gap-2" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
              <span className="w-6 h-[2px] bg-naija-red" aria-hidden="true" />
              <span className="text-naija-red text-xs font-syne font-700 tracking-[0.2em] uppercase">Reservation</span>
            </div>

            <div className="res-animate" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
              <h2 id="reservation-heading" className="font-syne font-800 text-4xl sm:text-5xl text-white leading-tight tracking-tight">
                Ready to Dine
                <br />
                <span className="text-gradient-amber">With Us?</span>
              </h2>
            </div>

            <p className="res-animate text-white/55 font-outfit text-base leading-relaxed max-w-sm" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
              Book a table and enjoy an unforgettable Nigerian dining experience crafted for every occasion.
            </p>

            <address className="res-animate not-italic grid gap-5" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
              {INFO_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`shrink-0 w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center`} aria-hidden="true">
                      <Icon size={18} className={item.iconColor} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-syne font-700 text-white text-sm mb-1">{item.title}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-white/50 text-xs font-outfit leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </address>

            <div className="res-animate flex flex-col gap-3" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
              <p className="font-syne font-700 text-white text-sm">Follow Us</p>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={`Follow Naija Kitchen on ${s.label}`}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 ${s.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="res-animate" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
            <div className="bg-naija-card border border-naija-border rounded-3xl p-7 sm:p-8">
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center gap-4 py-10 text-center"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <div className="w-16 h-16 bg-green-500/15 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-syne font-700 text-white text-xl mb-1">Booking Confirmed!</h3>
                    <p className="text-white/50 font-outfit text-sm">We&apos;ll send you a confirmation shortly. See you soon!</p>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="font-syne font-700 text-white text-xl mb-6" id={`${uid}-form-title`}>
                    Book Your Table
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                    aria-labelledby={`${uid}-form-title`}
                    noValidate
                  >
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor={nameId} className="text-white/60 text-xs font-outfit font-500">
                        Full Name <span className="text-naija-red" aria-hidden="true">*</span>
                      </label>
                      <input
                        id={nameId}
                        type="text"
                        required
                        autoComplete="name"
                        aria-required="true"
                        placeholder="e.g. Emeka Obi"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-naija-card-2 border border-naija-border rounded-xl px-4 py-3 text-white text-sm font-outfit placeholder-white/25 focus:outline-none focus:border-naija-red/50 transition-colors duration-200"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor={phoneId} className="text-white/60 text-xs font-outfit font-500">
                        Phone Number <span className="text-naija-red" aria-hidden="true">*</span>
                      </label>
                      <input
                        id={phoneId}
                        type="tel"
                        required
                        autoComplete="tel"
                        aria-required="true"
                        placeholder="+234 800 000 0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-naija-card-2 border border-naija-border rounded-xl px-4 py-3 text-white text-sm font-outfit placeholder-white/25 focus:outline-none focus:border-naija-red/50 transition-colors duration-200"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={dateId} className="text-white/60 text-xs font-outfit font-500">
                          Date <span className="text-naija-red" aria-hidden="true">*</span>
                        </label>
                        <input
                          id={dateId}
                          type="date"
                          required
                          aria-required="true"
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="w-full bg-naija-card-2 border border-naija-border rounded-xl px-4 py-3 text-white text-sm font-outfit focus:outline-none focus:border-naija-red/50 transition-colors duration-200 [color-scheme:dark]"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor={guestsId} className="text-white/60 text-xs font-outfit font-500">Guests</label>
                        <select
                          id={guestsId}
                          value={form.guests}
                          onChange={(e) => setForm({ ...form, guests: e.target.value })}
                          className="w-full bg-naija-card-2 border border-naija-border rounded-xl px-4 py-3 text-white text-sm font-outfit focus:outline-none focus:border-naija-red/50 transition-colors duration-200"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                            <option key={n} value={String(n)}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                          ))}
                          <option value="10+">10+ Guests</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full flex items-center justify-center gap-2 bg-naija-red hover:bg-naija-red-hover text-white font-syne font-700 text-sm py-3.5 rounded-xl btn-red-glow transition-all duration-200"
                      aria-label="Submit table booking request"
                    >
                      Book Your Table
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>

                    <p className="text-white/30 text-xs font-outfit text-center">
                      Free cancellation up to 2 hours before your reservation.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
