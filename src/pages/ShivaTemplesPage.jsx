import React from 'react';
import { SHIVA_TEMPLES, BUSINESS_INFO } from '../data/tourismData';
import { Sparkles, MapPin, Phone, MessageCircle, Calendar, ArrowRight, ShieldCheck, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ShivaTemplesPage({ onOpenBooking }) {
  return (
    <div className="bg-[#F8F4E6] text-[#5A3E2B] min-h-screen pt-24 pb-20">
      
      {/* 1. Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0B4D3B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/destinations.jpg" 
            alt="Shiva Temple Tours" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B4D3B] via-[#0B4D3B]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-4 shadow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Landing Page • Page 05</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            South Indian Shiva Temple Tours
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Sacred journeys connecting the five cosmic element temples (Pancha Bhoota Sthalams: Earth, Water, Fire, Air, Space), revered Jyotirlinga shrines, and coastal colossus temples.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        
        {/* 2. Pancha Bhoota Sthalams Overview Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Cosmic Elements of Shiva</span>
            <h2 className="font-heading text-3xl font-bold text-[#0B4D3B] mt-1">
              The 5 Elements of Creation
            </h2>
            <p className="text-xs sm:text-sm text-[#5A3E2B]/80 mt-1">
              Ancient sage wisdom embodied in five monumental sacred sites across Tamil Nadu and Andhra Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { element: "Earth (Prithvi)", temple: "Ekambareswarar", location: "Kanchipuram, TN" },
              { element: "Water (Appu)", temple: "Jambukeswarar", location: "Thiruvanaikaval, TN" },
              { element: "Fire (Agni)", temple: "Arunachaleswarar", location: "Tiruvannamalai, TN" },
              { element: "Air (Vayu)", temple: "Srikalahasteeswara", location: "Srikalahasti, AP" },
              { element: "Space (Akasha)", temple: "Thillai Nataraja", location: "Chidambaram, TN" }
            ].map((el, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-[#147D64]/15 text-center shadow-sm hover:border-[#F4B400] transition-colors">
                <span className="w-8 h-8 rounded-full bg-[#F4B400] text-[#0B4D3B] font-extrabold text-xs flex items-center justify-center mx-auto mb-2">
                  0{i + 1}
                </span>
                <span className="text-xs font-extrabold text-[#147D64] uppercase block">{el.element}</span>
                <h4 className="font-heading font-bold text-sm text-[#0B4D3B] mt-1">{el.temple}</h4>
                <span className="text-[11px] text-[#5A3E2B]/70 block mt-0.5">{el.location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Detailed Temple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHIVA_TEMPLES.map((temple, idx) => (
            <div
              key={temple.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 hover:border-[#F4B400] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#F4B400] text-[#0B4D3B] text-[11px] font-extrabold uppercase tracking-wide shadow">
                    {temple.element}
                  </span>
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F4B400]" />
                    {temple.location}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase text-[#147D64] block mb-1">
                    {temple.type}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#0B4D3B] leading-snug">
                    {temple.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5A3E2B]/85 leading-relaxed font-medium">
                    {temple.significance}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-[#F8F4E6] border border-[#147D64]/15 text-xs">
                    <strong className="block text-[10px] uppercase text-[#147D64]">Circuit Connection:</strong>
                    <span className="text-[#0B4D3B] font-medium text-[11px]">{temple.circuit}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#147D64]/10 mt-3 flex items-center gap-2">
                <button
                  onClick={() => onOpenBooking({ destination: temple.name, tourType: 'Shiva Temple Tour' })}
                  className="flex-1 py-2.5 rounded-xl bg-[#0B4D3B] hover:bg-[#147D64] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  Book Darshan Yatra
                </button>
                <a
                  href={`https://wa.me/916380939670?text=Namaste%2C%20I%20want%20to%20plan%20a%20pilgrimage%20to%20${encodeURIComponent(temple.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white transition-colors"
                  title="WhatsApp Enquiry"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Pilgrimage Fleet & Driver Support */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#147D64]/20 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Dedicated Pilgrimage Fleet</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B] mt-1">
              Comfortable Pilgrimage for Seniors & Families
            </h3>
            <p className="text-xs sm:text-sm text-[#5A3E2B]/85 mt-2 leading-relaxed">
              We understand the sacred nature of pilgrimage journeys. Our dedicated AC Tempo Travellers (12, 17, 20 seats) feature ergonomic pushback seats, ample luggage space, and devotional chauffeurs familiar with temple timings, dress codes, and wheelchair accessibility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="px-6 py-3.5 rounded-full bg-[#F4B400] hover:bg-[#e0a600] text-[#0B4D3B] text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.primaryPhone}</span>
            </a>
            <button
              onClick={() => onOpenBooking({ tourType: 'Shiva Temple Pilgrimage' })}
              className="px-6 py-3.5 rounded-full bg-[#0B4D3B] hover:bg-[#147D64] text-white text-xs font-extrabold uppercase tracking-wider shadow-md"
            >
              Enquire Custom Yatra
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
