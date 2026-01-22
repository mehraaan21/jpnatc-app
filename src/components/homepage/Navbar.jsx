import { useState } from "react";
import { Search } from "lucide-react";
import image from "../../assets/jpnatc_icon.png";

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const dropdowns = {
        about: [
            { name: "History", href: "/about/history" },
            { name: "Mission", href: "/about/mission" },
            { name: "Aims And Objective", href: "/about/aims-and-objective" },
             { name: "Facilities", href: "/about/facilities" },
              { name: "Heirarchy", href: "/about/heirarchy" },
               { name: "Photo Gallery", href: "/about/photo-gallery" },
                { name: "IT Innovation", href: "/about/it-innovation" },
                 { name: "Ex Chief", href: "/about/ex-chief" },

        ],
        contact: [
            { name: "Contact Us", href: "/contact/contact-us" },
            { name: "Location", href: "/contact/location" },
            { name: "Right To Information", href: "/contact/right-to-information" },

            
        ],
        education: [
            { name: "Undergraduate Programs", href: "/education/undergraduate" },
            { name: "Postgraduate Courses", href: "/education/postgraduate" },
            { name: "Research Programs", href: "/education/research" },
            { name: "Continuing Education", href: "/education/continuing-education" },
        ],
    };

    const handleMouseEnter = (dropdown) => {
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <header className="w-full">
            {/* ================= TOP BLUE BAR ================= */}
            <div className="bg-linear-to-r from-[#0B5DBB] to-[#0AA6C6] text-white text-sm">
                <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
                    {/* Left */}
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            ☎ 011-26731237
                        </span>
                        <span className="flex items-center gap-2">
                            ✉ jpnatcaiims2011@gmail.com
                        </span>
                    </div>

                    {/* Right */}
                    <div className="flex text-gray-700 items-center gap-4">
                        <a href="#" className="text-gray-700">
                            Old website version
                        </a>
                        <span>|</span>
                        <a href="#" className="text-gray-700">
                            English
                        </a>
                        <a href="#" className="text-gray-700">
                            Hindi
                        </a>
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAVBAR ================= */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* LOGO + TITLE */}
                    <div className="flex h w-60 items-center gap-4">
                        {/* Logo */}
                        <img src={image} alt="" />
                    </div>

                    {/* NAV LINKS */}
                    <nav className="hidden lg:flex items-center gap-8 text-[17px] text-gray-800">
                        <a
                            href="#"
                            className="text-[#0B5DBB] font-semibold border-b-2 border-[#0B5DBB]"
                        >
                            Home
                        </a>

                        {/* About Us Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("about")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center gap-1 cursor-pointer py-2">
                                About Us <span className="text-xs">▾</span>
                            </div>
                            {openDropdown === "about" && (
                                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fade-in">
                                    {dropdowns.about.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-gray-700 hover:bg-[#0B5DBB] hover:text-white transition-colors duration-200"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a href="/staff">Staff</a>
                        <a href="/faculty">Faculty</a>

                        {/* Education Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("education")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center gap-1 cursor-pointer py-2">
                                Education <span className="text-xs">▾</span>
                            </div>
                            {openDropdown === "education" && (
                                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fade-in">
                                    {dropdowns.education.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-gray-700 hover:bg-[#0B5DBB] hover:text-white transition-colors duration-200"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a href="/notices">Notices</a>

                        {/* Contact Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("contact")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center gap-1 cursor-pointer py-2">
                                Contact <span className="text-xs">▾</span>
                            </div>
                            {openDropdown === "contact" && (
                                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fade-in">
                                    {dropdowns.contact.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-gray-700 hover:bg-[#0B5DBB] hover:text-white transition-colors duration-200"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Search size={20} className="cursor-pointer" />
                    </nav>

                    {/* ACTION BUTTONS */}
                    <div className="flex items-center gap-4">
                        <button className="bg-[#0B5DBB] text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition font-medium">
                            Patient Dashboard
                        </button>

                       
                    </div>
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out forwards;
                }
            `}</style>
        </header>
    );
}
