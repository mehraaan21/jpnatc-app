import { Calendar, Phone, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthorityHero() {
  return (
    <section className="relative min-h-screen bg-[#1c344c] overflow-hidden flex items-center">
      {/* 1. Immersive Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/medical-tech.webp" 
          className="w-full h-full object-cover opacity-40"
          alt="Advanced Healthcare"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1118] via-[#0a1118]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Main Branding */}
        <div className="lg:col-span-7 pt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-cyan-500" />
            <span className="text-cyan-500 uppercase tracking-[0.3em] text-xs font-bold">
              Established 2006 • AIIMS New Delhi
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
            The Apex of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Trauma Excellence
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Integrating rapid emergency response with world-class surgical 
            innovation and compassionate rehabilitation.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link to="/appointments" className="group relative px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg overflow-hidden transition-all">
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              <span className="relative flex items-center gap-2">
                Get an Appointment <ChevronRight size={18} />
              </span>
            </Link>
            
            <a href="tel:+911126731237" className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-all flex items-center gap-2">
              <Phone size={18} className="text-red-500" /> Emergency: 011-2673-1237
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Glassmorphism Notice Hub */}
        <div className="lg:col-span-5 relative">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <h3 className="text-white font-bold text-xl flex items-center gap-2">
                <FileText className="text-cyan-500" /> Latest Updates
              </h3>
              <span className="text-xs text-cyan-500 font-mono animate-pulse">● LIVE</span>
            </div>

            <div className="space-y-6">
              {[
                { date: "AUG 15", title: "79th Independence Day Celebration Invitation" },
                { date: "JUL 28", title: "New Digitalization Policy for AIIMS Hospital" },
                { date: "JUL 20", title: "Advisory: Fire Safety Precautions in Wards" }
              ].map((notice, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-cyan-500 text-xs font-bold mb-1">{notice.date}</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                    {notice.title}
                  </p>
                </div>
              ))}
            </div>

            <Link to="/notices" className="mt-8 flex items-center justify-center w-full py-3 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all">
              Explore All Circulars
            </Link>
          </div>

          {/* Floating Trust Card */}
          <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-cyan-600 to-blue-700 p-6 rounded-2xl shadow-xl hidden md:block">
            <p className="text-white/80 text-xs uppercase tracking-widest font-bold mb-1">Annual Cases</p>
            <p className="text-white text-3xl font-black">25,000+</p>
          </div>
        </div>

      </div>

      {/* Subtle Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-black/20 backdrop-blur-md py-4 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-white/40 text-xs font-medium uppercase tracking-[0.2em]">
          <span>World Health Organization Partner</span>
          <span>Integrated Trauma Care System</span>
          <span>Level 1 Trauma Center</span>
        </div>
      </div>
    </section>
  );
}