import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/servicesData';
import { getSalonOpenStatus } from '../utils/hoursHelper';
import { Language, Translations } from '../data/translations';
import logo9596Nails from '../assets/images/logo_9596_nails_1790291551289.jpg';

interface QuickContactSectionProps {
  lang: Language;
  t: Translations;
}

export const QuickContactSection: React.FC<QuickContactSectionProps> = ({ lang, t }) => {
  const openStatus = getSalonOpenStatus();

  return (
    <section id="contact" className="py-20 bg-[#FFF7FA] border-b border-[#F7DBE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D14F84] font-semibold">
            {t.quickContact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#29181E] mt-2">
            {t.quickContact.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#EE95B9] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-[#F6D2E1] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D14F84]">
                  {t.quickContact.studioLocation}
                </span>
                <span className="text-[11px] text-[#7A5B67] font-medium">
                  {t.quickContact.subLocation}
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#FCE8F0] border border-[#F6D2E1] mb-5">
                <iframe
                  title="9596 Nails Berlin Google Maps"
                  src="https://maps.google.com/maps?q=52.5168412,13.4324087&hl=de&z=16&output=embed"
                  className="w-full h-full border-0 filter contrast-95 brightness-95"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-xs border border-white flex items-center gap-2 text-xs text-[#2A181F] font-semibold">
                  <img
                    src={logo9596Nails}
                    alt="Logo"
                    className="w-4 h-4 rounded-full"
                  />
                  <span>9596 Nails Berlin</span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-bold text-[#27171D]">9596 Nails</p>
                <p className="text-xs text-[#6B505A]">
                  Frankfurter Allee / Boxhagener Kiez, 10247 Berlin
                </p>
                <p className="text-xs text-[#9B7786]">
                  {t.quickContact.addressNotes}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F8E2EC] mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#FCAECB] to-[#EE82AB] hover:from-[#FB9FBF] hover:to-[#E576A1] text-[#29141D] text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-[#5E263B]" />
                <span>{t.quickContact.directionsBtn}</span>
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#EBF7EE] text-[#1D6C37] hover:bg-[#DDF2E3] text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                <span>{t.quickContact.whatsappBtn}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-[#F6D2E1] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D14F84]">
                  {t.quickContact.openingTimes}
                </span>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className={`w-2 h-2 rounded-full ${openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <span className="font-semibold text-[#29171E]">{openStatus.statusText}</span>
                </div>
              </div>

              <div className="divide-y divide-[#FBEAF1]">
                {SALON_INFO.openingHours.map((schedule) => {
                  const isToday =
                    (new Date().getDay() === 0 && schedule.day === 'Sonntag') ||
                    (new Date().getDay() === 1 && schedule.day === 'Montag') ||
                    (new Date().getDay() === 2 && schedule.day === 'Dienstag') ||
                    (new Date().getDay() === 3 && schedule.day === 'Mittwoch') ||
                    (new Date().getDay() === 4 && schedule.day === 'Donnerstag') ||
                    (new Date().getDay() === 5 && schedule.day === 'Freitag') ||
                    (new Date().getDay() === 6 && schedule.day === 'Samstag');

                  const dayName =
                    lang === 'en'
                      ? schedule.day === 'Montag'
                        ? 'Monday'
                        : schedule.day === 'Dienstag'
                        ? 'Tuesday'
                        : schedule.day === 'Mittwoch'
                        ? 'Wednesday'
                        : schedule.day === 'Donnerstag'
                        ? 'Thursday'
                        : schedule.day === 'Freitag'
                        ? 'Friday'
                        : schedule.day === 'Samstag'
                        ? 'Saturday'
                        : 'Sunday'
                      : schedule.day;

                  return (
                    <div
                      key={schedule.day}
                      className={`py-2.5 flex items-center justify-between text-xs transition-colors ${isToday ? 'font-bold text-[#22161A] bg-[#FFF0F6] px-2.5 rounded-xl -mx-1 border border-[#FCE1EC]' : 'text-[#644B55]'}`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-[#D84A86]" />}
                        <span>{dayName}</span>
                      </div>
                      <span className={schedule.isClosed ? 'text-[#C95386] font-semibold' : 'tabular-nums font-medium'}>
                        {schedule.isClosed && lang === 'en' ? 'Closed' : schedule.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F8E2EC] mt-4 text-[11px] text-[#8C6B79]">
              <p><Clock className="inline w-3 h-3 mr-1" />{openStatus.nextInfo}</p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-6 sm:p-7 rounded-3xl border border-[#F6D2E1] shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D14F84] block mb-4">
                {t.quickContact.additionalInfo}
              </span>

              <ul className="space-y-4">
                {[
                  { title: 'Instant Confirmation', desc: lang === 'de' ? 'Sofortige Terminbestätigung per E-Mail oder WhatsApp.' : 'Fast confirmation via WhatsApp or Email.' },
                  { title: 'Custom Nail Art', desc: lang === 'de' ? 'Bringe gerne deine Inspirationsfotos oder TikToks mit.' : 'Bring your Pinterest or TikTok reference shots.' },
                  { title: 'Hygiene Standards', desc: lang === 'de' ? 'Autoklav-Sterilisation und desinfizierte Plätze.' : 'Medical autoclave sterilization for all metal bits.' },
                  { title: 'Loyalty Rewards', desc: lang === 'de' ? 'Treuebonus für wiederkehrende Stammkundinnen.' : 'Exclusive loyalty perks for returning clients.' },
                  { title: 'Gift Cards Available', desc: lang === 'de' ? 'Stilvolle Geschenkgutscheine im Studio erhältlich.' : 'Chic gift vouchers available at our studio desk.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D84A86] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#2A181F]">{item.title}</p>
                      <p className="text-[11px] text-[#6E4F5A] leading-snug">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-[#F8E2EC] mt-5">
              <span className="text-[11px] text-[#937180] block font-semibold">
                {t.quickContact.paymentOptions}
              </span>
              <p className="text-xs text-[#2A181F] font-medium mt-0.5">
                {t.quickContact.paymentMethods}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;
