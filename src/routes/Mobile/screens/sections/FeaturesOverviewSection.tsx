import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

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
  return (
    <section className="w-full grid grid-cols-1 gap-[21px]">
      {featureCards.map((card, index) => (
        <Card
          key={index}
          className="bg-[#00000000] border border-solid border-[#51b0ff] shadow-dark-card backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]"
        >
          <CardContent className="flex flex-col items-center gap-[21px] p-7">
            <div className="flex items-center justify-center self-stretch h-[25px] [font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-xs tracking-[-0.31px] leading-6 whitespace-nowrap">
              {card.subtitle}
            </div>

            <div className="flex flex-col items-start self-stretch w-full">
              <h3 className="flex items-center justify-center self-stretch [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[22px] tracking-[-1.32px] leading-[normal]">
                {card.title}
              </h3>
            </div>

            <div className="flex flex-col items-start self-stretch w-full">
              <p className="text-[#dfdfdf] tracking-[-0.31px] leading-6 flex items-center justify-center self-stretch [font-family:'Courier_Prime',Helvetica] font-normal text-xs">
                {card.description}
              </p>
            </div>

            <div className="gap-2.5 self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
              {card.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center gap-3 self-stretch w-full"
                >
                  <CheckIcon className="flex-[0_0_auto] w-4 h-4 text-white" />
                  <div className="flex items-center justify-center flex-1 [font-family:'Courier_Prime',Helvetica] font-normal text-white text-[10px] tracking-[-0.31px] leading-[14px]">
                    {feature}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-center self-stretch [font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-[10px] tracking-[-0.31px] leading-6 whitespace-nowrap">
                {card.footer}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
