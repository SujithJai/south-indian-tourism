import React from 'react';
import { BUSINESS_INFO } from '../data/tourismData';
import { Phone, MessageCircle, Mail, MapPin, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import GreenWaveDivider from './GreenWaveDivider';

export default function ContactUsSection({ onOpenBookingModal }) {
  return (
    <section id="contact" className="relative bg-emerald-950/90 py-20 text-white overflow-hidden">
      
      {/* Wave */}
      <GreenWaveDivider flipped={true} color="fill-emerald-950/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>24/7 Travel Assistance • எங்களை தொடர்பு கொள்ள</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Start Planning <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
              Your Journey Today
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base">
            எந்த நேரத்திலும் எங்களை தொலைபேசி அல்லது வாட்ஸ்அப் வழியாக தொடர்புகொண்டு உடனடி டூர் கொட்டேஷன் பெறலாம்.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone Card */}
          <div className="glass-card rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">Call Us Directly</h3>
              <p className="text-xs text-slate-300 mt-1">Available 7 days a week</p>
              
              <div className="mt-4 space-y-2">
                <a 
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="block text-sm font-semibold text-emerald-300 hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.primaryPhone} (Primary)
                </a>
                <a 
                  href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                  className="block text-sm font-semibold text-emerald-300 hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.secondaryPhone} (Secondary)
                </a>
              </div>
            </div>
            
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="mt-6 py-2.5 px-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-semibold text-center block transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="glass-card rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">WhatsApp Enquiry</h3>
              <p className="text-xs text-slate-300 mt-1">Instant quotes & vehicle photos</p>
              
              <div className="mt-4">
                <span className="text-sm font-semibold text-emerald-300">
                  {BUSINESS_INFO.whatsappNumber}
                </span>
                <p className="text-[11px] text-slate-400 mt-1">Send us your itinerary for quick quotation</p>
              </div>
            </div>
            
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold text-center block shadow transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Email Card */}
          <div className="glass-card rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">Email Address</h3>
              <p className="text-xs text-slate-300 mt-1">Corporate & bulk tour bookings</p>
              
              <div className="mt-4">
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-xs sm:text-sm font-semibold text-emerald-300 hover:text-white break-all transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
            
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="mt-6 py-2.5 px-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-semibold text-center block transition-colors"
            >
              Send Email
            </a>
          </div>

          {/* Address Card */}
          <div className="glass-card rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">Head Office</h3>
              <p className="text-xs text-slate-300 mt-1">Mohanur, Namakkal, Tamil Nadu</p>
              
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
              
              <div className="mt-2 flex items-center gap-1.5 text-[11px] text-amber-300">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
            
            <button
              onClick={() => onOpenBookingModal()}
              className="mt-6 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-xs font-semibold text-center block transition-colors"
            >
              Plan Your Trip
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
