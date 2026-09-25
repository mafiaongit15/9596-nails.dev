import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Check, Sparkles, AlertCircle } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface ServiceDetailsModalProps {
  service: ServiceItem | null;
  isSelected: boolean;
  onClose: () => void;
  onToggleSelect: (service: ServiceItem, subOptionIndex?: number) => void;
}

export const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  service,
  isSelected,
  onClose,
  onToggleSelect,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-[#FCFAF9] rounded-3xl shadow-2xl border border-[#EFE2DF] p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Subtle top ambient tint */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D8A7A1] via-[#E8BEB9] to-[#D8A7A1]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F3E7E4] hover:bg-[#EADBDA] text-[#4A3D3B] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Tag */}
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A6736E] block mb-1">
            {service.categoryTitle}
          </span>

          <h3 className="text-2xl font-serif font-semibold text-[#251A18] leading-tight pr-8">
            {service.title}
          </h3>

          {/* Meta Bar */}
          <div className="flex items-center gap-4 my-4 py-3 px-4 rounded-xl bg-[#F7EEEB] border border-[#ECDCD8] text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 text-[#5F4E4B]">
              <Clock className="w-4 h-4 text-[#A6736E]" />
              <span className="font-medium">{service.duration}</span>
            </div>
            <span className="text-[#D6BDB9]" aria-hidden="true">·</span>
            <div className="font-semibold text-lg font-serif text-[#965A54] tabular-nums">
              {service.priceDisplay}
            </div>
          </div>

          {/* Description */}
          <div className="text-sm text-[#5F4E4B] leading-relaxed mb-6 space-y-3">
            <p>{service.description}</p>
          </div>

          {/* Included Features */}
          {service.included && service.included.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3C302E] mb-2.5">
                Im Service enthalten:
              </h4>
              <ul className="space-y-2">
                {service.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C4D4A]">
                    <div className="w-4 h-4 rounded-full bg-[#EAF5EC] text-[#25823E] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sub-options if available (e.g., Wimpernlifting) */}
          {service.subOptions && service.subOptions.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3C302E] mb-2.5">
                Optionen wählen:
              </h4>
              <div className="space-y-2">
                {service.subOptions.map((opt, oIdx) => (
                  <div
                    key={opt.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E9DDD9]"
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-[#291F1E] capitalize">
                        {opt.name}
                      </p>
                      <p className="text-xs text-[#7A6B68]">{opt.duration}</p>
                    </div>
                    <span className="text-sm font-semibold font-serif text-[#965A54]">
                      {opt.priceDisplay}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#EFE4E1]">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-medium text-[#6C5B58] hover:text-[#251A18] transition-colors cursor-pointer"
            >
              Schließen
            </button>
            <button
              onClick={() => {
                onToggleSelect(service);
                onClose();
              }}
              className={`px-6 py-3 rounded-full text-xs font-medium transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                isSelected
                  ? 'bg-[#EBF7EE] text-[#1D6C37] border border-[#BDE6C8] hover:bg-[#DCF1E1]'
                  : 'bg-[#241B1A] text-white hover:bg-[#3E3230]'
              }`}
            >
              {isSelected ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Bereits ausgewählt (Entfernen)</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#F3D7D7]" />
                  <span>Jetzt auswählen</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
