import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowUp, Calendar } from 'lucide-react';
import { Language, Translations } from '../data/translations';

interface NavbarProps {
  selectedCount: number;
  onOpenBooking: () => void;
  lang: Language;
  onToggleLang: () => void;
  t: Translations;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedCount,
  onOpenBooking,
  lang,
  onToggleLang,
  t,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollable = docHeight - winHeight;

      if (scrollable > 0) {
        const progress = (scrollTop / scrollable) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      } else {
        setScrollProgress(0);
      }

      setIsScrolled(scrollTop > 20);
      setShowScrollTop(scrollTop > 320);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF5F8]/95 backdrop-blur-md shadow-xs border-b border-[#F7DBE6] py-3'
            : 'bg-[#FFF5F8] border-b border-transparent py-3.5 sm:py-4'
        }`}
      >
        {/* Simple pink progress strip at the top that fills as you move down */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#FCE5F0] z-50 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FCAECB] via-[#EE82AB] to-[#D14F84] transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between">
          {/* Brand Wordmark: Compact on mobile to prevent crowding */}
          <a href="#" className="flex flex-col items-start group shrink-0">
            <span className="text-lg sm:text-2xl font-serif tracking-tight text-[#1F1418] font-normal leading-tight group-hover:text-[#D14F84] transition-colors">
              9596 Nails
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-[#9E466F] font-serif font-medium">
              &amp; BEAUTY
            </span>
          </a>

          {/* Centered Navigation Links with bullets (Desktop Only) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm md:text-[15px] font-serif font-medium tracking-wide text-[#331C25]">
            <span className="text-[#E778A4] text-base select-none">•</span>
            <a
              href="#home"
              className="hover:text-[#D14F84] transition-colors py-1 px-1 whitespace-nowrap"
            >
              {lang === 'de' ? 'Home' : 'Home'}
            </a>

            <span className="text-[#E778A4] text-base select-none">•</span>
            <a
              href="#about"
              className="hover:text-[#D14F84] transition-colors py-1 px-1 whitespace-nowrap"
            >
              {lang === 'de' ? 'Über uns' : 'About Us'}
            </a>

            <span className="text-[#E778A4] text-base select-none">•</span>
            <a
              href="#services"
              className="hover:text-[#D14F84] transition-colors py-1 px-1 whitespace-nowrap"
            >
              {lang === 'de' ? 'Behandlungen' : 'Treatments'}
            </a>

            <span className="text-[#E778A4] text-base select-none">•</span>
            <a
              href="#our-work"
              className="hover:text-[#D14F84] transition-colors py-1 px-1 whitespace-nowrap"
            >
              {lang === 'de' ? 'Our Work' : 'Our Work'}
            </a>

            <span className="text-[#E778A4] text-base select-none">•</span>
            <a
              href="#contact"
              className="hover:text-[#D14F84] transition-colors py-1 px-1 whitespace-nowrap"
            >
              {lang === 'de' ? 'Kontakt & Anfahrt' : 'Contact & Location'}
            </a>

            <span className="text-[#E778A4] text-base select-none">•</span>
            <a
              href="#faq"
              className="hover:text-[#D14F84] transition-colors py-1 px-1 whitespace-nowrap"
            >
              FAQ
            </a>
            <span className="text-[#E778A4] text-base select-none">•</span>
          </nav>

          {/* Right Section: Clean, Uncrowded Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switch: Hidden on small mobile screens to prevent crowding; available inside mobile menu */}
            <button
              onClick={onToggleLang}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-white/80 border border-[#F4CFDE] text-xs font-semibold text-[#804D60] hover:text-[#22161A] hover:border-[#D14F84] transition-all cursor-pointer"
              title={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
            >
              <Globe className="w-3 h-3 text-[#D14F84]" />
              <span className="uppercase">{lang === 'de' ? 'EN' : 'DE'}</span>
            </button>

            {/* APPOINTMENT Button: Responsive width, never overflows */}
            <button
              onClick={onOpenBooking}
              className="px-3.5 sm:px-5 py-1.5 sm:py-2 border border-[#E778A4] hover:bg-[#FFEBF3] active:scale-95 text-[#24131A] font-serif text-[11px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase rounded-xs transition-all cursor-pointer shadow-2xs whitespace-nowrap flex items-center gap-1.5"
            >
              <Calendar className="w-3 h-3 text-[#D14F84] sm:hidden" />
              <span>APPOINTMENT</span>
              {selectedCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 text-[9px] font-bold bg-[#D14F84] text-white rounded-full">
                  {selectedCount}
                </span>
              )}
            </button>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-sm text-[#381F27] hover:bg-[#FFEBF3] transition-colors cursor-pointer"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with clean Language Toggle and Links */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFF5F8] border-b border-[#F5D8E4] px-5 py-5 shadow-xl space-y-4 animate-in slide-in-from-top-2 duration-200">
            {/* Top row in mobile drawer: Language Switch & Status */}
            <div className="flex items-center justify-between pb-3 border-b border-[#F7DCE7]">
              <span className="text-xs font-serif text-[#7A4E60] font-medium">
                Sprache / Language
              </span>
              <button
                onClick={onToggleLang}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F4CFDE] text-xs font-semibold text-[#8C3A5E] shadow-2xs"
              >
                <Globe className="w-3.5 h-3.5 text-[#D14F84]" />
                <span>{lang === 'de' ? 'Deutsch 🇩🇪 (Switch to EN)' : 'English 🇬🇧 (Auf DE wechseln)'}</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-2.5 text-base font-serif tracking-wider text-[#422933]">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D14F84] transition-colors flex items-center gap-2"
              >
                <span className="text-[#E778A4]">•</span>
                <span>{lang === 'de' ? 'Home' : 'Home'}</span>
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D14F84] transition-colors flex items-center gap-2"
              >
                <span className="text-[#E778A4]">•</span>
                <span>{lang === 'de' ? 'Über uns' : 'About Us'}</span>
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D14F84] transition-colors flex items-center gap-2"
              >
                <span className="text-[#E778A4]">•</span>
                <span>{lang === 'de' ? 'Behandlungen' : 'Treatments'}</span>
              </a>
              <a
                href="#our-work"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D14F84] transition-colors font-bold text-[#D14F84] flex items-center gap-2"
              >
                <span className="text-[#E778A4]">•</span>
                <span>{lang === 'de' ? 'Our Work ✨' : 'Our Work ✨'}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D14F84] transition-colors flex items-center gap-2"
              >
                <span className="text-[#E778A4]">•</span>
                <span>{lang === 'de' ? 'Kontakt & Anfahrt' : 'Contact & Location'}</span>
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D14F84] transition-colors flex items-center gap-2"
              >
                <span className="text-[#E778A4]">•</span>
                <span>FAQ</span>
              </a>
            </nav>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-xs font-serif font-bold tracking-widest uppercase text-white bg-[#E778A4] hover:bg-[#D96794] rounded-xs shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>APPOINTMENT {selectedCount > 0 ? `(${selectedCount})` : ''}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Floating scroll to top button when scrolled down */}
      {showScrollTop && (
        <aside
          aria-label="Floating scroll to top button"
          onClick={scrollToTop}
          className="fixed bottom-5 left-5 sm:bottom-8 sm:left-8 z-40 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/95 border border-[#F4CFDE] text-[#B83E71] hover:text-[#22161A] hover:border-[#D14F84] hover:bg-[#FFEBF4] shadow-lg shadow-pink-200/50 transition-all cursor-pointer active:scale-95 group"
          title="Back to top"
        >
          <div className="w-5 h-5 rounded-full bg-[#FFE8F2] flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
            <ArrowUp className="w-3.5 h-3.5 text-[#D14F84]" />
          </div>
          <span className="text-[10px] font-serif font-bold tracking-widest uppercase pr-1">
            TOP
          </span>
        </aside>
      )}
    </>
  );
};
