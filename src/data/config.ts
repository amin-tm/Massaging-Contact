/**
 * ========================================================
 * تنظیمات و اطلاعات ارتباطی دفتر تایپ نیکبخت
 * ========================================================
 * تمام اطلاعات و آدرس‌ها به راحتی از این فایل قابل ویرایش هستند.
 */

export interface MessengerItem {
  id: string;
  name: string;
  persianName: string;
  username: string;
  url: string;
  appDeepLink?: string;
  badge?: string;
  themeColor: string;
  gradient: string;
  iconBg: string;
  borderGlow: string;
  description: string;
}

export const SITE_CONFIG = {
  // اطلاعات دفتر
  officeName: "تایپ نیکبخت",
  officeEnglishName: "Type Nikbakht",
  statusText: "پاسخگویی آنلاین در تمام پیام‌رسان‌ها",
  
  // شماره تماس
  phone: {
    raw: "09033888779",
    formatted: "۰۹۰۳ ۳۸۸ ۸۷۷۹",
    international: "+989033888779",
  },

  // آیدی مشترک در تمام شبکه‌های اجتماعی
  commonUsername: "typenikbakht",
  commonUsernameDisplay: "@typenikbakht",

  /**
   * 🔗 آدرس سرور برای ارسال و آپلود فایل
   * شما می‌توانید این آدرس را با لینک دلخواه خود جایگزین کنید.
   * مثال: "https://upload.yourdomain.ir" یا فرم آپلود اختصاصی
   */
  serverUploadUrl: "https://typenikbakht.ir/upload",
  serverUploadLabel: "ارسال و بارگذاری فایل روی سرور",
  serverUploadSublabel: "آپلود مستقیم مدارک و اسناد بدون افت کیفیت",

  // پیام‌رسان‌ها
  messengers: [
    {
      id: "eitaa",
      name: "Eitaa",
      persianName: "ایتا",
      username: "@typenikbakht",
      url: "https://eitaa.com/typenikbakht",
      appDeepLink: "eitaa://typenikbakht",
      badge: "پیشنهادی",
      themeColor: "#F58220",
      gradient: "from-[#F58220] to-[#E36002]",
      iconBg: "bg-orange-500/15 text-orange-400 border-orange-500/30",
      borderGlow: "hover:border-orange-500/60 hover:shadow-[0_0_20px_rgba(245,130,32,0.25)]",
      description: "گفت‌وگوی سریع در پیام‌رسان ایتا",
    },
    {
      id: "bale",
      name: "Bale",
      persianName: "بله",
      username: "@typenikbakht",
      url: "https://ble.ir/typenikbakht",
      appDeepLink: "ble://typenikbakht",
      badge: "فعال",
      themeColor: "#08B294",
      gradient: "from-[#08B294] to-[#008F74]",
      iconBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      borderGlow: "hover:border-emerald-500/60 hover:shadow-[0_0_20px_rgba(8,178,148,0.25)]",
      description: "ارتباط و ارسال اسناد در پیام‌رسان بله",
    },
    {
      id: "rubika",
      name: "Rubika",
      persianName: "روبیکا",
      username: "@typenikbakht",
      url: "https://rubika.ir/typenikbakht",
      appDeepLink: "rubika://typenikbakht",
      badge: "فعال",
      themeColor: "#8338EC",
      gradient: "from-[#8338EC] to-[#601ABF]",
      iconBg: "bg-purple-500/15 text-purple-400 border-purple-500/30",
      borderGlow: "hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(131,56,236,0.25)]",
      description: "پاسخگویی در روبیکا",
    },
    {
      id: "telegram",
      name: "Telegram",
      persianName: "تلگرام",
      username: "@typenikbakht",
      url: "https://t.me/typenikbakht",
      appDeepLink: "tg://resolve?domain=typenikbakht",
      badge: "بین‌المللی",
      themeColor: "#229ED9",
      gradient: "from-[#2AABEE] to-[#1785BE]",
      iconBg: "bg-sky-500/15 text-sky-400 border-sky-500/30",
      borderGlow: "hover:border-sky-500/60 hover:shadow-[0_0_20px_rgba(34,158,217,0.25)]",
      description: "ارتباط مستقیم در تلگرام",
    },
  ] as MessengerItem[],
};
