import React from 'react';
import { BUSINESS_INFO } from '../data/tourismData';
import { ShieldCheck, Compass, MapPin, Users, Award, Heart, CheckCircle2 } from 'lucide-react';
import GreenWaveDivider from './GreenWaveDivider';

export default function AboutUsSection() {
  return (
    <section id="about" className="relative bg-emerald-950 py-20 text-white overflow-hidden">
      
      {/* Top Wave */}
      <GreenWaveDivider flipped={true} color="fill-emerald-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Visual Grid */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
                alt="South Indian Tourism Madurai Temple"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-emerald-400/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-cinzel font-bold text-xl shrink-0 shadow-lg">
                  15+
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-white">Years of Travel Excellence</h4>
                  <p className="text-xs text-emerald-300">Headquartered in Mohanur, Namakkal, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Accent mini card */}
            <div className="hidden sm:block absolute -top-6 -right-6 glass-card p-4 rounded-2xl border border-emerald-400/40 shadow-xl max-w-[220px]">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold mb-1">
                <Award className="w-4 h-4" />
                <span>30+ Destinations</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                Curated across Tamil Nadu, Karnataka, Kerala & Andhra Pradesh.
              </p>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>About South Indian Tourism • எங்கள் வரலாறு</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Your Trusted Gateway to the <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                Wonders of South India
              </span>
            </h2>

            <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
              <strong>South Indian Tourism</strong> மோகனூர் (நாமக்கல் மாவட்டம், தமிழ்நாடு) நகரை தலைமையிடமாகக் கொண்டு, தென்னிந்தியாவின் பாரம்பரிய இடங்கள், மலைவாசஸ்தலங்கள், கடற்கரைகள் மற்றும் ஆன்மீக தலங்களுக்கான தனிப்பயனாக்கப்பட்ட (Customized) பயணங்களை மிகச் சிறந்த முறையில் ஒருங்கிணைத்து வருகிறது.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              15 ஆண்டுகளுக்கும் மேலான பயண நிபுணத்துவத்துடன், குடும்பத்தினர், நண்பர்கள் குழுக்கள் மற்றும் பக்தர்கள் எளிதாகவும் பாதுகாப்பாகவும் மன நிறைவோடு பயணிக்கும் வகையில் எங்கள் அதிநவீன ஏசி புஷ்பேக் டெம்போ டிராவலர்கள் மற்றும் அனுபவம் வாய்ந்த ஓட்டுநர்கள் சேவையில் ஈடுபடுகின்றனர்.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "15+ Years Regional Expertise",
                "Mohanur, Namakkal Head Office",
                "Full South India Inter-State Permits",
                "Customized Itinerary Flexibility",
                "Verified & Courteous Drivers",
                "24/7 Dedicated Trip Coordination"
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Quick Stat Bar */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-emerald-800/60">
              <div className="p-3 rounded-2xl bg-emerald-900/30 text-center">
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-emerald-300">15+</div>
                <div className="text-[11px] text-slate-400">Years Experience</div>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-900/30 text-center">
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-emerald-300">30+</div>
                <div className="text-[11px] text-slate-400">Top Destinations</div>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-900/30 text-center">
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-emerald-300">100%</div>
                <div className="text-[11px] text-slate-400">Personal Care</div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
