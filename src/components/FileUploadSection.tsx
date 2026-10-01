import React, { useState } from 'react';
import { CloudUpload, ExternalLink, ArrowLeft, CheckCircle2, ShieldCheck, Zap, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

interface FileUploadSectionProps {
  onShowToast: (msg: string) => void;
}

export const FileUploadSection: React.FC<FileUploadSectionProps> = ({ onShowToast }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success'>('idle');

  const handleClick = () => {
    // If the URL is already set to a real custom URL that doesn't include the demo default, we can navigate directly
    // Or we open the modal for smooth user guidance
    if (SITE_CONFIG.serverUploadUrl && !SITE_CONFIG.serverUploadUrl.includes('typenikbakht.ir/upload')) {
      window.open(SITE_CONFIG.serverUploadUrl, '_blank', 'noopener,noreferrer');
    } else {
      setShowModal(true);
    }
  };

  const handleSimulatedUpload = () => {
    if (!selectedFile) return;
    setUploadStatus('uploading');
    setTimeout(() => {
      setUploadStatus('success');
      onShowToast(`فایل «${selectedFile.name}» با موفقیت آماده ارسال شد`);
      setTimeout(() => {
        setUploadStatus('idle');
        setSelectedFile(null);
        setShowModal(false);
      }, 1800);
    }, 1200);
  };

  return (
    <>
      {/* Main Action Card */}
      <button
        onClick={handleClick}
        className="w-full relative group overflow-hidden rounded-2xl p-0.5 transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-blue-500/10 focus:outline-none"
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse-glow" />

        {/* Card Content */}
        <div className="relative flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-[14px] bg-slate-900/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/10 group-hover:bg-slate-900/90 transition">
          <div className="flex items-center gap-3 text-right">
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition shrink-0">
              <CloudUpload className="w-5 h-5 group-hover:animate-bounce" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm sm:text-base text-white group-hover:text-blue-300 transition">
                  {SITE_CONFIG.serverUploadLabel}
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  مستقیم
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">
                {SITE_CONFIG.serverUploadSublabel}
              </p>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-blue-600 group-hover:border-transparent transition shrink-0">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition" />
          </div>
        </div>
      </button>

      {/* Upload & Server Link Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-700 p-5 shadow-2xl relative text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <CloudUpload className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base text-white">ارسال مستقیم فایل به سرور</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                بستن
              </button>
            </div>

            {/* Description */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>فایل‌های شما با بالاترین کیفیت و امنیت ارسال خواهند شد.</span>
              </div>

              {/* Direct Server URL Link Button */}
              <a
                href={SITE_CONFIG.serverUploadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowModal(false)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-lg shadow-blue-600/20 transition group"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>ورود به سامانه آپلود سرور</span>
                </div>
                <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition" />
              </a>

              {/* Quick File Select Dropzone */}
              <div className="border-2 border-dashed border-slate-700 hover:border-blue-500/60 rounded-2xl p-4 text-center transition cursor-pointer relative bg-slate-800/30">
                <input
                  type="file"
                  id="direct-file-input"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setSelectedFile(e.target.files[0]);
                    }
                  }}
                />
                
                {selectedFile ? (
                  <div className="flex items-center justify-center gap-2 text-xs text-blue-300">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold truncate max-w-[180px]">{selectedFile.name}</span>
                    <span className="text-[10px] text-slate-400">
                      ({(selectedFile.size / (1024 * 1024)).toFixed(1)} MB)
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <CloudUpload className="w-7 h-7 text-slate-400 mb-1" />
                    <span className="text-xs font-medium text-slate-300">انتخاب فایل از گوشی / کامپیوتر</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">PDF، Word، تصاویر، زیپ و اسناد</span>
                  </div>
                )}
              </div>

              {selectedFile && (
                <button
                  onClick={handleSimulatedUpload}
                  disabled={uploadStatus !== 'idle'}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition disabled:opacity-60"
                >
                  {uploadStatus === 'uploading' ? (
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>در حال ارسال به سرور...</span>
                    </div>
                  ) : uploadStatus === 'success' ? (
                    <div className="flex items-center gap-1.5 text-white">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>ارسال شد!</span>
                    </div>
                  ) : (
                    <span>تأیید و ارسال فایل</span>
                  )}
                </button>
              )}

              {/* Developer note for the user */}
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300/90 leading-relaxed text-right">
                💡 <span className="font-bold">راهنمای ویرایش:</span> آدرس این بخش از فایل <code className="dir-ltr inline-block px-1 bg-amber-500/20 rounded font-mono">src/data/config.ts</code> در متغیر <code className="dir-ltr inline-block px-1 bg-amber-500/20 rounded font-mono">serverUploadUrl</code> قابل ویرایش است.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
