import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { PageLayout } from "./components/PageLayout";
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
    <PageLayout variant="home">
      <main id="main-content" role="main">
        <HeroSection />
        <ProblemStatementSection />
        <ValueDeliverySection />
        <UnifiedPlatformSection />
        <div className="h-[0.5px] bg-brand-blue w-full" />
        <ImplementationSection />
        <DepositBenefitsSection />
        <ContactFormSection />
      </main>
    </PageLayout>
  );
}

function App() {
  return (
    <Router>
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
