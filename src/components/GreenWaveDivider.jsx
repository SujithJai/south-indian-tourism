import React from 'react';

export default function GreenWaveDivider({ flipped = false, color = "fill-emerald-950", accent = "text-emerald-500/20" }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none z-10 ${flipped ? 'rotate-180 -mt-1' : '-mb-1'}`}>
      <svg
        className="relative block w-full h-12 md:h-20 lg:h-28"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Secondary back wave with soft opacity */}
        <path
          d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
          className="fill-emerald-800/20"
        />
        {/* Animated fluid wave */}
        <path
          d="M0,20 C200,75 420,-15 650,45 C880,105 1050,15 1200,30 L1200,120 L0,120 Z"
          className="fill-emerald-900/40"
        />
        {/* Main foreground wave matching destination section */}
        <path
          d="M0,35 C150,85 350,15 500,60 C650,105 900,20 1200,55 L1200,120 L0,120 Z"
          className={color}
        />
      </svg>
      
      {/* Decorative flowing nature leaf / water shimmer line */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-600/0 via-emerald-400/50 to-emerald-600/0"></div>
    </div>
  );
}
