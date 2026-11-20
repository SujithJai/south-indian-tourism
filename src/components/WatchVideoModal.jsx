import React, { useRef, useEffect } from 'react';
import { X, Volume2, VolumeX, ArrowRight, Video } from 'lucide-react';

export default function WatchVideoModal({ isOpen, onClose, stageData, onOpenBooking }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, stageData]);

  if (!isOpen || !stageData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Dark Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      ></div>

      {/* Modal Stage */}
      <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-black border border-[#F4B400]/40 shadow-2xl z-10 flex flex-col">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-black/90 to-transparent absolute top-0 left-0 right-0 z-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <span className="font-heading text-lg font-bold text-white">
              {stageData.stateName} • 4K Drone Footage
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/60 text-white hover:bg-[#F4B400] hover:text-[#0B4D3B] transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            controls
            playsInline
            poster={stageData.posterImage}
            className="w-full h-full object-cover"
          >
            <source src={stageData.localVideo} type="video/mp4" />
            <source src={stageData.droneVideo} type="video/mp4" />
          </video>
        </div>

        {/* Bottom Details & CTAs */}
        <div className="p-5 sm:p-6 bg-[#0B4D3B] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading text-xl font-bold text-[#E7CFA3]">
              {stageData.tagline}
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Featuring: {stageData.famousSpots}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking({ destination: stageData.famousSpots, state: stageData.stateName });
            }}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-[#F4B400] to-[#E7CFA3] text-[#0B4D3B] font-extrabold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Book Tour to {stageData.stateName.split(' ')[0]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
