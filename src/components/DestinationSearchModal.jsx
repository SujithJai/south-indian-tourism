import React, { useState } from 'react';
import { ALL_DESTINATION_TAGS } from '../data/tourismData';
import { Search, MapPin, X, ArrowRight, Compass } from 'lucide-react';

export default function DestinationSearchModal({ isOpen, onClose, onSelectDestination }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  if (!isOpen) return null;

  const states = ['All', 'Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh'];

  const filtered = ALL_DESTINATION_TAGS.filter(dest => {
    const matchesQuery = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'All' || dest.state.toLowerCase() === selectedState.toLowerCase();
    return matchesQuery && matchesState;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white border border-[#147D64]/30 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col z-10 shadow-2xl text-[#1F2937]">
        
        {/* Header */}
        <div className="p-6 border-b border-[#147D64]/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#147D64]" />
            <div>
              <h3 className="font-heading text-xl font-bold text-[#0B4D3B]">Where Do You Want to Go?</h3>
              <p className="text-xs text-[#6B7280]">Search 30+ destinations across South India</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-[#0B4D3B] bg-[#F0F7F4] border border-[#147D64]/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="p-6 pb-3 space-y-3">
          <div className="relative">
            <Search className="w-5 h-5 text-[#147D64] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by destination (e.g. Ooty, Madurai, Munnar, Coorg, Hampi)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
              autoFocus
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-black"
              >
                Clear
              </button>
            )}
          </div>

          {/* State Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 text-xs">
            {states.map(st => (
              <button
                key={st}
                onClick={() => setSelectedState(st)}
                className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                  selectedState === st 
                    ? 'bg-[#147D64] text-white font-bold' 
                    : 'bg-[#F0F7F4] text-[#1F2937] hover:bg-[#FFF8E6]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-2">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
              <MapPin className="w-8 h-8 mx-auto text-[#147D64]/40 mb-2" />
              <p className="text-sm">No destinations found matching "{searchTerm}".</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for Ooty, Madurai, Coorg, Munnar, or Hampi.</p>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectDestination(item);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#F0F7F4] hover:bg-[#FFF8E6] border border-[#147D64]/10 hover:border-[#F4B400] text-left transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#147D64] group-hover:scale-105 transition-transform shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1F2937] group-hover:text-[#0B4D3B]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#6B7280]">
                      {item.category} • <span className="text-[#147D64] font-semibold">{item.state}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#147D64]">
                  <span>Plan Trip</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))
          )}
        </div>

        <div className="p-4 bg-[#F0F7F4] border-t border-[#147D64]/15 text-center text-xs text-[#6B7280]">
          Showing {filtered.length} of {ALL_DESTINATION_TAGS.length} South Indian Tourism locations
        </div>

      </div>
    </div>
  );
}
