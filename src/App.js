import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Why46Plus2 from "./components/WhySFOCRA";
import RPGProgression from "./components/RPGProgression";
import MindBodyQuests from "./components/MindBodyQuests";
import HabitTracking from "./components/HabitTracking";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUsSection from "./pages/Contact"; // ✅ Import Contact Page
import Navbar from "./components/Navbar"; // ✅ Import Navbar
import './responsive.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar always visible */}
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <Features />
              <Why46Plus2 />
              <RPGProgression />
              <MindBodyQuests />
              <HabitTracking />
              <Footer />
            </>
          } 
        />

        {/* Other Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact" element={<ContactUsSection />} /> {/* ✅ Contact Page Added */}
      </Routes>
    </Router>
  );
};

export default App;