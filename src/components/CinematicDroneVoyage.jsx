import React, { useState, useEffect, useRef } from 'react';
import { 
  STATE_DRONE_VOYAGES, 
  THEME_COLORS, 
  BUSINESS_INFO 
} from '../data/tourismData';
import { 
  Play, 
  Pause, 
  ChevronDown, 
  ArrowRight, 
  MessageCircle, 
  MapPin, 
  Bed, 
  Calendar, 
  Video, 
  Volume2, 
  VolumeX, 
  Compass, 
  Check 
} from 'lucide-react';
import { soundManager } from '../utils/soundUtil';

export default function CinematicDroneVoyage({ onOpenBookingModal }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const trackRef = useRef(null);
  const videoRefs = useRef([]);

  // Calculate slide index directly from scroll position (Sticky Scroll Storytelling)
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const totalScrollable = trackRef.current.offsetHeight - window.innerHeight;
      
      if (totalScrollable <= 0) return;
      
      // Calculate progress between 0 and 1
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setScrollProgress(progress);

      // Determine active slide index (0 to 3)
      const numSlides = STATE_DRONE_VOYAGES.length;
      const slideIndex = Math.min(numSlides - 1, Math.floor(progress * numSlides));
      setActiveIdx(slideIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure active video is playing
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (vid) {
        if (i === activeIdx) {
          vid.play().catch(() => {});
        }
      }
    });
  }, [activeIdx]);

  const activeVoyage = STATE_DRONE_VOYAGES[activeIdx] || STATE_DRONE_VOYAGES[0];

  // Scroll to a specific state slide
  const scrollToSlide = (index) => {
    if (!trackRef.current) return;
    const trackTop = trackRef.current.offsetTop;
    const totalScrollable = trackRef.current.offsetHeight - window.innerHeight;
    const targetY = trackTop + (index / (STATE_DRONE_VOYAGES.length - 1)) * totalScrollable;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  // Scroll to the next state slide
  const handleNextSlide = () => {
    if (activeIdx < STATE_DRONE_VOYAGES.length - 1) {
      scrollToSlide(activeIdx + 1);
    } else {
      // Scroll down to the rest of the website
      const exploreEl = document.getElementById('explore-sections');
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
    const curVid = videoRefs.current[activeIdx];
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
      className="relative w-full h-[400vh] bg-[#0B4D3B]"
    >
      {/* Sticky Fullscreen Stage (Pinned while user scrolls) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between text-white">
        
        {/* Layered 4K Background Drone Videos with Smooth Crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {STATE_DRONE_VOYAGES.map((voyage, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div 
                key={voyage.id}
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
                  poster={voyage.posterImage}
                  className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] transition-transform duration-700"
                >
                  {/* Priority to local video path if user drops files into public/videos/ */}
                  <source src={voyage.localVideoPath} type="video/mp4" />
                  <source src={voyage.droneVideo} type="video/mp4" />
                </video>
              </div>
            );
          })}

          {/* Gradients matching #0B4D3B for crisp contrast & cinematic readability */}
          <div className="absolute inset-0 z-15 bg-gradient-to-r from-[#0B4D3B]/95 via-[#0B4D3B]/60 to-black/45"></div>
          <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#0B4D3B] via-transparent to-black/70"></div>
        </div>

        {/* Top HUD Bar */}
        <div className="relative z-30 pt-24 px-4 sm:px-8 max-w-7xl mx-auto w-full flex items-center justify-between">
          
          {/* Drone Status Pill */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#F4B400]/40 text-xs text-[#F4B400] shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <Video className="w-3.5 h-3.5" />
            <span className="font-bold tracking-wider uppercase text-[10px] sm:text-xs">
              {activeVoyage.droneBadge}
            </span>
          </div>

          {/* Audio & Video Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              title={isMuted ? "Enable Ambient Sound" : "Mute Sound"}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isMuted 
                  ? 'bg-black/50 border-white/20 text-slate-300 hover:text-white' 
                  : 'bg-[#147D64] border-[#F4B400] text-[#F4B400] shadow-lg animate-pulse'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isMuted ? 'Ambient Audio' : 'Playing Audio'}</span>
            </button>

            <button
              onClick={toggleVideoPlay}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-xs text-white flex items-center gap-1.5 transition-all"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#F4B400]" /> : <Play className="w-3.5 h-3.5 text-[#F4B400]" />}
              <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          </div>

        </div>

        {/* Center Content: Crisp, Punchy, Animated Slide Overlay */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-8 py-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
          
          {/* Left Column: State Identity & Stays (Span 7) */}
          <div className="lg:col-span-7 space-y-4 animate-fade-in">
            
            {/* State Number & Location Badge */}
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#F4B400] text-[#1F2937] text-xs font-extrabold tracking-wider uppercase shadow-md">
                STATE {activeVoyage.stateNumber} OF 04
              </span>
              <span className="text-white text-sm font-semibold tracking-wide flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#F4B400]" />
                {activeVoyage.primaryLocation}
              </span>
            </div>

            {/* Giant State Heading */}
            <div className="space-y-1">
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
                {activeVoyage.stateName}
              </h1>
              <p className="text-base sm:text-xl font-bold text-[#FFD166] drop-shadow">
                {activeVoyage.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
                {activeVoyage.description}
              </p>
            </div>

            {/* Crisp Stay Details Card */}
            <div className="p-4 rounded-2xl bg-[#0B4D3B]/90 backdrop-blur-xl border border-[#F4B400]/40 shadow-2xl max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F4B400] uppercase tracking-wider mb-2.5 pb-2 border-b border-white/10">
                <Bed className="w-4 h-4" />
                <span>{activeVoyage.stayDetails.title}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeVoyage.stayDetails.options.map((opt, oIdx) => (
                  <div 
                    key={oIdx}
                    className="p-2.5 rounded-xl bg-black/40 border border-[#147D64]/30"
                  >
                    <span className="text-[10px] font-bold text-[#F4B400] uppercase block">
                      {opt.type}
                    </span>
                    <div className="font-bold text-xs text-white leading-snug mt-0.5">
                      {opt.name}
                    </div>
                    <p className="text-[10px] text-slate-300 mt-1 leading-tight line-clamp-2">
                      {opt.perk}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {activeVoyage.highlights.map((h, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-emerald-500/30 text-[11px] text-emerald-200 flex items-center gap-1.5"
                >
                  <Check className="w-3 h-3 text-[#F4B400]" />
                  {h}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Tour Package & State Stepper (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Crisp Tour Package Card */}
            <div className="p-6 rounded-3xl bg-[#0B4D3B]/90 backdrop-blur-xl border border-[#F4B400]/50 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD166] px-2.5 py-1 rounded-md bg-black/40 border border-[#F4B400]/30">
                  {activeVoyage.featuredPackage.duration}
                </span>
                <span className="text-[10px] uppercase font-bold text-[#F4B400]">
                  TOUR PACKAGE
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                {activeVoyage.featuredPackage.title}
              </h3>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-2 p-3 rounded-xl bg-black/40 border border-white/10">
                <span className="text-xs text-slate-300">Starts from</span>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F4B400] leading-none">
                  {activeVoyage.featuredPackage.price}
                </span>
                <span className="text-[10px] text-slate-400">/ person</span>
              </div>

              {/* Route */}
              <div className="mt-3 text-xs text-slate-200 flex items-start gap-2">
                <Compass className="w-4 h-4 text-[#F4B400] shrink-0 mt-0.5" />
                <span className="leading-tight">
                  <strong>Route:</strong> {activeVoyage.featuredPackage.route}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onOpenBookingModal({
                    destination: activeVoyage.primaryLocation,
                    state: activeVoyage.stateName,
                    tourType: activeVoyage.featuredPackage.title,
                    packageId: activeVoyage.featuredPackage.id
                  })}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#F4B400] hover:bg-[#e0a600] text-[#1F2937] font-extrabold text-xs sm:text-sm shadow-xl shadow-[#F4B400]/25 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 glow-gold"
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/916380939670?text=Hi%20South%20Indian%20Tourism%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(activeVoyage.stateName)}%20(${encodeURIComponent(activeVoyage.primaryLocation)})%20tour%20package.`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition-all hover:scale-102"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Clickable State Stepper */}
            <div className="p-2 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 grid grid-cols-4 gap-1.5">
              {STATE_DRONE_VOYAGES.map((voyage, idx) => {
                const isSelected = idx === activeIdx;
                return (
                  <button
                    key={voyage.id}
                    onClick={() => scrollToSlide(idx)}
                    className={`py-2 px-1 rounded-xl text-center transition-all ${
                      isSelected 
                        ? 'bg-[#F4B400] text-[#1F2937] font-extrabold shadow-lg scale-102 ring-2 ring-[#FFD166]' 
                        : 'hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    <span className="text-[10px] block opacity-80 leading-none">
                      {voyage.stateNumber}
                    </span>
                    <span className="text-[11px] font-bold truncate block mt-0.5">
                      {voyage.stateName.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

        {/* Bottom Bar: Animated Scroll Progress Bar & Next Video Prompt */}
        <div className="relative z-30 pb-5 px-4 max-w-7xl mx-auto w-full">
          
          {/* Real-time Dynamic Scroll Progress Bar */}
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-3">
            <div 
              className="h-full bg-gradient-to-r from-[#147D64] via-[#F4B400] to-[#FFD166] transition-all duration-300"
              style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            {/* Scroll Indicator */}
            <div className="text-[11px] font-semibold text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B400] animate-ping"></span>
              <span>Scroll down to fly across South Indian States</span>
            </div>

            {/* Next Video Button */}
            <button
              onClick={handleNextSlide}
              className="px-4 py-2 rounded-full bg-[#147D64] hover:bg-[#0f6752] text-white text-xs font-bold flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span>
                {activeIdx < STATE_DRONE_VOYAGES.length - 1 
                  ? `Next Video: ${STATE_DRONE_VOYAGES[activeIdx + 1].stateName}` 
                  : 'Explore All Destinations'}
              </span>
              <ChevronDown className="w-4 h-4 text-[#F4B400] animate-bounce" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
