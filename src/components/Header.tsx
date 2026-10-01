import React from 'react';
import { QrCode, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { OfficeLogo } from './OfficeLogo';

interface HeaderProps {
  onOpenQR: () => void;
  onShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQR, onShare }) => {
  return (
    <header className="w-full flex flex-col items-center relative text-center">
      {/* Top Status & Quick Action Bar */}
      <div className="w-full flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>پاسخگویی آنلاین در پیام‌رسان‌ها</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenQR}
            className="p-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 active:scale-95 transition flex items-center justify-center"
            title="نمایش بارکد QR"
            aria-label="نمایش کیو‌آرکد"
          >
            <QrCode className="w-4 h-4 text-blue-400" />
          </button>

          <button
            onClick={onShare}
            className="p-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 active:scale-95 transition flex items-center justify-center"
            title="اشتراک‌گذاری صفحه"
            aria-label="اشتراک‌گذاری"
          >
            <Share2 className="w-4 h-4 text-blue-400" />
          </button>
        </div>
      </div>

      {/* Main Branding Logo & Title */}
      <div className="flex flex-col items-center">
        {/* Logo Container with Glowing Halo */}
        <div className="relative group cursor-pointer">
          {/* Animated Glow Aura */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-amber-500 to-indigo-600 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />
          
          {/* Circular Logo */}
          <div className="relative rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-blue-500 to-indigo-500 shadow-xl">
            <OfficeLogo className="w-16 h-16 sm:w-18 sm:h-18" />
          </div>

          {/* Verified Badge Icon */}
          <div className="absolute bottom-0 left-0 bg-blue-600 text-white rounded-full p-0.5 border-2 border-slate-950 shadow-md">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

        {/* Office Title */}
        <div className="mt-1.5 flex items-center justify-center gap-1.5">
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-sm flex items-center gap-1">
            <span>{SITE_CONFIG.officeName}</span>
          </h1>
          <Sparkles className="w-4 h-4 text-amber-400" />
        </div>

        {/* Subtitle */}
        <p className="text-[11px] sm:text-xs text-slate-400 font-normal mt-0.5">
          درگاه ارتباطی در پیام‌رسان‌های بله، ایتا، روبیکا و تلگرام
        </p>
      </div>
    </header>
  );
};
