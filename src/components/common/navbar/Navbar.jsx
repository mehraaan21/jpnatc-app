import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import image from "../../../assets/jpnatc_icon.png";

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
        education: [
            { name: "Undergraduate Programs", href: "/education/undergraduate" },
            { name: "Postgraduate Courses", href: "/education/postgraduate" },
            { name: "Research Programs", href: "/education/research" },
            { name: "Continuing Education", href: "/education/continuing-education" },
        ],
        contact: [
            { name: "Contact Us", href: "/contact/contact-us" },
            { name: "Location", href: "/contact/location" },
            { name: "Right To Information", href: "/contact/right-to-information" },
        ],
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", dropdown: "about" },
        { name: "Staff", href: "/staff" },
        { name: "Faculty", href: "/faculties" },
        { name: "Education", dropdown: "education" },
        { name: "Notices", href: "/notices" },
        { name: "Contact", dropdown: "contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            {/* ================= NAVBAR ================= */}
            <div className="border-b border-[#0AA6C6]">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    
                    {/* LOGO */}
                    <Link to="/">
                        <img
                            src={image}
                            alt="JPNATC"
                            className={`transition-all duration-300 ${
                                isScrolled ? "h-12" : "h-16"
                            }`}
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() =>
                                    link.dropdown && setOpenDropdown(link.dropdown)
                                }
                            >
                                {link.dropdown ? (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenDropdown(
                                                openDropdown === link.dropdown
                                                    ? null
                                                    : link.dropdown
                                            )
                                        }
                                        className="flex items-center gap-1 px-4 py-2
                                                   font-medium text-gray-700 hover:text-[#0AA6C6]"
                                    >
                                        {link.name}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform ${
                                                openDropdown === link.dropdown
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="px-4 py-2 font-medium text-gray-700 hover:text-[#0AA6C6]"
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* DROPDOWN */}
                                {link.dropdown &&
                                    openDropdown === link.dropdown && (
                                        <div
                                            onMouseLeave={() =>
                                                setOpenDropdown(null)
                                            }
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                                                       min-w-55 bg-white rounded-xl shadow-xl
                                                       border border-gray-100 py-2 z-50"
                                        >
                                            {dropdowns[link.dropdown].map(
                                                (item, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={item.href}
                                                        onClick={() =>
                                                            setOpenDropdown(null)
                                                        }
                                                        className="block px-4 py-3 text-sm text-gray-700
                                                                   hover:bg-[#0AA6C6] hover:text-white transition"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    )}
                            </div>
                        ))}

                        <button className="ml-4 p-2 text-gray-600 hover:text-[#0AA6C6]">
                            <Search size={20} />
                        </button>

                        <Link
                            to="/patient-dashboard"
                            className="ml-4 px-5 py-2.5 bg-linear-to-r
                                       from-[#0B5DBB] to-[#0AA6C6]
                                       text-white rounded-lg font-medium"
                        >
                            Patient Dashboard
                        </Link>
                    </nav>

                    {/* MOBILE BUTTON */}
                    <button
                        className="lg:hidden"
                        onClick={() =>
                            setIsMobileMenuOpen(!isMobileMenuOpen)
                        }
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen ? "max-h-150" : "max-h-0"
                }`}
            >
                <div className="px-4 py-4 space-y-2">
                    {navLinks.map((link, index) => (
                        <div key={index}>
                            {link.dropdown ? (
                                <details>
                                    <summary className="flex justify-between px-4 py-3 font-medium cursor-pointer">
                                        {link.name}
                                        <ChevronDown size={18} />
                                    </summary>
                                    <div className="pl-4">
                                        {dropdowns[link.dropdown].map(
                                            (item, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={item.href}
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(false)
                                                    }
                                                    className="block px-4 py-2 text-sm"
                                                >
                                                    {item.name}
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </details>
                            ) : (
                                <Link
                                    to={link.href}
                                    onClick={() =>
                                        setIsMobileMenuOpen(false)
                                    }
                                    className="block px-4 py-3 font-medium"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}
