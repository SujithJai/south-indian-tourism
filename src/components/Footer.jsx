import React from 'react';
import { BUSINESS_INFO, THEME_COLORS } from '../data/tourismData';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUp, 
  ChevronRight 
} from 'lucide-react';

export default function Footer({ onSelectDestination }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B4D3B] text-slate-300 border-t border-[#147D64]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Business Information */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4B400] to-[#E7CFA3] flex items-center justify-center text-[#0B4D3B] shadow-md group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 7v2h1v10H3v2h18v-2h-2V9h1V7l-8-5zm0 2.5L17.5 8H6.5L12 4.5zM7 11h2v8H7v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8z"/>
                </svg>
              </div>
              <span className="font-heading text-xl font-bold text-white block leading-tight group-hover:text-[#E7CFA3] transition-colors">
                South Indian Tourism
              </span>
            </Link>

            <p className="text-xs text-slate-200 leading-relaxed">
              A video-first, scroll-based tourism platform taking you on a cinematic journey across Tamil Nadu, Kerala, Karnataka, and Andhra & Telangana.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
                className="w-9 h-9 rounded-xl bg-[#147D64] text-white hover:bg-[#F4B400] hover:text-[#0B4D3B] flex items-center justify-center transition-all shadow"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                title="Call Primary Phone"
                className="w-9 h-9 rounded-xl bg-[#147D64] text-white hover:bg-[#F4B400] hover:text-[#0B4D3B] flex items-center justify-center transition-all shadow"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                title="Email Us"
                className="w-9 h-9 rounded-xl bg-[#147D64] text-white hover:bg-[#F4B400] hover:text-[#0B4D3B] flex items-center justify-center transition-all shadow"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B400]"></span>
              Navigation
            </h4>
            
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Destinations (30+)', to: '/destinations' },
                { label: 'Experiences (8)', to: '/experiences' },
                { label: 'Tours & Packages', to: '/tour-packages' },
                { label: 'Shiva Temples', to: '/shiva-temples' },
                { label: 'Travel Guide', to: '/travel-guide' },
                { label: 'Culture & Heritage', to: '/culture-heritage' },
                { label: 'Plan Your Trip', to: '/plan-your-trip' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact Us', to: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="hover:text-[#E7CFA3] transition-colors flex items-center gap-1.5 group text-slate-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#F4B400] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The 4 States */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B400]"></span>
              The 4 States
            </h4>

            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'Tamil Nadu', desc: 'Madurai, Rameswaram, Ooty, Thanjavur' },
                { name: 'Kerala', desc: 'Munnar, Alleppey, Kovalam, Thekkady' },
                { name: 'Karnataka', desc: 'Hampi, Coorg, Mysuru, Chikmagalur' },
                { name: 'Andhra & Telangana', desc: 'Tirupati, Araku, Vizag, Hyderabad' }
              ].map((dest, idx) => (
                <li key={idx}>
                  <Link
                    to={`/destinations?state=${encodeURIComponent(dest.name)}`}
                    className="block group hover:text-[#E7CFA3] transition-colors"
                  >
                    <div className="font-semibold text-white group-hover:text-[#F4B400] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#F4B400]" />
                      <span>{dest.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-300 block pl-4">
                      {dest.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B400]"></span>
              Get In Touch
            </h4>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4B400] shrink-0 mt-0.5" />
                <span className="text-slate-200">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4B400] shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="block text-white hover:text-[#F4B400] font-semibold">
                    {BUSINESS_INFO.primaryPhone}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.secondaryPhone}`} className="block text-white hover:text-[#F4B400] font-semibold">
                    {BUSINESS_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#F4B400] shrink-0" />
                <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noreferrer" className="text-white hover:text-[#F4B400]">
                  {BUSINESS_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4B400] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-[#F4B400] break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-[11px] text-[#E7CFA3]">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            <p>© 2026 <strong>South Indian Tourism</strong>. All rights reserved.</p>
            <p className="text-[11px] text-[#E7CFA3] mt-0.5 font-medium">
              Tamil Nadu • Kerala • Karnataka • Andhra & Telangana
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 text-[#E7CFA3] text-xs font-semibold hover:border-[#F4B400]"
            >
              Direct Call
            </a>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#147D64] hover:bg-[#0f6752] text-white text-xs font-bold shadow"
            >
              WhatsApp Enquiry
            </a>
            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2 rounded-full bg-black/40 hover:bg-[#F4B400] text-white hover:text-[#0B4D3B] border border-white/20 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}