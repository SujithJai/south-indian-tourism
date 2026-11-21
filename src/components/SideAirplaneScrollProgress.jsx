import React, { useState, useEffect, useRef } from 'react';
import { Plane, MapPin } from 'lucide-react';

export default function SideAirplaneScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        setScrollProgress(progress);
      }

      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Jump to location when clicking on the track
  const handleTrackClick = (e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const clickRatio = Math.min(Math.max(clickY / rect.height, 0), 1);
    
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: clickRatio * scrollHeight,
      behavior: 'smooth'
    });
  };

  const percentage = Math.round(scrollProgress * 100);

  return (
    <aside
      aria-label="Flight Scroll Tracker"
      className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 select-none flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Flight Path Track Container */}
      <div 
        ref={trackRef}
        onClick={handleTrackClick}
        title={`South India Flight Track: ${percentage}% scrolled. Click to navigate.`}
        className="relative h-[42vh] sm:h-[52vh] max-h-[460px] w-6 sm:w-8 flex justify-center items-stretch cursor-pointer py-3 group"
      >
        {/* Background Track Line (Dashed Flight Route) */}
        <div className="absolute top-3 bottom-3 left-1/2 -translate-x-1/2 w-[2px] sm:w-[3px] bg-black/15 backdrop-blur-md rounded-full border-r border-dashed border-[#0B4D3B]/30"></div>

        {/* Golden Contrail Fill Line Tracing the Flight Progress */}
        <div 
          className="absolute top-3 left-1/2 -translate-x-1/2 w-[2px] sm:w-[3px] bg-gradient-to-b from-[#F4B400] via-[#FFD166] to-[#E7CFA3] rounded-full shadow-[0_0_8px_rgba(244,180,0,0.8)] transition-all duration-100 ease-out"
          style={{ height: `calc(${scrollProgress} * (100% - 24px))` }}
        ></div>

        {/* Top Departure Waypoint */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0B4D3B] border border-[#F4B400] shadow-sm"></div>

        {/* Bottom Destination Waypoint */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <MapPin className="w-3 h-3 text-[#0B4D3B] drop-shadow" />
        </div>

        {/* Flying Airplane that moves down the track as you scroll */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-100 ease-out z-10"
          style={{ 
            top: `calc(12px + ${scrollProgress} * (100% - 24px))`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Tooltip on hover or active scroll (positioned to the left of the plane) */}
          <div 
            className={`absolute right-full mr-2 sm:mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full bg-[#0B4D3B]/95 text-[#F4B400] border border-[#F4B400]/40 backdrop-blur-md text-[10px] sm:text-xs font-bold tracking-wider whitespace-nowrap shadow-xl transition-all duration-300 pointer-events-none flex items-center gap-1.5 ${
              isHovered || isScrolling ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400] animate-ping"></span>
            <span>{percentage}%</span>
            <span className="text-white/80 hidden sm:inline">• South India</span>
          </div>

          {/* Airplane Badge Button */}
          <div 
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#0B4D3B] to-[#062920] border-2 border-[#F4B400] text-[#F4B400] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.45)] hover:scale-125 transition-transform duration-200"
          >
            <Plane 
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F4B400] fill-[#F4B400]/20 transform rotate-180 drop-shadow-[0_0_4px_#F4B400]" 
            />
          </div>

          {/* Faint Jet Stream Trail below the plane */}
          <div className="w-0.5 h-3 bg-gradient-to-t from-transparent to-[#F4B400]/60 mx-auto -mt-0.5"></div>
        </div>

      </div>
    </aside>
  );
}
