import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Send, Sparkles } from 'lucide-react';
import { Language, Translations } from '../data/translations';

interface ContactFormSectionProps {
  lang: Language;
  t: Translations;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ lang, t }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.agreed) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      message: '',
      agreed: false,
    });
  };

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-b from-[#FFF5F8] via-[#FFEDF4] to-[#FFF7FA] relative overflow-hidden">
      {/* Ambient pink glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFD5E5]/60 to-[#FCE3EE]/40 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D14F84] font-semibold block mb-1">
            {t.contactSection.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#29181E] mt-1">
            {t.contactSection.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#EE95B9] mx-auto mt-4" />
        </div>

        <div className="bg-white/95 backdrop-blur-md p-7 sm:p-10 rounded-3xl border border-[#F6D2E1] shadow-xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F4E5A] mb-2">
                    {t.contactSection.nameLabel} <span className="text-[#D84A86]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t.contactSection.namePlaceholder}
                    className="w-full px-4 py-3.5 bg-[#FFF9FB] border border-[#F4D1E0] rounded-xl text-xs sm:text-sm text-[#24171C] placeholder-[#AB8796] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/50 focus:border-[#EE7EA8] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F4E5A] mb-2">
                      {t.contactSection.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contactSection.phonePlaceholder}
                      className="w-full px-4 py-3.5 bg-[#FFF9FB] border border-[#F4D1E0] rounded-xl text-xs sm:text-sm text-[#24171C] placeholder-[#AB8796] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/50 focus:border-[#EE7EA8] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F4E5A] mb-2">
                      {t.contactSection.emailLabel} <span className="text-[#D84A86]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contactSection.emailPlaceholder}
                      className="w-full px-4 py-3.5 bg-[#FFF9FB] border border-[#F4D1E0] rounded-xl text-xs sm:text-sm text-[#24171C] placeholder-[#AB8796] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/50 focus:border-[#EE7EA8] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F4E5A] mb-2">
                    {t.contactSection.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contactSection.messagePlaceholder}
                    className="w-full px-4 py-3.5 bg-[#FFF9FB] border border-[#F4D1E0] rounded-xl text-xs sm:text-sm text-[#24171C] placeholder-[#AB8796] focus:outline-none focus:ring-2 focus:ring-[#EE7EA8]/50 focus:border-[#EE7EA8] transition-all resize-none"
                  />
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="privacyPolicyAgree"
                    required
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="w-4 h-4 rounded border-[#E8BACD] text-[#D84A86] focus:ring-[#EE7EA8] cursor-pointer"
                  />
                  <label htmlFor="privacyPolicyAgree" className="text-xs text-[#72535F] cursor-pointer">
                    {t.contactSection.privacyAgree}{' '}
                    <span className="underline hover:text-[#D84A86]">
                      {t.contactSection.privacyLink}
                    </span>{' '}
                    {lang === 'de' ? 'und die Datenverarbeitung.' : 'and data processing.'}
                  </label>
                </div>

                {/* Light pink submit button matching the user's logo theme */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-[#FCA5C6] via-[#F88AB5] to-[#EE7EA8] hover:from-[#FB96BC] hover:to-[#E46F9B] text-[#29141D] font-bold text-xs uppercase tracking-[0.22em] rounded-full transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? t.contactSection.submittingBtn : t.contactSection.submitBtn}
                </button>
              </motion.form>
            ) : (
              /* Thank You Card */
              <motion.div
                key="thankyou"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#1D6C37] flex items-center justify-center mx-auto mb-5 shadow-xs">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="text-3xl font-serif text-[#29181E] tracking-wide mb-3">
                  {t.contactSection.thankYouTitle}
                </h3>
                <p className="text-sm text-[#6C525D] max-w-sm mx-auto leading-relaxed mb-8">
                  {t.contactSection.thankYouMsg}
                </p>
                <button
                  onClick={handleReset}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#FCA5C6] to-[#EE7EA8] text-[#29141D] text-xs font-bold uppercase tracking-[0.18em] rounded-full transition-all cursor-pointer shadow-md hover:brightness-105"
                >
                  {t.contactSection.backHomeBtn}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
