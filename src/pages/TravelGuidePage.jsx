import React, { useState } from 'react';
import { TRAVEL_GUIDE_DATA, BUSINESS_INFO } from '../data/tourismData';
import { Compass, Sun, CloudRain, Car, Train, Plane, CheckSquare, HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TravelGuidePage({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What is the best month to plan a complete South India tour?",
      a: "October through March is universally the best time to visit South India. Temperatures are pleasant (20°C–28°C), rainfall is minimal, and weather is optimal for both sightseeing and hill stations."
    },
    {
      q: "What is the dress code for temples in South India?",
      a: "Most traditional temples (especially in Tamil Nadu and Kerala) require traditional or modest attire: dhotis or formal trousers with shirts for men, and sarees, churidars, or salwar kameez for women. Shorts, sleeveless tops, and mini dresses are strictly not permitted."
    },
    {
      q: "Can I book a private car with driver for our entire South India trip?",
      a: "Yes! Having a dedicated chauffeured vehicle (Sedan, Innova, or Tempo Traveller) is the most comfortable and flexible way to explore South India. Your driver handles inter-state permits, tolls, and luggage while you relax."
    },
    {
      q: "Is South Indian food only vegetarian and spicy?",
      a: "South Indian cuisine offers both extraordinary vegetarian feasts (served on fresh plantain leaves) and world-renowned non-vegetarian dishes like Malabar fish curry, Chettinad pepper chicken, and Hyderabadi biryani. Spice levels can be customized to your preference."
    },
    {
      q: "Are the hill stations cold enough to require winter jackets?",
      a: "Munnar, Ooty, and Kodaikanal can drop to 8°C–14°C at night and in early mornings during December and January. A lightweight sweater or jacket is definitely recommended."
    }
  ];

  return (
    <div className="bg-[#F8F4E6] text-[#5A3E2B] min-h-screen pt-24 pb-20">
      
      {/* 1. Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0B4D3B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/travelguide.jpg" 
            alt="South India Travel Guide" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B4D3B] via-[#0B4D3B]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-4 shadow">
            <Compass className="w-3.5 h-3.5" />
            <span>Dedicated Landing Page • Page 06</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            South India Travel Guide
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Essential traveler intelligence: best seasons, road connectivity, packing checklists, temple customs, regional flavors, and common travel questions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        
        {/* 2. Best Time & Seasons */}
        <div id="seasons" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#147D64]/15 shadow-md">
          <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Climate & Seasons</span>
          <h2 className="font-heading text-3xl font-bold text-[#0B4D3B] mt-1">
            When to Visit South India
          </h2>
          <p className="text-sm text-[#5A3E2B]/85 mt-2 max-w-3xl font-medium leading-relaxed">
            {TRAVEL_GUIDE_DATA.bestTime.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {TRAVEL_GUIDE_DATA.bestTime.seasons.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/15">
                <span className="px-3 py-1 rounded-full bg-[#0B4D3B] text-[#F4B400] text-xs font-extrabold">
                  {s.temp}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#0B4D3B] mt-3">
                  {s.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A3E2B]/80 mt-2 font-medium leading-relaxed">
                  {s.verdict}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Transportation & Routes */}
        <div id="transport" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#147D64]/15 shadow-md">
          <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Travel Logistics</span>
          <h2 className="font-heading text-3xl font-bold text-[#0B4D3B] mt-1">
            Getting Around South India
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {TRAVEL_GUIDE_DATA.transportation.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/15 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B4D3B] text-[#F4B400] flex items-center justify-center mb-4">
                    {i === 0 ? <Car className="w-5 h-5" /> : i === 1 ? <Train className="w-5 h-5" /> : <Plane className="w-5 h-5" />}
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[#0B4D3B]">{t.mode}</h4>
                  <p className="text-xs text-[#5A3E2B]/80 mt-2 leading-relaxed font-medium">{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Packing & Culture Checklists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#147D64]/15 shadow-md">
            <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Preparation</span>
            <h3 className="font-heading text-2xl font-bold text-[#0B4D3B] mt-1">
              Packing Checklist
            </h3>
            <div className="mt-6 space-y-3">
              {TRAVEL_GUIDE_DATA.packingTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A3E2B]/85 font-medium">
                  <CheckSquare className="w-4 h-4 text-[#147D64] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#147D64]/15 shadow-md">
            <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Local Etiquette</span>
            <h3 className="font-heading text-2xl font-bold text-[#0B4D3B] mt-1">
              Culture & Temple Customs
            </h3>
            <div className="mt-6 space-y-3">
              {TRAVEL_GUIDE_DATA.cultureTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A3E2B]/85 font-medium">
                  <CheckSquare className="w-4 h-4 text-[#F4B400] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 5. Food Specialties */}
        <div id="food" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#147D64]/15 shadow-md">
          <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Gastronomy</span>
          <h2 className="font-heading text-3xl font-bold text-[#0B4D3B] mt-1">
            Regional Food Specialties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {TRAVEL_GUIDE_DATA.foodSpecialties.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/15">
                <span className="text-xs font-bold uppercase text-[#147D64] block">{f.state}</span>
                <p className="text-xs text-[#5A3E2B] mt-2 font-semibold leading-relaxed">
                  {f.dishes}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Frequently Asked Questions */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#147D64]/15 shadow-md">
          <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Common Queries</span>
          <h2 className="font-heading text-3xl font-bold text-[#0B4D3B] mt-1 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-[#147D64]/20 rounded-2xl overflow-hidden bg-[#F8F4E6]/50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between font-heading font-bold text-base text-[#0B4D3B] hover:text-[#147D64] transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-[#F4B400] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#147D64] shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-[#5A3E2B]/85 leading-relaxed font-medium border-t border-[#147D64]/10 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
