import { Card, CardContent } from "../../components/ui/card";
import { useScrollAnimation } from "../../../../lib/useScrollAnimation";

const featureCards = [
  {
    category: "For residents",
    title: "Clarity from move-in to move-out.",
    description:
      "Residents should not lose transparency just because they signed a lease years ago. We deliver clarity and consistency to deposits for every resident, regardless of move-in date.",
    features: [
      "Know what your deposit covers",
      "Transparent expectations at move-out",
      "Faster, more predictable refunds",
      "Documented charges with real visibility",
    ],
    footer: "No confusion. No guessing. No surprises.",
  },
  {
    category: "For owners & operators",
    title: "Every deposit. One system.",
    description:
      "Most platforms only work going forward. DepositCloud operates across your full portfolio, eliminating fragmented workflows and bringing deposits under consistent operational control.",
    features: [
      "Unified deposit management for all residents",
      "Standardized workflows portfolio-wide",
      "Reduced risk as regulations change",
      "Cleaner accounting and reconciliation",
    ],
    footer: "Built for real portfolios - not clean slates.",
  },
];

export const FeatureCardsSection = (): JSX.Element => {
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const cardRefs = [card1Ref, card2Ref];

  return (
    <div className="w-full flex flex-col gap-[21px]">
      {featureCards.map((card, index) => (
        <Card
          key={index}
          ref={cardRefs[index]}
          data-animate="true"
          style={{ animationDelay: `${index * 150}ms` } as React.CSSProperties}
          className="relative flex flex-col gap-6 p-7 bg-[rgba(0,0,0,0.3)] border border-solid border-[#51b0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] [backdrop-filter:blur(10px)] overflow-hidden"
        >
          <CardContent className="flex flex-col gap-6 p-0 w-full">
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#DFDFDF] text-xs tracking-[-0.31px] leading-6">
              {card.category}
            </p>

            <h3 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.44px] leading-[normal]">
              {card.title}
            </h3>

            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#DFDFDF] text-base tracking-[-0.31px] leading-6">
              {card.description}
            </p>

            <div className="flex flex-col gap-2.5 w-full">
              {card.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center gap-3 w-full"
                >
                  <img
                    className="w-4 h-4 flex-shrink-0"
                    alt="Check"
                    src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/check-icon.png"
                  />
                  <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-[14px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#DFDFDF] text-sm tracking-[-0.31px] leading-6">
              {card.footer}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
