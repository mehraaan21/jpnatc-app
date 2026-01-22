import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoCards from "./components/InfoCards";
import Faculty from "./components/Faculty";
import Awareness from "./components/ Awareness";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import History from "./components/about/History";
import Mission from "./components/about/Mission";
import AimsAndObjective from "./components/about/AimsAndObjective";
import Facilities from "./components/about/Facilities";
import Heirarchy from "./components/about/Heirarchy";
import PhotoGallery from "./components/about/PhotoGallery";
import ITInnovation from "./components/about/ITInnovation";
import ExChief from "./components/about/ExChief";
import ContactUs from "./components/contact/ContactUs";
import Location from "./components/contact/Location";
import RightToInformation from "./components/contact/RightToInformation";
import Undergraduate from "./components/education/Undergraduate";
import Postgraduate from "./components/education/Postgraduate";
import Research from "./components/education/Research";
import ContinuingEducation from "./components/education/ContinuingEducation";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <InfoCards />
            <Faculty />
            <Awareness />
            <Feedback />
            <Footer />
          </>
        } />
        
        {/* About Pages */}
        <Route path="/about/history" element={
          <>
            <Navbar />
            <History />
            <Footer />
          </>
        } />
        
        <Route path="/about/mission" element={
          <>
            <Navbar />
            <Mission />
            <Footer />
          </>
        } />
        
        <Route path="/about/facilities" element={
          <>
            <Navbar />
            <Facilities />
            <Footer />
          </>
        } />
        
        <Route path="/about/aims-and-objective" element={
          <>
            <Navbar />
            <AimsAndObjective />
            <Footer />
          </>
        } />
        
        <Route path="/about/heirarchy" element={
          <>
            <Navbar />
            <Heirarchy />
            <Footer />
          </>
        } />
        
        <Route path="/about/photo-gallery" element={
          <>
            <Navbar />
            <PhotoGallery />
            <Footer />
          </>
        } />
        
        <Route path="/about/it-innovation" element={
          <>
            <Navbar />
            <ITInnovation />
            <Footer />
          </>
        } />
        
        <Route path="/about/ex-chief" element={
          <>
            <Navbar />
            <ExChief />
            <Footer />
          </>
        } />
        
        {/* Contact Pages */}
        <Route path="/contact/contact-us" element={
          <>
            <Navbar />
            <ContactUs />
            <Footer />
          </>
        } />
        
        <Route path="/contact/location" element={
          <>
            <Navbar />
            <Location />
            <Footer />
          </>
        } />
        
        <Route path="/contact/right-to-information" element={
          <>
            <Navbar />
            <RightToInformation />
            <Footer />
          </>
        } />
        
        {/* Education Pages */}
        <Route path="/education/undergraduate" element={
          <>
            <Navbar />
            <Undergraduate />
            <Footer />
          </>
        } />
        
        <Route path="/education/postgraduate" element={
          <>
            <Navbar />
            <Postgraduate />
            <Footer />
          </>
        } />
        
        <Route path="/education/research" element={
          <>
            <Navbar />
            <Research />
            <Footer />
          </>
        } />
        
        <Route path="/education/continuing-education" element={
          <>
            <Navbar />
            <ContinuingEducation />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}
