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
  ChevronUp, 
  Check, 
  MapPin, 
  Bed, 
  Calendar, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Video, 
  Compass, 
  Clock, 
  Volume2, 
  VolumeX 
} from 'lucide-react';
import { soundManager } from '../utils/soundUtil';

export default function CinematicDroneVoyage({ onOpenBookingModal }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

  const activeVoyage = STATE_DRONE_VOYAGES[currentIdx];

  // Toggle video play / pause
  const togglePlay = () => {
    const activeVid = videoRefs.current[currentIdx];
    if (activeVid) {
      if (isPlaying) {
        activeVid.pause();
      } else {
        activeVid.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle ambient audio
  const toggleSound = () => {
    const active = soundManager.toggle();
    setIsMuted(!active);
  };

  // Next and Prev handlers
  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % STATE_DRONE_VOYAGES.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + STATE_DRONE_VOYAGES.length) % STATE_DRONE_VOYAGES.length);
  };

  // Handle wheel scrolling to smoothly transition between drone videos
  useEffect(() => {
    let isThrottled = false;
    const handleWheel = (e) => {
      if (isThrottled) return;
      if (Math.abs(e.deltaY) > 40) {
        if (e.deltaY > 0 && currentIdx < STATE_DRONE_VOYAGES.length - 1) {
          isThrottled = true;
          setCurrentIdx(prev => prev + 1);
          setTimeout(() => { isThrottled = false; }, 900);
        } else if (e.deltaY < 0 && currentIdx > 0) {
          isThrottled = true;
          setCurrentIdx(prev => prev - 1);
          setTimeout(() => { isThrottled = false; }, 900);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentIdx]);

  return (
    <section 
      ref={containerRef}
      id="drone-voyage" 
      className="relative w-full min-h-[100svh] bg-[#0B4D3B] text-white overflow-hidden flex flex-col justify-between"
    >
      
      {/* 4K Drone Video Stack with Cross-Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {STATE_DRONE_VOYAGES.map((voyage, idx) => {
          const isActive = idx === currentIdx;
          return (
            <div 
              key={voyage.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                autoPlay
                loop
                muted
                playsInline
                poster={voyage.posterImage}
                className="w-full h-full object-cover object-center scale-105 filter brightness-[0.72] contrast-[1.1] transition-transform duration-[12000ms] ease-out"
              >
                <source src={voyage.droneVideo} type="video/mp4" />
              </video>
            </div>
          );
        })}

        {/* Cinematic Multi-layered Overlays matching #0B4D3B palette */}
        <div className="absolute inset-0 z-15 bg-gradient-to-r from-[#0B4D3B]/95 via-[#0B4D3B]/65 to-black/50"></div>
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#0B4D3B] via-transparent to-black/70"></div>
      </div>

      {/* Top Floating Controls & Live Drone Indicator */}
      <div className="relative z-30 pt-24 px-4 sm:px-8 max-w-7xl mx-auto w-full flex items-center justify-between">
        
        {/* Live Drone Badge */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#F4B400]/40 text-xs text-[#F4B400] shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
          <Video className="w-3.5 h-3.5" />
          <span className="font-bold tracking-wider uppercase text-[10px] sm:text-xs">
            {activeVoyage.droneBadge}
          </span>
        </div>

        {/* Video & Audio Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={isMuted ? "Enable Ambient Melodic Sound" : "Mute Sound"}
            className={`p-2 sm:px-3 sm:py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isMuted 
                ? 'bg-black/50 border-white/20 text-slate-300 hover:text-white' 
                : 'bg-[#147D64] border-[#F4B400] text-[#F4B400] shadow-lg animate-pulse'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{isMuted ? 'Ambient Sound' : 'Playing Sound'}</span>
          </button>

          {/* Pause / Play */}
          <button
            onClick={togglePlay}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-xs text-white flex items-center gap-1.5 transition-all hover:scale-105"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#F4B400]" /> : <Play className="w-3.5 h-3.5 text-[#F4B400]" />}
            <span className="hidden sm:inline">{isPlaying ? 'Pause Aerial' : 'Resume Aerial'}</span>
          </button>
        </div>

      </div>

      {/* Main Center Content: State Details, Stays & Tour Package */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-8 py-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        
        {/* Left Side: Destination Details & Stays (Span 7) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* State Tag & Number */}
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-[#F4B400] text-[#1F2937] text-xs font-extrabold tracking-wider uppercase shadow-md">
              STATE {activeVoyage.stateNumber}
            </span>
            <span className="text-white/90 text-sm font-semibold tracking-wide flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#F4B400]" />
              {activeVoyage.primaryLocation} • <span className="text-[#FFD166]">{activeVoyage.primaryLocationTa}</span>
            </span>
          </div>

          {/* Main State Title */}
          <div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
              {activeVoyage.stateName}
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-[#FFD166] mt-1 drop-shadow">
              {activeVoyage.stateNameTa} — {activeVoyage.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-2xl leading-relaxed">
              {activeVoyage.description}
            </p>
          </div>

          {/* STAY DETAILS (ஊட்டியில் / அந்த மாநிலத்தில் உள்ள தங்கும் இடங்கள்) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0B4D3B]/85 backdrop-blur-xl border border-[#F4B400]/30 shadow-2xl">
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F4B400] uppercase tracking-wider">
                <Bed className="w-4 h-4" />
                <span>{activeVoyage.stayDetails.title}</span>
              </div>
              <span className="text-[10px] sm:text-xs text-emerald-200 hidden sm:inline">
                {activeVoyage.stayDetails.titleTa}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {activeVoyage.stayDetails.options.map((opt, oIdx) => (
                <div 
                  key={oIdx}
                  className="p-2.5 rounded-xl bg-black/40 border border-[#147D64]/40 hover:border-[#F4B400]/60 transition-colors"
                >
                  <span className="text-[10px] font-bold text-[#F4B400] uppercase block">
                    {opt.type}
                  </span>
                  <div className="font-semibold text-xs text-white leading-snug mt-0.5">
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
          <div className="flex flex-wrap items-center gap-2">
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

        {/* Right Side: Tour Package Card & State Stepper (Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Featured Tour Package Box */}
          <div className="glass-hero-dark p-5 sm:p-6 rounded-3xl border border-[#F4B400]/40 shadow-2xl relative overflow-hidden group">
            
            {/* Top Accent Ribbon */}
            <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-l from-[#F4B400] to-[#FFD166] text-[#1F2937] text-[10px] font-extrabold uppercase tracking-wider rounded-bl-xl shadow">
              FEATURED DRONE TOUR PACKAGE
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD166] block mb-1">
              {activeVoyage.featuredPackage.duration}
            </span>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
              {activeVoyage.featuredPackage.title}
            </h3>
            <p className="text-xs text-emerald-300 font-medium">
              {activeVoyage.featuredPackage.titleTa}
            </p>

            {/* Price Pill */}
            <div className="mt-4 flex items-baseline gap-2 p-3 rounded-xl bg-black/50 border border-emerald-500/30">
              <span className="text-xs text-slate-300">Package Starting at</span>
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

            {/* Inclusions */}
            <div className="mt-3 space-y-1">
              {activeVoyage.featuredPackage.inclusions.slice(0, 3).map((inc, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-200">
                  <Check className="w-3.5 h-3.5 text-[#F4B400] shrink-0" />
                  <span className="truncate">{inc}</span>
                </div>
              ))}
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
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F4B400] to-[#FFD166] hover:from-[#e5a700] hover:to-[#f0c24f] text-[#1F2937] font-bold text-xs sm:text-sm shadow-xl shadow-[#F4B400]/20 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 glow-gold"
              >
                <span>Book This Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/916380939670?text=Hi%20South%20Indian%20Tourism%2C%20I%20am%20watching%20the%20${encodeURIComponent(activeVoyage.stateName)}%20(${encodeURIComponent(activeVoyage.primaryLocation)})%20drone%20shot%20and%20want%20to%20book%20the%20${encodeURIComponent(activeVoyage.featuredPackage.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition-all hover:scale-102"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

          </div>

          {/* Interactive State Navigation Bar (Clickable steps 01 to 04) */}
          <div className="p-2 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 grid grid-cols-4 gap-1.5">
            {STATE_DRONE_VOYAGES.map((voyage, idx) => {
              const isSelected = idx === currentIdx;
              return (
                <button
                  key={voyage.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`py-2 px-2 rounded-xl text-center transition-all ${
                    isSelected 
                      ? 'bg-[#F4B400] text-[#1F2937] font-extrabold shadow-lg scale-102' 
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

      {/* Bottom Bar: Next Video Down Button & Scroll Indicator */}
      <div className="relative z-30 pb-6 px-4 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-white/10 pt-4">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-full bg-black/50 hover:bg-[#147D64] text-white backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 text-xs"
          title="Previous Drone State"
        >
          <ChevronUp className="w-4 h-4 text-[#F4B400]" />
          <span className="hidden sm:inline">Prev State</span>
        </button>

        {/* Center Prompt: Click or Scroll to Next Video */}
        <button
          onClick={handleNext}
          className="group flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <span className="text-[11px] font-bold text-[#F4B400] uppercase tracking-widest flex items-center gap-1.5">
            <span>Next Drone Video: {STATE_DRONE_VOYAGES[(currentIdx + 1) % STATE_DRONE_VOYAGES.length].stateName}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-[10px] text-slate-300 mt-0.5">
            க்ளிக் செய்யவும் அல்லது ஸ்க்ரால் செய்யவும்
          </span>
          <ChevronDown className="w-5 h-5 text-[#F4B400] animate-bounce mt-1" />
        </button>

        {/* Jump to Full Website */}
        <a
          href="#explore-sections"
          className="p-2.5 px-4 rounded-full bg-[#147D64] hover:bg-[#0f6752] text-white text-xs font-semibold backdrop-blur-md shadow-md flex items-center gap-1.5 transition-all"
        >
          <span>View All Pages</span>
          <ChevronDown className="w-4 h-4 text-[#F4B400]" />
        </a>

      </div>

    </section>
  );
}
