import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Check, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceItem, SERVICES_DATA, CATEGORIES } from '../data/servicesData';
import { Language, Translations } from '../data/translations';

interface ServicesMenuProps {
  selectedServices: ServiceItem[];
  onToggleSelect: (service: ServiceItem) => void;
  onOpenDetails: (service: ServiceItem) => void;
  lang: Language;
  t: Translations;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({
  selectedServices,
  onToggleSelect,
  onOpenDetails,
  lang,
  t,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobilePage, setMobilePage] = useState<number>(1);
  const MOBILE_PAGE_SIZE = 6;

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setMobilePage(1);
  };

  const handlePrevCategory = () => {
    const currentIndex = CATEGORIES.findIndex((c) => c.id === activeCategory);
    const prevIndex = currentIndex <= 0 ? CATEGORIES.length - 1 : currentIndex - 1;
    handleCategoryChange(CATEGORIES[prevIndex].id);
  };

  const handleNextCategory = () => {
    const currentIndex = CATEGORIES.findIndex((c) => c.id === activeCategory);
    const nextIndex = currentIndex >= CATEGORIES.length - 1 ? 0 : currentIndex + 1;
    handleCategoryChange(CATEGORIES[nextIndex].id);
  };

  const totalMobilePages = Math.ceil(filteredServices.length / MOBILE_PAGE_SIZE);
  const mobileVisibleServices = useMemo(() => {
    const start = (mobilePage - 1) * MOBILE_PAGE_SIZE;
    return filteredServices.slice(start, start + MOBILE_PAGE_SIZE);
  }, [filteredServices, mobilePage]);

  const isSelected = (id: string) => selectedServices.some((s) => s.id === id);

