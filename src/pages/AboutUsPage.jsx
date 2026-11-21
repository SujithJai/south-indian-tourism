import React from 'react';
import { BUSINESS_INFO } from '../data/tourismData';
import { Award, ShieldCheck, HeartHandshake, Compass, Users, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  return (
    <div className="bg-[#F8F4E6] text-[#5A3E2B] min-h-screen pt-24 pb-20">
      
      {/* 1. Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0B4D3B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/destinations.jpg" 
            alt="About South Indian Tourism" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B4D3B] via-[#0B4D3B]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-4 shadow">
            <Award className="w-3.5 h-3.5" />
            <span>Dedicated Landing Page • Page 09</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            About South Indian Tourism
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Pioneering authentic, immersive, and responsible travel experiences across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        
        {/* 2. Company Introduction */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#147D64]/15 shadow-md">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Our Story</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0B4D3B] mt-1">
              Rooted in the Soul of South India
            </h2>
            <p className="text-sm sm:text-base text-[#5A3E2B]/85 mt-4 leading-relaxed font-medium">
              Headquartered in Mohanur, Namakkal, Tamil Nadu, {BUSINESS_INFO.name} was established with a singular vision: to showcase the profound cultural majesty, timeless temple architecture, and scenic biodiversity of southern India to travelers worldwide.
            </p>
            <p className="text-sm sm:text-base text-[#5A3E2B]/85 mt-3 leading-relaxed font-medium">
              We specialize in custom tour packages, dedicated AC vehicles with courteous local drivers, and hand-curated itineraries designed around your pace and preferences.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="p-6 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/15">
              <span className="text-xs font-extrabold uppercase text-[#147D64] block">Our Vision</span>
              <h3 className="font-heading text-xl font-bold text-[#0B4D3B] mt-1">
                Authentic & Seamless Discovery
              </h3>
              <p className="text-xs sm:text-sm text-[#5A3E2B]/80 mt-2 font-medium leading-relaxed">
                To be the most trusted and hospitable gateway for travelers discovering South India, ensuring that every journey honors local heritage and community traditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/15">
              <span className="text-xs font-extrabold uppercase text-[#147D64] block">Our Mission</span>
              <h3 className="font-heading text-xl font-bold text-[#0B4D3B] mt-1">
                Zero Compromise on Hospitality
              </h3>
              <p className="text-xs sm:text-sm text-[#5A3E2B]/80 mt-2 font-medium leading-relaxed">
                To provide transparent pricing, clean and well-maintained private transport, punctual verified chauffeurs, and personalized customer support from touchdown to takeoff.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Why Choose Us (4 Pillars) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">The Difference</span>
            <h2 className="font-heading text-3xl font-bold text-[#0B4D3B] mt-1">
              Why Travel With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "100% Customized Trips",
                desc: "No rigid group itineraries. We design each day around your family's interests, wake-up times, and dietary preferences.",
                icon: Compass
              },
              {
                title: "Dedicated AC Fleet",
                desc: "From comfortable Sedans and Innova Crystas to luxury pushback Tempo Travellers with state-level permits included.",
                icon: ShieldCheck
              },
              {
                title: "Devotional & Courteous Chauffeurs",
                desc: "Experienced local drivers familiar with temple darshan timings, scenic viewpoints, and safe highway navigation.",
                icon: HeartHandshake
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden charges. Clear breakdown of fuel, driver bata, tolls, parking, and hotel tariffs upfront.",
                icon: Award
              }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white border border-[#147D64]/15 shadow-sm text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#0B4D3B] text-[#F4B400] flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0B4D3B]">{p.title}</h3>
                <p className="text-xs text-[#5A3E2B]/80 mt-2 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Contact CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B4D3B] to-[#147D64] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-xl font-medium">
              Contact our team today for friendly advice, sample day-by-day itineraries, and free customized quotes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#F4B400] hover:bg-[#e0a600] text-[#0B4D3B] font-extrabold text-xs uppercase tracking-wider shadow"
            >
              Contact Our Office
            </Link>
            <Link
              to="/plan-your-trip"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider border border-white/30"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
