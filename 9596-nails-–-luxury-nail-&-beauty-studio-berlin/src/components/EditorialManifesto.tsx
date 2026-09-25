import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Language, Translations } from '../data/translations';

interface EditorialManifestoProps {
  onBrowseServices: () => void;
  lang: Language;
  t: Translations;
}

export const EditorialManifesto: React.FC<EditorialManifestoProps> = ({
  onBrowseServices,
  t,
}) => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#FFF5F9] via-[#FFEAF3] to-[#FFF5F9] relative overflow-hidden border-y border-[#F7DBE6]">
      {/* Decorative ambient elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFD7E8]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFD7E8]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/src/assets/images/logo_9596_nails_1790291551289.jpg"
              alt="9596 Nails Logo"
              className="w-8 h-8 rounded-full border border-pink-200"
            />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D14F84] font-bold">
              {t.manifesto.brandSubtitle}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#29181E] leading-[1.28] tracking-tight uppercase max-w-4xl font-normal">
            {t.manifesto.text}
          </h2>

          <div className="w-16 h-0.5 bg-[#EE95B9] my-8" />

          <button
            onClick={onBrowseServices}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#D14F84] hover:text-[#29181E] transition-colors cursor-pointer"
          >
            <span>{t.manifesto.browseServices}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
