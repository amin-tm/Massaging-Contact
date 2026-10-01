import React from 'react';
import { X, QrCode, Share2, Copy } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://typenikbakht.ir';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    onShowToast('لینک صفحه با موفقیت کپی شد');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: SITE_CONFIG.officeName,
          text: `راه‌های ارتباطی ${SITE_CONFIG.officeName} در پیام‌رسان‌ها (بله، ایتا، روبیکا، تلگرام) | شماره تماس: ${SITE_CONFIG.phone.raw}`,
          url: currentUrl,
        });
      } catch {
        // User dismissed share
      }
    } else {
      handleCopyLink();
    }
  };

  // Generate a high quality QR code SVG matrix using Google Chart API / QR Server fallback image
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
    currentUrl
  )}&color=0B63C5&bgcolor=FFFFFF&margin=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-700/70 p-5 shadow-2xl relative text-slate-100 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          aria-label="بستن"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2 mb-1 mt-1 text-blue-400">
          <QrCode className="w-5 h-5" />
          <h3 className="font-bold text-lg text-white">کیو‌آرکد ارتباط سریع</h3>
        </div>
        <p className="text-xs text-slate-400 text-center mb-4">
          برای دسترسی سریع، بارکد زیر را با دوربین گوشی اسکن کنید
        </p>

        {/* QR Code Container */}
        <div className="p-3 bg-white rounded-2xl shadow-inner border border-slate-200 flex flex-col items-center justify-center relative group">
          <img
            src={qrImageUrl}
            alt="QR Code"
            className="w-48 h-48 rounded-lg object-contain"
            loading="eager"
          />
          <div className="absolute inset-0 bg-blue-900/10 rounded-2xl pointer-events-none" />
        </div>

        {/* Info */}
        <div className="mt-3 text-center">
          <div className="text-sm font-semibold text-slate-200">{SITE_CONFIG.officeName}</div>
          <div className="text-xs font-mono text-blue-400 dir-ltr">{SITE_CONFIG.phone.raw}</div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 w-full mt-4">
          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-xs font-medium text-slate-200 border border-slate-700 transition"
          >
            <Copy className="w-3.5 h-3.5 text-blue-400" />
            <span>کپی لینک صفحه</span>
          </button>
          
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 text-xs font-semibold text-white shadow-lg shadow-blue-600/30 transition"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>اشتراک‌گذاری</span>
          </button>
        </div>
      </div>
    </div>
  );
};
