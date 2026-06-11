import Link from "next/link";
import { Flame, ArrowRight, Heart } from "lucide-react";

const FOOTER_LINKS = {
  Explore:  ["Home", "About Us", "Menu", "Gallery", "Events", "Blog"],
  Services: ["Dine In", "Takeaway", "Catering", "Private Dining", "Corporate Events"],
  Legal:    ["Privacy Policy", "Terms of Use", "Cookie Policy", "Refund Policy"],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      role="contentinfo"
      aria-label="Site footer"
      className="bg-naija-card border-t border-naija-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link
              href="#home"
              className="flex items-center gap-2 group self-start"
              aria-label="Naija Kitchen — back to top"
            >
              <div className="w-9 h-9 bg-naija-red rounded-lg flex items-center justify-center">
                <Flame size={18} className="text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-syne font-800 text-xl text-white">Naija</span>
                <span className="text-[10px] font-outfit font-600 text-naija-amber tracking-[0.2em] uppercase -mt-0.5">Kitchen</span>
              </div>
            </Link>

            <p className="text-white/45 font-outfit text-sm leading-relaxed max-w-xs">
              Authentic Nigerian cuisine crafted with love, tradition and the finest ingredients.
              From smoky suya to rich jollof — every dish tells a story.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-syne font-700 text-white text-sm" id="newsletter-label">
                Get Weekly Specials
              </p>
              <div className="flex gap-2" role="group" aria-labelledby="newsletter-label">
                <label htmlFor="newsletter-email" className="sr-only">Email address for weekly specials</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  className="flex-1 min-w-0 bg-naija-dark border border-naija-border rounded-xl px-4 py-2.5 text-white text-xs font-outfit placeholder-white/25 focus:outline-none focus:border-naija-red/40 transition-colors duration-200"
                />
                <button
                  type="button"
                  aria-label="Subscribe to weekly specials newsletter"
                  className="shrink-0 w-10 h-10 bg-naija-red hover:bg-naija-red-hover rounded-xl flex items-center justify-center transition-colors duration-200"
                >
                  <ArrowRight size={15} className="text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <nav key={title} aria-label={`${title} links`}>
              <h2 className="font-syne font-700 text-white text-sm mb-4">{title}</h2>
              <ul className="flex flex-col gap-2.5 list-none">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/45 hover:text-naija-amber text-sm font-outfit transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-naija-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs font-outfit text-center sm:text-left">
            © {new Date().getFullYear()} Naija Kitchen. All rights reserved.
          </p>
          <p className="text-white/35 text-xs font-outfit flex items-center gap-1.5">
            Made with{" "}
            <Heart size={11} className="text-naija-red fill-naija-red" aria-hidden="true" />
            <span className="sr-only">love</span>
            {" "}in Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
