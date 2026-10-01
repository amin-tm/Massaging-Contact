import React from 'react';
import { CheckCircle2, Copy, Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string;
  iconType?: 'check' | 'copy' | 'sparkle';
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  iconType = 'check',
  isVisible,
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md text-white border border-slate-700/60 shadow-2xl shadow-blue-500/10 text-sm font-medium">
        {iconType === 'check' && (
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 animate-bounce" />
        )}
        {iconType === 'copy' && (
          <Copy className="w-4 h-4 text-sky-400 shrink-0" />
        )}
        {iconType === 'sparkle' && (
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
        )}
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-1 text-slate-400 hover:text-white transition-colors"
          aria-label="بستن"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
