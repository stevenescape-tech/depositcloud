import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { useScrollAnimation } from "../../../../lib/useScrollAnimation";

const featureCards = [
  {
    subtitle: "Operational foundation",
    title: "Integrated. Automated. Always on.",
    description:
      "DepositCloud integrates into your operating stack, standardizing deposits across the portfolio without manual work.",
    bullets: [
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
    bullets: [
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
      <div className="absolute inset-0 bg-[url(https://c.animaapp.com/mk4ukvevAaIUXO/img/section---deposit-platform.png)] bg-cover bg-center opacity-[0.68]" />
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
            <Card
              key={index}
              ref={index === 0 ? card1Ref : card2Ref}
              data-animate="true"
              className="relative flex flex-col gap-4 p-12 bg-[rgba(0,0,0,0.3)] border border-[#51b0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] [backdrop-filter:blur(10px)] overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` } as React.CSSProperties}
            >
              <CardContent className="flex flex-col gap-4 p-0">
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
                  {card.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="flex items-start gap-3">
                      <img
                        className="w-6 h-6 flex-shrink-0"
                        alt="Check"
                        src="https://c.animaapp.com/mk4ukvevAaIUXO/img/check-icon.png"
                      />
                      <p className="font-caption font-[number:var(--caption-font-weight)] text-white text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <p className="font-caption font-[number:var(--caption-font-weight)] text-[#DFDFDF] text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                    {card.footer}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
