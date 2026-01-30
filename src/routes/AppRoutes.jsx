import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Layouts & Global Components
import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../components/common/ScrollToTop";

// Critical Component (Static import for the landing page for faster LCP)
import Home from "../pages/home/Home";

/* ========== Lazy Loaded Pages (Code Splitting) ========== */

// About Us
const History = lazy(() => import("../pages/about/History"));
const Mission = lazy(() => import("../pages/about/Mission"));
const Facilities = lazy(() => import("../pages/about/Facilities"));
const AimsAndObjective = lazy(() => import("../pages/about/AimsAndObjective"));
const Hierarchy = lazy(() => import("../pages/about/Heirarchy")); 
const PhotoGallery = lazy(() => import("../pages/about/PhotoGallery"));
const ITInnovation = lazy(() => import("../pages/about/ITInnovation"));
const ExChief = lazy(() => import("../pages/about/ExChief"));

// Contact
const Contact = lazy(() => import("../pages/contact/Contact"));
const Location = lazy(() => import("../pages/contact/Location"));
const RightToInformation = lazy(() => import("../pages/contact/RightToInformation"));

// Education
const Undergraduate = lazy(() => import("../pages/education/Undergraduate"));
const Postgraduate = lazy(() => import("../pages/education/Postgraduate"));
const Research = lazy(() => import("../pages/education/Research"));
const ContinuingEducation = lazy(() => import("../pages/education/ContinuingEducation"));

// Other Pages
const FacultyList = lazy(() => import("../pages/faculty/Faculties")); 
const StaffMembers = lazy(() => import("../pages/staff/StaffMembers"));
const Departments = lazy(() => import("../pages/staff/Departments"));
const Notices = lazy(() => import("../pages/notice/Notice"));
const PatientDashboard = lazy(() => import("../pages/patient-dash/PatientDashboard"));
// const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      {/* Suspense catches the 'loading' state while the browser fetches the page chunk */}
      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <p>Loading...</p> 
        </div>
      }>
        <Routes>
          {/* ===== Website with Layout ===== */}
          <Route element={<MainLayout />}>
            
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About */}
            <Route path="/about/history" element={<History />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/facilities" element={<Facilities />} />
            <Route path="/about/aims-and-objective" element={<AimsAndObjective />} />
            <Route path="/about/heirarchy" element={<Hierarchy />} />
            <Route path="/about/photo-gallery" element={<PhotoGallery />} />
            <Route path="/about/it-innovation" element={<ITInnovation />} />
            <Route path="/about/ex-chief" element={<ExChief />} />

            {/* Education */}
            <Route path="/education/undergraduate" element={<Undergraduate />} />
            <Route path="/education/postgraduate" element={<Postgraduate />} />
            <Route path="/education/research" element={<Research />} />
            <Route path="/education/continuing-education" element={<ContinuingEducation />} />

            {/* Faculty & Staff */}
            <Route path="/faculties" element={<FacultyList />} />
            <Route path="/staff" element={<StaffMembers />} />
            <Route path="/staff/departments" element={<Departments />} />

            {/* Notices */}
            <Route path="/notices" element={<Notices />} />

            {/* Contact */}
            <Route path="/contact/contact-us" element={<Contact />} />
            <Route path="/contact/location" element={<Location />} />
            <Route path="/contact/right-to-information" element={<RightToInformation />} />

            {/* Patient Dashboard */}
            <Route path="/patient-dashboard" element={<PatientDashboard />} />

          </Route>

          {/* 404 Route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}