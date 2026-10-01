import React, { useState } from 'react';
import { Phone, Copy, Check, UserPlus } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { downloadVCard } from '../utils/vcard';

interface PhoneSectionProps {
  onShowToast: (msg: string, icon?: 'check' | 'copy' | 'sparkle') => void;
}

export const PhoneSection: React.FC<PhoneSectionProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SITE_CONFIG.phone.raw);
    setCopied(true);
    onShowToast(`شماره ${SITE_CONFIG.phone.formatted} کپی شد`, 'copy');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveContact = () => {
    setIsSaving(true);
    const success = downloadVCard();
    if (success) {
      onShowToast(`مخاطب «${SITE_CONFIG.officeName}» آماده ذخیره شد`, 'sparkle');
    }
    setTimeout(() => setIsSaving(false), 1500);
  };

  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 backdrop-blur-xl border border-white/10 p-3 sm:p-3.5 shadow-xl relative overflow-hidden group">
      {/* Subtle background glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/15 transition duration-500" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/15 transition duration-500" />

      <div className="relative flex flex-col gap-2.5">
        {/* Main Phone Bar */}
        <div className="flex items-center justify-between gap-2">
          {/* Phone Icon & Number */}
          <a
            href={`tel:${SITE_CONFIG.phone.raw}`}
            className="flex items-center gap-2.5 flex-1 min-w-0 group/call"
            title="تماس مستقیم با دفتر"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover/call:scale-105 active:scale-95 transition shrink-0">
              <Phone className="w-5 h-5 animate-bounce" />
            </div>

            <div className="flex flex-col text-right">
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                <span>شماره تماس دفتر</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </span>
              <span className="text-base sm:text-lg font-black text-white tracking-wide font-mono dir-ltr select-all">
                {SITE_CONFIG.phone.formatted}
              </span>
            </div>
          </a>

          {/* Copy Number Action */}
          <button
            onClick={handleCopyPhone}
            className={`p-2 rounded-xl border transition-all duration-200 active:scale-90 flex items-center gap-1.5 text-xs font-semibold shrink-0 ${
              copied
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            title="کپی شماره"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="hidden xs:inline">کپی شد</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="hidden xs:inline">کپی</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons Row: Direct Call & Save Contact */}
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/5">
          {/* Direct Call Button */}
          <a
            href={`tel:${SITE_CONFIG.phone.raw}`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>تماس تلفنی</span>
          </a>

          {/* Add to Contacts Button */}
          <button
            onClick={handleSaveContact}
            disabled={isSaving}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition disabled:opacity-75"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>{isSaving ? 'در حال ایجاد...' : 'افزودن به مخاطبین'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
