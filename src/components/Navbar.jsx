import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Volume2, 
  VolumeX, 
  Compass, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/tourismData';
import { soundManager } from '../utils/soundUtil';

export default function Navbar({ onOpenSearch, onOpenBookingModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestDropdownOpen, setIsDestDropdownOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const active = soundManager.toggle();
    setIsMuted(!active);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-emerald-950/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-emerald-500/20 py-3' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-md shadow-emerald-500/30 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-white animate-spin-slow" />
            </div>
            <div>
              <span className="font-cinzel text-lg md:text-xl font-bold tracking-wider text-white block leading-tight group-hover:text-emerald-400 transition-colors">
                SOUTH INDIAN
              </span>
              <span className="text-[10px] tracking-widest uppercase text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Tourism • Mohanur
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-200">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#packages" className="hover:text-emerald-400 transition-colors">Tour Packages</a>

            {/* Destinations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDestDropdownOpen(true)}
              onMouseLeave={() => setIsDestDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-emerald-400 transition-colors py-2"
                onClick={() => setIsDestDropdownOpen(!isDestDropdownOpen)}
              >
                <span>Destinations</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {isDestDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 transition-all">
                  <div className="bg-emerald-950/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-2xl p-3 space-y-1">
                    <a 
                      href="#destinations" 
                      onClick={() => setIsDestDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-300 hover:bg-emerald-800/50 hover:text-white transition-colors"
                    >
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      All Destinations (30+)
                    </a>
                    <a 
                      href="#drone-karnataka" 
                      onClick={() => setIsDestDropdownOpen(false)}
                      className="block px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-emerald-800/40 hover:text-emerald-300 transition-colors"
                    >
                      Karnataka (Coorg, Hampi, Mysuru)
                    </a>
                    <a 
                      href="#drone-tamilnadu" 
                      onClick={() => setIsDestDropdownOpen(false)}
                      className="block px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-emerald-800/40 hover:text-emerald-300 transition-colors"
                    >
                      Tamil Nadu (Ooty, Madurai, Thanjavur)
                    </a>
                    <a 
                      href="#shiva-temples" 
                      onClick={() => setIsDestDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-amber-300 bg-amber-950/40 border border-amber-500/20 hover:bg-amber-900/40 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Shiva Temple Tours
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#shiva-temples" className="text-amber-300 hover:text-amber-200 flex items-center gap-1 transition-colors">
              <Sparkles className="w-3.5 h-3.5" />
              Shiva Temples
            </a>
            <a href="#fleet" className="hover:text-emerald-400 transition-colors">Fleet</a>
            <a href="#plan-trip" className="hover:text-emerald-400 transition-colors">Plan Your Trip</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-3">
            {/* Ambient Sound Toggle */}
            <button
              onClick={handleToggleSound}
              title={isMuted ? "Enable Ambient South Indian Melodic Sound" : "Mute Sound"}
              className={`p-2.5 rounded-full transition-all border ${
                isMuted 
                  ? 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white' 
                  : 'bg-emerald-600/30 border-emerald-400 text-emerald-400 shadow-md shadow-emerald-500/30 animate-pulse'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              title="Search Destinations & Packages"
              className="p-2.5 rounded-full bg-slate-800/60 border border-slate-700/80 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Direct Phone Call */}
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-medium text-emerald-300 hover:border-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>

            {/* Book Your Trip CTA */}
            <button
              onClick={onOpenBookingModal}
              className="relative px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white text-xs md:text-sm font-semibold shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all glow-emerald"
            >
              Book Your Trip
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-slate-200 hover:text-emerald-400"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85%] bg-emerald-950 border-l border-emerald-500/30 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-emerald-800/60 pb-4">
                <span className="font-cinzel text-base font-bold text-white">South Indian Tourism</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
                <a 
                  href="#home" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-emerald-300"
                >
                  Home
                </a>
                <a 
                  href="#packages" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-emerald-300"
                >
                  Tour Packages
                </a>
                <a 
                  href="#destinations" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-emerald-300"
                >
                  All Destinations
                </a>
                <a 
                  href="#shiva-temples" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-amber-300 bg-amber-950/40 border border-amber-500/20"
                >
                  Shiva Temple Tours
                </a>
                <a 
                  href="#fleet" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-emerald-300"
                >
                  Tempo Traveller & Fleet
                </a>
                <a 
                  href="#plan-trip" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-emerald-300"
                >
                  Plan Your Trip
                </a>
                <a 
                  href="#why-us" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-emerald-300"
                >
                  Why Choose Us
                </a>
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-emerald-300"
                >
                  About Us
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-emerald-900/50 hover:text-emerald-300"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="border-t border-emerald-800/60 pt-6 space-y-3">
              <a 
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-400 text-xs font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_INFO.primaryPhone}
              </a>
              <a 
                href={BUSINESS_INFO.whatsappLink}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md"
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
