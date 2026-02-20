import { Card, CardContent } from "../components/ui/card";
import { useScrollAnimation } from "../lib/useScrollAnimation";
import { XCircle, AlertCircle, AlertTriangle } from "lucide-react";

const problemCards = [
  {
    icon: XCircle,
    title: "Regulatory Drift",
    description:
      "A shifting compliance landscape creates chaos and legal risk when compliance aspects are not met, both in prospects and move-out.",
  },
  {
    icon: AlertCircle,
    title: "Refund Bottleneck",
    description:
      "At move-out, teams waste time chasing renter info and defending charges, slowing refunds.",
  },
  {
    icon: AlertTriangle,
    title: "High upfront costs",
    description:
      "A shifting compliance landscape increases legal risk when deposit rules aren't met at move-in or move-out.",
  },
];

export const ProblemStatementSection = (): JSX.Element => {
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const card3Ref = useScrollAnimation();
  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section role="region" aria-labelledby="problem-heading" className="relative w-full bg-[#161616] overflow-hidden">
      <div className="flex flex-col w-full xl:max-w-[1112px] mx-auto items-center justify-center gap-[63px] px-6 py-[44px] md:px-[30px] md:py-[88px] xl:px-4 xl:py-[85px]">
        <div className="flex flex-col items-center gap-[13px] w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          <h2 id="problem-heading" className="w-full font-h2 font-[number:var(--h2-font-weight)] text-[28px] tracking-[-1.68px] md:text-[length:var(--h2-font-size)] md:tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] text-white text-center [font-style:var(--h2-font-style)]">
            The way deposits are managed today doesn&apos;t work.
          </h2>

          <p className="flex items-center justify-center w-full max-w-[840px] font-body font-[number:var(--body-font-weight)] text-white text-[14px] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            The story of deposits has not changed in years. Paperwork
            everywhere, messy workflows, slow refunds, and accounting that never
            quite reconciles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[21px] w-full">
          {problemCards.map((card, index) => (
            <Card
              key={index}
              ref={cardRefs[index]}
              data-animate="true"
              className="bg-transparent border border-white h-full rounded-none"
              style={
                {
                  animationDelay: `${index * 150}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="flex flex-col items-start gap-6 p-6 md:p-[33px] xl:p-12 h-full">
                <card.icon className="w-8 h-8 text-[#51b0ff]" strokeWidth={1.5} />

                <h3 className="font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
                  {card.title}
                </h3>

                <p className="font-caption font-[number:var(--caption-font-weight)] text-white text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)] text-left">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-[#51b0ff]" />
    </section>
  );
};
