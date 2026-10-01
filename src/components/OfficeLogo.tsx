import React from 'react';

interface OfficeLogoProps {
  className?: string;
  size?: number;
}

export const OfficeLogo: React.FC<OfficeLogoProps> = ({ className = "w-20 h-20" }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center select-none`}>
      {/* Real image with clean styling */}
      <img
        src="/logo.png"
        alt="لوگوی تایپ نیکبخت"
        className="w-full h-full object-contain rounded-full drop-shadow-md hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          // If the image fails to load, gracefully switch to SVG emblem
          const target = e.currentTarget;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'block';
        }}
      />

      {/* High-Fidelity SVG Fallback matching the uploaded image */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full hidden"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer White Circle with Blue & Gold Rings */}
        <circle cx="100" cy="100" r="96" fill="#FFFFFF" stroke="#0057B8" strokeWidth="4" />
        <circle cx="100" cy="100" r="92" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.5" />

        {/* Tilted Diamond / Rhombus */}
        <g transform="rotate(-45 100 100)">
          {/* Main Rhombus Body: Blue */}
          <rect x="42" y="42" width="116" height="116" rx="12" fill="url(#rhombusBlue)" />
          {/* Top-Left Corner: Vibrant Orange */}
          <path d="M42 54C42 47.37 47.37 42 54 42H110L42 110V54Z" fill="url(#rhombusOrange)" />
        </g>

        {/* Calligraphy stylized center emblem */}
        <path
          d="M65 95 C75 70, 110 50, 135 75 C150 90, 135 125, 100 120 C85 118, 75 130, 80 145 C85 158, 105 160, 120 152"
          stroke="#FFFFFF"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow3d)"
        />

        {/* Iranian Flag Ribbon (Green, White, Red) */}
        <path
          d="M60 135 C80 120, 110 145, 140 125 C145 122, 148 126, 145 130 C120 152, 85 130, 62 142 Z"
          fill="url(#iranFlag)"
        />

        {/* Subtitle "تایپ نیکبخت" */}
        <text
          x="62"
          y="155"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="bold"
          fontFamily="Vazirmatn, sans-serif"
          opacity="0.95"
        >
          تایپ نیکبخت
        </text>

        {/* Gradients */}
        <defs>
          <linearGradient id="rhombusBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0B409C" />
          </linearGradient>
          <linearGradient id="rhombusOrange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="iranFlag" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
          <filter id="glow3d" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
