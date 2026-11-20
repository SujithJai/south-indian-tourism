import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/tourismData';
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

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsSubmitted(true);

    // Format pre-filled WhatsApp message
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

    // Optional auto redirect or provide button
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <section id="plan-trip" className="relative bg-emerald-950 py-20 text-white overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Customized Travel Planning • உங்கள் விருப்பப்படி சுற்றுலா</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Plan Your Perfect <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
              South India Trip
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base">
            உங்கள் பயண விவரங்களைப் பதிவு செய்யுங்கள்; சிறந்த விலையில் முழு பயணத் திட்டத்தை (Free Tour Quote) 10 நிமிடங்களில் பெறலாம்!
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-500/30 shadow-2xl">
          
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-4 ring-emerald-500/30">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm text-emerald-200 max-w-md mx-auto">
                உங்கள் பயணத் தகவல் வெற்றிகரமாக பெறப்பட்டது. வாட்ஸ்அப் வழியாக எங்கள் டூர் எக்ஸ்பர்ட் உங்களுடன் இணைவார்.
              </p>
              
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="px-6 py-3 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-300 text-sm font-semibold flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS_INFO.primaryPhone}
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-emerald-700/50 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. 94433 39921"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              {/* Row 2: Location & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Starting / Pickup Location *
                  </label>
                  <input
                    type="text"
                    required
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="e.g. Mohanur, Namakkal, Chennai, Bengaluru, Salem"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Destination *
                  </label>
                  <input
                    type="text"
                    required
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Coorg, Hampi, Madurai, Ooty, Shiva Temples"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              {/* Row 3: Travel Date & Travelers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5">
                    Number of Days
                  </label>
                  <select
                    name="numberOfDays"
                    value={formData.numberOfDays}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                  >
                    {[1,2,3,4,5,6,7,8,10,12,14].map(d => (
                      <option key={d} value={d} className="bg-slate-900">{d} Days</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    Adults (12+ yrs)
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="numberOfAdults"
                    value={formData.numberOfAdults}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5">
                    Children (Under 12)
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="numberOfChildren"
                    value={formData.numberOfChildren}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              {/* Row 4: Tour Type, Transport, Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5">
                    Tour Type
                  </label>
                  <select
                    name="tourType"
                    value={formData.tourType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                  >
                    {tourTypes.map(t => (
                      <option key={t} value={t} className="bg-slate-900">{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5" />
                    Preferred Transport
                  </label>
                  <select
                    name="preferredTransport"
                    value={formData.preferredTransport}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                  >
                    {transportOptions.map(tr => (
                      <option key={tr} value={tr} className="bg-slate-900">{tr}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5" />
                    Approximate Budget
                  </label>
                  <select
                    name="approxBudget"
                    value={formData.approxBudget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                  >
                    {budgetOptions.map(b => (
                      <option key={b} value={b} className="bg-slate-900">{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-xs font-semibold uppercase text-emerald-300 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Special Requirements (Specific temples, elderly care, hotel preference)
                </label>
                <textarea
                  rows="3"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  placeholder="Tell us about specific places, senior citizen assistance, dietary preferences or vehicle requests..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Instant quotation delivered via WhatsApp / Phone</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-700/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 glow-emerald"
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
