import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import TopBar from "./TopBar";
import NavDropdown from "./NavDropdown";
import { navLinks, dropdowns } from "../../../utils/navData";
import logo from "../../../assets/jpnatc_icon.png";

export default function Navbar2() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navOrder = [
    { type: "link", name: "Home", to: "/" },
    { type: "dropdown", label: "About Us", items: dropdowns["About Us"] },
    { type: "dropdown", label: "Education", items: dropdowns["Education"] },
    { type: "link", name: "Staff", to: "/staff" },
    { type: "link", name: "Contact", to: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Left */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="JPNATC" className="h-14" />
        </NavLink>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          {navOrder.map((item, idx) =>
            item.type === "link" ? (
              <NavLink
                key={idx}
                to={item.to}
                className="px-2 py-1 hover:text-[#0B5DBB] transition"
              >
                {item.name}
              </NavLink>
            ) : (
              <NavDropdown key={idx} label={item.label} items={item.items} />
            )
          )}
        </nav>

        {/* Right CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/patient-dashboard"
            className="hidden lg:inline-block bg-linear-to-r from-[#0B5DBB] to-[#0AA6C6] px-5 py-2 rounded-full text-white hover:scale-105 transition"
          >
            Patient Dashboard
          </NavLink>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col px-4 py-4 gap-2">
            {navOrder.map((item, idx) =>
              item.type === "link" ? (
                <NavLink
                  key={idx}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 hover:text-[#0B5DBB]"
                >
                  {item.name}
                </NavLink>
              ) : (
                <div key={idx} className="flex flex-col">
                  <span className="font-semibold py-2">{item.label}</span>
                  {item.items.map(sub => (
                    <NavLink
                      key={sub.name}
                      to={sub.to}
                      onClick={() => setMobileOpen(false)}
                      className="pl-4 py-1 hover:text-[#0B5DBB]"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )
            )}
            <NavLink
              to="/patient-dashboard"
              className="bg-linear-to-r from-[#0B5DBB] to-[#0AA6C6] px-4 py-2 rounded-full text-white text-center mt-2"
            >
              Patient Dashboard
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
