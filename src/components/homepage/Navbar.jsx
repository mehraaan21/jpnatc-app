import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import image from "../../assets/jpnatc_icon.png";

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = (dropdown) => {
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", dropdown: "about" },
        { name: "Staff", href: "/staff" },
        { name: "Faculty", href: "/faculty" },
        { name: "Education", dropdown: "education" },
        { name: "Notices", href: "/notices" },
        { name: "Contact", dropdown: "contact" },
    ];

    return (
        <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}>
            {/* ================= TOP INFO BAR ================= */}
            <div className={`bg-linear-to-r from-[#0B5DBB] to-[#0AA6C6] text-white text-sm transition-all duration-300 ${
                isScrolled ? "h-0 overflow-hidden" : "h-10"
            }`}>
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">☎ 011-26731237</span>
                        <span className="flex items-center gap-2">✉ jpnatcaiims2011@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-gray-200 transition">Old website version</a>
                        <span>|</span>
                        <a href="#" className="hover:text-gray-200 transition">English</a>
                        <a href="#" className="hover:text-gray-200 transition">Hindi</a>
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAVBAR ================= */}
            <div className={`bg-white border-b border-[#0AA6C6] transition-all duration-300 ${
                isScrolled ? "py-4" : "py-4"
            }`}>
                <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">
                    {/* LOGO */}
                    <a href="/" className="flex items-center gap-3">
                        <img src={image} alt="JPNATC" className={`transition-all duration-300 ${isScrolled ? "h-12" : "h-16"}`} />
                    </a>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => link.dropdown && handleMouseEnter(link.dropdown)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {link.dropdown ? (
                                    <div className="flex items-center gap-1 px-4 py-2 cursor-pointer text-gray-700 hover:text-[#0AA6C6] transition-colors font-medium">
                                        {link.name}
                                        <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === link.dropdown ? "rotate-180" : ""}`} />
                                    </div>
                                ) : (
                                    <a
                                        href={link.href}
                                        className="px-4 py-2 text-gray-700 hover:text-[#0AA6C6] transition-colors font-medium relative group"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0AA6C6] transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                )}

                                {/* DROPDOWN */}
                                {link.dropdown && openDropdown === link.dropdown && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden animate-fade-in">
                                        {dropdowns[link.dropdown]?.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href={item.href}
                                                className="block px-4 py-3 text-gray-700 hover:bg-[#0AA6C6] hover:text-white transition-all duration-200 text-sm"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* SEARCH ICON */}
                        <button className="ml-4 p-2 text-gray-600 hover:text-[#0AA6C6] transition-colors">
                            <Search size={20} />
                        </button>

                        {/* PATIENT DASHBOARD BUTTON */}
                        <a
                            href="/patient-dashboard"
                            className="ml-4 px-5 py-2.5 bg-linear-to-r from-[#0B5DBB] to-[#0AA6C6] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#0AA6C6]/30 transition-all duration-300"
                        >
                            Patient Dashboard
                        </a>
                    </nav>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-700"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
                isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}>
                <div className="px-4 py-4 space-y-2">
                    {navLinks.map((link, index) => (
                        <div key={index}>
                            {link.dropdown ? (
                                <details className="group">
                                    <summary className="flex items-center justify-between px-4 py-3 text-gray-700 cursor-pointer hover:bg-gray-50 rounded-lg font-medium">
                                        {link.name}
                                        <ChevronDown size={18} className="transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="pl-4 mt-1 space-y-1">
                                        {dropdowns[link.dropdown]?.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href={item.href}
                                                className="block px-4 py-2 text-gray-600 hover:text-[#0AA6C6] text-sm"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <a
                                    href={link.href}
                                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            )}
                        </div>
                    ))}
                    <a
                        href="/patient-dashboard"
                        className="block mx-4 mt-4 px-5 py-3 bg-linear-to-r from-[#0B5DBB] to-[#0AA6C6] text-white text-center rounded-lg font-medium"
                    >
                        Patient Dashboard
                    </a>
                </div>
            </div>

            {/* Animation Styles */}
            <style>{`
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
