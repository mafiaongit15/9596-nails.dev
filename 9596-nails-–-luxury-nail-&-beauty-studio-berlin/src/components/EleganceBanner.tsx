import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Language, Translations } from '../data/translations';
import y2kTribalImage from '../assets/images/work_y2k_tribal_1790291563333.jpg';
import lavenderBloomImage from '../assets/images/work_lavender_bloom_1790291572935.jpg';

interface EleganceBannerProps {
  onOpenBooking: () => void;
  lang: Language;
  t: Translations;
}

export const EleganceBanner: React.FC<EleganceBannerProps> = ({ onOpenBooking, lang }) => (
  <section className="py-20 bg-white border-y border-[#F7DBE6] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 relative">
        <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-xl aspect-[4/3] bg-[#FFF0F6]">
          <img src={y2kTribalImage} alt="9596 Nails Berlin – Y2K Liquid Chrome Nails" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
          <img src={lavenderBloomImage} alt="3D Lavender Bloom" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D14F84] font-semibold">9596 Nails &amp; Beauty</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#29181E] tracking-tight mt-2 mb-6">Elegance Redefined:<br /><span className="text-[#A33B6A] italic font-normal">Nails &amp; Wax / Beauty</span></h2>
        <p className="text-sm sm:text-base text-[#664D57] leading-relaxed mb-6">{lang === 'de' ? 'Bei 9596 Nails bieten wir erstklassige Maniküre, Pediküre, Nagelmodellagen und Wimpern-Services.' : 'At 9596 Nails, we craft immaculate manicures, pedicures, extensions, and lash lifting.'}</p>
        <motion.button onClick={onOpenBooking} whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="px-8 py-4 bg-[#EE82AB] text-[#29141D] text-sm font-bold rounded-full shadow-md flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{lang === 'de' ? 'Termin vereinbaren' : 'Book Appointment'}</span><ArrowRight className="w-4 h-4" /></motion.button>
      </div>
    </div>
  </section>
);
