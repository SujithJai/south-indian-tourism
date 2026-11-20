import React from 'react';
import { BUSINESS_INFO } from '../data/tourismData';
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function ContactUsSection({ onOpenBookingModal }) {
  return (
    <section id="contact" className="py-20 bg-[#0B4D3B] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-3 shadow-lg">
            <Phone className="w-3.5 h-3.5 text-[#F4B400]" />
            <span>24/7 Travel Assistance • எங்களை தொடர்பு கொள்ள</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Start Planning <br />
            <span className="text-[#FFD166]">Your Journey Today</span>
          </h2>
          <p className="mt-3 text-slate-200 text-xs sm:text-sm md:text-base">
            எந்த நேரத்திலும் எங்களை தொலைபேசி அல்லது வாட்ஸ்அப் வழியாக தொடர்புகொண்டு உடனடி டூர் கொட்டேஷன் பெறலாம்.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#147D64]/20 shadow-xl flex flex-col justify-between text-[#1F2937]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF8E6] text-[#0B4D3B] flex items-center justify-center mb-4 border border-[#F4B400]/40">
                <Phone className="w-6 h-6 text-[#147D64]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0B4D3B]">Call Us Directly</h3>
              <p className="text-xs text-[#6B7280] mt-1">Available 7 days a week</p>
              
              <div className="mt-4 space-y-1.5">
                <a 
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="block text-sm font-bold text-[#0B4D3B] hover:text-[#147D64] transition-colors"
                >
                  {BUSINESS_INFO.primaryPhone} (Primary)
                </a>
                <a 
                  href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                  className="block text-sm font-bold text-[#0B4D3B] hover:text-[#147D64] transition-colors"
                >
                  {BUSINESS_INFO.secondaryPhone} (Secondary)
                </a>
              </div>
            </div>
            
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="mt-6 py-2.5 px-4 rounded-xl bg-[#F0F7F4] hover:bg-[#FFF8E6] text-[#0B4D3B] text-xs font-bold text-center block transition-colors border border-[#147D64]/20"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#147D64]/20 shadow-xl flex flex-col justify-between text-[#1F2937]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F0F7F4] text-[#147D64] flex items-center justify-center mb-4 border border-[#147D64]/30">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0B4D3B]">WhatsApp Enquiry</h3>
              <p className="text-xs text-[#6B7280] mt-1">Instant quotes & vehicle photos</p>
              
              <div className="mt-4">
                <span className="text-sm font-bold text-[#147D64]">
                  {BUSINESS_INFO.whatsappNumber}
                </span>
                <p className="text-[11px] text-[#6B7280] mt-1">Send us your itinerary for quick quotation</p>
              </div>
            </div>
            
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 py-2.5 px-4 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white text-xs font-bold text-center block shadow transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#147D64]/20 shadow-xl flex flex-col justify-between text-[#1F2937]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF8E6] text-[#147D64] flex items-center justify-center mb-4 border border-[#F4B400]/40">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0B4D3B]">Email Communication</h3>
              <p className="text-xs text-[#6B7280] mt-1">Corporate & group tour bookings</p>
              
              <div className="mt-4">
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-xs sm:text-sm font-bold text-[#0B4D3B] hover:text-[#147D64] break-all transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
            
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="mt-6 py-2.5 px-4 rounded-xl bg-[#F0F7F4] hover:bg-[#FFF8E6] text-[#0B4D3B] text-xs font-bold text-center block transition-colors border border-[#147D64]/20"
            >
              Send Email
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#147D64]/20 shadow-xl flex flex-col justify-between text-[#1F2937]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F0F7F4] text-[#147D64] flex items-center justify-center mb-4 border border-[#147D64]/30">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0B4D3B]">Head Office</h3>
              <p className="text-xs text-[#6B7280] mt-1">Mohanur, Namakkal, Tamil Nadu</p>
              
              <p className="mt-3 text-xs text-[#1F2937] leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
              
              <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#147D64] font-semibold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
            
            <button
              onClick={() => onOpenBookingModal()}
              className="mt-6 py-2.5 px-4 rounded-xl bg-[#F4B400] hover:bg-[#e0a600] text-[#1F2937] text-xs font-extrabold text-center block transition-colors shadow"
            >
              Plan Your Trip
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
