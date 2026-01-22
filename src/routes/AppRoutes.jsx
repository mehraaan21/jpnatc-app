import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import History from "../pages/about/History";
import Mission from "../pages/about/Mission";
import Facilities from "../pages/about/Facilities";
import Staff from "../pages/Staff";
import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/facilities" element={<Facilities />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}

    </Routes>
  );
}
