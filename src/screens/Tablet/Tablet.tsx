import { AutopilotValueSection } from "./sections/AutopilotValueSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { DepositBenefitsSection } from "./sections/DepositBenefitsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
    import { ImplementationStepsSection } from "./sections/ImplementationStepsSection";
    import { Navigation } from "../../components/Navigation";
    import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { UnifiedPlatformSection } from "../../components/sections/UnifiedPlatformSection";

    export const Tablet = (): JSX.Element => {
      return (
        <div
          className="flex flex-col w-full items-center relative bg-white overflow-hidden"
          data-model-id="173:1043"
        >
          <Navigation />
          <HeroBannerSection />
      <ProblemStatementSection />
      <UnifiedPlatformSection />
      <AutopilotValueSection />
      <ImplementationStepsSection />
      <DepositBenefitsSection />
      <ContactFormSection />
    </div>
  );
};
