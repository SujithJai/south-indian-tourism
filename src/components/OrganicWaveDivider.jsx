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

  // Subtle organic parallax shift (gentle, clean motion matching blueprint)
  const shiftX = (scrollProgress - 0.5) * -16;
  const shiftY = Math.sin(scrollProgress * Math.PI) * -3.5;

  return (
    <div 
      ref={containerRef}
      className="relative w-full -mt-24 sm:-mt-36 md:-mt-48 lg:-mt-60 xl:-mt-72 z-20 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-24 sm:h-36 md:h-48 lg:h-60 xl:h-72 block overflow-visible"
      >
        <defs>
          {/* Deep Forest Green Gradient for Upper Wave Ribbon */}
          <linearGradient id="waveForestGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B4D3B" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#083B2D" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#051F17" stopOpacity="1" />
          </linearGradient>

          {/* Crisp Shimmering Golden Ribbon Stripe Gradient */}
          <linearGradient id="waveGoldStripeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F4B400" />
            <stop offset="35%" stopColor="#FFD166" />
            <stop offset="70%" stopColor="#F4B400" />
            <stop offset="100%" stopColor="#E7CFA3" />
          </linearGradient>
        </defs>

        {/* ========================================================
            1. Upper Deep Forest Green Wave Ribbon
            Matches exact contour: dips on left-center, peaks near center-right
           ======================================================== */}
        <path
          d="M 0,132 C 220,142 360,174 540,164 C 720,154 910,54 1070,54 C 1220,54 1335,104 1440,120 L 1440,240 L 0,240 Z"
          fill="url(#waveForestGreenGrad)"
          style={{
            transform: `translate3d(${shiftX * 0.8}px, ${shiftY * 0.8}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* ========================================================
            2. Crisp Golden Ribbon Stripe (Contour along Crest)
           ======================================================== */}
        <path
          d="M 0,138 C 220,148 360,180 540,170 C 720,160 910,60 1070,60 C 1220,60 1335,110 1440,126"
          stroke="url(#waveGoldStripeGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          style={{
            transform: `translate3d(${shiftX}px, ${shiftY}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* ========================================================
            3. Warm Ivory Cream Body (#F8F4E6)
            Fills seamlessly into the Website Sections section
           ======================================================== */}
        <path
          d="M 0,141 C 220,151 360,183 540,173 C 720,163 910,63 1070,63 C 1220,63 1335,113 1440,129 L 1440,240 L 0,240 Z"
          fill="#F8F4E6"
          style={{
            transform: `translate3d(${shiftX}px, ${shiftY}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* ========================================================
            4. Secondary Bottom-Left Wave Accent (matching user image)
            Deep Green crescent with Gold edge in the bottom-left corner
           ======================================================== */}
        <path
          d="M 0,186 C 80,186 150,212 215,240 L 0,240 Z"
          fill="#0B4D3B"
          style={{
            transform: `translate3d(${shiftX * 0.5}px, ${shiftY * 0.5}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <path
          d="M 0,186 C 80,186 150,212 215,240"
          stroke="url(#waveGoldStripeGrad)"
          strokeWidth="4"
          fill="none"
          style={{
            transform: `translate3d(${shiftX * 0.5}px, ${shiftY * 0.5}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </svg>
    </div>
  );
}
