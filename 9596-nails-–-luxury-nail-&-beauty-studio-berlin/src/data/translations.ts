export type Language = 'de' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    ourWork: string;
    services: string;
    contact: string;
    faq: string;
    bookAppointment: string;
    openNow: string;
    closedNow: string;
    switchLang: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    headlinePart3: string;
    description: string;
    bookOnline: string;
    viewServices: string;
    viewWork: string;
    ratingText: string;
    ratingSource: string;
    hygieneText: string;
    productsText: string;
    signatureStyle: string;
    signatureSub: string;
    popular: string;
    directWhatsapp: string;
  };
  whyChoose: {
    subtitle: string;
    title: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
  ourWork: {
    subtitle: string;
    title: string;
    description: string;
    filterAll: string;
    filter3D: string;
    filterChrome: string;
    filterTribal: string;
    filterFrench: string;
    instagramFollow: string;
    tiktokFollow: string;
    tagLabel: string;
    closeModal: string;
  };
  manifesto: {
    brandSubtitle: string;
    text: string;
    browseServices: string;
  };
  services: {
    badge: string;
    title: string;
    description: string;
    searchPlaceholder: string;
    detailsBtn: string;
    selectBtn: string;
    selectedBtn: string;
    priceLabel: string;
    noResultsTitle: string;
    noResultsDesc: string;
    resetFilter: string;
    bestseller: string;
  };
  contactSection: {
    badge: string;
    title: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    privacyAgree: string;
    privacyLink: string;
    submitBtn: string;
    submittingBtn: string;
    thankYouTitle: string;
    thankYouMsg: string;
    backHomeBtn: string;
  };
  quickContact: {
    badge: string;
    title: string;
    studioLocation: string;
    subLocation: string;
    addressNotes: string;
    directionsBtn: string;
    whatsappBtn: string;
    openingTimes: string;
    additionalInfo: string;
    paymentOptions: string;
    paymentMethods: string;
  };
  faq: {
    badge: string;
    title: string;
  };
  booking: {
    badge: string;
    title: string;
    selectedServices: string;
    clearAll: string;
    emptyTitle: string;
    emptyDesc: string;
    totalEst: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    notesPlaceholder: string;
    whatsappBtn: string;
    confirmBtn: string;
    confirmedTitle: string;
    bookingCode: string;
    successMsg: string;
    doneBtn: string;
  };
  cartBar: {
    singleItem: string;
    multiItem: string;
    approx: string;
    bookBtn: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      ourWork: 'Our Work',
      services: 'Behandlungen',
      contact: 'Kontakt & Anfahrt',
      faq: 'FAQ',
      bookAppointment: 'Termin buchen',
      openNow: 'Jetzt geöffnet',
      closedNow: 'Momentan geschlossen',
      switchLang: 'EN',
    },
    hero: {
      badge: 'Berlin Friedrichshain · Exklusives Nagelstudio',
      headlinePart1: 'Indulge in',
      headlinePart2: 'Luxury Nail',
      headlinePart3: 'Beauty Treatments',
      description: 'Willkommen bei 9596 Nails. Erlebe vollendete Präzision in Maniküre, Pediküre, Nagelmodellage und Wimpernverlängerung. Wir kreieren meisterhafte Nail Art und tiefenwirksame Pflege in entspannter Luxus-Atmosphäre.',
      bookOnline: 'Termin online buchen',
      viewServices: 'Behandlungen ansehen',
      viewWork: 'Our Work Galerie',
      ratingText: '5.0 Bewertung',
      ratingSource: '(Google & Treatwell)',
      hygieneText: '100% Medizinische Hygiene & Autoklav',
      productsText: 'Premium UV-Gele & Shellac',
      signatureStyle: 'Signature Style',
      signatureSub: '3D Floral & Y2K Liquid Chrome',
      popular: 'Beliebt',
      directWhatsapp: 'Direkt auf WhatsApp schreiben',
    },
    whyChoose: {
      subtitle: 'Unsere Philosophie',
      title: 'Why Choose Us?',
      card1Title: 'Luxusbehandlungen',
      card1Desc: 'Erlebe maßgeschneiderte Nail-Couture und Entspannung mit nährenden Ölen, japanischer Glanzpolitur und moderner russischer Präzisionstechnik.',
      card2Title: 'Premium Produkte',
      card2Desc: 'Wir verwenden dermatologisch geprüfte, geruchsarme UV-Gele, originalen Shellac und hochreine Magnet- & Chromepigmente für maximale Haltbarkeit.',
      card3Title: 'Zertifizierte Meister',
      card3Desc: 'Unsere erfahrenen Nail- & Lash-Artists bilden sich kontinuierlich fort. Höchste Handwerkskunst, absolute Sauberkeit und perfekte Konturen.',
      card4Title: 'Entspannte Wohlfühloase',
      card4Desc: 'Lehne dich zurück in unserem stilvollen Berliner Studio mit sanfter Musik, Rosé-Ästhetik und warmherzigem Service.',
    },
    ourWork: {
      subtitle: 'Exklusive Handwerkskunst',
      title: 'Our Work',
      description: 'Echte Arbeiten direkt aus unserem Berliner Studio: Von filigranen 3D-Kirschblüten, handgesetzten Swarovski-Kristallen bis zu modernem Y2K Liquid Chrome.',
      filterAll: 'Alle Designs',
      filter3D: '3D Blüten & Charms',
      filterChrome: 'Chrome & Metallic',
      filterTribal: 'Liquid Chrome & Tribal',
      filterFrench: 'French & Nail Art',
      instagramFollow: 'Mehr auf Instagram',
      tiktokFollow: 'Videos auf TikTok',
      tagLabel: 'Design-Kategorie',
      closeModal: 'Schließen',
    },
    manifesto: {
      brandSubtitle: '9596 Nails Berlin · Estd 2025',
      text: 'Nail and beauty salon offering manicures and pedicures with luxury treatments, nail extensions, overlays with acrylic and gel polishes, and bespoke lash & brow art.',
      browseServices: 'Alle Behandlungen ansehen',
    },
    services: {
      badge: '9596 Nails Treatment Menu',
      title: 'Luxury Nail & Beauty Treatments',
      description: 'Wähle deine gewünschten Behandlungen aus, lies alle Details und reserviere deinen Wunschtermin online oder via WhatsApp.',
      searchPlaceholder: 'Behandlung suchen...',
      detailsBtn: 'Details anzeigen',
      selectBtn: 'Auswählen',
      selectedBtn: 'Ausgewählt',
      priceLabel: 'Preis',
      noResultsTitle: 'Keine Behandlungen gefunden',
      noResultsDesc: 'Bitte überprüfe deine Suchbegriffe oder wähle eine andere Kategorie.',
      resetFilter: 'Filter zurücksetzen',
      bestseller: 'Bestseller',
    },
    contactSection: {
      badge: '9596 Nails Berlin',
      title: 'Get in Touch with Us',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Jessica Miller',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+49 176 1234567',
      emailLabel: 'Email',
      emailPlaceholder: 'hello@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message or inquiry here...',
      privacyAgree: 'I agree to the',
      privacyLink: 'Privacy Policy',
      submitBtn: 'JETZT NACHRICHT SENDEN',
      submittingBtn: 'WIRD GESENDET...',
      thankYouTitle: 'THANK YOU!',
      thankYouMsg: 'Thank you for filling out your information! Your submission has been sent. Unser 9596 Nails Team meldet sich schnellstmöglich bei dir.',
      backHomeBtn: 'ZURÜCK ZUR STARTSEITE',
    },
    quickContact: {
      badge: 'Standort & Besuchszeiten',
      title: 'Quick Contact',
      studioLocation: 'Studio Standort',
      subLocation: 'Berlin Friedrichshain',
      addressNotes: 'U-Bahn & S-Bahn fußläufig erreichbar · Parkplätze im Kiez vorhanden',
      directionsBtn: 'DIRECTIONS →',
      whatsappBtn: 'WhatsApp',
      openingTimes: 'Öffnungszeiten',
      additionalInfo: 'Additional Information',
      paymentOptions: 'Zahlungsmöglichkeiten',
      paymentMethods: 'Barzahlung · EC-Karte · Kreditkarte · Apple Pay',
    },
    faq: {
      badge: 'Wissenswertes',
      title: 'Frequently Asked Questions',
    },
    booking: {
      badge: 'Terminplaner',
      title: 'Deine Terminauswahl',
      selectedServices: 'Ausgewählte Services',
      clearAll: 'Alle leeren',
      emptyTitle: 'Noch keine Behandlung ausgewählt',
      emptyDesc: 'Klicke im Behandlungsmenü auf "Auswählen", um Behandlungen hinzuzufügen.',
      totalEst: 'Gesamtpreis ca.',
      step1: '1. Wunschtermin wählen',
      step2: '2. Uhrzeit wählen',
      step3: '3. Stylistin (optional)',
      step4: '4. Kontaktdaten',
      namePlaceholder: 'Dein Vor- und Nachname',
      phonePlaceholder: 'Telefonnummer (für Bestätigung)',
      notesPlaceholder: 'Design-Wunsch / Anmerkungen (z.B. Chrome, Babyboomer)',
      whatsappBtn: '1-Klick WhatsApp Anfrage',
      confirmBtn: 'Online verbindlich anfragen',
      confirmedTitle: 'Termin erfolgreich angefragt',
      bookingCode: 'Buchungs-Code',
      successMsg: 'Vielen Dank! Wir haben deine Reservierung vorgemerkt.',
      doneBtn: 'Fertig & Zurück',
    },
    cartBar: {
      singleItem: '1 Behandlung gewählt',
      multiItem: 'Behandlungen gewählt',
      approx: 'ca.',
      bookBtn: 'Termin buchen',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      ourWork: 'Our Work',
      services: 'Treatments',
      contact: 'Contact & Location',
      faq: 'FAQ',
      bookAppointment: 'Book Appointment',
      openNow: 'Open Now',
      closedNow: 'Currently Closed',
      switchLang: 'DE',
    },
    hero: {
      badge: 'Berlin Friedrichshain · Exclusive Nail Studio',
      headlinePart1: 'Indulge in',
      headlinePart2: 'Luxury Nail',
      headlinePart3: 'Beauty Treatments',
      description: 'Welcome to 9596 Nails. Experience impeccable craftsmanship in manicures, pedicures, nail extensions and lash design. We craft bespoke nail art and nourishing care in a peaceful luxury atmosphere.',
      bookOnline: 'Book Appointment Online',
      viewServices: 'Explore Services',
      viewWork: 'Our Work Gallery',
      ratingText: '5.0 Rating',
      ratingSource: '(Google & Treatwell)',
      hygieneText: '100% Medical Hygiene & Autoclave',
      productsText: 'Premium UV Gels & Shellac',
      signatureStyle: 'Signature Style',
      signatureSub: '3D Florals & Y2K Liquid Chrome',
      popular: 'Popular',
      directWhatsapp: 'Chat directly on WhatsApp',
    },
    whyChoose: {
      subtitle: 'Our Philosophy',
      title: 'Why Choose Us?',
      card1Title: 'Luxury Treatments',
      card1Desc: 'Bespoke nail couture and deep relaxation with nourishing botanical oils, Japanese buffing, and modern Russian dry manicure technique.',
      card2Title: 'Premium Products',
      card2Desc: 'We use dermatologically tested, low-odor UV gels, authentic Shellac, and ultra-fine mirror and magnetic pigments for unmatched longevity.',
      card3Title: 'Certified Professionals',
      card3Desc: 'Our experienced master nail and lash stylists continuously train to deliver pristine symmetry, cleanliness, and intricate freehand art.',
      card4Title: 'Relaxing Atmosphere',
      card4Desc: 'Unwind in our chic Berlin studio designed with calm pastel aesthetics, soothing soundscapes, and hospitable care.',
    },
    ourWork: {
      subtitle: 'Exclusive Artistry',
      title: 'Our Work',
      description: 'Real client designs created directly at our Berlin studio: From delicate 3D cherry blossoms and Swarovski crystals to modern Y2K liquid chrome.',
      filterAll: 'All Designs',
      filter3D: '3D Florals & Charms',
      filterChrome: 'Chrome & Metallic',
      filterTribal: 'Liquid Chrome & Tribal',
      filterFrench: 'French & Nail Art',
      instagramFollow: 'Follow on Instagram',
      tiktokFollow: 'Watch on TikTok',
      tagLabel: 'Design Category',
      closeModal: 'Close',
    },
    manifesto: {
      brandSubtitle: '9596 Nails Berlin · Estd 2025',
      text: 'Nail and beauty salon offering manicures and pedicures with luxury treatments, nail extensions, overlays with acrylic and gel polishes, and bespoke lash & brow art.',
      browseServices: 'Browse All Services',
    },
    services: {
      badge: '9596 Nails Treatment Menu',
      title: 'Luxury Nail & Beauty Treatments',
      description: 'Choose your desired treatments, view in-depth details, and reserve your appointment online or directly via WhatsApp.',
      searchPlaceholder: 'Search treatments...',
      detailsBtn: 'View Details',
      selectBtn: 'Select',
      selectedBtn: 'Selected',
      priceLabel: 'Price',
      noResultsTitle: 'No treatments found',
      noResultsDesc: 'Please adjust your search keywords or select a different category.',
      resetFilter: 'Reset Filter',
      bestseller: 'Bestseller',
    },
    contactSection: {
      badge: '9596 Nails Berlin',
      title: 'Get in Touch with Us',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Jessica Miller',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+49 176 1234567',
      emailLabel: 'Email',
      emailPlaceholder: 'hello@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message or inquiry here...',
      privacyAgree: 'I agree to the',
      privacyLink: 'Privacy Policy',
      submitBtn: 'SUBMIT NOW',
      submittingBtn: 'SENDING...',
      thankYouTitle: 'THANK YOU!',
      thankYouMsg: 'Thank you for filling out your information! Your submission has been sent. The 9596 Nails team will get back to you shortly.',
      backHomeBtn: 'BACK TO THE HOMEPAGE',
    },
    quickContact: {
      badge: 'Location & Visiting Hours',
      title: 'Quick Contact',
      studioLocation: 'Studio Location',
      subLocation: 'Berlin Friedrichshain',
      addressNotes: 'Metro & suburban train stations within walking distance · Neighborhood street parking',
      directionsBtn: 'DIRECTIONS →',
      whatsappBtn: 'WhatsApp',
      openingTimes: 'Opening Hours',
      additionalInfo: 'Additional Information',
      paymentOptions: 'Payment Options',
      paymentMethods: 'Cash · EC Card · Credit Card · Apple Pay',
    },
    faq: {
      badge: 'Good to Know',
      title: 'Frequently Asked Questions',
    },
    booking: {
      badge: 'Appointment Planner',
      title: 'Your Appointment Selection',
      selectedServices: 'Selected Services',
      clearAll: 'Clear all',
      emptyTitle: 'No treatments selected yet',
      emptyDesc: 'Click "Select" on any treatment in the menu to add it to your appointment.',
      totalEst: 'Total estimated',
      step1: '1. Select Preferred Date',
      step2: '2. Select Time Slot',
      step3: '3. Specialist (optional)',
      step4: '4. Contact Details',
      namePlaceholder: 'Your Full Name',
      phonePlaceholder: 'Phone Number (for confirmation)',
      notesPlaceholder: 'Design requests / Notes (e.g., Chrome, Babyboomer)',
      whatsappBtn: '1-Click WhatsApp Booking',
      confirmBtn: 'Book Online Now',
      confirmedTitle: 'Appointment Requested Successfully',
      bookingCode: 'Booking Code',
      successMsg: 'Thank you! We have logged your appointment request.',
      doneBtn: 'Done & Return',
    },
    cartBar: {
      singleItem: 'treatment selected',
      multiItem: 'treatments selected',
      approx: 'approx.',
      bookBtn: 'Book Appointment',
    },
  },
};
