import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeStrip } from './components/MarqueeStrip';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurWorkSection } from './components/OurWorkSection';
import { EditorialManifesto } from './components/EditorialManifesto';
import { EleganceBanner } from './components/EleganceBanner';
import { ServicesMenu } from './components/ServicesMenu';
import { ServiceDetailsModal } from './components/ServiceDetailsModal';
import { BookingDrawer } from './components/BookingDrawer';
import { QuickContactSection } from './components/QuickContactSection';
import { FaqSection } from './components/FaqSection';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { FloatingCartBar } from './components/FloatingCartBar';
import { ServiceItem } from './data/servicesData';
import { Language, TRANSLATIONS } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);
  const [detailModalService, setDetailModalService] = useState<ServiceItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'de' ? 'en' : 'de'));
  };

  const handleToggleSelect = (service: ServiceItem) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleRemoveService = (id: string) => {
    setSelectedServices((prev) => prev.filter((s) => s.id !== id));
  };

  const handleClearAll = () => {
    setSelectedServices([]);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9FB] text-[#29181E] flex flex-col font-sans selection:bg-[#FCDAE8] selection:text-[#1F1418]">
      {/* 1. Header / Navbar with Logo, Navigation, Appointment Button & Scroll-Up Action Strip */}
      <Navbar
        selectedCount={selectedServices.length}
        onOpenBooking={() => setIsBookingOpen(true)}
        lang={lang}
        onToggleLang={handleToggleLang}
        t={t}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section (Styled exactly like the uploaded reference screenshot) */}
        <HeroSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onExploreServices={scrollToServices}
          lang={lang}
          t={t}
        />

        {/* 3. Moving Strip (120fps continuous animated ticker strip) */}
        <MarqueeStrip lang={lang} />

        {/* 4. Why Choose Us (4 Horizontal Cards matching the reference screenshot) */}
        <WhyChooseUs lang={lang} t={t} />

        {/* 5. "Our Work" Dedicated Section (16 authentic nail art photos with categories & lightbox) */}
        <OurWorkSection
          lang={lang}
          t={t}
        />

        {/* 6. Editorial Manifesto Quote Block */}
        <EditorialManifesto
          onBrowseServices={scrollToServices}
          lang={lang}
          t={t}
        />

        {/* 7. Elegance Redefined Feature Section */}
        <EleganceBanner
          onOpenBooking={() => setIsBookingOpen(true)}
          lang={lang}
          t={t}
        />

        {/* 8. Treatment Services Menu (28+ service items from prompt) */}
        <ServicesMenu
          selectedServices={selectedServices}
          onToggleSelect={handleToggleSelect}
          onOpenDetails={(service) => setDetailModalService(service)}
          lang={lang}
          t={t}
        />

        {/* 9. Quick Contact (Berlin Google Maps, Live Opening Hours, Additional Info) */}
        <QuickContactSection lang={lang} t={t} />

        {/* 10. Frequently Asked Questions Accordion */}
        <FaqSection lang={lang} t={t} />

        {/* 11. Contact Form ("Get in touch with us" in German/English + light pink theme) */}
        <ContactFormSection lang={lang} t={t} />
      </main>

      {/* 12. Luxury Editorial Footer */}
      <Footer lang={lang} t={t} />

      {/* 13. Floating Quick Booking Cart Bar */}
      <FloatingCartBar
        selectedServices={selectedServices}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* 14. Service Details Modal */}
      <ServiceDetailsModal
        service={detailModalService}
        isSelected={
          detailModalService
            ? selectedServices.some((s) => s.id === detailModalService.id)
            : false
        }
        onClose={() => setDetailModalService(null)}
        onToggleSelect={handleToggleSelect}
      />

      {/* 15. Interactive Booking Drawer */}
      <BookingDrawer
        isOpen={isBookingOpen}
        selectedServices={selectedServices}
        onClose={() => setIsBookingOpen(false)}
        onRemoveService={handleRemoveService}
        onClearAll={handleClearAll}
        lang={lang}
        t={t}
      />
    </div>
  );
}
