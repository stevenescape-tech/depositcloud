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
      <div className="w-full bg-[url(/img/divider.svg)] h-px bg-[100%_100%]" />

      <div className="flex flex-col items-center justify-center gap-9 py-[37px] px-[38px] max-w-[375px] mx-auto">
        <header className="flex flex-col items-center gap-[26px] w-full">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[-1.68px] leading-[normal]">
            The way deposits are managed today doesn&apos;t work.
          </h2>

          <p className="flex items-center justify-center h-[100px] [font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-7">
            The story of deposits has not changed in years. Paperwork
            everywhere, messy workflows, slow refunds, and accounting that never
            quite reconciles.
          </p>
        </header>

        <div className="flex flex-col gap-[21px] w-full">
          {problemCards.map((card, index) => (
            <Card
              key={index}
              className="bg-[#00000033] border-[0.5px] border-solid border-[#fffefe] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-header-card"
            >
              <CardContent className="flex flex-col items-start gap-4 p-[33px]">
                <img className="w-6 h-6" alt={card.title} src={card.icon} />

                <h3 className="font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
                  {card.title}
                </h3>

                <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs tracking-[-0.31px] leading-6">
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
