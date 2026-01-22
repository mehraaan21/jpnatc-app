import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function NavDropdown({
  label,
  items,
  isOpen,
  onOpen,
  onClose,
  width = "w-48",
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button className="flex items-center gap-1 py-2 cursor-pointer">
        {label}
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div
          className={`absolute top-full left-0 mt-1 ${width} bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fade`}
        >
          {items.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="block px-4 py-2 text-gray-700 hover:bg-[#0B5DBB] hover:text-white transition"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
