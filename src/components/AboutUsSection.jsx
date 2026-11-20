import React from 'react';
import { BUSINESS_INFO } from '../data/tourismData';
import { Compass, Award, CheckCircle2 } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 bg-[#F0F7F4] text-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Visual Grid */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#147D64]/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
                alt="South Indian Tourism Madurai Temple"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B4D3B]/90 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F4B400]/40 flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-[#F4B400] text-[#1F2937] flex items-center justify-center font-heading font-extrabold text-xl shrink-0 shadow-lg">
                  15+
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#0B4D3B]">Years of Travel Excellence</h4>
                  <p className="text-xs text-[#6B7280]">Headquartered in Mohanur, Namakkal, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Accent mini card */}
            <div className="hidden sm:block absolute -top-6 -right-6 bg-white p-4 rounded-2xl border border-[#F4B400]/40 shadow-xl max-w-[220px]">
              <div className="flex items-center gap-2 text-[#0B4D3B] text-xs font-bold mb-1">
                <Award className="w-4 h-4 text-[#F4B400]" />
                <span>30+ Destinations</span>
              </div>
              <p className="text-[11px] text-[#6B7280] leading-tight">
                Curated tours across Tamil Nadu, Karnataka, Kerala & Andhra Pradesh.
              </p>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E6] border border-[#F4B400]/40 text-[#0B4D3B] text-xs font-bold">
              <Compass className="w-3.5 h-3.5 text-[#147D64]" />
              <span>About South Indian Tourism</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight leading-tight">
              Your Trusted Gateway to the <br />
              <span className="text-[#147D64]">Wonders of South India</span>
            </h2>

            <p className="text-[#1F2937] text-sm sm:text-base leading-relaxed">
              <strong>South Indian Tourism</strong>, headquartered in Mohanur (Namakkal District, Tamil Nadu), is a premier tour operator specializing in bespoke itineraries across South India's historic temple circuits, hill stations, backwaters, and pristine coastlines.
            </p>

            <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed">
              With over 15 years of regional travel expertise, we deliver seamless journeys for families, couples, and groups with luxury pushback AC Tempo Travellers, premium Innova Crystas, and courteous verified drivers.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "15+ Years Regional Expertise",
                "Mohanur, Namakkal Head Office",
                "Full South India Inter-State Permits",
                "Customized Itinerary Flexibility",
                "Verified & Courteous Drivers",
                "24/7 Dedicated Trip Coordination"
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#0B4D3B]">
                  <CheckCircle2 className="w-4 h-4 text-[#147D64] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Quick Stat Bar */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#147D64]/15">
              <div className="p-3 rounded-2xl bg-white border border-[#147D64]/15 text-center shadow-sm">
                <div className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B4D3B]">15+</div>
                <div className="text-[11px] text-[#6B7280]">Years Trust</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#147D64]/15 text-center shadow-sm">
                <div className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B4D3B]">30+</div>
                <div className="text-[11px] text-[#6B7280]">Destinations</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#147D64]/15 text-center shadow-sm">
                <div className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B4D3B]">100%</div>
                <div className="text-[11px] text-[#6B7280]">Personal Care</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
