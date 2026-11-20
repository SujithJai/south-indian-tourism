import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  Map, 
  ChevronDown, 
  Video 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/tourismData';

export default function HeroVideoSection({ onOpenBookingModal }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      
      {/* Background Drone Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.7] contrast-[1.08] transition-transform duration-1000 ease-out"
        >
          <source 
            src="https://cdn.coverr.co/videos/coverr-flying-over-a-green-forest-1473/1080p.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Cinematic Multi-layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/50 to-black/75"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-black/80"></div>
      </div>

      {/* Floating Drone Status Pill */}
      <div className="absolute top-24 left-4 sm:left-8 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/30 text-[11px] text-emerald-300">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
        <Video className="w-3.5 h-3.5 text-emerald-400" />
        <span className="font-medium tracking-wide">4K Drone View: Western Ghats & Ancient Canopies</span>
      </div>

      {/* Video Play/Pause Control */}
      <button
        onClick={toggleVideoPlay}
        className="absolute bottom-28 right-6 z-20 hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-xs text-white transition-all hover:scale-105"
        title={isPlaying ? "Pause Drone Video" : "Play Drone Video"}
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
        <span>{isPlaying ? 'Pause Aerial' : 'Resume Aerial'}</span>
      </button>

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/60 border border-emerald-400/40 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-emerald-900/30">
          <Sparkles className="w-4 h-4 text-emerald-300 animate-spin-slow" />
          <span>தென்னிந்திய டூரிசம் • South Indian Tourism, Mohanur</span>
        </div>

        {/* Majestic Title */}
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-2xl">
          Discover the Soul of <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
            South India
          </span>
        </h1>

        {/* Tamil & English Subtitle */}
        <p className="mt-4 text-emerald-200/90 font-medium text-sm sm:text-base md:text-lg max-w-2xl drop-shadow">
          கர்நாடகா & தமிழ்நாட்டின் பிரம்மாண்ட ட்ரோன் காட்சிகள், கம்பீரமான புராதன கோவில்கள் மற்றும் பனி படர்ந்த மலைவாசஸ்தலங்கள்!
        </p>
        <p className="mt-2 text-slate-300 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
          {BUSINESS_INFO.subheading}
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-emerald-700/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 glow-emerald"
          >
            <Calendar className="w-4 h-4" />
            <span>Plan Your Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#packages"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Map className="w-4 h-4 text-emerald-400" />
            <span>Explore Tour Packages</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-900/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Business Highlights Strip */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          {BUSINESS_INFO.highlights.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-3 sm:p-4 text-center border border-emerald-500/20 hover:border-emerald-400/50 transition-all hover:-translate-y-1"
            >
              <div className="text-xl sm:text-2xl font-bold font-cinzel text-emerald-300">
                {item.title}
              </div>
              <p className="mt-1 text-[11px] sm:text-xs text-slate-300 line-clamp-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Down Scroll Wave Indicator */}
      <a 
        href="#drone-showcase" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-emerald-400/80 hover:text-emerald-300 transition-colors animate-bounce"
      >
        <span className="text-[11px] font-semibold tracking-wider uppercase mb-1">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5" />
      </a>

    </section>
  );
}
