import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Compass, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { BUSINESS_INFO, THEME_COLORS } from '../data/tourismData';

export default function Navbar({ onOpenSearch, onOpenBookingModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B4D3B] shadow-xl shadow-black/25 py-3 border-b border-[#147D64]/30' 
            : 'bg-gradient-to-b from-[#0B4D3B]/95 via-[#0B4D3B]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand matching UI Guide (Golden Gopuram Icon) */}
          <a href="#drone-voyage" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4B400] to-[#FFD166] flex items-center justify-center shadow-md shadow-[#F4B400]/30 group-hover:scale-105 transition-transform">
              {/* Gopuram / Temple Icon SVG */}
              <svg className="w-6 h-6 text-[#0B4D3B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 7v2h1v10H3v2h18v-2h-2V9h1V7l-8-5zm0 2.5L17.5 8H6.5L12 4.5zM7 11h2v8H7v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8z"/>
              </svg>
            </div>
            <div>
              <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-white block leading-tight group-hover:text-[#FFD166] transition-colors">
                South Indian Tourism
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#F4B400] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400] animate-pulse"></span>
                Mohanur, Namakkal • Tamil Nadu
              </span>
            </div>
          </a>

          {/* Desktop Navigation matching UI Guide */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/90">
            <a href="#drone-voyage" className="hover:text-[#F4B400] transition-colors">Drone Voyage</a>
            <a href="#destinations" className="hover:text-[#F4B400] transition-colors">Destinations</a>
            <a href="#packages" className="hover:text-[#F4B400] transition-colors">Tours & Packages</a>
            <a href="#shiva-temples" className="text-[#FFD166] hover:text-[#F4B400] flex items-center gap-1 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B400]" />
              Shiva Temples
            </a>
            <a href="#fleet" className="hover:text-[#F4B400] transition-colors">Tempo Traveller</a>
            <a href="#about" className="hover:text-[#F4B400] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#F4B400] transition-colors">Contact</a>
          </nav>

          {/* Right Action Icons & Plan Your Trip Button (bg: #147D64) */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              title="Search destinations, tours, or experiences..."
              className="p-2.5 rounded-full bg-black/30 border border-white/20 text-white hover:text-[#F4B400] hover:border-[#F4B400] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Direct Phone Call */}
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 border border-[#147D64] text-xs font-semibold text-[#FFD166] hover:border-[#F4B400] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4B400] animate-bounce" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>

            {/* Plan Your Trip Button as in the UI Guide (bg: #147D64, text: #FFFFFF) */}
            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 rounded-full bg-[#147D64] hover:bg-[#0f6752] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#147D64]/40 hover:scale-105 active:scale-95 transition-all glow-green"
            >
              Plan Your Trip
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-black/40 border border-white/20 text-white hover:text-[#F4B400]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85%] bg-[#0B4D3B] border-l border-[#147D64]/40 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-heading text-lg font-bold text-white">South Indian Tourism</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-slate-300 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-3 text-sm font-medium text-white/90">
                <a 
                  href="#drone-voyage" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl bg-[#147D64]/30 text-[#F4B400] font-bold"
                >
                  4K Drone Voyage (4 States)
                </a>
                <a 
                  href="#destinations" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-[#147D64]/20"
                >
                  Popular Destinations
                </a>
                <a 
                  href="#packages" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-[#147D64]/20"
                >
                  Tour Packages
                </a>
                <a 
                  href="#shiva-temples" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-[#FFD166] hover:bg-[#147D64]/20"
                >
                  Shiva Temple Tours
                </a>
                <a 
                  href="#fleet" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-[#147D64]/20"
                >
                  Tempo Traveller Rentals
                </a>
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-[#147D64]/20"
                >
                  About Us (Mohanur)
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-[#147D64]/20"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-3">
              <a 
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-black/40 border border-[#F4B400]/40 text-[#FFD166] text-xs font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_INFO.primaryPhone}
              </a>
              <a 
                href={BUSINESS_INFO.whatsappLink}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white text-xs font-bold shadow"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
