import { Card, CardContent } from "../../components/ui/card";

const problemCards = [
  {
    icon: "/img/frame-47.svg",
    title: "Regulatory Drift",
    description:
      "A shifting compliance landscape creates chaos and legal risk when compliance aspects are not met, both in prospects and move-out.",
  },
  {
    icon: "/img/frame-50.svg",
    title: "Refund Bottleneck",
    description:
      "At move-out, teams waste time chasing renter info and defending charges, slowing refunds.",
  },
  {
    icon: "/img/frame-49.svg",
    title: "High upfront costs",
    description:
      "A shifting compliance landscape increases legal risk when deposit rules aren't met at move-in or move-out.",
  },
];

export const ProblemStatementSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#161616] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-[#51b0ff]" />

      <div className="flex flex-col items-center justify-center gap-[63px] px-6 py-[44px] max-w-[375px] mx-auto">
        <div className="flex flex-col items-center gap-[13px] w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          <h2 className="w-full font-h2 font-[number:var(--h2-font-weight)] text-white text-[28px] text-center tracking-[-1.68px] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            The way deposits are managed today doesn&apos;t work.
          </h2>

          <p className="flex items-center justify-center w-full font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            The story of deposits has not changed in years. Paperwork
            everywhere, messy workflows, slow refunds, and accounting that never
            quite reconciles.
          </p>
        </div>

        <div className="flex flex-col gap-[21px] w-full">
          {problemCards.map((card, index) => (
            <Card
              key={index}
              className="bg-[#00000033] border-[0.5px] border-solid border-[#fffefe]"
            >
              <CardContent className="flex flex-col items-start gap-4 p-[33px]">
                <img className="w-6 h-6" alt={card.title} src={card.icon} />

                <h3 className="font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
                  {card.title}
                </h3>

                <p className="font-caption font-[number:var(--caption-font-weight)] text-white text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
