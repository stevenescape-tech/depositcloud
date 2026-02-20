import { FeatureCard } from "../../../components/ui/feature-card";

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

export const FeaturesOverviewSection = (): JSX.Element => {
  return (
    <section id="features" className="relative w-full bg-white">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Dsc"
        src="/img/features.png"
      />

      <div className="relative flex flex-col items-center gap-3.5 px-[37px] py-14">
        <p className="text-center [font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs tracking-[0] leading-7">
          Built for every community, affordable, student, conventional, and
          single family.
        </p>

        <h2 className="text-center [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-1.92px] leading-[normal]">
          A deposit platform for all residents,
          <br />
          not just new leases.
        </h2>

        <p className="text-center [font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm tracking-[0] leading-7">
          Supports every deposit type - cash deposits, installment plans, and
          security deposit alternatives.
        </p>

        <div className="w-full h-px bg-[url(/img/divider-2.svg)] bg-[100%_100%]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[21px] w-full mt-6">
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
      </div>
    </section>
  );
};
