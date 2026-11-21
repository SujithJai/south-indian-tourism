import React from 'react';
import { 
  WEBSITE_SECTION_CARDS, 
  THEME_COLORS 
} from '../data/tourismData';
import { 
  Compass, 
  MapPin, 
  Sparkles, 
  ArrowUpRight, 
  Palmtree, 
  Calendar, 
  BookOpen 
} from 'lucide-react';

export default function WebsiteSectionsGrid({ onCardClick }) {
  // Map icons to the 6 cards
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'temple':
        return (
          <svg className="w-5 h-5 text-[#0B4D3B]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 7v2h1v10H3v2h18v-2h-2V9h1V7l-8-5zm0 2.5L17.5 8H6.5L12 4.5zM7 11h2v8H7v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8z"/>
          </svg>
        );
      case 'experiences':
        return <Palmtree className="w-5 h-5 text-[#0B4D3B]" />;
      case 'packages':
        return <Calendar className="w-5 h-5 text-[#0B4D3B]" />;
      case 'guide':
        return <Compass className="w-5 h-5 text-[#0B4D3B]" />;
      case 'culture':
        return <Sparkles className="w-5 h-5 text-[#0B4D3B]" />;
      case 'trip':
      default:
        return <MapPin className="w-5 h-5 text-[#0B4D3B]" />;
    }
  };

  return (
    <section id="website-sections" className="relative bg-[#F8F4E6] text-[#5A3E2B] -mt-2 pt-8 sm:pt-14 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header as in the Blueprint */}
        <div className="mb-10 pb-4 border-b border-[#147D64]/15 flex flex-col sm:flex-row items-start sm:items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#147D64]/20 text-[#0B4D3B] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#147D64]"></span>
              <span className="text-[11px] font-extrabold tracking-wider">AFTER THE VIDEO JOURNEY • 50S+</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
              Website Sections
            </h2>
            <p className="text-sm sm:text-base text-[#5A3E2B]/80 mt-1 font-medium">
              Explore curated destinations, experiences, travel guides and customized trip planning
            </p>
          </div>
        </div>

        {/* 6 Cards Grid (3 Columns x 2 Rows) matching Blueprint */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WEBSITE_SECTION_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => onCardClick(card.id)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#147D64]/20 hover:border-[#F4B400] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Badge */}
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#F4B400] text-[#0B4D3B] text-[10px] font-extrabold uppercase tracking-wider shadow">
                  {card.badge}
                </span>
              </div>

              {/* Card Footer: Icon + Title + Subtitle + Arrow */}
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F8F4E6] border border-[#147D64]/20 flex items-center justify-center shrink-0 group-hover:bg-[#F4B400] transition-colors">
                    {getIcon(card.icon)}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#0B4D3B] group-hover:text-[#147D64] transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#5A3E2B]/75 mt-0.5 font-medium line-clamp-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full border border-[#147D64]/20 group-hover:bg-[#0B4D3B] group-hover:text-white text-[#0B4D3B] flex items-center justify-center transition-all shrink-0 ml-2">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
