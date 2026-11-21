import React, { useState, useEffect, useRef } from 'react';

export default function OrganicWaveDivider() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the wave divider is approaching or inside the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const total = windowHeight + rect.height;
        const current = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, current / total));
        setScrollProgress(progress);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Parallax calculations for subtle scroll reaction (asymmetrical drift)
  const greenShiftX = (scrollProgress - 0.5) * -38;
  const greenShiftY = Math.sin(scrollProgress * Math.PI) * -6;

  const goldShiftX = (scrollProgress - 0.5) * 44;
  const goldShiftY = Math.cos(scrollProgress * Math.PI) * 4;

  const creamShiftX = (scrollProgress - 0.5) * -18;
  const creamShiftY = Math.sin(scrollProgress * Math.PI) * 5;

  return (
    <div 
      ref={containerRef}
      className="relative w-full -mt-20 sm:-mt-32 md:-mt-44 lg:-mt-56 xl:-mt-64 z-20 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-24 sm:h-36 md:h-48 lg:h-60 xl:h-72 block transition-transform duration-100 ease-out"
      >
        <defs>
          {/* 1. Deep Forest Green Gradient with subtle transparency to let drone video peek through */}
          <linearGradient id="waveForestGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B4D3B" stopOpacity="0.94" />
            <stop offset="50%" stopColor="#0E5844" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#072C22" stopOpacity="0.96" />
          </linearGradient>

          {/* 2. Subtle Golden Accent Gradient (Metallic Sheen) */}
          <linearGradient id="waveGoldAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F4B400" stopOpacity="0.75" />
            <stop offset="35%" stopColor="#E7CFA3" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#F4B400" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#DFC38F" stopOpacity="0.8" />
          </linearGradient>

          {/* 2b. Golden Crest Stroke Gradient */}
          <linearGradient id="waveGoldStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E7CFA3" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#F4B400" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#E7CFA3" stopOpacity="0.5" />
          </linearGradient>

          {/* 3. Warm Ivory Cream Gradient */}
          <linearGradient id="waveIvoryCreamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8F4E6" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#F8F4E6" stopOpacity="1" />
          </linearGradient>

          {/* Golden Glow Filter */}
          <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ========================================================
            LAYER 1: Deep Forest Green Upper Wave (Asymmetrical Curves)
            Reveals 4K drone video above and in dips
           ======================================================== */}
        <g 
          style={{ 
            transform: `translate3d(${greenShiftX}px, ${greenShiftY}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
          className="wave-ambient-1"
        >
          <path
            d="M 0,90 C 260,165 440,35 700,75 C 960,115 1160,25 1440,85 L 1440,280 L 0,280 Z"
            fill="url(#waveForestGreenGrad)"
          />
        </g>

        {/* ========================================================
            LAYER 2: Subtle Golden Accent Middle Wave & Crest Ribbon
            Shimmers organically between forest green and ivory cream
           ======================================================== */}
        <g 
          style={{ 
            transform: `translate3d(${goldShiftX}px, ${goldShiftY}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
          className="wave-ambient-2"
        >
          {/* Body fill of golden layer */}
          <path
            d="M 0,120 C 220,65 480,175 760,115 C 1040,55 1260,145 1440,110 L 1440,280 L 0,280 Z"
            fill="url(#waveGoldAccentGrad)"
            opacity="0.45"
          />

          {/* Flowing golden glowing stroke line along crest */}
          <path
            d="M 0,120 C 220,65 480,175 760,115 C 1040,55 1260,145 1440,110"
            stroke="url(#waveGoldStrokeGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            filter="url(#goldGlow)"
          />
        </g>

        {/* ========================================================
            LAYER 3: Warm Ivory Cream (#F8F4E6) Bottom Wave
            Flows seamlessly into Website Sections background
           ======================================================== */}
        <g 
          style={{ 
            transform: `translate3d(${creamShiftX}px, ${creamShiftY}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <path
            d="M 0,155 C 300,95 560,215 860,150 C 1120,90 1300,180 1440,140 L 1440,280 L 0,280 Z"
            fill="url(#waveIvoryCreamGrad)"
          />

          {/* Ultra-subtle luxury highlight along cream crest */}
          <path
            d="M 0,155 C 300,95 560,215 860,150 C 1120,90 1300,180 1440,140"
            stroke="#E7CFA3"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
