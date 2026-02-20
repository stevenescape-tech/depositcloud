    import { Navigation } from "../../components/Navigation";
import { HeroSection } from "./sections/HeroSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { UnifiedPlatformSection } from "../../components/sections/UnifiedPlatformSection";
import { FeatureCardsSection } from "./sections/FeatureCardsSection";
import { ImplementationDetailsSection } from "./sections/ImplementationDetailsSection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection";
import { ContactFormSection } from "./sections/ContactFormSection";

export const Mobile44 = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative bg-white overflow-hidden w-full">
      <Navigation variant="home" />
          
          <HeroSection />

      <ProblemStatementSection />

      <UnifiedPlatformSection />

      <section id="features" className="relative w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          src="/img/features.png"
        />
        <div className="absolute inset-0 bg-black/[0.43]" />

        <div className="relative z-10 flex flex-col items-center gap-[29px] px-6 py-7 w-full">
          <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] w-full">
            Built for every community, affordable, student, conventional,
            and single family.
          </p>

          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[-1.68px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-full">
            A deposit platform for all residents,
            <br />
            not just new leases.
          </h2>

          <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full">
            Supports every deposit type - cash deposits, installment
            plans, and security deposit alternatives.
          </p>

          <div className="w-full bg-[url(/img/divider-5.svg)] h-px bg-[100%_100%] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]" />

          <FeatureCardsSection />
        </div>
      </section>

      <ImplementationDetailsSection />

      <section className="flex flex-col w-full items-center gap-3 pt-7 pb-[22px] px-6 relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),url(/img/section---deposit-platform.png)] bg-center bg-cover">
        <div className="flex flex-col items-center gap-[29px] w-full">
          <HeroIntroSection />
          <FeaturesOverviewSection />
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
};
