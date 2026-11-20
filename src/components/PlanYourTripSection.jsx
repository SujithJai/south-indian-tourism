import React, { useState } from 'react';
import { BUSINESS_INFO, THEME_COLORS } from '../data/tourismData';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Car, 
  CreditCard, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  FileText 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PlanYourTripSection({ initialData = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    pickupLocation: '',
    destination: initialData?.destination || '',
    travelDate: '',
    numberOfDays: '5',
    numberOfAdults: '4',
    numberOfChildren: '0',
    tourType: initialData?.tourType || 'Family Tour',
    preferredTransport: initialData?.preferredTransport || 'Tempo Traveller',
    approxBudget: '₹30,000–₹50,000',
    specialRequirements: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const tourTypes = [
    'Family Tour', 'Couple Tour', 'Honeymoon', 'Temple Tour', 
    'Hill Station Tour', 'Beach Tour', 'Heritage Tour', 'Custom Tour'
  ];

  const transportOptions = [
    'Car', 'SUV', 'Tempo Traveller', 'Mini Bus', 'Bus', 'Not Sure / Suggest Me'
  ];

  const budgetOptions = [
    'Under ₹15,000', '₹15,000–₹30,000', '₹30,000–₹50,000', 
    '₹50,000–₹1,00,000', 'Above ₹1,00,000', 'Not Sure Yet'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 }
    });

    setIsSubmitted(true);

    const waText = `*New South Indian Tour Enquiry*%0A` +
      `*Name:* ${encodeURIComponent(formData.fullName)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.mobileNumber)}%0A` +
      `*Pickup:* ${encodeURIComponent(formData.pickupLocation)}%0A` +
      `*Destination:* ${encodeURIComponent(formData.destination)}%0A` +
      `*Date:* ${encodeURIComponent(formData.travelDate)} (${formData.numberOfDays} Days)%0A` +
      `*Travelers:* ${formData.numberOfAdults} Adults, ${formData.numberOfChildren} Children%0A` +
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
    <section id="plan-trip" className="py-20 bg-[#FFF8E6] text-[#1F2937]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F4B400]/40 text-[#0B4D3B] text-xs font-bold mb-3 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#147D64]" />
            <span>Customized Travel Planning</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
            Plan Your Perfect <br />
            <span className="text-[#147D64]">South India Trip</span>
          </h2>
          <p className="mt-3 text-[#6B7280] text-sm sm:text-base font-medium">
            Submit your travel requirements to receive a comprehensive, tailored quotation and day-by-day plan within minutes.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#147D64]/20 shadow-xl">
          
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F0F7F4] text-[#147D64] flex items-center justify-center mx-auto ring-4 ring-[#147D64]/20">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#0B4D3B]">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm text-[#6B7280] max-w-md mx-auto">
                Your travel enquiry has been submitted. Our trip planner will connect with you via WhatsApp with your customized quotation.
              </p>
              
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="px-6 py-3 rounded-full bg-[#0B4D3B] text-white text-sm font-bold flex items-center gap-2 shadow"
                >
                  <Phone className="w-4 h-4 text-[#F4B400]" />
                  Call {BUSINESS_INFO.primaryPhone}
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-[#147D64] hover:bg-[#0f6752] text-white text-sm font-semibold transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. 94433 39921"
                    className="w-full px-4 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#147D64]" />
                    Starting / Pickup Location *
                  </label>
                  <input
                    type="text"
                    required
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="e.g. Mohanur, Namakkal, Chennai, Bengaluru, Salem"
                    className="w-full px-4 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#147D64]" />
                    Destination *
                  </label>
                  <input
                    type="text"
                    required
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Ooty, Madurai, Munnar, Coorg, Hampi"
                    className="w-full px-4 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#147D64]" />
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5">
                    Days
                  </label>
                  <select
                    name="numberOfDays"
                    value={formData.numberOfDays}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  >
                    {[1,2,3,4,5,6,7,8,10,12,14].map(d => (
                      <option key={d} value={d}>{d} Days</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#147D64]" />
                    Adults (12+)
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="numberOfAdults"
                    value={formData.numberOfAdults}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5">
                    Children
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="numberOfChildren"
                    value={formData.numberOfChildren}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5">
                    Tour Type
                  </label>
                  <select
                    name="tourType"
                    value={formData.tourType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  >
                    {tourTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#147D64]" />
                    Preferred Transport
                  </label>
                  <select
                    name="preferredTransport"
                    value={formData.preferredTransport}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  >
                    {transportOptions.map(tr => (
                      <option key={tr} value={tr}>{tr}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-[#147D64]" />
                    Approximate Budget
                  </label>
                  <select
                    name="approxBudget"
                    value={formData.approxBudget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                  >
                    {budgetOptions.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#0B4D3B] mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#147D64]" />
                  Special Requirements
                </label>
                <textarea
                  rows="3"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  placeholder="Tell us about specific temples, elderly care, hotel preferences or vehicle requests..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/20 text-[#1F2937] placeholder-slate-400 text-sm focus:outline-none focus:border-[#147D64] focus:bg-white"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#6B7280] flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#147D64]"></span>
                  <span>Instant quotation delivered via WhatsApp / Phone</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#F4B400] hover:bg-[#e0a600] text-[#1F2937] font-extrabold text-sm shadow-xl shadow-[#F4B400]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 glow-gold"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Free Tour Quote</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
