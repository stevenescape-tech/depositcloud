import { FeatureCard } from "../components/ui/feature-card";
import { useScrollAnimation } from "../lib/useScrollAnimation";

const leftCardFeatures = [
  "Integrates with major PMS platforms",
  "Prepaid, installment, and deposit alternatives",
  "Lower upfront cost without changing workflows",
  "Transparent reporting across deposit types",
];

const rightCardFeatures = [
  "Future residents: Required enrollment",
  "Current residents: Portfolio migration",
  "Past residents: Escheatment handled",
  "Hundreds of hours saved across portfolios",
];

export const DepositBenefitsSection = (): JSX.Element => {
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();

  return (
    <section role="region" aria-labelledby="benefits-heading" className="relative w-full px-6 py-7 md:px-[30px] md:py-14 xl:px-4 xl:py-[85px] bg-[url(/img/section---deposit-platform.jpg)] bg-cover bg-center bg-scroll md:bg-fixed">
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative z-10 xl:max-w-[1112px] mx-auto flex flex-col items-center gap-[29px] md:gap-[52px]">
        <header className="flex flex-col max-w-[768px] w-full items-center gap-[26px] translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="flex flex-col items-center gap-[26px] w-full">
            <div className="flex flex-col items-center w-full">
              <p className="font-body font-[number:var(--body-font-weight)] text-white text-[14px] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                Built for everyone involved
              </p>
            </div>

            <div className="flex flex-col items-center w-full">
              <h2 id="benefits-heading" className="font-h2 font-[number:var(--h2-font-weight)] text-white text-[28px] md:text-[32px] xl:text-[length:var(--h2-font-size)] text-center tracking-[-1.68px] md:tracking-[-1.92px] xl:tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                From friction to flow.
              </h2>

              <div className="flex flex-col items-center w-full mt-6">
                <p className="max-w-[751.77px] font-body font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] text-white text-center [font-style:var(--body-font-style)]">
                  A deposit operation that runs continuously — across systems,
                  residents, and time.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="w-full h-[0.5px] bg-brand-blue translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[21px] w-full">
          <FeatureCard
            ref={card1Ref}
            category="Operational foundation"
            title="Integrated. Automated. Always on."
            description="DepositCloud integrates into your operating stack, standardizing deposits across the portfolio without manual work."
            features={leftCardFeatures}
            footer="No confusion. No guessing. No surprises."
          />

          <FeatureCard
            ref={card2Ref}
            category="Past, present, and future — handled"
            title="One system across the lifecycle."
            description="DepositCloud removes fragmentation by taking responsibility for deposits at every stage — not just going forward."
            features={rightCardFeatures}
            footer="Built for scale. Proven in real portfolios."
            animationDelay={150}
          />
        </div>
      </div>
    </section>
  );
};
