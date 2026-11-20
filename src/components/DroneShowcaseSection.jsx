import React, { useState, useRef, useEffect } from 'react';
import { 
  DRONE_DESTINATIONS, 
  BUSINESS_INFO 
} from '../data/tourismData';
import { 
  Play, 
  Pause, 
  MapPin, 
  Calendar, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  MessageCircle, 
  Compass, 
  Video 
} from 'lucide-react';
import GreenWaveDivider from './GreenWaveDivider';

export default function DroneShowcaseSection({ onSelectPackageForBooking }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [filterState, setFilterState] = useState('All');
  const videoRef = useRef(null);

  const filteredPlaces = filterState === 'All' 
    ? DRONE_DESTINATIONS 
    : DRONE_DESTINATIONS.filter(p => p.state.toLowerCase().includes(filterState.toLowerCase()));

  const activePlace = filteredPlaces[activeIdx] || filteredPlaces[0] || DRONE_DESTINATIONS[0];

  // Reload/play video when active place changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [activePlace.id]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % filteredPlaces.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + filteredPlaces.length) % filteredPlaces.length);
  };

  const toggleVideo = () => {
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
    <section id="drone-showcase" className="relative bg-emerald-950 text-white overflow-hidden">
      
      {/* Top Green Wave Divider Connecting Hero into Drone Showcase */}
      <GreenWaveDivider flipped={true} color="fill-emerald-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <Video className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Cinematic Aerial Showcase • சினிமாடிக் ட்ரோன் காட்சிகள்</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Karnataka & Tamil Nadu <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              In Stunning Drone Perspectives
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base">
            ஸ்க்ரால் செய்து கர்நாடகா மற்றும் தமிழ்நாட்டின் அழகிய இடங்களின் ட்ரோன் வீடியோக்கள் மற்றும் முழு விவரங்களைக் கண்டறியுங்கள்.
          </p>

          {/* State Filter Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {['All', 'Karnataka', 'Tamil Nadu', 'Kerala'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setFilterState(tab);
                  setActiveIdx(0);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filterState === tab 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105' 
                    : 'bg-emerald-900/40 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/20'
                }`}
              >
                {tab === 'All' ? 'அனைத்து இடங்கள் (All)' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Drone Video Stage */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/30 bg-black min-h-[580px] sm:min-h-[620px] flex flex-col justify-end">
          
          {/* Active Drone Video Player */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              key={activePlace.droneVideo}
              autoPlay
              loop
              muted
              playsInline
              poster={activePlace.posterImage}
              className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.08] transition-all duration-700"
            >
              <source src={activePlace.droneVideo} type="video/mp4" />
            </video>

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-black/60"></div>
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/70"></div>
          </div>

          {/* Top Drone Info Bar */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                LIVE 4K DRONE
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                {activePlace.droneBadge}
              </span>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={toggleVideo}
              className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white transition-transform hover:scale-110"
              title={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-emerald-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>

          {/* Center/Bottom Overlay Details Card */}
          <div className="relative z-20 p-5 sm:p-8 md:p-10 max-w-4xl">
            
            {/* Tagline & State */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
                {activePlace.state}
              </span>
              <span className="text-amber-300 text-xs font-medium flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {activePlace.category}
              </span>
            </div>

            {/* Destination Name in English & Tamil */}
            <h3 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
              {activePlace.name}
            </h3>
            <p className="text-emerald-300 font-semibold text-sm sm:text-base mt-0.5">
              {activePlace.nameTa} • {activePlace.tagline}
            </p>

            {/* Description */}
            <p className="mt-3 text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl drop-shadow">
              {activePlace.description}
            </p>

            {/* Highlights Grid */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {activePlace.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-emerald-500/20 text-[11px] sm:text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{h}</span>
                </div>
              ))}
            </div>

            {/* Travel Metadata Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>Best Time: <strong className="text-white">{activePlace.bestTime}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Suggested Duration: <strong className="text-white">{activePlace.suggestedDays}</strong></span>
              </div>
            </div>

            {/* Action Buttons for this Destination */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectPackageForBooking(activePlace)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-900/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Book This Tour Package</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/916380939670?text=Hi%20South%20Indian%20Tourism%2C%20I%20saw%20the%20drone%20showcase%20for%20${encodeURIComponent(activePlace.name)}%20(${encodeURIComponent(activePlace.state)})%20and%20want%20package%20details.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full bg-emerald-600/80 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm backdrop-blur-md border border-emerald-400/30 shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote for {activePlace.name.split(' ')[0]}</span>
              </a>
            </div>

          </div>

          {/* Left / Right Nav Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110"
            title="Previous Drone Destination"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110"
            title="Next Drone Destination"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Thumbnail Selector Carousel (Direct scroll switch) */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              Select Destination Drone View ({filteredPlaces.length} Available)
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              கிளிக் செய்து இடங்களின் ட்ரோன் வீடியோவை உடனே பார்க்கவும்
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {filteredPlaces.map((place, idx) => {
              const isSelected = activePlace.id === place.id;
              return (
                <button
                  key={place.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative rounded-2xl overflow-hidden border-2 text-left transition-all duration-300 ${
                    isSelected 
                      ? 'border-emerald-400 shadow-xl shadow-emerald-500/30 scale-102 ring-2 ring-emerald-400/50' 
                      : 'border-emerald-900/50 hover:border-emerald-500/40 opacity-75 hover:opacity-100'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="h-24 sm:h-28 w-full overflow-hidden relative">
                    <img
                      src={place.posterImage}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    
                    {/* State pill */}
                    <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-black/70 text-[9px] font-semibold text-emerald-300">
                      {place.state}
                    </span>

                    {/* Playing indicator */}
                    {isSelected && (
                      <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-bold flex items-center gap-1 shadow">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                        PLAYING
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="p-2.5 bg-emerald-950/90">
                    <h4 className="font-semibold text-xs text-white truncate">{place.name}</h4>
                    <p className="text-[10px] text-emerald-400/80 truncate">{place.nameTa}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Wave Divider into Packages */}
      <GreenWaveDivider flipped={false} color="fill-emerald-900/30" />

    </section>
  );
}
