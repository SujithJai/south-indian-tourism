import React, { useState, useEffect, useRef } from 'react';
import { 
  CINEMATIC_JOURNEY_STAGES, 
  THEME_COLORS, 
  BUSINESS_INFO 
} from '../data/tourismData';
import { 
  Play, 
  Pause, 
  ChevronDown, 
  Volume2, 
  VolumeX, 
  Video, 
  Compass, 
  Plane, 
  Check, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { soundManager } from '../utils/soundUtil';

export default function CinematicDroneVoyage({ onOpenBookingModal, onOpenVideoModal, onReplayFlightIntro }) {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const trackRef = useRef(null);
  const videoRefs = useRef([]);

  // Calculate slide index from scroll position (Sticky Scroll Track)
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const totalScrollable = trackRef.current.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setScrollProgress(progress);

      const numStages = CINEMATIC_JOURNEY_STAGES.length;
      const stageIndex = Math.min(numStages - 1, Math.floor(progress * numStages));
      setActiveStageIdx(stageIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure active video is playing
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (vid) {
        if (i === activeStageIdx) {
          vid.play().catch(() => {});
        }
      }
    });
  }, [activeStageIdx]);

  const activeStage = CINEMATIC_JOURNEY_STAGES[activeStageIdx] || CINEMATIC_JOURNEY_STAGES[0];

  // Scroll smoothly to a specific stage
  const scrollToStage = (index) => {
    if (!trackRef.current) return;
    const trackTop = trackRef.current.offsetTop;
    const totalScrollable = trackRef.current.offsetHeight - window.innerHeight;
    const targetY = trackTop + (index / (CINEMATIC_JOURNEY_STAGES.length - 1)) * totalScrollable;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const handleNextStage = () => {
    if (activeStageIdx < CINEMATIC_JOURNEY_STAGES.length - 1) {
      scrollToStage(activeStageIdx + 1);
    } else {
      const exploreEl = document.getElementById('website-sections');
      if (exploreEl) {
        exploreEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleSound = () => {
    const active = soundManager.toggle();
    setIsMuted(!active);
  };

  const toggleVideoPlay = () => {
    const curVid = videoRefs.current[activeStageIdx];
    if (curVid) {
      if (isPlaying) {
        curVid.pause();
      } else {
        curVid.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      ref={trackRef}
      id="drone-voyage"
      className="relative w-full h-[400vh] bg-[#051F17]"
    >
      {/* Sticky Fullscreen Screen Pinned Over Scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between text-white">
        
        {/* Layered 4K Drone Background Videos with Crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {CINEMATIC_JOURNEY_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIdx;
            return (
              <div 
                key={stage.id}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  isActive 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-0 scale-105 z-0'
                }`}
              >
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={stage.posterImage}
                  className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1] transition-transform duration-700"
                >
                  <source src={stage.localVideo} type="video/mp4" />
                  <source src={stage.droneVideo} type="video/mp4" />
                </video>
              </div>
            );
          })}

          {/* Gradients matching #0B4D3B -> #147D64 from UI Spec */}
          <div className="absolute inset-0 z-15 bg-gradient-to-r from-[#0B4D3B]/90 via-[#0B4D3B]/50 to-[#0B4D3B]/80"></div>
          <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#0B4D3B] via-transparent to-black/75"></div>
        </div>

        {/* Top Spacer under Navbar */}
        <div className="pt-24 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-center justify-between relative z-30">
          
          {/* Timeline Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#E7CFA3]/40 text-xs text-[#E7CFA3]">
            <span className="w-2 h-2 rounded-full bg-[#F4B400] animate-ping"></span>
            <span className="font-bold tracking-wider uppercase text-[10px] sm:text-xs">
              STAGE 0{activeStage.stageNumber} • {activeStage.timecode}
            </span>
          </div>

          {/* Sound & Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isMuted 
                  ? 'bg-black/50 border-white/20 text-slate-300 hover:text-white' 
                  : 'bg-[#147D64] border-[#F4B400] text-[#F4B400] shadow-lg animate-pulse'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isMuted ? 'Mute' : 'Audio On'}</span>
            </button>

            <button
              onClick={toggleVideoPlay}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-xs text-white flex items-center gap-1.5"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#F4B400]" /> : <Play className="w-3.5 h-3.5 text-[#F4B400]" />}
              <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          </div>

        </div>

        {/* Center Main Stage Content matching Mockup Laptop Screen */}
        <div className="relative z-30 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-1 my-auto">
          
          {/* "EXPLORE SOUTH INDIA" in spaced Sandal #E7CFA3 */}
          <div className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.35em] text-[#E7CFA3] drop-shadow-md mb-2">
            {activeStage.titlePrefix}
          </div>

          {/* Majestic State Name in Italic Serif with Golden Flourish Underline */}
          <div className="relative inline-block my-2">
            <h1 className="font-heading italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl tracking-tight">
              {activeStage.stateName}
            </h1>
            
            {/* Golden Curved Flourish Underline as in user blueprint */}
            <svg 
              className="w-full h-8 sm:h-12 -mt-2 sm:-mt-4 text-[#F4B400]" 
              viewBox="0 0 300 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M10 20 C 70 5, 120 30, 180 15 C 230 2, 270 20, 290 12" 
                stroke="url(#flourishGrad)" 
                strokeWidth="4" 
                strokeLinecap="round"
                className="flourish-animated"
              />
              <defs>
                <linearGradient id="flourishGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F4B400" />
                  <stop offset="50%" stopColor="#E7CFA3" />
                  <stop offset="100%" stopColor="#F4B400" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Subtitle / Tagline from blueprint */}
          <p className="text-base sm:text-xl font-bold text-[#E7CFA3] mt-1 drop-shadow tracking-wide">
            {activeStage.tagline}
          </p>
          <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl font-medium drop-shadow">
            {activeStage.famousSpots}
          </p>

          {/* Watch Video Pill Button from Mockup */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenVideoModal(activeStage)}
              className="px-8 py-3.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-[#E7CFA3]/60 text-white font-bold text-sm sm:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 glow-sandal"
            >
              <div className="w-6 h-6 rounded-full bg-[#F4B400] text-[#0B4D3B] flex items-center justify-center font-bold">
                <Play className="w-3.5 h-3.5 fill-[#0B4D3B]" />
              </div>
              <span>Watch Video</span>
            </button>

            <button
              onClick={() => onOpenBookingModal({
                destination: activeStage.famousSpots,
                state: activeStage.stateName
              })}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F4B400] to-[#E7CFA3] hover:from-[#e5a700] hover:to-[#dfc38f] text-[#0B4D3B] font-extrabold text-sm sm:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 glow-gold"
            >
              <span>Plan Trip to {activeStage.stateName.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Navigation & Scroll to Explore */}
        <div className="relative z-30 pb-6 px-6 sm:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Replay Flight Intro */}
          <button
            onClick={onReplayFlightIntro}
            className="text-xs font-bold text-[#E7CFA3] hover:text-[#F4B400] flex items-center gap-1.5 transition-colors"
          >
            <Plane className="w-3.5 h-3.5" />
            <span>Replay Flight Map Intro (0 - 10s)</span>
          </button>

          {/* Center: "Scroll to Explore" from Mockup */}
          <button
            onClick={handleNextStage}
            className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="text-[11px] font-bold text-[#E7CFA3] tracking-widest uppercase flex items-center gap-1">
              Scroll to Explore
            </span>
            <ChevronDown className="w-5 h-5 text-[#F4B400] animate-bounce mt-0.5" />
          </button>

          {/* Right: Stage Stepper Pills */}
          <div className="flex items-center gap-1.5">
            {CINEMATIC_JOURNEY_STAGES.map((stage, idx) => {
              const isSelected = idx === activeStageIdx;
              return (
                <button
                  key={stage.id}
                  onClick={() => scrollToStage(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    isSelected 
                      ? 'bg-[#F4B400] text-[#0B4D3B] shadow-md scale-105' 
                      : 'bg-black/50 text-slate-300 hover:text-white border border-white/20'
                  }`}
                >
                  {stage.stateName.split(' ')[0]}
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
