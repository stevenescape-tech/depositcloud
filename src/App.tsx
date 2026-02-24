import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import { PageLayout } from "./components/PageLayout";
import { HeroSection } from "./sections/HeroSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { UnifiedPlatformSection } from "./components/sections/UnifiedPlatformSection";
import { ValueDeliverySection } from "./sections/ValueDeliverySection";
import { ImplementationSection } from "./sections/ImplementationSection";
import { DepositBenefitsSection } from "./sections/DepositBenefitsSection";
import { WhoWeAreSection } from "./sections/WhoWeAreSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { AboutHeroSection } from "./sections/about/AboutHeroSection";
import { MeetExecutiveTeamSection } from "./sections/about/MeetExecutiveTeamSection";
import { CoreValuesSection } from "./sections/about/CoreValuesSection";
import { AdvisoryCounselSection } from "./sections/about/AdvisoryCounselSection";
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
        <UnifiedPlatformSection />
        <div className="h-[0.5px] bg-brand-blue w-full" />
        <ImplementationSection />
        <ValueDeliverySection />
        <DepositBenefitsSection />
        <WhoWeAreSection />
        <ContactFormSection />
      </main>
    </PageLayout>
  );
}

function AboutPage() {
  return (
    <PageLayout variant="home">
      <main id="main-content" role="main">
        <AboutHeroSection />
        <MeetExecutiveTeamSection />
        <CoreValuesSection />
        <AdvisoryCounselSection />
        <ContactFormSection />
      </main>
    </PageLayout>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      window.scrollTo(0, 0);
      prevPathname.current = pathname;
    }
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
