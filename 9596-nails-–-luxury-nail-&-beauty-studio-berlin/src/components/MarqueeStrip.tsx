import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { Language } from '../data/translations';

interface MarqueeStripProps {
  lang: Language;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({ lang }) => {
  const itemsDe = [
    '✦ 9596 NAILS & BEAUTY BERLIN',
    '✦ INDULGE IN LUXURY NAIL & BEAUTY TREATMENTS',
    '✦ JAPANISCHE & RUSSISCHE MANIKÜRE',
    '✦ NAIL ART & 3D CHARMS MEISTERWERK',
    '✦ SHELLAC, CATEYE & CHROME EFFEKTE',
    '✦ LUXUS PEDIKÜRE & FUSSPFLEGE',
    '✦ WIMPERNVERLÄNGERUNG & WIMPERNLIFTING',
    '✦ ÖFFNUNGSZEITEN: MO–FR 09:30–19:00 • SA 10:00–17:00',
    '✦ TERMIN JETZT ONLINE ODER PER WHATSAPP BUCHEN',
  ];

  const itemsEn = [
    '✦ 9596 NAILS & BEAUTY BERLIN',
    '✦ INDULGE IN LUXURY NAIL & BEAUTY TREATMENTS',
    '✦ JAPANESE & RUSSIAN MANICURE CARE',
    '✦ BESPOKE 3D SCULPTED NAIL ART & CHARMS',
    '✦ VELVET CATEYE & GLAZED CHROME FINISHES',
    '✦ LUXURY SPA PEDICURE',
    '✦ EYELASH EXTENSIONS & LASH LIFTING',
    '✦ OPENING HOURS: MON–FRI 09:30–19:00 • SAT 10:00–17:00',
    '✦ BOOK APPOINTMENTS ONLINE OR VIA WHATSAPP',
  ];

  const items = lang === 'de' ? itemsDe : itemsEn;

  return (
    <div className="w-full bg-gradient-to-r from-[#FFF0F6] via-[#FFE3EF] to-[#FFF0F6] border-y border-[#F8CFE0] py-3.5 overflow-hidden relative shadow-2xs select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((text, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-3 mx-4 text-xs font-serif font-semibold tracking-[0.2em] text-[#8C3A5E] uppercase"
          >
            <span>{text}</span>
            <Sparkles className="w-3 h-3 text-[#D84A86] fill-[#F8B3D1]" />
          </span>
        ))}
      </div>
    </div>
  );
};
