import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, THEME_COLORS } from '../data/tourismData';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ onOpenSearch, onOpenBookingModal }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      // Auto-hide on scroll down, show on scroll up
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

  const navItemClass = ({ isActive }) =>
    `transition-colors whitespace-nowrap text-xs font-bold uppercase tracking-wider ${
      isActive
        ? 'text-[#F4B400] font-extrabold border-b-2 border-[#F4B400] pb-0.5'
        : 'text-white/90 hover:text-[#F4B400]'
    }`;

  return (
    <>
      {/* Floating Capsule Pop-up Navbar: 50% opacity, 10% Left & Right Offset, Rounded-Full */}
      <header
        className={`fixed top-3 sm:top-5 left-[3%] right-[3%] sm:left-[6%] sm:right-[6%] lg:left-[8%] lg:right-[8%] z-50 transition-all duration-300 ease-out ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-95 pointer-events-none'
        } ${
          isScrolled
            ? 'bg-[#0B4D3B]/75 border-white/25 shadow-[0_14px_40px_rgba(0,0,0,0.55)]'
            : 'bg-[#0B4D3B]/60 border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.45)]'
        } backdrop-blur-xl border rounded-full py-2 sm:py-2.5 px-4 sm:px-6`}
      >
        <div className="w-full flex items-center justify-between gap-3">
          
          {/* Logo & Brand matching blueprint */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img 
              src="/images/logo.jpg" 
              alt="South Indian Tourism" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-contain bg-white p-0.5 shadow-md border border-[#F4B400]/40 group-hover:scale-105 transition-transform shrink-0" 
            />
            <span className="font-heading text-sm sm:text-base font-bold tracking-tight text-white block leading-tight group-hover:text-[#E7CFA3] transition-colors drop-shadow">
              South Indian <span className="font-normal opacity-90">Tourism</span>
            </span>
          </Link>

          {/* Clean Menu with dedicated routes */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            <NavLink to="/" end className={navItemClass}>Home</NavLink>
            <NavLink to="/destinations" className={navItemClass}>Destinations</NavLink>
            <NavLink to="/experiences" className={navItemClass}>Experiences</NavLink>
            <NavLink to="/tour-packages" className={navItemClass}>Tours</NavLink>
            <NavLink to="/shiva-temples" className={navItemClass}>Shiva Temples</NavLink>
            <NavLink to="/travel-guide" className={navItemClass}>Travel Guide</NavLink>
            <NavLink to="/culture-heritage" className={navItemClass}>Culture</NavLink>
            <NavLink to="/about" className={navItemClass}>About</NavLink>
            <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
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

            {/* "Plan Your Trip" Primary CTA */}
            <Link
              to="/plan-your-trip"
              className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#F4B400] to-[#E7CFA3] text-[#0B4D3B] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all glow-gold whitespace-nowrap"
            >
              Plan Your Trip
            </Link>

            {/* Mobile / Tablet Drawer Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-1.5 rounded-lg text-white hover:text-[#F4B400]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile / Tablet Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-[#0B4D3B] p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <img 
                    src="/images/logo.jpg" 
                    alt="South Indian Tourism" 
                    className="w-8 h-8 rounded-full object-contain bg-white p-0.5 shadow border border-[#F4B400]/40 shrink-0" 
                  />
                  <span className="font-heading text-lg font-bold text-white">South Indian Tourism</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-3.5 text-xs font-bold text-white/90 uppercase tracking-wider">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4B400] py-1 border-b border-white/5">
                  Home
                </Link>
                <Link to="/destinations" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4B400] py-1 border-b border-white/5">
                  Destinations
                </Link>
                <Link to="/experiences" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4B400] py-1 border-b border-white/5">
                  Experiences
                </Link>
                <Link to="/tour-packages" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4B400] py-1 border-b border-white/5">
                  Tours & Packages
                </Link>
                <Link to="/shiva-temples" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4B400] py-1 border-b border-white/5">
                  Shiva Temple Tours
                </Link>
                <Link to="/travel-guide" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4B400] py-1 border-b border-white/5">
                  Travel Guide
                </Link>
                <Link to="/culture-heritage" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4B400] py-1 border-b border-white/5">
                  Culture & Heritage
                </Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4B400] py-1 border-b border-white/5">
                  About Us
                </Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#F4B400] py-1 border-b border-white/5">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2 mt-6">
              <Link
                to="/plan-your-trip"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#F4B400] to-[#E7CFA3] text-[#0B4D3B] text-xs font-extrabold uppercase tracking-wider shadow flex items-center justify-center text-center"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
