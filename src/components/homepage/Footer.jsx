"use client";

import { ArrowUpRight, MapPin, Phone, Printer, ArrowUp, Mail, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Faculty", href: "/faculty" },
    { name: "Notices", href: "/notices" },
    { name: "Contact", href: "/contact" },
  ];

  const aiimsLinks = [
    { name: "AIIMS Delhi", href: "https://www.aiims.edu" },
    { name: "AIIMS Bhubaneswar", href: "https://www.aiimsbhubaneswar.edu.in" },
    { name: "AIIMS Jodhpur", href: "https://www.aiimsjodhpur.edu.in" },
    { name: "AIIMS Patna", href: "https://www.aiimspatna.edu.in" },
    { name: "AIIMS Raipur", href: "https://www.aiimsraipur.edu.in" },
    { name: "AIIMS Rishikesh", href: "https://www.aiimsrishikesh.edu.in" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#052535] via-[#063a4d] to-[#052535] text-white">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0AA6C6] via-[#06b6d4] to-[#0AA6C6]"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-36">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/src/assets/jpnatc_icon.png" 
                alt="JPNATC Logo" 
                className="w-46 rounded-xl object-contain"
              />
            
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed">
              Jay Prakash Narayan Trauma Center is a premier trauma care facility 
              providing excellence in orthopedic and trauma care services.
            </p>

            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock size={16} className="text-[#0AA6C6]" />
              <span>Emergency: 24/7 Available</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-[#0AA6C6] rounded-full"></div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
            </div>
            
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-white/70 hover:text-[#0AA6C6] transition-colors duration-200 group"
                  >
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-[#0AA6C6] rounded-full"></div>
              <h3 className="text-lg font-semibold">Contact Info</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#0AA6C6]" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium">Address</p>
                  <p className="text-white/60 text-xs mt-1">
                    Jay Prakash Narayan Trauma Center<br />
                    AIIMS, New Delhi - 110029
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#0AA6C6]" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium">Phone</p>
                  <p className="text-white/60 text-xs mt-1">
                    011-26731237 / 26731283
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <Printer size={16} className="text-[#0AA6C6]" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium">Fax</p>
                  <p className="text-white/60 text-xs mt-1">
                    +91-11-2610826
                  </p>
                </div>
              </div>

              
            </div>
          </div>

          {/* Column 4: AIIMS Network */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-[#0AA6C6] rounded-full"></div>
              <h3 className="text-lg font-semibold">AIIMS Network</h3>
            </div>
            
            <ul className="space-y-2.5">
              {aiimsLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-white/70 hover:text-[#0AA6C6] transition-colors duration-200 group"
                  >
                    <span className="text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white/30 rounded-full group-hover:bg-[#0AA6C6] transition-colors"></span>
                      {link.name}
                    </span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © {currentYear} JPNATC, AIIMS New Delhi. All Rights Reserved.
              </p>
            
            </div>

            {/* Back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex cursor-pointer items-center gap-2 bg-[#0AA6C6] hover:bg-[#0895b8] text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#0AA6C6]/30"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp size={16} className="group-hover:translate-y-[-2px] transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0AA6C6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06b6d4]/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}
