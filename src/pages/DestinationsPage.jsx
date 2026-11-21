import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { POPULAR_DESTINATIONS, EXPLORE_REGIONS, TOUR_PACKAGES } from '../data/tourismData';
import { MapPin, Search, Calendar, Compass, ArrowRight, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export default function DestinationsPage({ onOpenBooking }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const stateQuery = searchParams.get('state') || 'All';
  const [activeState, setActiveState] = useState(stateQuery);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (stateQuery) {
      setActiveState(stateQuery);
    }
  }, [stateQuery]);

  const states = ['All', 'Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'];

  const handleStateFilter = (st) => {
    setActiveState(st);
    if (st === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ state: st });
    }
  };

  const filteredDestinations = POPULAR_DESTINATIONS.filter(dest => {
    const matchesState = activeState === 'All' || dest.state.toLowerCase().includes(activeState.toLowerCase());
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.attractions.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesState && matchesSearch;
  });

  return (
    <div className="bg-[#F8F4E6] text-[#5A3E2B] min-h-screen pt-24 pb-20">
      
      {/* 1. Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0B4D3B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/destinations.jpg" 
            alt="South Indian Destinations" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B4D3B] via-[#0B4D3B]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-4 shadow">
            <Compass className="w-3.5 h-3.5" />
            <span>Dedicated Landing Page • Page 02</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Discover South India's Destinations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            From towering Dravidian temple towers and serene palm backwaters to misty Western Ghats tea plantations and royal stone empires.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-[#147D64] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations (e.g. Madurai, Munnar, Hampi, Ooty, Tirupati)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white text-[#1F2937] text-sm focus:outline-none focus:ring-2 focus:ring-[#F4B400] shadow-xl placeholder:text-slate-400 font-medium"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* 2. State-Wise Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {states.map((st) => (
            <button
              key={st}
              onClick={() => handleStateFilter(st)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm ${
                activeState === st
                  ? 'bg-[#0B4D3B] text-[#F4B400] shadow-lg scale-105'
                  : 'bg-white text-[#5A3E2B] hover:bg-[#E7CFA3]/30 border border-[#147D64]/15'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* 3. Destinations Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 hover:border-[#F4B400] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#F4B400] text-[#0B4D3B] text-[10px] font-extrabold uppercase tracking-wider shadow">
                    {dest.category}
                  </span>
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white flex items-center gap-1 drop-shadow">
                    <MapPin className="w-3.5 h-3.5 text-[#F4B400]" />
                    {dest.state}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[#0B4D3B] group-hover:text-[#147D64] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A3E2B]/80 mt-2 leading-relaxed font-medium">
                    {dest.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#147D64]/10 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#147D64] font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#F4B400]" />
                      <span>Best Time: {dest.bestTime}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase text-[#0B4D3B] block mb-1">Key Attractions:</span>
                      <ul className="text-xs text-[#5A3E2B]/75 space-y-1">
                        {dest.attractions.slice(0, 3).map((a, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#147D64] shrink-0 mt-0.5" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#147D64]/10 mt-3">
                <button
                  onClick={() => onOpenBooking({ destination: dest.name, state: dest.state })}
                  className="w-full py-2.5 rounded-xl bg-[#0B4D3B] hover:bg-[#147D64] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Plan Trip to {dest.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 4. Related Tour Packages Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#147D64]/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Ready-Made Itineraries</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B] mt-1">
                Explore Corresponding Tour Packages
              </h2>
              <p className="text-sm text-[#5A3E2B]/80 mt-1 font-medium">
                Comprehensive 4 to 10-day packages with verified private drivers, deluxe hotel stays, and temple guidance.
              </p>
            </div>
            <Link
              to="/tour-packages"
              className="px-6 py-3 rounded-full bg-[#F4B400] hover:bg-[#e5a700] text-[#0B4D3B] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span>View All Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOUR_PACKAGES.slice(0, 3).map((pkg) => (
              <div key={pkg.id} className="p-5 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/15 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#147D64]">{pkg.duration}</span>
                  <h4 className="font-heading text-lg font-bold text-[#0B4D3B] mt-1">{pkg.title}</h4>
                  <p className="text-xs text-[#5A3E2B]/80 mt-2 line-clamp-2">{pkg.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#147D64]/10 flex items-center justify-between">
                  <span className="font-heading font-extrabold text-base text-[#0B4D3B]">{pkg.price}</span>
                  <button
                    onClick={() => onOpenBooking(pkg)}
                    className="px-4 py-1.5 rounded-lg bg-[#0B4D3B] text-white hover:bg-[#147D64] text-xs font-bold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
