import { useState } from 'react';
import { SITE_CONFIG } from './data/config';
import { Header } from './components/Header';
import { PhoneSection } from './components/PhoneSection';
import { MessengerGrid } from './components/MessengerGrid';
import { FileUploadSection } from './components/FileUploadSection';
import { QRCodeModal } from './components/QRCodeModal';
import { Toast } from './components/Toast';

export function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastIcon, setToastIcon] = useState<'check' | 'copy' | 'sparkle'>('check');
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const showToast = (msg: string, icon: 'check' | 'copy' | 'sparkle' = 'check') => {
    setToastMessage(msg);
    setToastIcon(icon);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2500);
  };

  const handleShare = async () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://typenikbakht.ir';
    if (navigator.share) {
      try {
        await navigator.share({
          title: SITE_CONFIG.officeName,
          text: `راه‌های ارتباطی ${SITE_CONFIG.officeName} در بله، ایتا، روبیکا و تلگرام: @${SITE_CONFIG.commonUsername} | شماره تماس: ${SITE_CONFIG.phone.raw}`,
          url: currentUrl,
        });
      } catch {
        // User closed share dialog
      }
    } else {
      navigator.clipboard.writeText(currentUrl);
      showToast('لینک صفحه با موفقیت کپی شد', 'copy');
    }
  };

  return (
    <main className="min-h-[100dvh] h-[100dvh] w-full bg-slate-950 text-slate-100 flex items-center justify-center relative overflow-hidden font-['Vazirmatn']">
      {/* Ambient background glowing orbs */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle modern grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Main Single-Screen Mobile Container */}
      <div className="w-full max-w-md h-full max-h-[100dvh] flex flex-col justify-between p-3 sm:p-4 relative z-10 overflow-y-auto sm:overflow-hidden">
        {/* 1. Header (Logo, Office Name, Verification & Status) */}
        <div className="shrink-0 pt-1">
          <Header onOpenQR={() => setIsQRModalOpen(true)} onShare={handleShare} />
        </div>

        {/* 2. Phone Number & Add to Contacts Card */}
        <div className="shrink-0 my-1.5 sm:my-2">
          <PhoneSection onShowToast={showToast} />
        </div>

        {/* 3. Messengers Grid (Bale, Eitaa, Rubika, Telegram with @typenikbakht) */}
        <div className="shrink-0 my-1 sm:my-1.5">
          <MessengerGrid messengers={SITE_CONFIG.messengers} onShowToast={showToast} />
        </div>

        {/* 4. Server File Upload Section */}
        <div className="shrink-0 my-1 sm:my-1.5">
          <FileUploadSection onShowToast={showToast} />
        </div>

        {/* 5. Minimal Footer */}
        <footer className="shrink-0 pb-1 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-medium">
            <span>تمامی پیام‌رسان‌ها با آیدی</span>
            <span className="font-mono text-blue-400 font-semibold dir-ltr">
              {SITE_CONFIG.commonUsernameDisplay}
            </span>
            <span>فعال می‌باشند</span>
          </div>
        </footer>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Interactive Toast Alerts */}
      <Toast
        message={toastMessage}
        iconType={toastIcon}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </main>
  );
}

export default App;
