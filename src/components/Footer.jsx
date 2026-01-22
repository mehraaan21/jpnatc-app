// import { ArrowUpRight, MapPin, Phone, Printer, ArrowUp } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="relative bg-gradient-to-br from-[#063a4d] via-[#0a5671] to-[#063a4d] text-white pt-20">
      
//       {/* MAIN GRID */}
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        
//         {/* COLUMN 1 */}
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold tracking-wide">JPNATC</h3>
//           <ul className="space-y-3 text-white/90">
//             {[
//               "Home",
//               "About Us",
//               "Ex-Chief",
//               "OPD Schedule",
//               "Faculty",
//               "Notice & Circular",
//               "Contact Us",
//             ].map((item) => (
//               <li
//                 key={item}
//                 className="flex items-center gap-2 hover:text-cyan-300 transition cursor-pointer"
//               >
//                 <ArrowUpRight size={16} />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* COLUMN 2 */}
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold tracking-wide">Contact Us</h3>

//           <div className="space-y-4 text-white/90">
//             <p className="flex items-start gap-3">
//               <MapPin className="text-cyan-300 mt-1" size={18} />
//               <span>JPNATC, AIIMS, New Delhi</span>
//             </p>

//             <p className="flex items-start gap-3">
//               <Phone className="text-cyan-300 mt-1" size={18} />
//               <span>
//                 For Patient Appointment <br />
//                 <strong>011-26731237 / 26731283</strong>
//               </span>
//             </p>

//             <p className="flex items-start gap-3">
//               <Printer className="text-cyan-300 mt-1" size={18} />
//               <span>FAX: +91-11-2610826</span>
//             </p>
//           </div>
//         </div>

//         {/* COLUMN 3 */}
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold tracking-wide">AIIMS Network</h3>

//           <ul className="space-y-3 text-white/90">
//             {[
//               "AIIMS Bhubaneswar",
//               "AIIMS Jodhpur",
//               "AIIMS Patna",
//               "AIIMS Raipur",
//               "AIIMS Rishikesh",
//               "AIIMS Bhopal",
//               "AIIMS Kalyani",
//             ].map((aiims) => (
//               <li
//                 key={aiims}
//                 className="flex items-center gap-2 hover:text-cyan-300 transition cursor-pointer"
//               >
//                 <ArrowUpRight size={16} />
//                 {aiims}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* DIVIDER */}
//       <div className="mt-16 border-t border-white/20"></div>

//       {/* BOTTOM BAR */}
//       <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/80">
//         <p>© JPNATC, AIIMS. All Rights Reserved.</p>

//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="bg-cyan-400 hover:bg-cyan-300 text-black p-3 rounded-xl transition shadow-lg"
//         >
//           <ArrowUp size={20} />
//         </button>
//       </div>

//       {/* SOFT GLOW */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]"></div>
//     </footer>
//   );
// }



"use client";

import { ArrowUpRight, MapPin, Phone, Printer, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#063a4d] via-[#0a5671] to-[#063a4d] text-white pt-20">
      
      {/* MAIN GRID - LEFT CENTER RIGHT LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        
        {/* COLUMN 1 - LEFT: JPNATC Links */}
        <div className="space-y-6 lg:col-span-1">
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
                className="flex items-center gap-2 hover:text-cyan-300 transition cursor-pointer group"
              >
                <ArrowUpRight size={16} className="group-hover:translate-x-1 transition-transform" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 2 - CENTER: Contact Info */}
        <div className="space-y-6 lg:col-span-1 lg:mx-auto text-center lg:text-left">
          <h3 className="text-2xl font-bold tracking-wide">Contact Us</h3>
          <div className="space-y-4 text-white/90 max-w-md mx-auto lg:mx-0">
            <p className="flex items-start gap-3 justify-center lg:justify-start">
              <MapPin className="text-cyan-300 mt-1 shrink-0" size={20} />
              <span className="text-sm">JPNATC, AIIMS, New Delhi</span>
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="flex items-start gap-3 justify-center lg:justify-start mb-4">
                <Phone className="text-cyan-300 mt-1 shrink-0" size={20} />
                <span className="text-sm">
                  For Patient Appointment <br />
                  <strong className="text-lg block">011-26731237 / 26731283</strong>
                </span>
              </p>
              <p className="flex items-start gap-3 justify-center lg:justify-start">
                <Printer className="text-cyan-300 mt-1 shrink-0" size={20} />
                <span className="text-sm">FAX: +91-11-2610826</span>
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 3 - RIGHT: AIIMS Network */}
        <div className="space-y-6 lg:col-span-1 lg:text-right">
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
                className="flex items-center gap-2 hover:text-cyan-300 transition cursor-pointer group justify-end"
              >
                <span className="text-sm">{aiims}</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-16 border-t border-white/20"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-white/80">
          <div className="text-center lg:text-left">
            <p className="text-sm">© JPNATC, AIIMS. All Rights Reserved.</p>
            <p className="text-xs mt-1 opacity-75">Trauma Care Excellence Since 1986</p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black p-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-cyan-500/50 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:translate-y-[-2px] transition-transform" />
            <span className="font-semibold hidden sm:inline">Back to Top</span>
          </button>
        </div>
      </div>

      {/* ENHANCED BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400/50 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-sky-400/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        
        {/* Radial glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.1),transparent_50%)]"></div>
      </div>
    </footer>
  );
}
