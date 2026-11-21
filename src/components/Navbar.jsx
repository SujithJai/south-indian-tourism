import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, THEME_COLORS } from '../data/tourismData';

export default function Navbar({ onOpenSearch, onOpenBookingModal }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      // Auto-hide on scroll down, show on scroll up as in spec
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating Capsule Pop-up Navbar: 50% opacity, 10% Left & Right Offset, Rounded-Full */}
      <header
        className={`fixed top-3 sm:top-5 left-[4%] right-[4%] sm:left-[8%] sm:right-[8%] lg:left-[10%] lg:right-[10%] z-50 transition-all duration-300 ease-out ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-95 pointer-events-none'
        } ${
          isScrolled
            ? 'bg-[#0B4D3B]/60 border-white/25 shadow-[0_14px_40px_rgba(0,0,0,0.55)]'
            : 'bg-[#0B4D3B]/50 border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.45)]'
        } backdrop-blur-xl border rounded-full py-2 sm:py-2.5 px-4 sm:px-7`}
      >
        <div className="w-full flex items-center justify-between">
          
          {/* Logo & Brand matching blueprint (Gopuram icon + South Indian Tourism) */}
          <a href="#drone-voyage" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#F4B400] to-[#E7CFA3] flex items-center justify-center text-[#0B4D3B] shadow-md group-hover:scale-105 transition-transform shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 7v2h1v10H3v2h18v-2h-2V9h1V7l-8-5zm0 2.5L17.5 8H6.5L12 4.5zM7 11h2v8H7v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8z"/>
              </svg>
            </div>
            <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-white block leading-tight group-hover:text-[#E7CFA3] transition-colors drop-shadow">
              South Indian <span className="font-normal opacity-90">Tourism</span>
            </span>
          </a>

          {/* Minimal Clean Menu from blueprint: Destinations, Experiences, Tours, Travel Guide, About */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold uppercase tracking-wider text-white/90">
            <a href="#drone-voyage" className="hover:text-[#F4B400] transition-colors">Destinations</a>
            <a href="#website-sections" className="hover:text-[#F4B400] transition-colors">Experiences</a>
            <a href="#packages-section" className="hover:text-[#F4B400] transition-colors">Tours</a>
            <a href="#website-sections" className="hover:text-[#F4B400] transition-colors">Travel Guide</a>
            <a href="#about-section" className="hover:text-[#F4B400] transition-colors">About</a>
          </nav>

          {/* Right Action: Search icon + Plan Your Trip Gold Pill Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              title="Search destinations..."
              className="p-1.5 sm:p-2 rounded-full text-white/80 hover:text-[#F4B400] hover:bg-white/10 transition-all"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* "Plan Your Trip" as primary CTA from blueprint */}
            <button
              onClick={() => onOpenBookingModal()}
              className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#F4B400] to-[#E7CFA3] text-[#0B4D3B] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all glow-gold whitespace-nowrap"
            >
              Plan Your Trip
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-white hover:text-[#F4B400]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
          <div className="fixed top-0 right-0 bottom-0 w-72 bg-[#0B4D3B] p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-heading text-lg font-bold text-white">South Indian Tourism</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-4 text-sm font-semibold text-white/90 uppercase tracking-wider">
                <a 
                  href="#drone-voyage" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#E7CFA3]"
                >
                  Destinations
                </a>
                <a 
                  href="#website-sections" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#E7CFA3]"
                >
                  Experiences
                </a>
                <a 
                  href="#packages-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#E7CFA3]"
                >
                  Tours
                </a>
                <a 
                  href="#website-sections" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#E7CFA3]"
                >
                  Travel Guide
                </a>
                <a 
                  href="#about-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#E7CFA3]"
                >
                  About
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#F4B400] to-[#E7CFA3] text-[#0B4D3B] text-xs font-bold uppercase tracking-wider shadow"
              >
                Plan Your Trip
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
