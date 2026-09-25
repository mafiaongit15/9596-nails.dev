import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, Translations } from '../data/translations';

interface WhyChooseUsProps {
  lang: Language;
  t: Translations;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const cards = [
    {
      id: 0,
      title: 'LUXURY TREATMENTS',
      descriptionDe:
        'Erlebe unvergleichlichen Luxus mit unseren Behandlungen, einschließlich Paraffinwachs, Öltherapien und erstklassiger Nagelpflege.',
      descriptionEn:
        'Experience unparalleled luxury with our treatments, including paraffin wax, oil therapies, and premium nail care.',
      icon: (
        <svg
          className="w-10 h-10 text-[#E0729F]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="14" y="18" width="20" height="24" rx="4" fill="#FFEBF4" />
          <path d="M20 18V8h8v10" />
          <path d="M18 8h12" />
          <path d="M28 24l8-8" stroke="#D14F84" strokeWidth="2.5" />
          <path d="M38 14l3-3" stroke="#D14F84" strokeWidth="2.5" />
          <circle cx="24" cy="30" r="3" fill="#E0729F" />
        </svg>
      ),
    },
    {
      id: 1,
      title: 'PREMIUM PRODUCTS',
      descriptionDe:
        'Wir verwenden ausschließlich erstklassige Produkte, um außergewöhnliche Ergebnisse und langanhaltende Schönheit zu garantieren.',
      descriptionEn:
        'We use only premium products to ensure exceptional results, offering lasting beauty and unmatched care every time.',
      icon: (
        <svg
          className="w-10 h-10 text-[#E0729F]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="24" cy="28" r="14" fill="#FFEBF4" />
          <path d="M20 14h8v4h-8z" fill="#FFEBF4" />
          <path d="M28 16c4 0 7-3 7-6s-3-5-7-5" />
          <circle cx="34" cy="8" r="3" fill="#E0729F" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'CERTIFIED PROFESSIONALS',
      descriptionDe:
        'Unsere zertifizierten Expertinnen gewährleisten meisterhafte Präzision, Hygiene und hervorragende Ergebnisse bei jedem Service.',
      descriptionEn:
        'Our certified professionals ensure expert care, precision, and exceptional results for all nail and wax services.',
      icon: (
        <svg
          className="w-10 h-10 text-[#E0729F]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="8" y="16" width="32" height="24" rx="3" fill="#FFEBF4" />
          <path d="M18 16V10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
          <path d="M24 22v12" stroke="#D14F84" strokeWidth="2.5" />
          <path d="M18 28h12" stroke="#D14F84" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'RELAXING ATMOSPHERE',
      descriptionDe:
        'Entspanne in unserem harmonischen Ambiente, das geschaffen wurde, um dir Ruhe und Wohlbefinden bei deinen Schönheitsbehandlungen zu schenken.',
      descriptionEn:
        'Unwind in our relaxing atmosphere, designed to provide comfort and tranquility during your beauty treatments.',
      icon: (
        <svg
          className="w-10 h-10 text-[#E0729F]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="24" cy="18" rx="10" ry="10" fill="#FFEBF4" />
          <path d="M14 18h20" stroke="#D14F84" />
          <path d="M12 36h24" />
          <path d="M16 36l-2 6" />
          <path d="M32 36l2 6" />
          <path d="M24 28v8" />
        </svg>
      ),
    },
  ];

  const handlePrevCard = () => {
    setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDFE] to-[#FFF7FA] border-b border-[#F7DBE6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header with Left-Aligned Title and Phone Arrow Controls */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium tracking-tight text-[#22161A] uppercase">
            WHY CHOOSE US?
          </h2>

          {/* Mobile Arrow Navigation Controls (< and >) */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handlePrevCard}
              className="w-9 h-9 rounded-full bg-white border border-[#F4CFDE] text-[#8C3A5E] hover:bg-[#FFEBF4] flex items-center justify-center transition-all shadow-2xs active:scale-90"
              aria-label="Vorherige Karte"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-serif font-bold text-[#8C3A5E] px-1">
              0{activeCard + 1}/0{cards.length}
            </span>
            <button
              onClick={handleNextCard}
              className="w-9 h-9 rounded-full bg-white border border-[#F4CFDE] text-[#8C3A5E] hover:bg-[#FFEBF4] flex items-center justify-center transition-all shadow-2xs active:scale-90"
              aria-label="Nächste Karte"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 1. Mobile Phone View: Clean, Uncrowded 1-Card Slider with Arrows (hidden on sm+) */}
        <div className="block sm:hidden">
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              {cards
                .filter((c) => c.id === activeCard)
                .map((card) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-[#FFF5F9] to-[#FFEBF4] border-2 border-[#FCAECB] shadow-md shadow-[#FCE0ED]/50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>{card.icon}</div>
                      <span className="text-[11px] font-serif font-bold tracking-widest text-[#B83E71] bg-white/70 px-2.5 py-0.5 rounded-full border border-[#F7DBE6]">
                        0{card.id + 1}
                      </span>
                    </div>

                    <h3 className="text-sm font-serif font-bold tracking-wider text-[#22161A] mb-2 uppercase">
                      {card.title}
                    </h3>

                    <p className="text-xs text-[#694F59] leading-relaxed">
                      {lang === 'de' ? card.descriptionDe : card.descriptionEn}
                    </p>

                    <div className="mt-4 h-0.5 w-12 bg-[#D14F84]" />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Dots Indicator for phone */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {cards.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCard(c.id)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeCard === c.id ? 'w-6 bg-[#D14F84]' : 'w-2 bg-[#F3CDDD]'
                }`}
                aria-label={`Gehe zu Karte ${c.id + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 2. Desktop & Tablet View: 4-Cards in Horizontal Strip (hidden on mobile) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => {
            const isSelected = activeCard === card.id;
            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#FFF5F9] to-[#FFEBF4] border-2 border-[#FCAECB] shadow-md shadow-[#FCE0ED]/50 ring-2 ring-[#FFD9E8]/40'
                    : 'bg-white/85 hover:bg-white border border-[#F5D8E4] shadow-2xs hover:border-[#F4BFD4]'
                }`}
              >
                <div>
                  <div className="mb-5 flex items-center justify-start">{card.icon}</div>

                  <h3 className="text-sm font-serif font-bold tracking-wider text-[#22161A] mb-3 uppercase">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#694F59] leading-relaxed">
                    {lang === 'de' ? card.descriptionDe : card.descriptionEn}
                  </p>
                </div>

                <div
                  className={`mt-6 h-0.5 w-12 transition-all ${
                    isSelected ? 'bg-[#D14F84]' : 'bg-transparent'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
