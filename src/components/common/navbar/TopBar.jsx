import { Phone, Mail, Globe } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:flex bg-gradient-to-r from-[#0B5DBB] to-[#0AA6C6] text-white text-sm px-4 py-2 justify-between items-center shadow-md">
      
      {/* Left info */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 hover:underline cursor-pointer">
          <Phone size={16} /> 011-26731237
        </div>
        <div className="flex items-center gap-2 hover:underline cursor-pointer">
          <Mail size={16} /> jpnatcaiims2011@gmail.com
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4">
        <a href="#" className="hover:underline flex items-center gap-1">
          <Globe size={16} /> English
        </a>
        <a href="#" className="hover:underline">Hindi</a>
        <a href="#" className="hover:underline font-semibold">Old Website</a>
      </div>
      
    </div>
  );
}
