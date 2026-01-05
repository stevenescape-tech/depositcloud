import { ContactFormSection } from "./sections/ContactFormSection";
import { DepositInfoSection } from "./sections/DepositInfoSection";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ImplementationStepsSection } from "./sections/ImplementationStepsSection";
import { MainHeaderSection } from "./sections/MainHeaderSection";
import { PlatformDetailsSection } from "./sections/PlatformDetailsSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";

export const Tablet = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center relative bg-white overflow-hidden">
      <MainHeaderSection />
      <HeroBannerSection />
      <ProblemStatementSection />
      <PlatformDetailsSection />
      <FeaturesOverviewSection />
      <ImplementationStepsSection />
      <DepositInfoSection />
      <ContactFormSection />
    </div>
  );
};
