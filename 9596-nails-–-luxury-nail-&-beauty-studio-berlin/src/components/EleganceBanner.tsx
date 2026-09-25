```tsx
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

export const EleganceBanner: React.FC<EleganceBannerProps> = ({
  onOpenBooking,
  lang,
  t,
}) => {
  return (
    <section className="py-20 bg-white border-y border-[#F7DBE6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-xl aspect-[4/3] bg-[#FFF0F6]">
              <img
                src={y2kTribalImage}
                alt="9596 Nails Berlin – Y2K Liquid Chrome Nails"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#D14F84] font-bold">
                    Signature Couture
                  </p>

                  <p className="text-sm font-serif font-semibold text-[#29181E]">
                    Liquid Silver Chrome &amp; Tribal Contour
                  </p>
                </div>

                <span className="text-[10px] uppercase font-bold text-white bg-gradient-to-r from-[#FA729A] to-[#D85E8C] px-3 py-1 rounded-full">
                  Berlin
                </span>
              </div>
            </div>

            {/* Overlapping Accent Thumbnail */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
              <img
                src={lavenderBloomImage}
                alt="3D Lavender Bloom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D14F84] font-semibold">
              9596 Nails &amp; Beauty
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#29181E] tracking-tight mt-2 mb-6">
              Elegance Redefined: <br />

              <span className="bg-gradient-to-r from-[#D84A86] to-[#A33B6A] bg-clip-text text-transparent italic font-normal">
                Nails &amp; Wax / Beauty
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#664D57] leading-relaxed mb-6">
              {lang === 'de'
                ? 'Bei 9596 Nails bieten wir erstklassige Maniküre, Pediküre, Nagelmodellagen und Wimpern-Services. Genieße makellose Designs, samtige Glanz-Finishes und feinfühlige Meisterhandwerkskunst in einem warmen, inspirierenden Ambiente.'
                : 'At 9596 Nails, we craft immaculate manicures, pedicures, extensions, and lash lifting. Enjoy bespoke artistic finishes, long-lasting high shine, and meticulous hygiene in a relaxed boutique atmosphere.'}
            </p>

            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#503843]">
                <div className="w-5 h-5 rounded-full bg-[#FFE8F2] text-[#D14F84] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>

                <span>
                  {lang === 'de'
                    ? 'Individuelle Beratung & Formauswahl passend zu deinen Händen'
                    : 'Personalized nail architecture and custom shape matching'}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#503843]">
                <div className="w-5 h-5 rounded-full bg-[#FFE8F2] text-[#D14F84] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>

                <span>
                  {lang === 'de'
                    ? 'Modernste Diamantschleifer & steril verpackte Einwegfeilen'
                    : 'Medical autoclave sterilization and personalized disposable buffers'}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#503843]">
                <div className="w-5 h-5 rounded-full bg-[#FFE8F2] text-[#D14F84] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>

                <span>
                  {lang === 'de'
                    ? 'Schnelle, unkomplizierte Terminvergabe online oder via WhatsApp'
                    : 'Instant appointment booking online or direct 1-click via WhatsApp'}
                </span>
              </div>
            </div>

            <motion.button
              onClick={onOpenBooking}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="px-8 py-4 bg-gradient-to-r from-[#FCAECB] via-[#F89BC1] to-[#EE82AB] hover:from-[#FB9FBF] hover:to-[#E576A1] text-[#29141D] text-xs sm:text-sm font-bold rounded-full shadow-md flex items-center gap-2 cursor-pointer transition-all"
            >
              <Calendar className="w-4 h-4 text-[#5E263B]" />

              <span>
                {lang === 'de' ? 'Termin vereinbaren' : 'Book Appointment'}
              </span>

              <ArrowRight className="w-4 h-4 ml-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
```
