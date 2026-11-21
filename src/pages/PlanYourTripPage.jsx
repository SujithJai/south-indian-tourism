import React from 'react';
import PlanYourTripSection from '../components/PlanYourTripSection';
import { Calendar, CheckCircle2, ShieldCheck, Clock, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tourismData';

export default function PlanYourTripPage() {
  return (
    <div className="bg-[#F8F4E6] text-[#5A3E2B] min-h-screen pt-24 pb-20">
      
      {/* 1. Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0B4D3B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/munnar.jpg" 
            alt="Plan Your Trip to South India" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B4D3B] via-[#0B4D3B]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-4 shadow">
            <Calendar className="w-3.5 h-3.5" />
            <span>Dedicated Landing Page • Page 08</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Plan Your Perfect South India Trip
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Share your travel dates and preferences to receive a 100% customized day-by-day itinerary and transparent quotation within 10 minutes.
          </p>
        </div>
      </div>

      {/* 2. How the Booking Process Works (3 Steps) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Transparent & Effortless</span>
          <h2 className="font-heading text-3xl font-bold text-[#0B4D3B] mt-1">
            How Your Trip Planning Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Submit Preferences", desc: "Tell us your preferred travel dates, destinations, group size, and vehicle choice." },
            { step: "02", title: "Custom Itinerary & Quote", desc: "Our travel specialist prepares a tailored day-by-day plan with clear pricing and hotel options." },
            { step: "03", title: "Confirm & Embark", desc: "Approve your itinerary, receive driver and vehicle details, and enjoy a seamless journey." }
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-[#147D64]/15 shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-[#0B4D3B] text-[#F4B400] font-extrabold text-sm flex items-center justify-center mx-auto mb-3">
                {s.step}
              </span>
              <h3 className="font-heading font-bold text-lg text-[#0B4D3B]">{s.title}</h3>
              <p className="text-xs text-[#5A3E2B]/80 mt-2 font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Interactive Form Section */}
      <PlanYourTripSection />

      {/* 4. Instant WhatsApp & Phone Call Support */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#147D64]/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold text-[#0B4D3B]">
              Need Immediate Travel Planning Assistance?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A3E2B]/80 mt-1 font-medium">
              Speak directly with our senior travel planners in Namakkal, Tamil Nadu.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="px-6 py-3 rounded-full bg-[#F4B400] hover:bg-[#e0a600] text-[#0B4D3B] font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.primaryPhone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#147D64] hover:bg-[#0f6752] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
