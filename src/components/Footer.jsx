import React from 'react';
import { BUSINESS_INFO } from '../data/tourismData';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Compass, 
  Sparkles, 
  ArrowUp, 
  ChevronRight 
} from 'lucide-react';
import GreenWaveDivider from './GreenWaveDivider';

export default function Footer({ onSelectDestination }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-slate-400 overflow-hidden">
      
      {/* Top Wave */}
      <GreenWaveDivider flipped={true} color="fill-black" />

      {/* Main Footer Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/40">
          
          {/* Column 1: Business Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold text-white block leading-tight">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-emerald-400 font-semibold">
                  Mohanur, Namakkal
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Your trusted partner for South India tour packages and Tempo Traveller services across Tamil Nadu, Kerala, Karnataka and Andhra Pradesh.
            </p>

            {/* Social & Contact Quick Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
                className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 hover:text-white hover:bg-emerald-600 flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                title="Call Primary Phone"
                className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 hover:text-white hover:bg-emerald-600 flex items-center justify-center transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                title="Email Us"
                className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 hover:text-white hover:bg-emerald-600 flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Quick Links
            </h4>
            
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Destinations', href: '#destinations' },
                { label: 'Tour Packages', href: '#packages' },
                { label: 'Shiva Temple Tours', href: '#shiva-temples' },
                { label: 'Tempo Traveller & Fleet', href: '#fleet' },
                { label: 'Plan Your Trip', href: '#plan-trip' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact Us', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Top Destinations
            </h4>

            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'Madurai', desc: 'Meenakshi Temple & Cultural Heart' },
                { name: 'Munnar', desc: 'Misty Tea Gardens & Peaks' },
                { name: 'Alleppey', desc: 'Houseboats & Serene Backwaters' },
                { name: 'Mysuru', desc: 'Royal Illuminated Palace & Silk' },
                { name: 'Hampi', desc: 'UNESCO Vijayanagara Stone Ruins' },
                { name: 'Tirupati', desc: 'Divine Seven Sacred Hills' }
              ].map((dest, idx) => (
                <li key={idx}>
                  <a
                    href="#drone-showcase"
                    className="block group hover:text-emerald-300 transition-colors"
                  >
                    <div className="font-semibold text-slate-200 group-hover:text-emerald-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{dest.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 block pl-4">
                      {dest.desc}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Get In Touch
            </h4>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="block text-slate-200 hover:text-emerald-400">
                    {BUSINESS_INFO.primaryPhone}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.secondaryPhone}`} className="block text-slate-200 hover:text-emerald-400">
                    {BUSINESS_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-emerald-400">
                  {BUSINESS_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-200 hover:text-emerald-400 break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-[11px] text-amber-300">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 <strong>South Indian Tourism</strong>. All rights reserved.</p>
            <p className="text-[11px] text-emerald-400/80 mt-0.5">
              Service Coverage: Tamil Nadu, Kerala, Karnataka and Andhra Pradesh.
            </p>
          </div>

          {/* Quick CTAs & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:text-white"
            >
              Direct Call
            </a>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
            >
              WhatsApp Enquiry
            </a>
            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2 rounded-full bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white border border-emerald-500/20 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}
