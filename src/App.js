import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Why46Plus2 from "./components/Why46Plus2";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUsSection from "./pages/Contact"; // ✅ Import Contact Page
import Navbar from "./components/Navbar"; // ✅ Import Navbar

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