import { FeatureCard } from "../../../../components/ui/feature-card";
import { useScrollAnimation } from "../../../../lib/useScrollAnimation";

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

export const DepositBenefitsSection = (): JSX.Element => {
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();

  return (
    <section className="relative w-full py-14 xl:py-[85px] px-4">
      <div className="absolute inset-0 bg-[url(/img/section---deposit-platform.png)] bg-cover bg-center opacity-[0.68]" />
      <div className="absolute inset-0 bg-black opacity-75" />
      <div className="relative z-10 w-full flex flex-col items-center gap-[52px] px-[30px]">
        <header className="flex flex-col w-full items-center gap-[26px] translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="flex flex-col items-center gap-[26px] w-full">
            <div className="flex flex-col items-center w-full">
              <p className="font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                Built for every one involved
              </p>
            </div>

            <div className="flex flex-col items-center w-full">
              <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
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

        <div className="w-full h-[0.5px] bg-[#51b0ff] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]" />

        <div className="grid grid-cols-2 gap-[20px] w-full">
          {featureCards.map((card, index) => (
            <FeatureCard
              key={index}
              ref={index === 0 ? card1Ref : card2Ref}
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
