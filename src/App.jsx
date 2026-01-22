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
import Facilities from "./components/about/Facilities";

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
      </Routes>
    </Router>
  );
}
