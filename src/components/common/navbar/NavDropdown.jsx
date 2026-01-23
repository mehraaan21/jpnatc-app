import { NavLink } from "react-router-dom";

export default function NavDropdown({ label, items }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-2 py-1 hover:text-[#0B5DBB] transition font-medium">
        {label} <span className="text-xs">▾</span>
      </button>

      <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg mt-2 w-48 animate-fade z-50">
        {items.map(item => (
          <NavLink
            key={item.name}
            to={item.to}
            className="px-4 py-2 hover:bg-[#0AA6C6] hover:text-white transition"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
