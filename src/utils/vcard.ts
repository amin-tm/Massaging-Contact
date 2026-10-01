import confetti from 'canvas-confetti';
import { SITE_CONFIG } from '../data/config';

export function generateVCard(): string {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN;CHARSET=UTF-8:${SITE_CONFIG.officeName}`,
    `N;CHARSET=UTF-8:نیکبخت;تایپ;;;`,
    `ORG;CHARSET=UTF-8:${SITE_CONFIG.officeName}`,
    `TITLE;CHARSET=UTF-8:دفتر تایپ و خدمات فنی نیکبخت`,
    `TEL;TYPE=CELL,VOICE,PREF:${SITE_CONFIG.phone.raw}`,
    `NOTE;CHARSET=UTF-8:آیدی در تمام پیام‌رسان‌ها (ایتا، بله، روبیکا، تلگرام): @${SITE_CONFIG.commonUsername}\\nشماره تماس: ${SITE_CONFIG.phone.raw}`,
    `URL:${SITE_CONFIG.messengers[0]?.url || 'https://eitaa.com/typenikbakht'}`,
    `X-SOCIALPROFILE;type=telegram:https://t.me/${SITE_CONFIG.commonUsername}`,
    `X-SOCIALPROFILE;type=eitaa:https://eitaa.com/${SITE_CONFIG.commonUsername}`,
    `X-SOCIALPROFILE;type=bale:https://ble.ir/${SITE_CONFIG.commonUsername}`,
    `X-SOCIALPROFILE;type=rubika:https://rubika.ir/${SITE_CONFIG.commonUsername}`,
    'REV:' + new Date().toISOString(),
    'END:VCARD',
  ].join('\r\n');

  return vcard;
}

export function downloadVCard(): boolean {
  try {
    const vcardContent = generateVCard();
    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Type-Nikbakht-09033888779.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Revoke URL after a small delay
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);

    // Fire celebratory confetti!
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#0B63C5', '#F58220', '#08B294', '#8338EC', '#FFD166'],
      disableForReducedMotion: true,
    });

    return true;
  } catch (error) {
    console.error('Error generating vCard:', error);
    return false;
  }
}
