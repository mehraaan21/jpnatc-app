import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  return (
    // min-h-screen + flex-col makes the footer push to the bottom
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      {/* flex-grow ensures this section takes up all available space */}
      <main className="grow pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}