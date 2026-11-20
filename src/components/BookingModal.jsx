import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, MapPin, Car, CreditCard, Send, CheckCircle, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tourismData';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    pickupLocation: '',
    destination: '',
    travelDate: '',
    numberOfDays: '5',
    numberOfAdults: '4',
    tourType: 'Family Tour',
    preferredTransport: 'Tempo Traveller',
    approxBudget: '₹30,000–₹50,000',
    specialRequirements: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        destination: initialData.name || initialData.title || initialData.destination || prev.destination,
        tourType: initialData.category || initialData.tourType || prev.tourType,
        preferredTransport: initialData.preferredTransport || prev.preferredTransport
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    setIsSubmitted(true);

    const waText = `*South Indian Tour Booking Enquiry*%0A` +
      `*Name:* ${encodeURIComponent(formData.fullName)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.mobileNumber)}%0A` +
      `*Pickup:* ${encodeURIComponent(formData.pickupLocation)}%0A` +
      `*Destination:* ${encodeURIComponent(formData.destination)}%0A` +
      `*Travel Date:* ${encodeURIComponent(formData.travelDate)} (${formData.numberOfDays} Days)%0A` +
      `*Adults:* ${formData.numberOfAdults}%0A` +
      `*Tour Type:* ${encodeURIComponent(formData.tourType)}%0A` +
      `*Vehicle:* ${encodeURIComponent(formData.preferredTransport)}%0A` +
      `*Budget:* ${encodeURIComponent(formData.approxBudget)}%0A` +
      `*Notes:* ${encodeURIComponent(formData.specialRequirements || 'None')}`;

    const waUrl = `https://wa.me/916380939670?text=${waText}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white border border-[#147D64]/30 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 shadow-2xl text-[#1F2937]">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F0F7F4] text-[#1F2937] hover:bg-[#FFF8E6] border border-[#147D64]/20"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F0F7F4] text-[#147D64] flex items-center justify-center mx-auto ring-4 ring-[#147D64]/20">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#0B4D3B]">
              Thank You, {formData.fullName}!
            </h3>
            <p className="text-sm text-[#6B7280] max-w-md mx-auto">
              Your tour enquiry has been received. Our travel specialist will connect with you on WhatsApp with a customized quotation.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="px-6 py-2.5 rounded-full bg-[#0B4D3B] text-white text-xs font-bold flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F4B400]" />
                Call {BUSINESS_INFO.primaryPhone}
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-[#147D64] hover:bg-[#0f6752] text-white text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="pr-8 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8E6] border border-[#F4B400]/40 text-[#0B4D3B] text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F4B400]" />
                <span>Quick Tour Reservation</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0B4D3B]">
                Book Your South India Journey
              </h3>
              <p className="text-xs text-[#6B7280] mt-1">
                Fill in your details below to get an instant tailored package quotation with driver and transport.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. 94433 39921"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    required
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="e.g. Mohanur, Namakkal, Chennai, Bangalore"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1">
                    Destination *
                  </label>
                  <input
                    type="text"
                    required
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Ooty, Madurai, Munnar, Coorg"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1">
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-xs sm:text-sm focus:outline-none focus:border-[#147D64]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1">
                    Days
                  </label>
                  <select
                    name="numberOfDays"
                    value={formData.numberOfDays}
                    onChange={handleChange}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-xs sm:text-sm focus:outline-none focus:border-[#147D64]"
                  >
                    {[1,2,3,4,5,6,7,8,10].map(d => (
                      <option key={d} value={d}>{d} Days</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1">
                    Adults
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="numberOfAdults"
                    value={formData.numberOfAdults}
                    onChange={handleChange}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-xs sm:text-sm focus:outline-none focus:border-[#147D64]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1">
                    Vehicle Type
                  </label>
                  <select
                    name="preferredTransport"
                    value={formData.preferredTransport}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-sm focus:outline-none focus:border-[#147D64]"
                  >
                    {['Tempo Traveller (12/17 Seater)', 'Innova Crysta AC', 'Sedan (Dzire/Etios)', 'Mini Bus (21/25 Seater)', 'Suggest Best Vehicle'].map(v => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1">
                    Tour Category
                  </label>
                  <select
                    name="tourType"
                    value={formData.tourType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-sm focus:outline-none focus:border-[#147D64]"
                  >
                    {['Family Tour', 'Temple & Pilgrimage', 'Hills & Nature', 'Heritage & History', 'Honeymoon Tour', 'Custom Group Tour'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#F4B400] hover:bg-[#e0a600] text-[#1F2937] font-extrabold text-sm shadow-xl shadow-[#F4B400]/25 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 glow-gold"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Free Tour Quote & WhatsApp Itinerary</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
