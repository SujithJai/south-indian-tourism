import React, { useState, useEffect } from 'react';
import { Plane, Compass, ArrowRight, Play, Sparkles } from 'lucide-react';
import { FLIGHT_MAP_NODES } from '../data/tourismData';

export default function FlightMapIntro({ onCompleteIntro }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Step through the 4 cities
    const timer1 = setTimeout(() => setActiveStep(1), 2200); // Bengaluru
    const timer2 = setTimeout(() => setActiveStep(2), 4400); // Chennai
    const timer3 = setTimeout(() => setActiveStep(3), 6600); // Kochi
    const timer4 = setTimeout(() => {
      onCompleteIntro();
    }, 9500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onCompleteIntro]);

  return (
    <div className="relative w-full h-screen bg-[#051F17] flex flex-col items-center justify-center overflow-hidden text-white select-none">
      
      {/* Background Topographical & Map Grid */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#E7CFA3_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#051F17]/60 to-[#051F17]"></div>

      {/* Top Brand Header */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4B400] to-[#E7CFA3] flex items-center justify-center text-[#0B4D3B] shadow-lg">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 7v2h1v10H3v2h18v-2h-2V9h1V7l-8-5zm0 2.5L17.5 8H6.5L12 4.5zM7 11h2v8H7v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8z"/>
          </svg>
        </div>
        <div>
          <span className="font-heading text-lg font-bold tracking-tight text-white block">
            South Indian Tourism
          </span>
          <span className="text-[10px] tracking-widest uppercase text-[#E7CFA3] font-semibold">
            Locating South India • 0 – 10s Flight Intro
          </span>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={onCompleteIntro}
        className="absolute top-8 right-8 z-20 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-[#E7CFA3]/30 text-xs font-bold text-[#E7CFA3] hover:text-white transition-all flex items-center gap-2"
      >
        <span>Skip to Drone Experience</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      {/* Center Interactive Map Graphic */}
      <div className="relative z-10 w-full max-w-3xl aspect-[4/3] flex items-center justify-center p-6">
        
        {/* SVG South India Peninsula Map & Flight Path */}
        <svg viewBox="0 0 600 500" className="w-full h-full filter drop-shadow-2xl">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4B400" />
              <stop offset="100%" stopColor="#E7CFA3" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* South India Peninsula Stylized Coastline */}
          <path
            d="M 160 50 L 460 50 C 440 140 430 220 400 320 C 370 380 340 440 300 480 C 260 440 220 370 200 290 C 180 200 170 120 160 50 Z"
            fill="rgba(11, 77, 59, 0.45)"
            stroke="#147D64"
            strokeWidth="2"
          />

          {/* Animated Connecting Flight Trajectory Lines */}
          {/* Hyderabad (370, 110) -> Bengaluru (270, 240) */}
          <line
            x1="370" y1="110" x2="270" y2="240"
            stroke="url(#pathGradient)"
            strokeWidth="2.5"
            strokeDasharray="6,6"
            className="flight-path"
            opacity={activeStep >= 1 ? "1" : "0.2"}
          />
          {/* Bengaluru (270, 240) -> Chennai (390, 280) */}
          <line
            x1="270" y1="240" x2="390" y2="280"
            stroke="url(#pathGradient)"
            strokeWidth="2.5"
            strokeDasharray="6,6"
            className="flight-path"
            opacity={activeStep >= 2 ? "1" : "0.2"}
          />
          {/* Chennai (390, 280) -> Kochi (250, 400) */}
          <line
            x1="390" y1="280" x2="250" y2="400"
            stroke="url(#pathGradient)"
            strokeWidth="2.5"
            strokeDasharray="6,6"
            className="flight-path"
            opacity={activeStep >= 3 ? "1" : "0.2"}
          />

          {/* City Nodes */}
          {/* Hyderabad */}
          <g transform="translate(370, 110)">
            <circle r="12" fill="#F4B400" opacity="0.3" className="animate-ping" />
            <circle r="6" fill="#F4B400" filter="url(#glow)" />
            <text x="14" y="5" fill="#E7CFA3" fontSize="13" fontWeight="bold" fontFamily="Inter">Hyderabad</text>
            <text x="14" y="19" fill="#FFFFFF" fontSize="10" opacity="0.7">Telangana</text>
          </g>

          {/* Bengaluru */}
          <g transform="translate(270, 240)">
            {activeStep >= 1 && <circle r="12" fill="#F4B400" opacity="0.3" className="animate-ping" />}
            <circle r="6" fill={activeStep >= 1 ? "#F4B400" : "#6B7280"} filter="url(#glow)" />
            <text x="-75" y="5" fill="#E7CFA3" fontSize="13" fontWeight="bold" fontFamily="Inter">Bengaluru</text>
            <text x="-75" y="19" fill="#FFFFFF" fontSize="10" opacity="0.7">Karnataka</text>
          </g>

          {/* Chennai */}
          <g transform="translate(390, 280)">
            {activeStep >= 2 && <circle r="12" fill="#F4B400" opacity="0.3" className="animate-ping" />}
            <circle r="6" fill={activeStep >= 2 ? "#F4B400" : "#6B7280"} filter="url(#glow)" />
            <text x="14" y="5" fill="#E7CFA3" fontSize="13" fontWeight="bold" fontFamily="Inter">Chennai</text>
            <text x="14" y="19" fill="#FFFFFF" fontSize="10" opacity="0.7">Tamil Nadu</text>
          </g>

          {/* Kochi */}
          <g transform="translate(250, 400)">
            {activeStep >= 3 && <circle r="14" fill="#F4B400" opacity="0.4" className="animate-ping" />}
            <circle r="7" fill={activeStep >= 3 ? "#F4B400" : "#6B7280"} filter="url(#glow)" />
            <text x="-50" y="5" fill="#E7CFA3" fontSize="13" fontWeight="bold" fontFamily="Inter">Kochi</text>
            <text x="-50" y="19" fill="#FFFFFF" fontSize="10" opacity="0.7">Kerala</text>
          </g>
        </svg>

        {/* Airplane Indicator */}
        <div 
          className="absolute z-20 transition-all duration-1000 ease-in-out pointer-events-none"
          style={{
            top: activeStep === 0 ? '25%' : activeStep === 1 ? '48%' : activeStep === 2 ? '55%' : '78%',
            left: activeStep === 0 ? '62%' : activeStep === 1 ? '45%' : activeStep === 2 ? '65%' : '42%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="w-12 h-12 rounded-full bg-[#F4B400] text-[#0B4D3B] flex items-center justify-center shadow-2xl glow-gold animate-bounce">
            <Plane className="w-6 h-6 rotate-45" />
          </div>
        </div>

      </div>

      {/* Bottom Timeline Indicator */}
      <div className="relative z-20 pb-8 px-6 text-center max-w-xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F4B400] block mb-1">
          {activeStep === 0 && "Locating South India: Telangana & Charminar Gateway"}
          {activeStep === 1 && "Connecting Karnataka: Garden City & Palaces"}
          {activeStep === 2 && "Connecting Tamil Nadu: Ancient Chola & Pandya Temples"}
          {activeStep === 3 && "Arriving in Kerala: Palm Lagoons & Tea Hills"}
        </span>
        <p className="text-xs text-slate-300">
          Entering 4K drone cinematography experience in 3 seconds...
        </p>

        {/* Action Button */}
        <button
          onClick={onCompleteIntro}
          className="mt-4 px-7 py-3 rounded-full bg-gradient-to-r from-[#F4B400] to-[#E7CFA3] text-[#0B4D3B] font-extrabold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 glow-gold"
        >
          <span>Enter Cinematic Drone Voyage</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
