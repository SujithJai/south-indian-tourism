import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tourismData';

export default function FloatingActions({ onOpenBookingModal }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Quick Plan Trip Button */}
      <button
        onClick={onOpenBookingModal}
        className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-400/50 text-emerald-300 text-xs font-bold shadow-2xl backdrop-blur-md hover:scale-105 active:scale-95 transition-all"
      >
        <Calendar className="w-4 h-4 text-emerald-400" />
        <span>Get Free Quote</span>
      </button>

      {/* Floating Action Circle Group */}
      <div className="flex items-center gap-2.5">
        
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          title="Direct Phone Call"
          className="w-12 h-12 rounded-full bg-slate-900 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 animate-bounce" />
        </a>

        {/* WhatsApp Button with pulse ring */}
        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noreferrer"
          title="WhatsApp Enquiry"
          className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all group"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100 animate-ping pointer-events-none"></span>
          <MessageCircle className="w-7 h-7 relative z-10" />
        </a>

      </div>
    </div>
  );
}
