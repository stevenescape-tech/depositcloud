import { Separator } from "../../../../components/ui/separator";

const bulletPoints = [
  { text: "Mitigate compliance exposure" },
  { text: "Negate operational burden" },
  { text: "Create true move in affordability" },
];

const statistics = [
  {
    value: "6 of the top 10",
    description: "NMHC trust DepositCloud",
  },
  {
    value: "1 billion",
    description: "In assets under management",
  },
  {
    value: "112%",
    description: "More deposit value",
  },
];

export const UnifiedPlatformSection = (): JSX.Element => {
  return (
    <section id="platform" role="region" aria-labelledby="platform-heading" className="relative w-screen py-[86px] xl:py-[85px]">
      <div className="absolute inset-0 bg-[url(https://c.animaapp.com/mjyhvu36aqUy0x/img/platform.png)] bg-cover bg-center opacity-15" />
      <div className="container mx-auto max-w-[1128px] px-4 relative z-10">
        {/* Mobile/Tablet: Stacked Layout */}
        <div className="flex flex-col gap-[35px] xl:hidden">
          <header className="flex flex-col gap-[35px]">
            <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-[#2b2b2b] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] translate-y-[-1rem] animate-fade-in opacity-0">
              Our Solution: A unified platform that does the work for you
            </h2>
          </header>

          <div className="flex flex-col gap-[60px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="flex flex-col min-h-[56px]">
              <p className="font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                Manages cash deposits, installment plans, and security deposit
                alternatives — all through a single platform.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 p-2.5">
              <div className="flex flex-col gap-[15.5px] pt-2 pb-1.5">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      className="w-6 h-6 flex-shrink-0"
                      alt="Check"
                      src="https://c.animaapp.com/mjyhvu36aqUy0x/img/check-icon.png"
                    />
                    <p className="font-caption font-[number:var(--caption-font-weight)] text-[#2b2b2b] text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

                <Separator className="bg-[#51b0ff] h-[0.5px]" />
          </div>

          <div className="flex flex-col items-start gap-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h3 className="font-h2 font-[number:var(--h2-font-weight)] text-[#2b2b2b] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              Value delivered on <br />
              autopilot
            </h3>

            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-start w-full">
                <h4 className="font-h4 font-[number:var(--h4-font-weight)] text-[#2b2b2b] text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  {stat.value}
                </h4>
                <p className="font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[17px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h5 className="font-h5 font-[number:var(--h5-font-weight)] text-[#2b2b2b] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
              All your deposits in one place
            </h5>
            <p className="font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
              Built by property managers for owners, operators, and renters.
            </p>
          </div>
        </div>

        {/* Desktop: Side-by-side Layout (above 1200px) */}
        <div className="hidden xl:flex items-start justify-between gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-[35px] flex-1 max-w-[500px]">
              <header className="flex flex-col gap-[35px]">
                <h2 id="platform-heading" className="font-h2 font-[number:var(--h2-font-weight)] text-[#2b2b2b] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] translate-y-[-1rem] animate-fade-in opacity-0">
                  Our Solution: A unified platform that does the work for you
                </h2>
              </header>

              <div className="flex flex-col gap-[60px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <div className="flex flex-col">
                  <p className="font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                    Manages cash deposits, installment plans, and security deposit
                    alternatives — all through a single platform.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-col gap-[15.5px]">
                    {bulletPoints.map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <img
                          className="w-6 h-6 flex-shrink-0"
                          alt="Check"
                          src="https://c.animaapp.com/mjyhvu36aqUy0x/img/check-icon.png"
                        />
                        <p className="font-caption font-[number:var(--caption-font-weight)] text-[#2b2b2b] text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-[#51b0ff] h-[0.5px]" />
              </div>

              <div className="flex flex-col items-start gap-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                <h3 className="font-h2 font-[number:var(--h2-font-weight)] text-[#2b2b2b] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                  Value delivered on <br />
                  autopilot
                </h3>

                {statistics.map((stat, index) => (
                  <div key={index} className="flex flex-col items-start w-full">
                    <h4 className="font-h4 font-[number:var(--h4-font-weight)] text-[#2b2b2b] text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                      {stat.value}
                    </h4>
                    <p className="font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-[17px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                <h5 className="font-h5 font-[number:var(--h5-font-weight)] text-[#2b2b2b] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
                  All your deposits in one place
                </h5>
                <p className="font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                  Built by property managers for owners, operators, and renters.
                </p>
              </div>
            </div>

            {/* Right Column - Phone Images */}
            <div className="relative flex-shrink-0 opacity-0 translate-y-[40px] animate-slide-up [--animation-delay:200ms]" style={{ width: '628px', height: '958px' }}>
              <img
                src="https://c.animaapp.com/mjyhvu36aqUy0x/img/phone-2-back-1_1.png"
                alt="Phone back"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '360px',
                  height: '741px',
                  display: 'block',
                  imageRendering: 'crisp-edges'
                }}
              />
              <img
                src="https://c.animaapp.com/mjyhvu36aqUy0x/img/phone-front_1.png"
                alt="Phone front"
                style={{
                  position: 'absolute',
                  top: '217px',
                  left: 0,
                  width: '360px',
                  height: '741px',
                  zIndex: 10,
                  display: 'block',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
        </div>
      </div>
    </section>
  );
};
