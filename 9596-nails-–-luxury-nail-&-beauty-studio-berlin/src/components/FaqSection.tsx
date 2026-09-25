import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { Language, Translations } from '../data/translations';

interface FaqSectionProps {
  lang: Language;
  t: Translations;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang, t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      qDe: 'Was ist der Unterschied zwischen klassischer, japanischer und russischer Maniküre?',
      qEn: 'What is the difference between classic, Japanese, and Russian manicure?',
      aDe: 'Die klassische Maniküre beinhaltet ein warmes Bad, Nagelhautzurückschieben und sanftes Feilen. Die japanische Maniküre verzichtet komplett auf Nagellack und nährt den Naturnagel mit Bienenwachs und Kieselgur für einen seidenen Naturglanz. Die russische Maniküre ist eine trockene Frästechnik mit feinen Diamantaufsätzen, die die Nagelhaut mikroskopisch sauber glättet – für eine Haltbarkeit von bis zu 4 Wochen.',
      aEn: 'The classic manicure includes a soothing hand bath, cuticle care, and shaping. The Japanese manicure uses no polish and polishes pure beeswax and diatomaceous earth into the nail bed for natural shine. The Russian manicure is a dry electric-file technique using microscopic diamond bits for ultra-clean cuticles lasting up to 4 weeks.',
    },
    {
      qDe: 'Wie lange halten Shellack und Nagelmodellagen mit Gel / Acryl?',
      qEn: 'How long do Shellac and Gel/Acrylic nail extensions last?',
      aDe: 'Unser UV-Shellac hält typischerweise 3 bis 4 Wochen splitterfrei und glänzend. Nagelmodellagen mit Neuset oder Auffüllen (Refill) halten ca. 4 bis 5 Wochen, abhängig von deinem natürlichen Nagelwachstum. Wir empfehlen ein Auffüllen nach etwa 3–4 Wochen.',
      aEn: 'Our UV Shellac stays chip-free and ultra-glossy for 3 to 4 weeks. Full sets and acrylic/gel refills typically last 4 to 5 weeks. We advise booking a refill every 3–4 weeks to maintain nail balance.',
    },
    {
      qDe: 'Muss ich vorab einen Termin buchen oder sind Walk-Ins möglich?',
      qEn: 'Do I need to book an appointment in advance or are walk-ins welcome?',
      aDe: 'Um dir Wartezeiten zu ersparen und die gewünschte Behandlungszeit sicherzustellen, empfehlen wir dringend eine Vorab-Reservierung über unser Online-System oder kurz per WhatsApp. Für spontane Termine kannst du uns gerne anrufen.',
      aEn: 'To guarantee immediate seating with our master artists, we strongly recommend booking online or texting us via WhatsApp. Spontaneous walk-ins are accommodated whenever slots permit.',
    },
    {
      qDe: 'Welche Hygiene- und Desinfektionsstandards gelten bei 9596 Nails?',
      qEn: 'What hygiene and sterilization protocols are followed?',
      aDe: 'Hygiene hat bei uns oberste Priorität: Alle Metallinstrumente (Zangen, Diamantfräser) werden nach jedem Gast im medizinischen Ultraschallbad gereinigt und im Autoklav heißluftsterilisiert und luftdicht verschweißt. Feilen und Buffer sind personalisierte Einwegprodukte.',
      aEn: 'Hygiene is paramount: all metal tools and e-file diamond bits are sanitized in an ultrasonic bath, sealed in medical pouches, and heat-sterilized in an autoclave between every client. Buffers and files are strictly single-use.',
    },
    {
      qDe: 'Was muss ich vor und nach einem Wimpernlifting oder einer Wimpernverlängerung beachten?',
      qEn: 'What should I know before and after a lash lift or extension?',
      aDe: 'Bitte komme möglichst ungeschminkt und ohne Mascara zum Termin. Nach dem Lifting oder der Verlängerung sollten die Wimpern für 24 Stunden nicht mit Wasser, Dampf oder ölhaltigen Produkten in Berührung kommen, damit sich der Schwung dauerhaft fixieren kann.',
      aEn: 'Please arrive without eye makeup or mascara. Following your lash service, keep lashes dry and oil-free for the first 24 hours to ensure long-lasting curl and retention.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-[#F7DBE6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D14F84] font-semibold">
            {t.faq.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#29181E] mt-2">
            {t.faq.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#EE95B9] mx-auto mt-4" />
        </div>

        <div className="divide-y divide-[#F8E2EC] border-y border-[#F8E2EC]">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-[#29181E] group-hover:text-[#D14F84] transition-colors">
                    {lang === 'de' ? item.qDe : item.qEn}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F6] text-[#D14F84] flex items-center justify-center shrink-0 group-hover:bg-[#FCDAE8] transition-colors shadow-2xs">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs sm:text-sm text-[#664D57] leading-relaxed pt-3 pb-2 pr-10">
                        {lang === 'de' ? item.aDe : item.aEn}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
