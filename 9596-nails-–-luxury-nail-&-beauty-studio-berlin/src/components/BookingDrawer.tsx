import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  Clock,
  User,
  Trash2,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { ServiceItem, SALON_INFO } from '../data/servicesData';
import { Language, Translations } from '../data/translations';

interface BookingDrawerProps {
  isOpen: boolean;
  selectedServices: ServiceItem[];
  onClose: () => void;
  onRemoveService: (id: string) => void;
  onClearAll: () => void;
  lang: Language;
  t: Translations;
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  selectedServices,
  onClose,
  onRemoveService,
  onClearAll,
  lang,
  t,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>('14:00');
  const [selectedSpecialist, setSelectedSpecialist] = useState<string>('any');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('');
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const timeSlots = [
    '10:00',
    '11:15',
    '12:30',
    '13:45',
    '15:00',
    '16:15',
    '17:30',
    '18:15',
  ];

  const specialists = [
    { id: 'any', name: lang === 'de' ? 'Beliebige Stylistin (Frühester Termin)' : 'Any Stylist (First Available)' },
    { id: 'linh', name: 'Linh (Senior Nail Artist · 3D Art & Russian Tech)' },
    { id: 'elena', name: 'Elena (Lash & Brow Stylist · Russian Volume)' },
    { id: 'mia', name: 'Mia (Gel Extensions & Pedicure Specialist)' },
  ];

