import { FeatureCard } from "../../../../components/ui/feature-card";
import { useScrollAnimation } from "../../../../lib/useScrollAnimation";

const residentFeatures = [
  "Know what your deposit covers",
  "Transparent expectations at move-out",
  "Faster, more predictable refunds",
  "Documented charges with real visibility",
];

const operatorFeatures = [
  "Unified deposit management for all residents",
  "Standardized workflows portfolio-wide",
  "Reduced risk as regulations change",
  "Cleaner accounting and reconciliation",
];

export const ValueDeliverySection = (): JSX.Element => {
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();

  return (
    <section id="features" role="region" aria-labelledby="features-heading" className="relative w-screen flex items-center justify-center px-4 py-12 xl:py-[85px]">
      <div className="absolute inset-0 bg-[url(/img/features.png)] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/[0.43]" />
      <div className="relative z-10 flex flex-col w-full max-w-[1112px] items-center gap-[26px]">
        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] text-center font-body font-[number:var(--body-font-weight)] text-white text-[14px] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
          Built for every community, affordable, student, conventional, and
          single family.
        </p>

        <h2 id="features-heading" className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-center max-w-[942px] font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
          A deposit platform for all residents,
          <br />
          not just new leases.
        </h2>

        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] text-center max-w-[751.77px] font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
          Supports every deposit type - cash deposits, installment plans, and
          security deposit alternatives.
        </p>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-full h-[0.5px] bg-[#51b0ff] my-6" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[21px] w-full">
          <FeatureCard
            ref={card1Ref}
            category="For residents"
            title="Clarity from move-in to move-out."
            description="Residents should not lose transparency just because they signed a lease years ago. We deliver clarity and consistency to deposits for every resident, regardless of move-in date."
            features={residentFeatures}
            footer="No confusion. No guessing. No surprises."
          />

          <FeatureCard
            ref={card2Ref}
            category="For owners & operators"
            title="Every deposit. One system."
            description="Most platforms only work going forward. DepositCloud operates across your full portfolio, eliminating fragmented workflows and bringing deposits under consistent operational control."
            features={operatorFeatures}
            footer="Built for real portfolios - not clean slates."
            animationDelay={150}
          />
        </div>
      </div>
    </section>
  );
};
