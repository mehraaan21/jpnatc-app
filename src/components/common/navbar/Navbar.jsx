import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";

import TopBar from "./TopBar";
import NavDropdown from "./NavDropdown";
import { navLinks, dropdowns } from "../../../utils/navData";

import logo from "../../../assets/jpnatc_icon.png";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="w-full">
      <TopBar />

      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center w-60">
            <img
              src={logo}
              alt="JPN Apex Trauma Centre Logo"
              className="h-12"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[17px] text-gray-800">
            
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#0B5DBB] font-semibold border-b-2 border-[#0B5DBB]"
                  : "hover:text-[#0B5DBB]"
              }
            >
              Home
            </NavLink>

            {/* Dropdowns */}
            {Object.entries(dropdowns).map(([key, dropdown]) => (
              <NavDropdown
                key={key}
                label={dropdown.label}
                items={dropdown.items}
                isOpen={openDropdown === key}
                onOpen={() => setOpenDropdown(key)}
                onClose={() => setOpenDropdown(null)}
                width={key === "education" ? "w-56" : "w-48"}
              />
            ))}

            {/* Normal links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className="hover:text-[#0B5DBB]"
              >
                {link.name}
              </NavLink>
            ))}

            <Search size={20} className="cursor-pointer" />
          </nav>

          {/* CTA */}
          <button className="bg-[#0B5DBB] text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition font-medium">
            Patient Dashboard
          </button>
        </div>
      </div>
    </header>
  );
}
