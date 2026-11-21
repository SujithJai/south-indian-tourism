import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/tourismData';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactUsPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 90, spread: 65, origin: { y: 0.6 } });
    setIsSubmitted(true);

    const waText = `*Contact Message from Website*%0A` +
      `*Name:* ${encodeURIComponent(contactForm.name)}%0A` +
      `*Phone:* ${encodeURIComponent(contactForm.phone)}%0A` +
      `*Email:* ${encodeURIComponent(contactForm.email)}%0A` +
      `*Subject:* ${encodeURIComponent(contactForm.subject)}%0A` +
      `*Message:* ${encodeURIComponent(contactForm.message)}`;

    setTimeout(() => {
      window.open(`https://wa.me/916380939670?text=${waText}`, '_blank');
    }, 700);
  };

  return (
    <div className="bg-[#F8F4E6] text-[#5A3E2B] min-h-screen pt-24 pb-20">
      
      {/* 1. Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0B4D3B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/destinations.jpg" 
            alt="Contact South Indian Tourism" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B4D3B] via-[#0B4D3B]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-4 shadow">
            <Phone className="w-3.5 h-3.5" />
            <span>Dedicated Landing Page • Page 10</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Contact South Indian Tourism
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Get in touch with our Namakkal travel headquarters for instant quotations, route consultations, and customized holiday packages.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Info Cards */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Get in Touch</span>
              <h2 className="font-heading text-3xl font-extrabold text-[#0B4D3B] mt-1">
                We're Here to Help You Travel
              </h2>
              <p className="text-sm text-[#5A3E2B]/80 mt-2 font-medium">
                Reach out by phone, WhatsApp, or visit our Namakkal office.
              </p>
            </div>

            {/* Direct Phone */}
            <div className="p-6 rounded-3xl bg-white border border-[#147D64]/15 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B4D3B] text-[#F4B400] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-[#0B4D3B]">Phone Numbers</h4>
                <p className="text-xs text-[#5A3E2B]/70 mt-0.5">Direct lines to our travel booking desk:</p>
                <div className="mt-2 space-y-1">
                  <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="text-sm font-bold text-[#0B4D3B] hover:text-[#147D64] block">
                    {BUSINESS_INFO.primaryPhone} (Primary)
                  </a>
                  <a href={`tel:${BUSINESS_INFO.secondaryPhone}`} className="text-sm font-bold text-[#0B4D3B] hover:text-[#147D64] block">
                    {BUSINESS_INFO.secondaryPhone} (Support)
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-3xl bg-white border border-[#147D64]/15 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#147D64] text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-[#0B4D3B]">WhatsApp Support</h4>
                <p className="text-xs text-[#5A3E2B]/70 mt-0.5">Chat instantly for itineraries and quotes:</p>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#147D64] hover:text-[#0B4D3B]"
                >
                  <span>{BUSINESS_INFO.whatsappNumber}</span>
                  <span className="text-[11px] bg-[#147D64]/10 text-[#147D64] px-2.5 py-0.5 rounded-full font-semibold">Online</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="p-6 rounded-3xl bg-white border border-[#147D64]/15 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B4D3B] text-[#F4B400] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-[#0B4D3B]">Office Address</h4>
                <p className="text-xs text-[#5A3E2B]/85 mt-1 leading-relaxed font-medium">
                  {BUSINESS_INFO.address}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#147D64] font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#F4B400]" />
                  <span>{BUSINESS_INFO.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-3xl bg-white border border-[#147D64]/15 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0B4D3B] text-[#F4B400] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-[#0B4D3B]">Email Inquiries</h4>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm font-bold text-[#0B4D3B] hover:text-[#147D64] block mt-1">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#147D64]/20 shadow-xl">
            <h3 className="font-heading text-2xl font-extrabold text-[#0B4D3B]">
              Send Us a Message
            </h3>
            <p className="text-xs text-[#5A3E2B]/80 mt-1 font-medium">
              Fill in your details below and our team will get back to you promptly.
            </p>

            {isSubmitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-[#F0F7F4] border border-[#147D64]/30 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#147D64] mx-auto mb-3" />
                <h4 className="font-heading text-xl font-bold text-[#0B4D3B]">Thank You!</h4>
                <p className="text-xs text-[#5A3E2B]/80 mt-1">
                  Your message has been received and WhatsApp opened for instant connection.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B4D3B] uppercase mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F4E6] border border-[#147D64]/20 text-xs text-[#1F2937] focus:outline-none focus:border-[#147D64] focus:bg-white font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B4D3B] uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F4E6] border border-[#147D64]/20 text-xs text-[#1F2937] focus:outline-none focus:border-[#147D64] focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B4D3B] uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F4E6] border border-[#147D64]/20 text-xs text-[#1F2937] focus:outline-none focus:border-[#147D64] focus:bg-white font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B4D3B] uppercase mb-1">Subject</label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F4E6] border border-[#147D64]/20 text-xs text-[#1F2937] focus:outline-none focus:border-[#147D64] focus:bg-white font-medium"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Tour Package Booking">Tour Package Booking</option>
                    <option value="Shiva Temple Pilgrimage">Shiva Temple Pilgrimage</option>
                    <option value="Vehicle Rental / Tempo Traveller">Vehicle Rental / Tempo Traveller</option>
                    <option value="Customized Multi-State Tour">Customized Multi-State Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B4D3B] uppercase mb-1">Your Message *</label>
                  <textarea
                    required
                    rows="4"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell us about your travel dates, destinations of interest, or any specific questions..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F4E6] border border-[#147D64]/20 text-xs text-[#1F2937] focus:outline-none focus:border-[#147D64] focus:bg-white font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0B4D3B] hover:bg-[#147D64] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-[#F4B400]" />
                  <span>Send Message & Connect on WhatsApp</span>
                </button>
              </form>
            )}

            {/* Google Maps Embed / Location Link */}
            <div className="mt-8 pt-6 border-t border-[#147D64]/15">
              <span className="text-[11px] font-bold uppercase text-[#147D64] block mb-2">Location Map:</span>
              <div className="rounded-2xl overflow-hidden border border-[#147D64]/15 h-48 bg-[#F8F4E6]">
                <iframe
                  title="South Indian Tourism Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62635.80373023023!2d78.11899175498877!3d11.140224219468923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa7a74d1565555%3A0x6b4f7065922384a2!2sMohanur%2C%20Namakkal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
