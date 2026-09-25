import React, { useState } from 'react';
import { Instagram, MapPin, Check, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/servicesData';
import { Language, Translations } from '../data/translations';

import logo9596Nails from '../assets/images/logo_9596_nails_1790291551289.jpg';

interface FooterProps {
  lang: Language;
  t: Translations;
}

export const Footer: React.FC<FooterProps> = ({ lang, t }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-gradient-to-b from-[#FFF5F9] via-[#FFEDF4] to-[#FFE7F1] pt-16 pb-8 border-t border-[#F7DBE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#F7D4E3]">

          {/* Brand & Nav */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo9596Nails}
                alt="9596 Nails Logo"
                className="w-12 h-12 rounded-full border border-pink-300 shadow-xs"
              />

              <div>
                <h3 className="text-xl font-serif font-bold text-[#29181E]">
                  9596 Nails
                </h3>

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D14F84] font-semibold">
                  Nails &amp; Beauty Berlin
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#644B55] pt-2">
              <a href="#home" className="hover:text-[#D14F84] transition-colors py-1">
                {t.nav.home}
              </a>

              <a
                href="#our-work"
                className="hover:text-[#D14F84] transition-colors py-1 font-semibold text-[#D14F84]"
              >
                {t.nav.ourWork} ✨
              </a>

              <a href="#about" className="hover:text-[#D14F84] transition-colors py-1">
                {t.nav.about}
              </a>

              <a href="#services" className="hover:text-[#D14F84] transition-colors py-1">
                {t.nav.services}
              </a>

              <a href="#contact" className="hover:text-[#D14F84] transition-colors py-1">
                {t.nav.contact}
              </a>

              <a href="#faq" className="hover:text-[#D14F84] transition-colors py-1">
                {t.nav.faq}
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">

              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#F4CFDE] text-[#29181E] hover:text-white hover:bg-[#D14F84] flex items-center justify-center transition-all shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={SALON_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#F4CFDE] text-[#29181E] hover:text-white hover:bg-[#D14F84] flex items-center justify-center transition-all shadow-2xs"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.31-5.36V9.42a8.45 8.45 0 0 0 4.84 1.79v-3.37a5.18 5.18 0 0 1-3.76-2.35Z" />
                </svg>
              </a>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#F4CFDE] text-[#29181E] hover:text-white hover:bg-[#D14F84] flex items-center justify-center transition-all shadow-2xs"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>

            </div>
          </div>

          {/* Location & Opening summary */}
          <div className="md:col-span-4 space-y-2 text-xs text-[#6B505A]">

            <span className="text-xs uppercase tracking-[0.25em] text-[#D14F84] font-semibold block mb-4">
              9596 Nails Berlin
            </span>

            <p className="font-semibold text-sm text-[#29181E]">
              9596 Nails &amp; Beauty
            </p>

            <p>Frankfurter Allee / Boxhagener Kiez</p>
            <p>10247 Berlin, Deutschland</p>

            <p className="pt-2 text-[#906B7A]">
              Mo–Fr: 09:30 – 19:00 Uhr
            </p>

            <p className="text-[#906B7A]">
              Sa: 10:00 – 17:00 Uhr · So: Geschlossen
            </p>

          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">

            <span className="text-xs uppercase tracking-[0.2em] text-[#D14F84] font-semibold block mb-2">
              Subscribe to Receive Exclusive Offers &amp; Updates!
            </span>

            <p className="text-xs text-[#70525D] mb-4">
              {lang === 'de'
                ? 'Erhalte Neuigkeiten zu Nail Trends, Pflege-Tipps und exklusiven Specials.'
                : 'Get updates on latest nail art drops, seasonal trends, and secret offers.'}
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 bg-white border border-[#F7D1E1] rounded-xl text-xs text-[#2A181F] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/50"
                />

                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gradient-to-r from-[#FCAECB] to-[#EE82AB] text-[#29141D] text-xs font-bold rounded-xl hover:brightness-105 transition-all shrink-0 cursor-pointer shadow-md"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs font-medium text-[#1E7138] bg-[#EBF7EE] p-3 rounded-xl border border-[#CCE8D4]">

                <Check className="w-4 h-4" />

                <span>
                  {lang === 'de'
                    ? 'Vielen Dank für deine Anmeldung!'
                    : 'Thank you for subscribing!'}
                </span>

              </div>
            )}

          </div>
        </div>

        {/* Big Editorial Logo Display */}
        <div className="py-12 md:py-16 text-center select-none overflow-hidden">
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-serif text-[#D84A86]/10 tracking-tight uppercase whitespace-nowrap">
            9596 Nails
          </h2>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#F7D4E3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C6B79]">

          <p>
            © {new Date().getFullYear()} 9596 Nails &amp; Beauty Berlin. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">

            <a href="#" className="hover:text-[#29181E] transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#29181E] transition-colors">
              Terms of Services
            </a>

            <a href="#" className="hover:text-[#29181E] transition-colors">
              Impressum
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
