import { FeatureCard } from "../../../components/ui/feature-card";

const featureCards = [
  {
    category: "Operational foundation",
    title: "Integrated. Automated. Always on.",
    description:
      "DepositCloud integrates into your operating stack, standardizing deposits across the portfolio without manual work.",
    features: [
      "Integrates with major PMS platforms",
      "Prepaid, installment, and deposit alternatives",
      "Lower upfront cost without changing workflows",
      "Transparent reporting across deposit types",
    ],
    footer: "No confusion. No guessing. No surprises.",
  },
  {
    category: "Past, present, and future — handled",
    title: "One system across the lifecycle.",
    description:
      "DepositCloud removes fragmentation by taking responsibility for deposits at every stage — not just going forward.",
    features: [
      "Unified deposit management for all residents",
      "Standardized workflows portfolio-wide",
      "Reduced risk as regulations change",
      "Cleaner accounting and reconciliation",
    ],
    footer: "Built for real portfolios - not clean slates.",
  },
];

export const DepositInfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-3 px-0 py-14 w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),url(/img/section---deposit-platform.png)] bg-center bg-cover">
      <div className="inline-flex flex-col items-start gap-3">
        <div className="flex flex-col w-[694px] items-center gap-7">
          <div className="flex flex-col max-w-screen-md items-center gap-6 w-full">
            <div className="items-start gap-3.5 flex flex-col w-full">
              <div className="items-center w-full flex flex-col">
                <p className="flex items-center justify-center w-[408.5px] [font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-7">
                  Built for every one involved
                </p>
              </div>

              <div className="flex flex-col items-center w-full">
                <h2 className="flex items-center justify-center w-[694px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[-1.92px] leading-[normal]">
                  From friction to flow.
                </h2>
              </div>
            </div>

            <div className="items-center w-full flex flex-col">
              <p className="flex items-center justify-center w-[694px] [font-family:'Courier_Prime',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-7">
                A deposit operation that runs continuously — across systems,
                residents, and time.
              </p>
            </div>
          </div>

          <div className="w-[695px] h-px bg-[url(/img/divider-2.svg)] bg-[100%_100%]" />
        </div>

        <div className="grid grid-cols-2 gap-[21px] w-[694px] mt-3">
          {featureCards.map((card, index) => (
            <FeatureCard
              key={index}
              category={card.category}
              title={card.title}
              description={card.description}
              features={card.features}
              footer={card.footer}
              animationDelay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
