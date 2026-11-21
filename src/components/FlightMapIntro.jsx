import React, { useState, useRef, useEffect } from 'react';
import { Plane, ArrowRight, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function FlightMapIntro({ onCompleteIntro }) {
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  // Ensure video autoplays smoothly on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  const handleVideoEnded = () => {
    onCompleteIntro();
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#051F17] flex flex-col justify-between overflow-hidden text-white select-none">
      
      {/* 1. Fullscreen Airplane Flying Across Map Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
        >
          <source src="/videos/airplane_intro.mp4" type="video/mp4" />
        </video>

        {/* Subtle Edge Vignette for Crisp HUD Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/60 pointer-events-none"></div>
      </div>

      {/* 2. Top Header HUD */}
      <div className="relative z-20 pt-6 sm:pt-8 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
        
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#F4B400] to-[#E7CFA3] flex items-center justify-center text-[#0B4D3B] shadow-xl">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 7v2h1v10H3v2h18v-2h-2V9h1V7l-8-5zm0 2.5L17.5 8H6.5L12 4.5zM7 11h2v8H7v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8z"/>
            </svg>
          </div>
          <div>
            <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-white block leading-tight drop-shadow">
              South Indian <span className="font-normal opacity-90">Tourism</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#E7CFA3] font-semibold flex items-center gap-1.5 drop-shadow">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400] animate-ping"></span>
              Locating South India • Flight Journey
            </span>
          </div>
        </div>

        {/* Sound & Skip Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            className={`p-2.5 rounded-full backdrop-blur-md border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isMuted 
                ? 'bg-black/60 border-white/20 text-slate-300 hover:text-white' 
                : 'bg-[#147D64] border-[#F4B400] text-[#F4B400] shadow-lg animate-pulse'
            }`}
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden sm:inline text-xs">{isMuted ? 'Sound Off' : 'Sound On'}</span>
          </button>

          <button
            onClick={onCompleteIntro}
            className="px-5 py-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-[#E7CFA3]/50 text-xs sm:text-sm font-extrabold text-[#E7CFA3] hover:text-white transition-all flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Skip to Website</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* 3. Bottom Status & Progress HUD */}
      <div className="relative z-20 pb-8 sm:pb-10 px-6 sm:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-xs text-[#E7CFA3] font-bold tracking-wider uppercase drop-shadow">
          <Plane className="w-4 h-4 text-[#F4B400] animate-pulse" />
          <span>Flight en route to South India...</span>
        </div>

        <button
          onClick={onCompleteIntro}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F4B400] to-[#E7CFA3] text-[#0B4D3B] text-xs font-extrabold uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 glow-gold"
        >
          <span>Enter Website</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>

      {/* 4. Luxury Golden Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#F4B400] via-[#E7CFA3] to-[#F4B400] transition-all duration-200 ease-linear shadow-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
}
