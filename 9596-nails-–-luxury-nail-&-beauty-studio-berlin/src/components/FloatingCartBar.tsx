import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface FloatingCartBarProps {
  selectedServices: ServiceItem[];
  onOpenBooking: () => void;
}

export const FloatingCartBar: React.FC<FloatingCartBarProps> = ({
  selectedServices,
  onOpenBooking,
}) => {
  if (selectedServices.length === 0) return null;

  const totalPrice = selectedServices.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: 'spring', damping: 24, stiffness: 300 }}
        className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-auto z-30 max-w-md mx-auto"
      >
        <div className="bg-[#211918]/95 backdrop-blur-md text-white px-5 py-3.5 rounded-full shadow-2xl border border-white/15 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#B47B75] text-white flex items-center justify-center text-xs font-bold">
              {selectedServices.length}
            </div>
            <div>
              <p className="text-xs text-[#E1CECC] leading-tight">
                {selectedServices.length === 1 ? '1 Behandlung gewählt' : `${selectedServices.length} Behandlungen`}
              </p>
              <p className="text-sm font-serif font-bold text-white tabular-nums">
                ca. {totalPrice} €
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-4 py-2 bg-white text-[#211918] hover:bg-[#F5ECE9] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-xs whitespace-nowrap"
          >
            <span>Termin buchen</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
