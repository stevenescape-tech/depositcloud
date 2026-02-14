import { ContactFormSection } from "./sections/ContactFormSection";
import { DepositBenefitsSection } from "./sections/DepositBenefitsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ImplementationProcessSection } from "./sections/ImplementationProcessSection";
import { Navigation } from "../../components/Navigation";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { UnifiedPlatformSection } from "../../components/sections/UnifiedPlatformSection";
import { ValueDeliverySection } from "./sections/ValueDeliverySection";

export const FullWidth = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-screen items-center relative bg-white overflow-x-hidden"
      data-model-id="37:486"
    >
      <Navigation variant="home" />
      <main id="main-content" role="main">
        <HeroBannerSection />
        <ProblemStatementSection />
        <UnifiedPlatformSection />
        <ValueDeliverySection />
        <ImplementationProcessSection />
        <DepositBenefitsSection />
        <ContactFormSection />
      </main>
    </div>
  );
};
