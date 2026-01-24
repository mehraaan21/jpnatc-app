import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { label: "Ortho", path: "/faculties/ortho" },
    { label: "Trauma", path: "/faculties/trauma" },
    { label: "Lab", path: "/faculties/lab" },
    { label: "Neuro", path: "/faculties/neuro" },
    { label: "Radio", path: "/faculties/radio" },
  ];

  return (
    <nav className="fixed top-24 left-0 h-[calc(100vh-96px)] flex flex-col items-center py-10 bg-white border-r border-gray-200 overflow-y-auto w-20">
      
      {/* Logo */}
      <NavLink to="/faculties" className="mb-4">
        <div className="w-12 h-12 bg-black text-white font-bold flex items-center justify-center rounded-sm cursor-pointer">
          JP
        </div>
      </NavLink>

      {/* Menu */}
      <div className="flex-1 flex flex-col gap-6">
        {menu.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-gray-500 hover:text-primary transition ${
                isActive ? "text-primary font-bold" : ""
              }`
            }
          >
            <span className="text-[10px] font-semibold uppercase">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
