import { ArrowUpRight, MapPin, Phone, Printer, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

// Import data
import { footerLinks, aiimsNetwork } from "../../utils/data";

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
