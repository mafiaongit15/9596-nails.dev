import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ChevronDown, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/hero_hand_purple_glitter_1790292686241.jpg';
import { SALON_INFO } from '../data/servicesData';
import { Language, Translations } from '../data/translations';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
  lang: Language;
  t: Translations;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  lang,
}) => {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    lang === 'de'
      ? 'Hallo 9596 Nails Team! Ich möchte gerne einen Termin vereinbaren.'
      : 'Hello 9596 Nails Team! I would like to book an appointment.'
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-center bg-[#FFF5F8] overflow-hidden pt-16 sm:pt-20 lg:pt-24"
    >
      {/* Soft atmospheric radial glows */}
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-[#FFE0EE]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-[#FFEBF4]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Full-Bleed Editorial Hand Art */}
      <div className="absolute top-0 right-0 h-full w-[65%] sm:w-[52%] lg:w-[48%] pointer-events-none select-none overflow-hidden z-0">
        <img
          src={heroImage}
          alt="Luxury Nail and Beauty Treatments – 9596 Nails Berlin"
          className="w-full h-full object-cover object-top sm:object-right-top opacity-30 sm:opacity-85 lg:opacity-100 transition-opacity duration-700"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 45%, black 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 45%, black 100%)',
          }}
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* Soft atmospheric gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF5F8] via-[#FFF5F8]/50 to-transparent sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF5F8] via-transparent to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 py-10 sm:py-14 lg:py-20">
        <div className="max-w-lg lg:max-w-xl flex flex-col items-start">
          {/* Studio Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#F4CFDE] text-[#C95386] text-[10px] sm:text-xs font-serif font-semibold uppercase tracking-[0.2em] mb-4 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#E778A4]" />
            <span>9596 Nails · Berlin Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-normal text-[#1A1215] leading-[1.1] sm:leading-[1.08] tracking-tight uppercase mb-3">
            INDULGE IN <br />
            LUXURY NAIL AND WAX <br />
            TREATMENTS
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base font-serif italic text-[#4A323A] mb-8">
            @ 9596 Nails Berlin.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onExploreServices}
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#E778A4] hover:bg-[#D96794] active:scale-95 text-white font-serif font-semibold text-xs tracking-[0.2em] uppercase rounded-xs shadow-xs hover:shadow-md transition-all cursor-pointer select-none"
            >
              VIEW SERVICES
            </button>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xs bg-white/85 hover:bg-white border border-[#F4CFDE] text-[#693D4E] hover:text-[#1A1215] text-xs font-serif font-medium tracking-wider uppercase transition-all shadow-2xs cursor-pointer"
            >
              <span>Vorteile</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#E778A4] animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Badge */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-30">
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs font-semibold shadow-md shadow-emerald-500/20 transition-all cursor-pointer select-none"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">Chat with us on WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </motion.a>
      </div>
    </section>
  );
};
