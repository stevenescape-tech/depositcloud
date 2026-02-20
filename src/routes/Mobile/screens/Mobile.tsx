import { ContactFormSection } from "./sections/ContactFormSection";
import { FeatureCardsSection } from "./sections/FeatureCardsSection";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
import { ImplementationDetailsSection } from "./sections/ImplementationDetailsSection";
import { PlatformCapabilitiesSection } from "./sections/PlatformCapabilitiesSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";

export const Mobile = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative bg-white overflow-hidden w-full">
      <header className="relative w-full z-10">
        <img
          className="w-full h-10"
          alt="Header"
          src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/header.png"
        />
      </header>

      <section className="relative w-full">
        <img
          className="w-full h-auto"
          alt="Hero"
          src="/img/hero.png"
        />
      </section>

      <ProblemStatementSection />

      <PlatformCapabilitiesSection />

      <section className="flex flex-col items-center justify-center gap-2.5 relative w-full bg-white">
        <div className="relative w-full">
          <img
            className="relative w-full h-auto"
            alt="Dsc"
            src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/features.png"
          />

          <div className="flex flex-col w-[303px] items-center gap-[29px] absolute top-14 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-start gap-[29px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-7">
                Built for every community, affordable, student, conventional,
                and single family.
              </div>

              <div className="flex flex-col items-center flex-[0_0_auto] relative self-stretch w-full">
                <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[-1.92px] leading-[normal]">
                  A deposit platform for all residents,
                  <br />
                  not just new leases.
                </div>
              </div>

              <div className="items-center relative self-stretch w-full flex-[0_0_auto] flex flex-col">
                <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-7">
                  Supports every deposit type - cash deposits, installment
                  plans, and security deposit alternatives.
                </div>
              </div>

              <div className="relative self-stretch w-full bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/divider-5.svg)] h-px bg-[100%_100%]" />

              <FeatureCardsSection />
            </div>
          </div>
        </div>
      </section>

      <ImplementationDetailsSection />

      <section className="flex flex-col w-full items-center gap-3 pt-14 pb-[45px] px-0 relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/section---deposit-platform.png)] bg-center bg-cover">
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="flex flex-col w-[301px] items-center gap-[29px] relative">
            <HeroIntroSection />
            <FeaturesOverviewSection />
          </div>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
};