  // Calculate total price from numeric prices
  const totalPrice = selectedServices.reduce((sum, item) => sum + item.price, 0);

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) return;
    const ref = '9596-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsBooked(true);
  };

  const handleWhatsAppBooking = () => {
    const serviceList =
      selectedServices.length > 0
        ? selectedServices.map((s) => `• ${s.title} (${s.priceDisplay})`).join('\n')
        : lang === 'de' ? '• Beratung / Wunschbehandlung vor Ort' : '• Consultation / Custom Treatment';

    const specialistObj = specialists.find((s) => s.id === selectedSpecialist);

    const message =
      lang === 'de'
        ? `Hallo 9596 Nails Team! ✨\nIch möchte gerne einen Termin vereinbaren:\n\n*Behandlungen:*\n${serviceList}\n*Gesamt ca.:* ${totalPrice} € (Zahlung vor Ort)\n*Wunschtermin:* ${selectedDate}\n*Wunschuhrzeit:* ${selectedTime} Uhr\n*Stylistin:* ${specialistObj?.name || 'Beliebig'}\n*Name:* ${customerName || 'Noch nicht angegeben'}\n*Telefon:* ${customerPhone || '–'}\n${customerNotes ? `*Notizen:* ${customerNotes}\n` : ''}\nIst dieser Termin noch frei? Vielen Dank!`
        : `Hello 9596 Nails Team! ✨\nI would like to request an appointment:\n\n*Treatments:*\n${serviceList}\n*Total approx.:* ${totalPrice} € (Pay at salon)\n*Preferred Date:* ${selectedDate}\n*Preferred Time:* ${selectedTime}\n*Stylist:* ${specialistObj?.name || 'Any'}\n*Name:* ${customerName || 'Not specified'}\n*Phone:* ${customerPhone || '–'}\n${customerNotes ? `*Notes:* ${customerNotes}\n` : ''}\nIs this slot available? Thank you!`;

    const url = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const resetAndClose = () => {
    setIsBooked(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="w-screen max-w-md bg-[#FFF9FB] shadow-2xl border-l border-[#F7DBE6] flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 bg-white border-b border-[#F7DBE6] flex items-center justify-between sticky top-0 z-20">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D14F84] font-semibold">
                  {t.booking.badge}
                </span>
                <h2 className="text-xl font-serif font-bold text-[#29181E]">
                  {t.booking.title}
                </h2>
              </div>
              <button
                onClick={resetAndClose}
                className="w-8 h-8 rounded-full bg-[#FFE8F2] text-[#694855] hover:text-[#29181E] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-6 flex-1">
              {!isBooked ? (
                <>
                  {/* Selected Services List */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#6F4E5A]">
                        {t.booking.selectedServices} ({selectedServices.length})
                      </span>
                      {selectedServices.length > 0 && (
                        <button
                          onClick={onClearAll}
                          className="text-[11px] text-[#A84A74] hover:text-[#29181E] underline cursor-pointer"
                        >
                          {t.booking.clearAll}
                        </button>
                      )}
                    </div>

                    {selectedServices.length === 0 ? (
                      <div className="p-5 rounded-2xl bg-white border border-[#F8D4E3] text-center">
                        <p className="text-sm font-serif font-semibold text-[#29181E] mb-1">
                          {t.booking.emptyTitle}
                        </p>
                        <p className="text-xs text-[#70525E] leading-relaxed mb-3">
                          {t.booking.emptyDesc}
                        </p>
                        <a
                          href="#services"
                          onClick={onClose}
                          className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#D14F84] bg-[#FFE8F2] px-3.5 py-1.5 rounded-full hover:bg-[#FFD9E8] transition-colors"
                        >
                          <span>Zu den Behandlungen</span>
                          <span>→</span>
                        </a>
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {selectedServices.map((service) => (
                          <div
                            key={service.id}
                            className="p-3 bg-white rounded-xl border border-[#F6D0E1] flex items-center justify-between gap-3 shadow-2xs"
                          >
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-serif font-bold text-[#29181E] truncate">
                                {service.title}
                              </h4>
                              <div className="flex items-center gap-2 text-[11px] text-[#805C6B] mt-0.5">
                                <span>{service.duration}</span>
                                <span>•</span>
                                <span className="font-semibold text-[#29181E]">
                                  {service.priceDisplay}
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => onRemoveService(service.id)}
                              className="p-1.5 text-[#B87A91] hover:text-[#C93368] transition-colors cursor-pointer"
                              title="Entfernen"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}

                        <div className="p-3 rounded-xl bg-[#FFE8F2] border border-[#F8CADB] flex items-center justify-between text-xs">
                          <span className="font-serif font-medium text-[#704255]">
                            {t.booking.totalEst}
                          </span>
                          <span className="text-base font-serif font-bold text-[#29181E]">
                            {totalPrice} €
                          </span>
                        </div>
                        <p className="text-[10px] text-[#8A5A6D] text-right italic">
                          {lang === 'de' ? '• Zahlung bequem vor Ort im Salon' : '• Payment made in-person at the salon'}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Booking Inputs */}
                  <div className="space-y-4 pt-2 border-t border-[#F7DBE6]">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F4E5A] mb-1.5">
                        {t.booking.step1}
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#F6D0E1] rounded-xl text-xs sm:text-sm text-[#29181E] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F4E5A] mb-1.5">
                        {t.booking.step2}
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                              selectedTime === slot
                                ? 'bg-gradient-to-r from-[#FCAECB] to-[#EE82AB] text-[#29141D] shadow-xs'
                                : 'bg-white border border-[#F6D0E1] text-[#553641] hover:bg-[#FFF0F6]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F4E5A] mb-1.5">
                        {t.booking.step3}
                      </label>
                      <select
                        value={selectedSpecialist}
                        onChange={(e) => setSelectedSpecialist(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#F6D0E1] rounded-xl text-xs sm:text-sm text-[#29181E] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/50"
                      >
                        {specialists.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Customer Inputs */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F4E5A]">
                        {t.booking.step4}
                      </label>
                      <input
                        type="text"
                        placeholder={t.booking.namePlaceholder}
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#F6D0E1] rounded-xl text-xs text-[#29181E] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/50"
                      />
                      <input
                        type="tel"
                        placeholder={t.booking.phonePlaceholder}
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#F6D0E1] rounded-xl text-xs text-[#29181E] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/50"
                      />
                      <input
                        type="text"
                        placeholder={t.booking.notesPlaceholder}
                        value={customerNotes}
                        onChange={(e) => setCustomerNotes(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#F6D0E1] rounded-xl text-xs text-[#29181E] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/50"
                      />
                    </div>
                  </div>
                </>
              ) : (
                /* Booking Confirmed State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#1D6C37] flex items-center justify-center mx-auto mb-5 shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#D14F84] font-semibold">
                    {t.booking.confirmedTitle}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#29181E] mt-1 mb-2">
                    {t.booking.bookingCode}: {bookingRef}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6C505C] max-w-xs mx-auto leading-relaxed mb-6">
                    {t.booking.successMsg} ({selectedDate} @ {selectedTime} Uhr).
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-[#F6D2E1] text-left text-xs space-y-1.5 mb-6">
                    <p className="font-bold text-[#29181E]">9596 Nails &amp; Beauty Berlin</p>
                    <p className="text-[#6C505C]">📍 Frankfurter Allee / Boxhagener Kiez, Berlin</p>
                    <p className="text-[#6C505C]">⏰ Mo–Fr 09:30–19:00, Sa 10:00–17:00</p>
                    <p className="text-[#6C505C]">💳 Barzahlung, EC-Karte &amp; PayPal vor Ort</p>
                  </div>

                  <button
                    onClick={resetAndClose}
                    className="w-full py-3 bg-[#29181E] text-white rounded-full text-xs font-semibold hover:bg-black transition-colors"
                  >
                    {t.booking.doneBtn}
                  </button>
                </motion.div>
              )}
            </div>

            {/* Bottom Action Buttons */}
            {!isBooked && (
              <div className="p-5 sm:p-6 bg-white border-t border-[#F7DBE6] space-y-2.5 sticky bottom-0">
                {/* Official Treatwell Real-Time Booking */}
                <a
                  href={SALON_INFO.treatwellUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#1F1418] hover:bg-black text-white text-xs font-serif font-bold tracking-wider uppercase rounded-full flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] select-none"
                >
                  <Calendar className="w-4 h-4 text-[#FCAECB]" />
                  <span>{lang === 'de' ? 'Auf Treatwell buchen (Echtzeit)' : 'Book on Treatwell (Real-Time)'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                {/* 1-Click WhatsApp Booking */}
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t.booking.whatsappBtn}</span>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
