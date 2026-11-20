import React from 'react';
import { X, ArrowRight, MapPin, Calendar, Check, Compass, Palmtree, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { DETAILED_PACKAGES, BUSINESS_INFO } from '../data/tourismData';

export default function SectionDetailModal({ activeCardId, onClose, onOpenBooking }) {
  if (!activeCardId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      ></div>

      <div className="relative bg-[#F8F4E6] border border-[#147D64]/30 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 shadow-2xl text-[#5A3E2B]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#0B4D3B] hover:bg-[#F4B400] transition-colors border border-[#147D64]/20 shadow"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. Popular Destinations Content */}
        {activeCardId === 'popular-destinations' && (
          <div>
            <div className="pr-10 mb-6">
              <span className="text-xs font-bold uppercase text-[#147D64] tracking-wider">
                Explore Iconic Locations
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B] mt-1">
                Popular Destinations Across South India
              </h3>
              <p className="text-xs sm:text-sm text-[#5A3E2B]/80 mt-1">
                From ancient Dravidian temple cities to UNESCO boulder ruins and mist-covered hill stations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Madurai & Rameswaram", state: "Tamil Nadu", tag: "Temples & Ocean Bridge", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80" },
                { name: "Ooty & Nilgiris", state: "Tamil Nadu", tag: "Blue Mountains & Toy Train", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80" },
                { name: "Munnar & Alleppey", state: "Kerala", tag: "Tea Valleys & Backwaters", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80" },
                { name: "Hampi & Coorg", state: "Karnataka", tag: "Stone Monuments & Coffee", img: "https://images.unsplash.com/photo-1600100397608-f010f443b772?auto=format&fit=crop&w=400&q=80" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-[#147D64]/15 flex items-center gap-3 p-3 shadow-sm hover:border-[#F4B400] transition-colors">
                  <img src={item.img} alt={item.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-[#0B4D3B]">{item.name}</h4>
                    <span className="text-[11px] text-[#147D64] font-semibold block">{item.state}</span>
                    <span className="text-[10px] text-[#5A3E2B]/70">{item.tag}</span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBooking({ destination: item.name, state: item.state });
                    }}
                    className="p-2 rounded-xl bg-[#F8F4E6] text-[#0B4D3B] hover:bg-[#F4B400] transition-colors shrink-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Experiences Content */}
        {activeCardId === 'experiences' && (
          <div>
            <div className="pr-10 mb-6">
              <span className="text-xs font-bold uppercase text-[#147D64] tracking-wider">
                Unforgettable Moments
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B] mt-1">
                Signature South Indian Experiences
              </h3>
            </div>

            <div className="space-y-3">
              {[
                { title: "Private Houseboat Overnight Cruise in Alleppey", desc: "Glide through palm-fringed lagoons with authentic Kerala meals served on deck." },
                { title: "Colonial Tea Plantation Walk in Ooty & Munnar", desc: "Walk through high-altitude misty tea bushes, visit 100-year-old tea factories and sample fresh harvests." },
                { title: "Sunrise at Hampi Monolithic Boulders", desc: "Coracle boat ride on the Tungabhadra river amidst surreal 14th-century temple ruins." },
                { title: "Pancha Bhoota Shiva Temple Yatra", desc: "Sacred darshans across the cosmic elemental temples of Chidambaram, Tiruvannamalai and Kalahasti." }
              ].map((exp, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-[#147D64]/15 shadow-sm">
                  <h4 className="font-bold text-sm text-[#0B4D3B] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F4B400]" />
                    {exp.title}
                  </h4>
                  <p className="text-xs text-[#5A3E2B]/80 mt-1 pl-6 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Tours & Packages */}
        {activeCardId === 'tours-packages' && (
          <div>
            <div className="pr-10 mb-6">
              <span className="text-xs font-bold uppercase text-[#147D64] tracking-wider">
                Curated Travel Itineraries
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B] mt-1">
                South India Tour Packages
              </h3>
            </div>

            <div className="space-y-3.5">
              {DETAILED_PACKAGES.map((pkg) => (
                <div key={pkg.id} className="p-4 rounded-2xl bg-white border border-[#147D64]/15 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={pkg.image} alt={pkg.title} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[#147D64] tracking-wider">{pkg.duration}</span>
                      <h4 className="font-bold text-sm text-[#0B4D3B]">{pkg.title}</h4>
                      <p className="text-xs text-[#5A3E2B]/70">{pkg.route}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 block">From</span>
                      <span className="font-heading font-extrabold text-lg text-[#0B4D3B]">{pkg.price}</span>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenBooking({ destination: pkg.title, category: pkg.duration });
                      }}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#F4B400] to-[#E7CFA3] text-[#0B4D3B] font-bold text-xs shadow hover:scale-105 transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Travel Guide */}
        {activeCardId === 'travel-guide' && (
          <div>
            <div className="pr-10 mb-6">
              <span className="text-xs font-bold uppercase text-[#147D64] tracking-wider">
                Essential Information
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B] mt-1">
                South India Travel Guide
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-[#147D64]/15">
                <h4 className="font-bold text-sm text-[#0B4D3B] mb-1">Best Seasons</h4>
                <p className="text-[#5A3E2B]/80 leading-relaxed">October to March is ideal for heritage and coastal tours. April to June is perfect for Ooty and Kodaikanal hill stations.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#147D64]/15">
                <h4 className="font-bold text-sm text-[#0B4D3B] mb-1">Vehicle Rentals</h4>
                <p className="text-[#5A3E2B]/80 leading-relaxed">Tempo Travellers (12/17/20 Seater) with experienced hill-route drivers are best for family and pilgrimage groups.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#147D64]/15">
                <h4 className="font-bold text-sm text-[#0B4D3B] mb-1">Inter-State Travel</h4>
                <p className="text-[#5A3E2B]/80 leading-relaxed">All toll taxes, state permits (Tamil Nadu, Karnataka, Kerala, AP) are seamlessly handled by South Indian Tourism.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#147D64]/15">
                <h4 className="font-bold text-sm text-[#0B4D3B] mb-1">Temple Etiquette</h4>
                <p className="text-[#5A3E2B]/80 leading-relaxed">Traditional dress codes apply at major temples (Madurai, Rameswaram, Tirupati). Special darshan assistance is provided.</p>
              </div>
            </div>
          </div>
        )}

        {/* 5. Culture & Heritage */}
        {activeCardId === 'culture-heritage' && (
          <div>
            <div className="pr-10 mb-6">
              <span className="text-xs font-bold uppercase text-[#147D64] tracking-wider">
                1000+ Years Living Traditions
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B] mt-1">
                Culture, Art & Heritage Circuits
              </h3>
            </div>

            <div className="space-y-3">
              {[
                { title: "Living Chola Temples", desc: "Brihadisvara in Thanjavur, Gangaikonda Cholapuram, and Airavatesvara in Darasuram." },
                { title: "Classical Performing Arts", desc: "Kathakali and Kalaripayattu martial arts in Kerala, Bharatanatyam in Tamil Nadu." },
                { title: "Pancha Bhoota Shiva Sthalams", desc: "The cosmic elements: Earth (Kanchipuram), Water (Trichy), Fire (Tiruvannamalai), Air (Kalahasti), Space (Chidambaram)." }
              ].map((c, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#147D64]/15">
                  <h4 className="font-bold text-sm text-[#0B4D3B]">{c.title}</h4>
                  <p className="text-xs text-[#5A3E2B]/80 mt-1 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Plan Your Trip */}
        {activeCardId === 'plan-your-trip' && (
          <div className="text-center py-6">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B]">
              Let's Plan Your Perfect Journey
            </h3>
            <p className="text-sm text-[#5A3E2B]/80 mt-2 max-w-md mx-auto">
              Our travel specialists in Mohanur, Namakkal will design a customized route with stays, vehicles and temple timings.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#F4B400] to-[#E7CFA3] text-[#0B4D3B] font-extrabold text-sm shadow-xl"
              >
                Open Trip Planning Form
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
