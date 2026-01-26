import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../components/common/ScrollToTop";
import Home from "../pages/Home";

/* ========== About Us Pages ========== */
import History from "../pages/about/History";
import Mission from "../pages/about/Mission";
import Facilities from "../pages/about/Facilities";
import AimsAndObjective from "../pages/about/AimsAndObjective";
import Heirarchy from "../pages/about/Heirarchy";
import PhotoGallery from "../pages/about/PhotoGallery";
import ITInnovation from "../pages/about/ITInnovation";
import ExChief from "../pages/about/ExChief";

/* ========== Contact Pages ========== */
import Contact from "../pages/contact/Contact";
import Location from "../pages/contact/Location";
import RightToInformation from "../pages/contact/RightToInformation";

/* ========== Education Pages ========== */
import Undergraduate from "../pages/education/Undergraduate";
import Postgraduate from "../pages/education/Postgraduate";
import Research from "../pages/education/Research";
import ContinuingEducation from "../pages/education/ContinuingEducation";

/* ========== Other Pages ========== */
import Staff from "../pages/Staff";
import Faculties from "../pages/Faculties";
import Notices from "../pages/Notice";
// import PatientDashboard from "../pages/patient/PatientDashboard";

// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>

        {/* ===== Public Website with Layout ===== */}
        <Route element={<MainLayout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about/history" element={<History />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/facilities" element={<Facilities />} />
          <Route path="/about/aims-and-objective" element={<AimsAndObjective />} />
          <Route path="/about/heirarchy" element={<Heirarchy />} />
          <Route path="/about/photo-gallery" element={<PhotoGallery />} />
          <Route path="/about/it-innovation" element={<ITInnovation />} />
          <Route path="/about/ex-chief" element={<ExChief />} />

          {/* Education */}
          <Route path="/education/undergraduate" element={<Undergraduate />} />
          <Route path="/education/postgraduate" element={<Postgraduate />} />
          <Route path="/education/research" element={<Research />} />
          <Route path="/education/continuing-education" element={<ContinuingEducation />} />

          {/* Faculty & Staff */}
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/staff" element={<Staff />} />

          {/* Notices */}
          <Route path="/notices" element={<Notices />} />

          {/* Contact */}
          <Route path="/contact/contact-us" element={<Contact />} />
          <Route path="/contact/location" element={<Location />} />
          <Route path="/contact/right-to-information" element={<RightToInformation />} />

          {/* Patient Dashboard */}
          {/* <Route path="/patient-dashboard" element={<PatientDashboard />} /> */}

        </Route>

        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </>
  );
}
