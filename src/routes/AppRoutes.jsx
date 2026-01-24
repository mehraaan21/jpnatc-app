import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import History from "../pages/about/History";
import Mission from "../pages/about/Mission";
import Facilities from "../pages/about/Facilities";
import Staff from "../pages/Staff";
import Contact from "../pages/Contact";
import Faculties from "../pages/faculty/Faculties";
import Ortho from "../pages/faculty/Ortho";
import Trauma from "../pages/faculty/Trauma";
import Lab from "../pages/faculty/Lab";
import Neuro from "../pages/faculty/Neuro";
import Radio from "../pages/faculty/Radio";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/contact" element={<Contact />} />

        {/* About Us Pages */}
        <Route path="/about/history" element={<History />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/facilities" element={<Facilities />} />

        {/* Faculty Pages */}
        <Route path="/faculties/ortho" element={<Ortho />} />
        <Route path="/faculties/trauma" element={<Trauma />} />
        <Route path="/faculties/lab" element={<Lab />} />
        <Route path="/faculties/neuro" element={<Neuro />} />
        <Route path="/faculties/radio" element={<Radio />} />
      </Route>

      {/* 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}

    </Routes>
  );
}
