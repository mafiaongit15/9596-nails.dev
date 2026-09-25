import { SALON_INFO } from '../data/servicesData';

export interface SalonOpenStatus {
  isOpen: boolean;
  statusText: string;
  nextInfo: string;
}

export function getSalonOpenStatus(): SalonOpenStatus {
  const now = new Date();
  const dayIndex = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday

  // Map 0-6 to SALON_INFO openingHours (0: Mon, 1: Tue, ..., 5: Sat, 6: Sun)
  const salonDayIndex = dayIndex === 0 ? 6 : dayIndex - 1;
  const todaySchedule = SALON_INFO.openingHours[salonDayIndex];

  if (todaySchedule.isClosed) {
    return {
      isOpen: false,
      statusText: 'Heute geschlossen',
      nextInfo: 'Öffnet Montag um 09:30 Uhr',
    };
  }

  const [openHour, openMin] = todaySchedule.open.split(':').map(Number);
  const [closeHour, closeMin] = todaySchedule.close.split(':').map(Number);

  const openTime = new Date(now);
  openTime.setHours(openHour, openMin, 0, 0);

  const closeTime = new Date(now);
  closeTime.setHours(closeHour, closeMin, 0, 0);

  if (now >= openTime && now < closeTime) {
    return {
      isOpen: true,
      statusText: 'Jetzt geöffnet',
      nextInfo: `Schließt heute um ${todaySchedule.close} Uhr`,
    };
  }

  if (now < openTime) {
    return {
      isOpen: false,
      statusText: 'Momentan geschlossen',
      nextInfo: `Öffnet heute um ${todaySchedule.open} Uhr`,
    };
  }

  // After closing
  const tomorrowDayIndex = (salonDayIndex + 1) % 7;
  const tomorrowSchedule = SALON_INFO.openingHours[tomorrowDayIndex];

  return {
    isOpen: false,
    statusText: 'Heute geschlossen',
    nextInfo: tomorrowSchedule.isClosed
      ? 'Öffnet Montag um 09:30 Uhr'
      : `Öffnet morgen um ${tomorrowSchedule.open} Uhr`,
  };
}
