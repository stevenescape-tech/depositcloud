import { Card, CardContent } from "../../components/ui/card";
import { useScrollAnimation } from "../../../../lib/useScrollAnimation";

const featureCards = [
  {
    subtitle: "Operational foundation",
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
    subtitle: "Past, present, and future — handled",
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

export const FeaturesOverviewSection = (): JSX.Element => {
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const cardRefs = [card1Ref, card2Ref];

  return (
    <section className="w-full grid grid-cols-1 gap-[21px]">
      {featureCards.map((card, index) => (
        <Card
          key={index}
          ref={cardRefs[index]}
          data-animate="true"
          style={{ animationDelay: `${index * 150}ms` } as React.CSSProperties}
          className="relative flex flex-col gap-6 p-7 bg-[rgba(0,0,0,0.3)] border border-[#51b0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] [backdrop-filter:blur(10px)] overflow-hidden"
        >
          <CardContent className="flex flex-col gap-6 p-0">
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#DFDFDF] text-sm tracking-[-0.31px] leading-6">
              {card.subtitle}
            </p>

            <h3 className="font-h5 font-[number:var(--h5-font-weight)] text-white text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
              {card.title}
            </h3>

            <div className="pt-2">
              <p className="text-[#DFDFDF] text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] font-caption font-[number:var(--caption-font-weight)] [font-style:var(--caption-font-style)]">
                {card.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              {card.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <img
                    className="w-6 h-6 flex-shrink-0"
                    alt="Check"
                    src="https://c.animaapp.com/mjyhvu36aqUy0x/img/check-icon.png"
                  />
                  <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-6">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#DFDFDF] text-sm tracking-[-0.31px] leading-6">
                {card.footer}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
