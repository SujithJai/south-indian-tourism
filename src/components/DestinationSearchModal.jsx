import React, { useState } from 'react';
import { ALL_DESTINATION_TAGS } from '../data/tourismData';
import { Search, MapPin, X, ArrowRight, Compass, Sparkles } from 'lucide-react';

export default function DestinationSearchModal({ isOpen, onClose, onSelectDestination }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  if (!isOpen) return null;

  const states = ['All', 'Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Puducherry'];

  const filtered = ALL_DESTINATION_TAGS.filter(dest => {
    const matchesQuery = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'All' || dest.state.toLowerCase() === selectedState.toLowerCase();
    return matchesQuery && matchesState;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-emerald-950 border border-emerald-500/40 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col z-10 shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-emerald-800/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-400 animate-spin-slow" />
            <div>
              <h3 className="font-cinzel text-xl font-bold text-white">Where Do You Want to Go?</h3>
              <p className="text-xs text-emerald-300">தென்னிந்தியாவின் 30+ சுற்றுலா தலங்களைத் தேடுங்கள்</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white bg-slate-900 border border-emerald-500/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="p-6 pb-3 space-y-3">
          <div className="relative">
            <Search className="w-5 h-5 text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by destination (e.g. Hampi, Ooty, Madurai, Coorg, Munnar)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              autoFocus
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
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
                    ? 'bg-emerald-500 text-white font-semibold' 
                    : 'bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800'
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
              <MapPin className="w-8 h-8 mx-auto text-emerald-500/40 mb-2" />
              <p className="text-sm">No destinations found matching "{searchTerm}".</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for Coorg, Hampi, Madurai, or Ooty.</p>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectDestination(item);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-emerald-900/20 hover:bg-emerald-900/60 border border-emerald-500/10 hover:border-emerald-400/40 text-left transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-emerald-300">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.category} • <span className="text-emerald-400 font-medium">{item.state}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span>Plan Trip</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-emerald-950/90 border-t border-emerald-800/60 text-center text-xs text-slate-400">
          Showing {filtered.length} of {ALL_DESTINATION_TAGS.length} South Indian Tourism locations
        </div>

      </div>
    </div>
  );
}
