import React from 'react';

export const EitaaIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.5c-.8.8-2 1.3-3.8 1.3-2.5 0-4.3-.9-5.4-2.7l1.7-1.1c.7 1.2 2 1.8 3.7 1.8 1.1 0 1.9-.3 2.4-.8.5-.5.7-1.1.7-1.9 0-.9-.3-1.5-.9-2-.6-.5-1.5-.9-2.7-1.2-1.6-.4-2.8-.9-3.6-1.6-.8-.7-1.2-1.7-1.2-2.9 0-1.4.5-2.5 1.5-3.3C9.2 3.4 10.6 3 12.3 3c2.1 0 3.7.7 4.8 2.1l-1.6 1.2c-.7-.9-1.8-1.4-3.2-1.4-1 0-1.8.3-2.3.8-.5.5-.7 1.1-.7 1.8 0 .8.3 1.4.8 1.8.5.5 1.4.8 2.5 1.1 1.7.4 3 .9 3.8 1.7.8.8 1.3 1.8 1.3 3.1 0 1.5-.6 2.7-1.9 3.3z" opacity="0" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.2 3.65c2.4 0 4.1 1.2 4.1 3.2 0 1.6-.9 2.7-2.3 3.3 1.8.6 2.8 1.9 2.8 3.7 0 2.4-2 3.9-4.8 3.9-2.8 0-4.7-1.4-4.7-3.6 0-1.2.6-2.2 1.6-2.8-1.2-.7-1.8-1.8-1.8-3.1 0-2.3 2.1-4.6 5.1-4.6zm-1.8 6.1c1.2 0 2.1-.8 2.1-1.9 0-1-.8-1.8-2-1.8-1.3 0-2.1.8-2.1 1.8 0 1.1.8 1.9 2 1.9zm.3 6.2c1.6 0 2.6-.9 2.6-2.2 0-1.4-1.1-2.2-2.7-2.2-1.6 0-2.6.9-2.6 2.2 0 1.3 1 2.2 2.7 2.2z" />
  </svg>
);

export const BaleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
    <path d="M16.5 8.5C16.5 8.5 13.5 6.5 10 7C6.5 7.5 5.5 11 6.5 13.5C7.5 16 10 17.5 13.5 17C17 16.5 18 13.5 17.5 11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M9.5 11.5L12 14L18 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const RubikaIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L3.5 6.9V17.1L12 22L20.5 17.1V6.9L12 2ZM11.15 4.22V10.87L5.35 7.52L11.15 4.22ZM12.85 4.22L18.65 7.52L12.85 10.87V4.22ZM4.5 9L10.3 12.35L4.5 15.7V9ZM19.5 9V15.7L13.7 12.35L19.5 9ZM12.85 13.83L18.65 17.18L12.85 20.48V13.83ZM11.15 20.48L5.35 17.18L11.15 13.83V20.48Z" />
  </svg>
);

export const TelegramIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

export const MessengerIconMap: Record<string, React.FC<{ className?: string }>> = {
  eitaa: EitaaIcon,
  bale: BaleIcon,
  rubika: RubikaIcon,
  telegram: TelegramIcon,
};
