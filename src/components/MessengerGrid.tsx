import React, { useState } from 'react';
import { ExternalLink, Copy, Check, MessageSquare } from 'lucide-react';
import { MessengerItem } from '../data/config';
import { MessengerIconMap } from './MessengerIcons';

interface MessengerGridProps {
  messengers: MessengerItem[];
  onShowToast: (msg: string, icon?: 'check' | 'copy' | 'sparkle') => void;
}

export const MessengerGrid: React.FC<MessengerGridProps> = ({ messengers, onShowToast }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, username: string, name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(username);
    setCopiedId(id);
    onShowToast(`آیدی ${username} برای ${name} کپی شد`, 'copy');
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="w-full">
      {/* Section Subheader */}
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
          <span>پیام‌رسان‌های فعال دفتر</span>
        </span>
        <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
          @typenikbakht
        </span>
      </div>

      {/* 2x2 Messenger Grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
        {messengers.map((item) => {
          const IconComponent = MessengerIconMap[item.id] || MessageSquare;
          const isCopied = copiedId === item.id;

          return (
            <div
              key={item.id}
              className={`relative rounded-2xl p-2.5 sm:p-3 bg-slate-900/85 backdrop-blur-md border border-white/10 ${item.borderGlow} transition-all duration-300 group hover:scale-[1.02] flex flex-col justify-between shadow-lg`}
            >
              {/* Header inside card: Icon & Persian Name */}
              <div className="flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border ${item.iconBg} group-hover:scale-105 transition shrink-0`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-right">
                    <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">
                      {item.persianName}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono dir-ltr block">
                      {item.username}
                    </span>
                  </div>
                </div>

                {/* Copy ID mini button */}
                <button
                  type="button"
                  onClick={(e) => handleCopy(item.id, item.username, item.persianName, e)}
                  title="کپی آیدی"
                  className={`p-1.5 rounded-lg border transition-colors shrink-0 ${
                    isCopied
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label={`کپی آیدی ${item.persianName}`}
                >
                  {isCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Direct Open Link Button */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2.5 w-full py-1.5 sm:py-2 px-2.5 rounded-xl bg-gradient-to-r ${item.gradient} hover:opacity-95 active:scale-95 text-white text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition`}
              >
                <span>ورود به گفت‌وگو</span>
                <ExternalLink className="w-3 h-3 text-white/90" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
