import React, { useState } from 'react';
import { FAQS } from '../data/tourismData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import GreenWaveDivider from './GreenWaveDivider';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-emerald-950/80 py-20 text-white overflow-hidden">
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Got Questions? • அடிக்கடி கேட்கப்படும் கேள்விகள்</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
              Questions (FAQ)
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base">
            தென்னிந்திய சுற்றுலா மற்றும் டெம்போ டிராவலர் முன்பதிவு குறித்த முக்கிய கேள்விகளுக்கான விடைகள்.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-emerald-500/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-emerald-900/30 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-white flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">
                      Q{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-emerald-800/40">
                    <p className="pl-9">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
