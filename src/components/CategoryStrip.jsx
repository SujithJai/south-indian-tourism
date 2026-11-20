import React from 'react';
import { 
  Mountain, 
  Palmtree, 
  Waves, 
  Sparkles 
} from 'lucide-react';

export default function CategoryStrip({ onSelectCategory }) {
  const categories = [
    {
      id: "Temples",
      name: "Temples",
      desc: "Sacred Heritage & Gopurams",
      icon: (
        <svg className="w-6 h-6 text-[#147D64]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v2h1v10H3v2h18v-2h-2V9h1V7l-8-5zm0 2.5L17.5 8H6.5L12 4.5zM7 11h2v8H7v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8z"/>
        </svg>
      )
    },
    {
      id: "Hill Stations",
      name: "Hill Stations",
      desc: "Misty Tea Plantations & Peaks",
      icon: <Mountain className="w-6 h-6 text-[#147D64]" />
    },
    {
      id: "Beaches",
      name: "Beaches",
      desc: "Golden Coasts & Coral Waters",
      icon: <Palmtree className="w-6 h-6 text-[#147D64]" />
    },
    {
      id: "Backwaters",
      name: "Backwaters",
      desc: "Serene Palm-Fringed Lagoons",
      icon: <Waves className="w-6 h-6 text-[#147D64]" />
    },
    {
      id: "Wildlife",
      name: "Wildlife",
      desc: "Forests & Biosphere Reserves",
      icon: (
        <svg className="w-6 h-6 text-[#147D64]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a3 3 0 0 0-3 3c0 .8.3 1.5.8 2.1l-.8.9c-.6.7-1 1.6-1 2.6v.4H6v2h2v4H6v2h2.2c.4 1.7 1.9 3 3.8 3s3.4-1.3 3.8-3H18v-2h-2v-4h2v-2h-2v-.4c0-1-.4-1.9-1-2.6l-.8-.9c.5-.6.8-1.3.8-2.1a3 3 0 0 0-3-3z"/>
        </svg>
      )
    },
    {
      id: "Culture",
      name: "Culture",
      desc: "Palaces & Ancient Traditions",
      icon: <Sparkles className="w-6 h-6 text-[#147D64]" />
    }
  ];

  return (
    <div className="relative -mt-8 sm:-mt-12 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#147D64]/15 hover:border-[#F4B400] shadow-lg shadow-[#0B4D3B]/5 hover:shadow-xl hover:shadow-[#F4B400]/20 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F0F7F4] group-hover:bg-[#FFF8E6] flex items-center justify-center mb-2.5 transition-colors group-hover:scale-110">
              {cat.icon}
            </div>
            <span className="font-heading text-sm sm:text-base font-bold text-[#1F2937] group-hover:text-[#0B4D3B] transition-colors leading-tight">
              {cat.name}
            </span>
            <span className="text-[10px] text-[#6B7280] mt-0.5 font-medium line-clamp-1">
              {cat.desc}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
