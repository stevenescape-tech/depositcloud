import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FullWidth } from "./screens/FullWidth";
import { Tablet } from "./routes/Tablet/screens/Tablet";
import { Mobile44 } from "./screens/Mobile44";
import { TermsOfService } from "./routes/TermsOfService/screens/TermsOfService";
import { PrivacyPolicy } from "./routes/PrivacyPolicy/screens/PrivacyPolicy";
import { LegalNotices } from "./routes/LegalNotices/screens/LegalNotices";

function ResponsiveHome() {
  const location = useLocation();
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    // Handle hash navigation on mount and location change
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 900) {
        setScreenSize('mobile');
      } else if (width < 1280) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (screenSize === 'mobile') {
    return <Mobile44 />;
  } else if (screenSize === 'tablet') {
    return <Tablet />;
  } else {
    return <FullWidth />;
  }
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResponsiveHome />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
      </Routes>
    </Router>
  );
}

export default App;
