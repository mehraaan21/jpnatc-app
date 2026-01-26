import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
    <div className="pt-20">
      <Navbar />
    </div>
      
      <Outlet />
      <Footer />
    </>
  );
}
