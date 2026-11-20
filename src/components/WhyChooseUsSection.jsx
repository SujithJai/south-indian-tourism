import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  CalendarCheck, 
  Map, 
  Users, 
  Clock, 
  Award, 
  Sparkles, 
  HeartHandshake 
} from 'lucide-react';
import GreenWaveDivider from './GreenWaveDivider';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "15+ Years Travel Experience",
      desc: "தென்னிந்தியாவில் 15 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்ட நம்பகமான டூரிசம் நிறுவனம்."
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-emerald-400" />,
      title: "Customized Tour Planning",
      desc: "உங்கள் நேரம், விருப்பம் மற்றும் பட்ஜெட்டுக்கு ஏற்ப மாற்றி அமைக்கப்பட்ட பயண திட்டங்கள்."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-teal-400" />,
      title: "Experienced & Polite Drivers",
      desc: "மலைப்பாதை & கோவில் நேரங்களை நன்கு அறிந்த, குடும்பத்தினருடன் அன்பாக பழகும் ஓட்டுநர்கள்."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Comfortable Transportation",
      desc: "நவீன ஏசி வசதி கொண்ட சொகுசு டெம்போ டிராவலர்கள், இன்னோவா மற்றும் மினி பஸ்கள்."
    },
    {
      icon: <Map className="w-6 h-6 text-amber-400" />,
      title: "South India Expertise",
      desc: "தமிழ்நாடு, கர்நாடகா, கேரளா, ஆந்திரா முழுவதிலும் உள்ள 30+ சுற்றுலா தலங்களில் முழு நிபுணத்துவம்."
    },
    {
      icon: <Users className="w-6 h-6 text-teal-400" />,
      title: "Family & Group Travel",
      desc: "பெரியவர்கள், குழந்தைகள் மற்றும் முதியவர்களுக்கு சிரமமில்லாத பாதுகாப்பான குழுப் பயணம்."
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      title: "24/7 Travel Assistance",
      desc: "பயணம் தொடங்கியது முதல் முடியும் வரை உங்கள் சந்தேகங்களை தீர்க்கும் உடனடி உதவி மையம்."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-400" />,
      title: "Transparent & Trustworthy",
      desc: "மறைமுக கட்டணங்கள் இல்லாத வெளிப்படையான கட்டண முறை மற்றும் உறுதி செய்யப்பட்ட சேவை."
    }
  ];

  return (
    <section id="why-us" className="relative bg-emerald-950/90 py-20 text-white overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Why Travel With Us • எங்களின் தனிச்சிறப்புகள்</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why Travel With <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
              South Indian Tourism?
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base">
            மோகனூர் (நாமக்கல்) தலைமை அலுவலகமாக கொண்டு, தென்னிந்தியாவின் சிறந்த சுற்றுலா சேவையை கடந்த 15 ஆண்டுகளாக வழங்கி வருகிறோம்.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
