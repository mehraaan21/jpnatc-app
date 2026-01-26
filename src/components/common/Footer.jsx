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
import { Link } from "react-router-dom";

/* =======================
   DATA (API READY)
   ======================= */

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about/history" },
  { label: "Ex-Chief", path: "/about/ex-chief" },
  { label: "OPD Schedule", path: "/opd-schedule" },
  { label: "Faculty", path: "/faculties" },
  { label: "Notice & Circular", path: "/notices" },
  { label: "Contact Us", path: "/contact" },
];

const aiimsNetwork = [
  { name: "AIIMS Bhubaneswar", url: "https://aiimsbhubaneswar.nic.in" },
  { name: "AIIMS Jodhpur", url: "https://www.aiimsjodhpur.edu.in" },
  { name: "AIIMS Patna", url: "https://aiimspatna.edu.in" },
  { name: "AIIMS Raipur", url: "https://www.aiimsraipur.edu.in" },
  { name: "AIIMS Rishikesh", url: "https://www.aiimsrishikesh.edu.in" },
  { name: "AIIMS Bhopal", url: "https://aiimsbhopal.edu.in" },
  { name: "AIIMS Kalyani", url: "https://aiimskalyani.edu.in" },
];

/* =======================
   COMPONENT
   ======================= */

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-br from-[#063a4d] via-[#0a5671] to-[#063a4d] text-white pt-20">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">

        {/* LEFT - QUICK LINKS */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">JPNATC</h3>

          <ul className="space-y-3 text-white/90">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 hover:text-cyan-300 transition group"
                >
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CENTER - CONTACT */}
        <div className="space-y-6 text-center lg:text-left">
          <h3 className="text-2xl font-bold">Contact Us</h3>

          <p className="flex gap-3 justify-center lg:justify-start">
            <MapPin className="text-cyan-300 mt-1" size={20} />
            <a
              href="https://www.google.com/maps/search/JPNATC+AIIMS+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 text-sm"
            >
              JPNATC, AIIMS, New Delhi
            </a>
          </p>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="flex gap-3 mb-4 justify-center lg:justify-start">
              <Phone className="text-cyan-300 mt-1" size={20} />
              <span className="text-sm">
                For Patient Appointment <br />
                <a
                  href="tel:01126731237"
                  className="text-lg font-semibold hover:text-cyan-300"
                >
                  011-26731237 / 26731283
                </a>
              </span>
            </p>

            <p className="flex gap-3 justify-center lg:justify-start">
              <Printer className="text-cyan-300 mt-1" size={20} />
              <span className="text-sm">FAX: +91-11-2610826</span>
            </p>
          </div>
        </div>

        {/* RIGHT - AIIMS NETWORK */}
        <div className="space-y-6 lg:text-right">
          <h3 className="text-2xl font-bold">AIIMS Network</h3>

          <ul className="space-y-3 text-white/90">
            {aiimsNetwork.map((aiims) => (
              <li key={aiims.name}>
                <a
                  href={aiims.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-end gap-2 hover:text-cyan-300 transition group"
                >
                  <span className="text-sm">{aiims.name}</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-16 border-t border-white/20"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/80">
          © {new Date().getFullYear()} JPNATC, AIIMS. All Rights Reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-cyan-400 hover:bg-cyan-300 text-black px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <ArrowUp size={18} />
          Back to Top
        </button>
      </div>
    </footer>
  );
}
