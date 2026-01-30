import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavDropdown({ items, isOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true); // show immediately for open
    } else {
      // hide after animation duration
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!visible && !isOpen) return null;

  return (
    <div
      className={`
        absolute top-full left-1/2 -translate-x-1/2
        bg-white rounded-xl shadow-xl border-b-4 border-[#0AA6C6] py-2 z-50
        min-w-[220px]
        transform transition-all duration-300
        origin-top
        ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
      `}
      style={{ transformOrigin: "top center" }}
    >
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.href}
          onClick={onClose}
          className="block px-4 py-3 text-sm text-gray-700
                     hover:bg-[#0c7c92] hover:text-white transition"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
