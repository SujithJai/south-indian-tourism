import React, { useState } from 'react';
import { FAQS } from '../data/tourismData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#F0F7F4] text-[#1F2937]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E6] border border-[#F4B400]/40 text-[#0B4D3B] text-xs font-bold mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#147D64]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
            Frequently Asked <br />
            <span className="text-[#147D64]">Questions (FAQ)</span>
          </h2>
          <p className="mt-3 text-[#6B7280] text-sm sm:text-base font-medium">
            Everything you need to know about booking tours, vehicles and customized itineraries with South Indian Tourism.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#147D64]/15 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FFF8E6] transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#1F2937] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#147D64] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      Q{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#147D64] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#6B7280] text-xs sm:text-sm leading-relaxed border-t border-[#147D64]/10">
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