  return (
    <section id="services" className="py-20 md:py-24 bg-[#FFF9FB] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D14F84] font-semibold">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#29181E] tracking-tight mt-2">
            {t.services.title}
          </h2>
          <p className="text-xs sm:text-base text-[#6B505A] mt-3">
            {t.services.description}
          </p>
          <div className="w-16 h-0.5 bg-[#EE95B9] mx-auto mt-4" />
        </div>

        {/* Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Mobile Category Arrow Switcher (for phones) */}
          <div className="flex md:hidden items-center justify-between bg-white p-2 rounded-2xl border border-[#FAD6E6] shadow-2xs">
            <button
              onClick={handlePrevCategory}
              className="w-8 h-8 rounded-full bg-[#FFE8F2] text-[#8C3A5E] flex items-center justify-center active:scale-90"
              aria-label="Vorherige Kategorie"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="text-center px-2">
              <p className="text-xs font-serif font-bold text-[#29181E]">
                {CATEGORIES.find((c) => c.id === activeCategory)?.name}
              </p>
              <span className="text-[10px] text-[#A6627C]">
                {filteredServices.length} Behandlungen
              </span>
            </div>
            <button
              onClick={handleNextCategory}
              className="w-8 h-8 rounded-full bg-[#FFE8F2] text-[#8C3A5E] flex items-center justify-center active:scale-90"
              aria-label="Nächste Kategorie"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Category Tabs */}
          <div className="hidden md:flex items-center gap-1.5 p-1.5 bg-[#FFEAF3] rounded-2xl overflow-x-auto scrollbar-none border border-[#FAD6E6]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#29181E] shadow-xs font-semibold'
                    : 'text-[#704E5B] hover:text-[#29181E] hover:bg-white/50'
                }`}
              >
                <span>{cat.name}</span>
                <span className="ml-1.5 text-[10px] text-[#A6627C]">
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#A87287] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setMobilePage(1);
              }}
              placeholder={t.services.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#F6D0E1] rounded-xl text-xs text-[#29181E] placeholder-[#B58B9C] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/40 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setMobilePage(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A87287] hover:text-[#29181E]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 1. Mobile Phone View: Paginated with Arrows */}
        <div className="block md:hidden">
          <div className="space-y-3">
            {mobileVisibleServices.map((service) => {
              const selected = isSelected(service.id);
              return (
                <div
                  key={service.id}
                  className={`p-4 rounded-2xl bg-white border transition-all ${
                    selected
                      ? 'border-[#EE7EA8] bg-[#FFF5F9] shadow-sm'
                      : 'border-[#F7DBE6] shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#D14F84] uppercase tracking-wider bg-[#FFE8F2] px-2 py-0.5 rounded-md">
                          {service.categoryTitle}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-[#70525F]">
                          <Clock className="w-3 h-3 text-[#B84072]" />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      <h3 className="text-sm font-serif font-bold text-[#22161A] mt-1.5 leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-base font-serif font-bold text-[#22161A] text-right block">
                        {service.priceDisplay}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#FAEDF2] gap-2">
                    <button
                      onClick={() => onOpenDetails(service)}
                      className="text-xs font-serif text-[#9E3E67] underline hover:text-[#29181E] transition-colors py-1"
                    >
                      {t.services.detailsBtn}
                    </button>

                    <button
                      onClick={() => onToggleSelect(service)}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                        selected
                          ? 'bg-[#29171E] text-white shadow-xs'
                          : 'bg-gradient-to-r from-[#FCAECB] to-[#EE82AB] text-[#29141D] font-bold shadow-2xs'
                      }`}
                    >
                      {selected ? (
                        <>
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>{t.services.selectedBtn}</span>
                        </>
                      ) : (
                        <span>{t.services.selectBtn}</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Arrows Pagination Controls */}
          {totalMobilePages > 1 && (
            <div className="flex items-center justify-between mt-6 px-3 py-2.5 bg-white rounded-2xl border border-[#FAD6E6] shadow-2xs">
              <button
                onClick={() => setMobilePage((p) => Math.max(1, p - 1))}
                disabled={mobilePage === 1}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#FFE8F2] text-[#8C3A5E] text-xs font-serif font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Zurück</span>
              </button>

              <span className="text-xs font-serif text-[#704E5B] font-medium">
                {mobilePage} / {totalMobilePages}
              </span>

              <button
                onClick={() => setMobilePage((p) => Math.min(totalMobilePages, p + 1))}
                disabled={mobilePage === totalMobilePages}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#FFE8F2] text-[#8C3A5E] text-xs font-serif font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>Weiter</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* 2. Desktop & Tablet View: 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const selected = isSelected(service.id);
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-3xl bg-white border transition-all flex flex-col justify-between ${
                    selected
                      ? 'border-[#EE7EA8] shadow-md ring-2 ring-[#EE7EA8]/20 bg-gradient-to-b from-white to-[#FFF5F9]'
                      : 'border-[#F7DBE6] hover:border-[#EE95B9] shadow-2xs hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#70525F] mb-3">
                      <span className="text-[11px] font-bold text-[#D14F84] uppercase tracking-wider bg-[#FFE8F2] px-2.5 py-1 rounded-full border border-[#FCDAE8]">
                        {service.categoryTitle}
                      </span>
                      <div className="flex items-center gap-1.5 bg-[#FFF0F6] px-2.5 py-1 rounded-full text-[#5E3E4C]">
                        <Clock className="w-3 h-3 text-[#B84072]" />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-semibold text-[#22161A] mb-2 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#6B505A] leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#FAEDF2] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#A6627C] block uppercase tracking-wider">
                        {t.services.priceLabel}
                      </span>
                      <span className="text-xl font-serif font-bold text-[#22161A]">
                        {service.priceDisplay}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenDetails(service)}
                        className="px-3.5 py-2 rounded-full text-xs font-serif font-medium text-[#704E5B] hover:text-[#22161A] hover:bg-[#FFE8F2] transition-colors cursor-pointer"
                      >
                        {t.services.detailsBtn}
                      </button>

                      <button
                        onClick={() => onToggleSelect(service)}
                        className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                          selected
                            ? 'bg-[#29171E] text-white shadow-xs'
                            : 'bg-gradient-to-r from-[#FCAECB] to-[#EE82AB] text-[#29141D] font-bold hover:brightness-105 shadow-2xs'
                        }`}
                      >
                        {selected ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>{t.services.selectedBtn}</span>
                          </>
                        ) : (
                          <span>{t.services.selectBtn}</span>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
