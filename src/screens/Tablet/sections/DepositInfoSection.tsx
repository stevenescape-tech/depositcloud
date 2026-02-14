    import { Card, CardContent } from "../../../components/ui/card";

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

export const DepositInfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-3 px-0 py-14 w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/section---deposit-platform.png)] bg-center bg-cover">
      <div className="inline-flex flex-col items-start gap-3">
        <div className="flex flex-col w-[694px] items-center gap-7">
          <div className="flex flex-col max-w-screen-md items-center gap-6 w-full">
            <div className="items-start gap-3.5 flex flex-col w-full">
              <div className="items-center w-full flex flex-col">
                <p className="flex items-center justify-center w-[408.5px] [font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-7">
                  Built for every one involved
                </p>
              </div>

              <div className="flex flex-col items-center w-full">
                <h2 className="flex items-center justify-center w-[694px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[-1.92px] leading-[normal]">
                  From friction to flow.
                </h2>
              </div>
            </div>

            <div className="items-center w-full flex flex-col">
              <p className="flex items-center justify-center w-[694px] [font-family:'Courier_Prime',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-7">
                A deposit operation that runs continuously — across systems,
                residents, and time.
              </p>
            </div>
          </div>

          <div className="w-[695px] h-px bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/divider-2.svg)] bg-[100%_100%]" />
        </div>

        <div className="grid grid-cols-2 gap-[21px] w-[694px] mt-3">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="relative flex flex-col gap-4 p-12 bg-[rgba(0,0,0,0.3)] border border-[#51b0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] [backdrop-filter:blur(10px)] overflow-hidden"
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
                  {card.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <img
                        className="w-6 h-6 flex-shrink-0"
                        alt="Check"
                        src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/check-icon.png"
                      />
                      <p className="font-caption font-[number:var(--caption-font-weight)] text-white text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                        {feature}
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
