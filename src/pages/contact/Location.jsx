import { MapPin, Phone, Printer, Navigation, Bus, Train, ExternalLink } from "lucide-react";

export default function Location() {
  const contactDetails = [
    { label: "Emergency Helpline", value: "011-26731237 – 26731283", icon: <Phone size={18} /> },
    { label: "Board Numbers", value: "011-26731000 – 26731003", icon: <Phone size={18} /> },
    { label: "Fax Support", value: "+91-11-26106826", icon: <Printer size={18} /> },
  ];

  return (
    <section className="w-full bg-white pt-24 pb-20">
      {/* ===== Heading Section ===== */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold text-slate-800">
          Our <span className="text-[#0AA6C6] font-bold">Location</span>
        </h1>
        <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4" />
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
          Ansari Nagar campus ke pass sthit, JPNATC ek standalone facility hai jo advanced trauma care ke liye dedicated hai.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-10 border border-slate-100 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            
            {/* LEFT: Information Panel */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Address Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <MapPin size={80} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <MapPin className="text-[#0AA6C6]" size={22} /> Main Address
                </h3>
                <p className="text-slate-800 font-bold leading-tight mb-2">
                  Jai Prakash Narayan Apex Trauma Center (JPNATC)
                </p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Ring Rd, Raj Nagar, Safdarjung Enclave <br />
                  New Delhi – 110029, India
                </p>
                <a 
                  href="https://maps.google.com/?cid=14551087883362266801&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0AA6C6] hover:underline"
                >
                  <Navigation size={16} /> View on Google Maps <ExternalLink size={14} />
                </a>
              </div>

              {/* Contact Quick List */}
              <div className="space-y-4">
                {contactDetails.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-[#0AA6C6]">{item.icon}</div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm font-bold text-slate-700">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Note Card */}
              <div className="bg-[#256e8d] p-6 rounded-3xl text-white shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Bus size={20} className="text-cyan-300" />
                  <h4 className="font-bold">Important Navigation</h4>
                </div>
                <p className="text-sm text-blue-100 leading-relaxed">
                  JPNATC main AIIMS campus se lagbhag <strong>2.5 km</strong> door hai. Yeh Inner Ring Road par Safdarjung Hospital aur Bhikaji Cama Place ke beech sthit hai.
                </p>
              </div>
            </div>

            {/* RIGHT: Map Panel */}
            <div className="lg:col-span-7 h-full min-h-[500px]">
              <div className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl relative group">
                {/* Embed provided by Google Maps tool */}
                <iframe
                  title="JPNATC Location Map"
                  src="https://maps.google.com/?cid=14551087883362266801&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
                  className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 border-none"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white flex justify-between items-center shadow-lg">
                    <div className="flex items-center gap-3">
                        <Train className="text-blue-600" size={20} />
                        <p className="text-xs font-bold text-slate-700">Nearest Metro: AIIMS (Yellow Line)</p>
                    </div>
                    <a 
                      href="https://maps.google.com/?cid=14551087883362266801&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#0AA6C6] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#088ba7] transition-all"
                    >
                        Directions
                    </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}