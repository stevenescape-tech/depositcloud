import { CheckIcon } from "lucide-react";
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
                  <CheckIcon className="relative flex-[0_0_auto] w-4 h-4 text-white" />
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
