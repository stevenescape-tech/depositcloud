import { ContactFormSection } from "./sections/ContactFormSection";
import { DepositBenefitsSection } from "./sections/DepositBenefitsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ImplementationProcessSection } from "./sections/ImplementationProcessSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { UnifiedPlatformSection } from "./sections/UnifiedPlatformSection";
import { ValueDeliverySection } from "./sections/ValueDeliverySection";

export const FullWidth = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full items-center relative bg-white overflow-hidden"
      data-model-id="37:486"
    >
      <NavigationSection />
      <main id="main-content">
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
