import { FeatureCard } from "../../../../components/ui/feature-card";

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

export const FeatureCardsSection = (): JSX.Element => {
  return (
    <div className="w-full grid grid-cols-1 gap-[21px]">
      <FeatureCard
        category="For residents"
        title="Clarity from move-in to move-out."
        description="Residents should not lose transparency just because they signed a lease years ago. We deliver clarity and consistency to deposits for every resident, regardless of move-in date."
        features={residentFeatures}
        footer="No confusion. No guessing. No surprises."
      />

      <FeatureCard
        category="For owners & operators"
        title="Every deposit. One system."
        description="Most platforms only work going forward. DepositCloud operates across your full portfolio, eliminating fragmented workflows and bringing deposits under consistent operational control."
        features={operatorFeatures}
        footer="Built for real portfolios - not clean slates."
      />
    </div>
  );
};
