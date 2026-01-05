import { AutopilotValueSection } from "./sections/AutopilotValueSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { DepositBenefitsSection } from "./sections/DepositBenefitsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ImplementationStepsSection } from "./sections/ImplementationStepsSection";
import { MainNavigationSection } from "./sections/MainNavigationSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { PlatformDetailsSection } from "./sections/PlatformDetailsSection";

export const Tablet = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full items-center relative bg-white overflow-hidden"
      data-model-id="173:1043"
    >
      <MainNavigationSection />
      <HeroBannerSection />
      <ProblemStatementSection />
      <PlatformDetailsSection />
      <AutopilotValueSection />
      <ImplementationStepsSection />
      <DepositBenefitsSection />
      <ContactFormSection />
    </div>
  );
};
