
import { Card, CardContent } from "../../components/ui/card";

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
  return (
    <div className="w-full grid grid-cols-1 gap-[21px]">
      {featureCards.map((card, index) => (
        <Card
          key={index}
          className="w-full h-fit bg-[#00000000] border border-solid border-[#51b0ff] shadow-dark-card backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]"
        >
          <CardContent className="flex flex-col items-center gap-4 p-7">
            <div className="relative flex items-center justify-center self-stretch h-[25px] [font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-xs tracking-[-0.31px] leading-6 whitespace-nowrap">
              {card.category}
            </div>

            <div className="flex flex-col h-[49px] items-start relative self-stretch w-full">
              <div className="relative flex items-center justify-center self-stretch h-[53px] mt-[-1.00px] mb-[-3.00px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.44px] leading-[normal]">
                {card.title}
              </div>
            </div>

            <div className="h-[159px] items-start pt-[13px] pb-0 px-0 relative self-stretch w-full flex flex-col">
              <div className="relative flex items-center justify-center self-stretch h-[127px] mt-[-1.00px] [font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-xs tracking-[-0.31px] leading-6">
                {card.description}
              </div>
            </div>

            <div className="gap-2.5 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
              {card.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="h-6 self-stretch w-full flex items-center gap-3 relative"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18C13.9672 18 18 13.9672 18 9C18 4.03276 13.9672 0 9 0C4.03276 0 0 4.03276 0 9C0 13.9672 4.03276 18 9 18ZM12.9727 7.34766L8.47266 11.8477C8.14219 12.1781 7.60781 12.1781 7.28086 11.8477L5.03086 9.59766C4.70039 9.26719 4.70039 8.73281 5.03086 8.40586C5.36133 8.07539 5.89570 8.07539 6.22266 8.40586L7.875 10.0582L11.7773 6.15234C12.1078 5.82188 12.6422 5.82188 12.9691 6.15234C13.2996 6.48281 13.2996 7.01719 12.9691 7.34414L12.9727 7.34766Z" fill="#51B1FF"/></svg>
                  <div className="relative flex items-center justify-center flex-1 h-auto [font-family:'Courier_Prime',Helvetica] font-normal text-white text-[11px] tracking-[-0.31px] leading-[14px]">
                    {feature}
                  </div>
                </div>
              ))}
            </div>

            <div className="items-start relative self-stretch w-full flex-[0_0_auto] flex flex-col">
              <div className="relative flex items-center justify-center self-stretch h-5 mt-[-1.00px] [font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-[10px] tracking-[-0.31px] leading-6 whitespace-nowrap">
                {card.footer}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
