import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Instagram,
  ExternalLink,
  X,
  ZoomIn,
  Heart,
  ChevronLeft,
  ChevronRight,
  Grid,
  Columns,
} from 'lucide-react';
import { OUR_WORK_GALLERY, WorkItem } from '../data/ourWorkData';
import { SALON_INFO } from '../data/servicesData';
import { Language, Translations } from '../data/translations';

interface OurWorkSectionProps {
  lang: Language;
  t: Translations;
  onBookDesign?: (title: string) => void;
}

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({ lang, t }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeWorkModal, setActiveWorkModal] = useState<WorkItem | null>(null);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const [mobileGridView, setMobileGridView] = useState<boolean>(false);

  const filterTabs = [
    {
      id: 'all',
      label: t.ourWork.filterAll,
      count: OUR_WORK_GALLERY.length,
    },
    {
      id: '3d-sculpted',
      label: t.ourWork.filter3D,
      count: OUR_WORK_GALLERY.filter((i) => i.category === '3d-sculpted').length,
    },
    {
      id: 'tribal-y2k',
      label: t.ourWork.filterTribal,
      count: OUR_WORK_GALLERY.filter((i) => i.category === 'tribal-y2k').length,
    },
    {
      id: 'chrome-metallic',
      label: t.ourWork.filterChrome,
      count: OUR_WORK_GALLERY.filter((i) => i.category === 'chrome-metallic').length,
    },
    {
      id: 'french-art',
      label: t.ourWork.filterFrench,
      count: OUR_WORK_GALLERY.filter((i) => i.category === 'french-art').length,
    },
  ];

  const filteredWork = OUR_WORK_GALLERY.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const safeMobileIndex = Math.min(mobileIndex, Math.max(0, filteredWork.length - 1));
  const currentMobileItem = filteredWork[safeMobileIndex] || filteredWork[0];

  const handlePrevMobile = () => {
    setMobileIndex((prev) => (prev <= 0 ? filteredWork.length - 1 : prev - 1));
  };

  const handleNextMobile = () => {
    setMobileIndex((prev) => (prev >= filteredWork.length - 1 ? 0 : prev + 1));
  };

  const handlePrevModalItem = () => {
    if (!activeWorkModal) return;
    const currentIndex = filteredWork.findIndex((item) => item.id === activeWorkModal.id);
    const prevIndex = currentIndex <= 0 ? filteredWork.length - 1 : currentIndex - 1;
    setActiveWorkModal(filteredWork[prevIndex]);
  };

  const handleNextModalItem = () => {
    if (!activeWorkModal) return;
    const currentIndex = filteredWork.findIndex((item) => item.id === activeWorkModal.id);
    const nextIndex = currentIndex >= filteredWork.length - 1 ? 0 : currentIndex + 1;
    setActiveWorkModal(filteredWork[nextIndex]);
  };

  return (
    <section id="our-work" className="py-20 md:py-24 bg-gradient-to-b from-[#FFFDFD] via-[#FFF7F9] to-[#FFF9FA] border-y border-[#F3E2E6] relative overflow-hidden">
      {/* Subtle ambient light pink glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FFE1EE]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#FFEBF5]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8F2] border border-[#FFD3E5] text-[#D84A86] text-xs font-semibold mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 fill-[#D84A86]" />
            <span className="uppercase tracking-[0.2em]">{t.ourWork.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#2B1B20] tracking-tight">
            Our Work
          </h2>
          <p className="text-xs sm:text-base text-[#6B5058] mt-3 max-w-2xl mx-auto leading-relaxed">
            {t.ourWork.description}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#F09ABF] to-transparent mx-auto mt-4" />
        </div>

        {/* Filter Navigation with Mobile Left/Right Arrows for Horizontal Scroll */}
        <div className="relative mb-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setMobileIndex(0);
                }}
                className={`px-3.5 sm:px-5 py-2 text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap shadow-2xs flex items-center gap-1.5 shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-[#F080A8] to-[#D85E8C] text-white shadow-md'
                    : 'bg-white/90 hover:bg-white text-[#70505A] border border-[#F5D8E3] hover:border-[#E8B8CB]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    activeCategory === tab.id
                      ? 'bg-white/25 text-white'
                      : 'bg-[#FFE8F2] text-[#B83E71]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. MOBILE PHONE VIEW: Uncrowded Slider with Arrows & Minimal Footprint   */}
        {/* ========================================================================= */}
        <div className="block sm:hidden">
          {/* Top Controls on Mobile: View toggle & Arrow Navigation */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-serif text-[#7A4E60] font-semibold">
              Design {safeMobileIndex + 1} von {filteredWork.length}
            </span>

            <div className="flex items-center gap-2">
              {/* Toggle grid vs 1-card carousel on phone */}
              <button
                onClick={() => setMobileGridView(!mobileGridView)}
                className="px-2.5 py-1 rounded-full bg-white border border-[#F4CFDE] text-[11px] font-serif text-[#8C3A5E] flex items-center gap-1 shadow-2xs"
                title="Ansicht umschalten"
              >
                {mobileGridView ? <Columns className="w-3.5 h-3.5" /> : <Grid className="w-3.5 h-3.5" />}
                <span>{mobileGridView ? 'Slider' : '2x2'}</span>
              </button>

              {/* Prev / Next Arrows */}
              {!mobileGridView && (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevMobile}
                    className="w-8 h-8 rounded-full bg-white border border-[#F4CFDE] text-[#8C3A5E] flex items-center justify-center shadow-xs active:scale-90"
                    aria-label="Vorheriges Design"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextMobile}
                    className="w-8 h-8 rounded-full bg-white border border-[#F4CFDE] text-[#8C3A5E] flex items-center justify-center shadow-xs active:scale-90"
                    aria-label="Nächstes Design"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* If Single-Card Carousel Mode on Phone: Clean, Elegant, Uncrowded */}
          {!mobileGridView && currentMobileItem && (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMobileItem.id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.24 }}
                  onClick={() => setActiveWorkModal(currentMobileItem)}
                  className="rounded-3xl overflow-hidden bg-white border-2 border-[#F6D0E0] shadow-md flex flex-col active:scale-[0.99] transition-transform"
                >
                  <div className="aspect-square w-full relative bg-[#FAF0F4] overflow-hidden">
                    <img
                      src={currentMobileItem.image}
                      alt={currentMobileItem.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-pink-100 shadow-xs">
                      <span className="text-[10px] font-semibold text-[#D14F84] uppercase tracking-wider">
                        {lang === 'de'
                          ? currentMobileItem.categoryLabelDe
                          : currentMobileItem.categoryLabelEn}
                      </span>
                    </div>

                    {/* Tap to zoom hint */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" />
                      <span>Details</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-serif font-bold text-[#251A1E] leading-snug">
                        {currentMobileItem.title}
                      </h3>
                      <p className="text-xs text-[#70555E] mt-1 line-clamp-2 leading-relaxed">
                        {lang === 'de'
                          ? currentMobileItem.descriptionDe
                          : currentMobileItem.descriptionEn}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-[#FAEDF2] flex items-center justify-between text-xs text-[#A66F84]">
                      <span className="font-serif">9596 Nails Original</span>
                      <span className="text-[#D14F84] font-semibold text-[11px] underline">
                        WhatsApp anfragen →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Quick Swipe Arrows & Dots */}
              <div className="flex items-center justify-between mt-4 px-2">
                <button
                  onClick={handlePrevMobile}
                  className="inline-flex items-center gap-1 text-xs font-serif text-[#8C3A5E] font-semibold py-1 px-3 rounded-full bg-white border border-[#F4CFDE] shadow-2xs"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Zurück</span>
                </button>

                {/* Progress bar pill */}
                <div className="flex items-center gap-1">
                  {filteredWork.slice(0, 8).map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        safeMobileIndex % 8 === i
                          ? 'w-4 bg-[#D14F84]'
                          : 'w-1.5 bg-[#F4CFDE]'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextMobile}
                  className="inline-flex items-center gap-1 text-xs font-serif text-[#8C3A5E] font-semibold py-1 px-3 rounded-full bg-white border border-[#F4CFDE] shadow-2xs"
                >
                  <span>Weiter</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* If 2x2 Grid Mode on Phone: Compact and non-crowded */}
          {mobileGridView && (
            <div className="grid grid-cols-2 gap-3">
              {filteredWork.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveWorkModal(item)}
                  className="rounded-2xl overflow-hidden bg-white border border-[#F3D5E0] shadow-2xs flex flex-col active:scale-95 transition-transform"
                >
                  <div className="aspect-square relative bg-[#FAF0F4]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2.5">
                    <p className="text-xs font-serif font-bold text-[#251A1E] truncate">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-[#A66F84] mt-0.5">
                      {lang === 'de' ? item.categoryLabelDe : item.categoryLabelEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 2. DESKTOP & TABLET VIEW: Responsive 4-Column Grid                       */}
        {/* ========================================================================= */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredWork.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.28, delay: idx * 0.025 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveWorkModal(item)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#F3D5E0] shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-[#FAF0F4] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="inline-flex items-center gap-1.5 text-xs text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>{lang === 'de' ? 'Details ansehen' : 'View Details'}</span>
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-pink-100 shadow-xs">
                    <span className="text-[10px] font-semibold text-[#D14F84] uppercase tracking-wider">
                      {lang === 'de' ? item.categoryLabelDe : item.categoryLabelEn}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white flex-1 flex flex-col justify-between border-t border-[#F8E2EC]">
                  <div>
                    <h3 className="text-sm font-serif font-semibold text-[#251A1E] group-hover:text-[#D14F84] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#70555E] mt-1 line-clamp-2 leading-relaxed">
                      {lang === 'de' ? item.descriptionDe : item.descriptionEn}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#FAEDF2] flex items-center justify-between text-[11px] text-[#A66F84]">
                    <span>9596 Nails Original</span>
                    <Heart className="w-3.5 h-3.5 text-[#E685A8] fill-[#F8D2E1]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Studio Social Callout */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FFF0F6] via-[#FFEAF3] to-[#FFF5FA] border border-[#F5CCE0] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#FA729A] to-[#C95188] text-white flex items-center justify-center shrink-0 shadow-md">
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-semibold text-[#26181D]">
                {lang === 'de'
                  ? 'Möchtest du genau dieses Design für deine Nägel?'
                  : 'Would you love this exact design for your nails?'}
              </h4>
              <p className="text-xs sm:text-sm text-[#6E4F5A] mt-0.5">
                {lang === 'de'
                  ? 'Wähle ein Design aus und schreibe uns direkt per WhatsApp.'
                  : 'Select any design and message us directly on WhatsApp.'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E96695] to-[#D44B7E] text-white text-xs font-semibold hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>{t.ourWork.instagramFollow}</span>
            </a>
            <a
              href={SALON_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full bg-[#1F171A] text-white text-xs font-semibold hover:bg-black transition-colors flex items-center justify-center gap-2"
            >
              <span>{t.ourWork.tiktokFollow}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal for viewing high-res design details with Next / Prev browsing */}
      <AnimatePresence>
        {activeWorkModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveWorkModal(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#F3D5E0] p-6 sm:p-8 z-10 overflow-hidden"
            >
              <button
                onClick={() => setActiveWorkModal(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAEDF2] hover:bg-[#F3DCE5] text-[#553641] flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-5 left-5 flex items-center gap-1.5 z-10">
                <button
                  onClick={handlePrevModalItem}
                  className="w-8 h-8 rounded-full bg-[#FAEDF2] hover:bg-[#F3DCE5] text-[#553641] flex items-center justify-center transition-colors cursor-pointer"
                  title="Vorheriges Design"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextModalItem}
                  className="w-8 h-8 rounded-full bg-[#FAEDF2] hover:bg-[#F3DCE5] text-[#553641] flex items-center justify-center transition-colors cursor-pointer"
                  title="Nächstes Design"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-8 sm:pt-4">
                <div className="rounded-2xl overflow-hidden aspect-square bg-[#FBF0F5] border border-[#F6D7E4] shadow-xs relative">
                  <img
                    src={activeWorkModal.image}
                    alt={activeWorkModal.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white font-medium">
                    9596 Nails Original
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#D14F84] uppercase tracking-wider block mb-1">
                      {lang === 'de' ? activeWorkModal.categoryLabelDe : activeWorkModal.categoryLabelEn}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#27191E] leading-snug">
                      {activeWorkModal.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#664D55] leading-relaxed">
                    {lang === 'de' ? activeWorkModal.descriptionDe : activeWorkModal.descriptionEn}
                  </p>

                  <div className="p-4 rounded-xl bg-[#FFF4F8] border border-[#FCDAE8] text-xs text-[#824F64] space-y-1">
                    <p className="font-semibold text-[#27191E]">9596 Nails Meister-Handwerk</p>
                    <p>• {lang === 'de' ? 'Buchbar als Ergänzung zu Gel / Shellac / Neuset' : 'Can be added to Gel / Shellac / New Set'}</p>
                    <p>• {lang === 'de' ? 'Haltbarkeit: ca. 3–4 Wochen hochglänzend' : 'Durability: 3–4 weeks high gloss'}</p>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <a
                      href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hallo 9596 Nails Team! Ich möchte gerne für meinen nächsten Termin das Design "${activeWorkModal.title}" anfragen.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 text-center bg-gradient-to-r from-[#E96695] to-[#D44B7E] text-white text-xs font-semibold rounded-full shadow-xs hover:brightness-105 transition-all"
                    >
                      {lang === 'de' ? 'Design per WhatsApp anfragen' : 'Inquire design via WhatsApp'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
