import { ArrowUpRight, MapPin, Phone, Printer, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#063a4d] via-[#0a5671] to-[#063a4d] text-white pt-20">
      
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        
        {/* COLUMN 1 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-wide">JPNATC</h3>
          <ul className="space-y-3 text-white/90">
            {[
              "Home",
              "About Us",
              "Ex-Chief",
              "OPD Schedule",
              "Faculty",
              "Notice & Circular",
              "Contact Us",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 hover:text-cyan-300 transition cursor-pointer"
              >
                <ArrowUpRight size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-wide">Contact Us</h3>

          <div className="space-y-4 text-white/90">
            <p className="flex items-start gap-3">
              <MapPin className="text-cyan-300 mt-1" size={18} />
              <span>JPNATC, AIIMS, New Delhi</span>
            </p>

            <p className="flex items-start gap-3">
              <Phone className="text-cyan-300 mt-1" size={18} />
              <span>
                For Patient Appointment <br />
                <strong>011-26731237 / 26731283</strong>
              </span>
            </p>

            <p className="flex items-start gap-3">
              <Printer className="text-cyan-300 mt-1" size={18} />
              <span>FAX: +91-11-2610826</span>
            </p>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-wide">AIIMS Network</h3>

          <ul className="space-y-3 text-white/90">
            {[
              "AIIMS Bhubaneswar",
              "AIIMS Jodhpur",
              "AIIMS Patna",
              "AIIMS Raipur",
              "AIIMS Rishikesh",
              "AIIMS Bhopal",
              "AIIMS Kalyani",
            ].map((aiims) => (
              <li
                key={aiims}
                className="flex items-center gap-2 hover:text-cyan-300 transition cursor-pointer"
              >
                <ArrowUpRight size={16} />
                {aiims}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-16 border-t border-white/20"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/80">
        <p>© JPNATC, AIIMS. All Rights Reserved.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-cyan-400 hover:bg-cyan-300 text-black p-3 rounded-xl transition shadow-lg"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* SOFT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]"></div>
    </footer>
  );
}
