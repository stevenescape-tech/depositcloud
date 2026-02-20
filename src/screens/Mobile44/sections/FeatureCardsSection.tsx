    import { Card, CardContent } from "../../../components/ui/card";
import { useScrollAnimation } from "../../../lib/useScrollAnimation";


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
                  <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18C13.9672 18 18 13.9672 18 9C18 4.03276 13.9672 0 9 0C4.03276 0 0 4.03276 0 9C0 13.9672 4.03276 18 9 18ZM12.9727 7.34766L8.47266 11.8477C8.14219 12.1781 7.60781 12.1781 7.28086 11.8477L5.03086 9.59766C4.70039 9.26719 4.70039 8.73281 5.03086 8.40586C5.36133 8.07539 5.89570 8.07539 6.22266 8.40586L7.875 10.0582L11.7773 6.15234C12.1078 5.82188 12.6422 5.82188 12.9691 6.15234C13.2996 6.48281 13.2996 7.01719 12.9691 7.34414L12.9727 7.34766Z" fill="#51B1FF"/></svg>
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
