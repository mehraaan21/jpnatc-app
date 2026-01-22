import { Search } from "lucide-react";
import image from "../assets/jpnatc_icon.png"

export default function Header() {
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
                    <div className="flex  text-gray-700 items-center gap-4">
                        <a href="#" className=" text-gray-700 ">
                            Old website version
                        </a>
                        <span>|</span>
                        <a href="#" className=" text-gray-700">
                            English
                        </a>
                        <a href="#" className=" text-gray-700">
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

                        <div className="flex items-center gap-1 cursor-pointer">
                            About Us <span className="text-xs">▾</span>
                        </div>

                        <a href="#">Staff</a>
                        <a href="#">Faculty</a>
                        <a href="#">Education</a>
                        <a href="#">Notices</a>

                        <Search size={20} className="cursor-pointer" />
                    </nav>

                    {/* ACTION BUTTONS */}
                    <div className="flex  items-center gap-4">
                        <button className="bg-[#0B5DBB] text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition font-medium">
                            Patient Dashboard
                        </button>

                        <button className="bg-[#0AA6C6] text-white px-6 py-3 rounded-full shadow-md hover:bg-cyan-600 transition font-medium">
                            OPD Schedule
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
