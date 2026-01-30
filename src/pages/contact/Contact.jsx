import { Phone, Mail, MapPin, Send, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="w-full bg-white pt-24 pb-20 overflow-hidden">
      
      {/* ===== Heading (Your Website Style) ===== */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold text-slate-800">
          Contact <span className="text-[#0AA6C6] font-bold">Us</span>
        </h1>
        <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4" />
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
          Connect with the Jai Prakash Narayan Apex Trauma Center. 
          Our team is available 24/7 for patient support and emergency assistance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT: The "Direct Access" Sidebar (Simplified & Bold) */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Direct Access</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Skip the form and reach out directly to our specialized departments via phone or email.
              </p>
            </div>

            <div className="space-y-6">
              {/* Emergency High-Impact Card */}
              <div className="p-6 bg-red-50 rounded-3xl border border-red-100 group transition-all hover:bg-red-600">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl text-red-600 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-tighter group-hover:text-red-100">Emergency Desk</span>
                    <a href="tel:01126731237" className="text-xl font-black text-red-700 group-hover:text-white">011-26731237</a>
                  </div>
                </div>
              </div>

              {/* Standard Support Cards */}
              <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-[#0AA6C6]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Official Email</h4>
                  <p className="text-slate-500 text-sm">jpnatcaiims2011@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Location</h4>
                  <p className="text-slate-500 text-sm">Safdarjung Enclave, New Delhi</p>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Trauma Response: Active Now
              </span>
            </div>
          </div>

          {/* RIGHT: The "Modern Float" Form */}
          <div className="w-full lg:w-2/3">
            <div className="relative">
              {/* Decorative Background Element */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-50 rounded-full blur-3xl -z-10 opacity-60" />
              
              <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-bold text-slate-800 mb-8">Send a Secure Message</h3>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2 group">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-[#0AA6C6]">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Rahul Kumar" 
                        className="w-full bg-transparent border-b-2 border-slate-100 py-3 outline-none focus:border-[#0AA6C6] transition-all text-slate-700 font-medium"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-[#0AA6C6]">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="rahul@example.com" 
                        className="w-full bg-transparent border-b-2 border-slate-100 py-3 outline-none focus:border-[#0AA6C6] transition-all text-slate-700 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-[#0AA6C6]">Department Inquiry</label>
                    <select className="w-full bg-transparent border-b-2 border-slate-100 py-3 outline-none focus:border-[#0AA6C6] transition-all text-slate-700 font-medium cursor-pointer">
                      <option>General Inquiry</option>
                      <option>OPD Appointments</option>
                      <option>Academic Research</option>
                    </select>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-[#0AA6C6]">Your Message</label>
                    <textarea 
                      rows="4" 
                      placeholder="Describe your query in detail..." 
                      className="w-full bg-transparent border-b-2 border-slate-100 py-3 outline-none focus:border-[#0AA6C6] transition-all text-slate-700 font-medium resize-none"
                    ></textarea>
                  </div>

                  <button className="flex items-center justify-between group w-full md:w-max bg-[#0f8aa3] text-white font-bold pl-8 pr-6 py-4 rounded-2xl hover:bg-[#088ba7] shadow-xl transition-all hover:translate-x-1 active:scale-95">
                    Submit Request
                    <div className="ml-4 p-2 bg-white/20 rounded-xl transition-transform group-hover:translate-x-1">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}