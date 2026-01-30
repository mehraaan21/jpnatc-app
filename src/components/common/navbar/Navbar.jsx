import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import image from "../../../assets/jpnatc_icon.png";
import NavDropdown from "./NavDropdown"; 

// Importing data
import { navLinks, dropdowns } from "../../../utils/data";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      
      {/* 1. TOP BAR (Blue) */}
      <div className={`bg-linear-to-br from-[#063a4d] via-[#0a5671] to-[#063a4d] text-white transition-all duration-500 overflow-hidden ${
        isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
          <div className="flex gap-6">
            <a href="tel:+911126731237" className="flex items-center gap-2 hover:text-red-300 transition-colors">
              <Phone size={12} /> Emergency: 011-2673-1237
            </a>
            <span className="hidden sm:flex items-center gap-2">
              <MapPin size={12} /> AIIMS New Delhi
            </span>
          </div>
          <div className="hidden md:flex gap-4">
            <Link to="/appointments" className="hover:text-cyan-300 transition-colors">OPD Schedule</Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white transition-all duration-300 border-b border-gray-100">
        <div className={`max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-18" : "h-20"
        }`}>
          
          {/* LOGO */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={image} 
              alt="JPNATC" 
              className={`transition-all duration-300 w-auto ${isScrolled ? "h-10" : "h-14"}`} 
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <div 
                key={i} 
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.dropdown)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <button className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors
                    ${openDropdown === link.dropdown ? "text-[#0AA6C6]" : "text-gray-700 hover:text-[#0AA6C6]"}`}>
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === link.dropdown ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link 
                    to={link.href} 
                    className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#0AA6C6] transition-colors"
                  >
                    {link.name}
                  </Link>
                )}

                {/* USING YOUR NavDropdown COMPONENT */}
                {link.dropdown && (
                  <NavDropdown 
                    items={dropdowns[link.dropdown]} 
                    isOpen={openDropdown === link.dropdown} 
                  />
                )}
              </div>
            ))}

            <div className="flex items-center border-l ml-4 pl-4 gap-4">
              <button className="text-gray-500 hover:text-[#0AA6C6] transition-colors"><Search size={20} /></button>
              <Link 
                to="/patient-dashboard" 
                className="bg-[#1d7f9d] hover:bg-[#16698c] text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md active:scale-95"
              >
                Patient Dashboard
              </Link>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#115081] hover:bg-slate-50 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE MENU */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[40] transition-transform duration-500 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`} style={{ top: isScrolled ? "64px" : "80px" }}>
        <div className="h-full overflow-y-auto px-6 py-8 pb-32">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <div key={i} className="border-b border-gray-50 last:border-none">
                {link.dropdown ? (
                  <details className="group">
                    <summary className="flex justify-between items-center py-4 text-md font-bold text-gray-800 list-none cursor-pointer">
                      {link.name}
                      <ChevronDown size={20} className="group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="bg-slate-50 rounded-xl mb-4 py-2 border border-slate-100">
                      {dropdowns[link.dropdown]?.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-6 py-3 text-gray-600 font-medium hover:text-[#0AA6C6]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link 
                    to={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-lg font-bold text-gray-800 hover:text-[#0AA6C6]"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/patient-dashboard" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 w-full py-4 bg-[#115081] text-white text-center rounded-xl font-bold shadow-lg"
            >
              Patient Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}