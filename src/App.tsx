import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { UnifiedPlatformSection } from "./components/sections/UnifiedPlatformSection";
import { ValueDeliverySection } from "./sections/ValueDeliverySection";
import { ImplementationSection } from "./sections/ImplementationSection";
import { DepositBenefitsSection } from "./sections/DepositBenefitsSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { TermsOfService } from "./routes/TermsOfService/screens/TermsOfService";
import { PrivacyPolicy } from "./routes/PrivacyPolicy/screens/PrivacyPolicy";
import { LegalNotices } from "./routes/LegalNotices/screens/LegalNotices";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
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

  return (
    <div className="flex flex-col w-full items-center relative bg-white overflow-x-hidden">
      <Navigation variant="home" />
      <main id="main-content" role="main">
        <HeroSection />
        <ProblemStatementSection />
        <UnifiedPlatformSection />
        <ValueDeliverySection />
        <ImplementationSection />
        <DepositBenefitsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
