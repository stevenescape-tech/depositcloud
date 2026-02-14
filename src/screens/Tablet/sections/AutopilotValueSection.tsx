import { Card, CardContent } from "../../../components/ui/card";
import { useScrollAnimation } from "../../../lib/useScrollAnimation";
import { Check } from "lucide-react";

const residentFeatures = [
  "Know what your deposit covers",
  "Transparent expectations at move-out",
  "Faster, more predictable refunds",
  "Documented charges with real visibility",
];

const operatorFeatures = [
  "Unified deposit management for all residents",
  "Standardized workflows portfolio-wide",
  "Reduced risk as regulations change",
  "Cleaner accounting and reconciliation",
];

export const AutopilotValueSection = (): JSX.Element => {
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();

  return (
    <section id="features" className="relative w-full flex items-center justify-center px-4 py-12 xl:py-[85px] scroll-mt-20">
      <div className="absolute inset-0 bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/features.png)] bg-cover bg-center opacity-[0.68]" />
      <div className="absolute inset-0 bg-black opacity-75" />
      <div className="relative z-10 flex flex-col w-full items-center gap-[26px] px-[30px]">
        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] text-center font-body font-[number:var(--body-font-weight)] text-white text-[14px] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
          Built for every community, affordable, student, conventional, and
          single family.
        </p>

        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-center max-w-[942px] font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
          A deposit platform for all residents,
          <br />
          not just new leases.
        </h2>

        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] text-center max-w-[751.77px] font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
          Supports every deposit type - cash deposits, installment plans, and
          security deposit alternatives.
        </p>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-full h-[0.5px] bg-[#51b0ff] my-6" />

        <div className="grid grid-cols-2 gap-[20px] w-full">
          <Card ref={card1Ref} data-animate="true" className="relative flex flex-col items-start gap-4 p-12 bg-[rgba(0,0,0,0.3)] border border-solid border-[#51b0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] [backdrop-filter:blur(10px)] overflow-hidden">
            <CardContent className="flex flex-col items-start gap-4 p-0 w-full">
              <p className="h-[25px] flex items-center font-caption-small font-[number:var(--caption-small-font-weight)] text-[#DFDFDF] text-[length:var(--caption-small-font-size)] tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] [font-style:var(--caption-small-font-style)]">
                For residents
              </p>

              <h3 className="flex items-center font-h5 font-[number:var(--h5-font-weight)] text-white text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
                Clarity from move-in to <br />move-out.
              </h3>

              <div className="flex flex-col pt-2 w-full">
                <p className="font-caption font-[number:var(--caption-font-weight)] text-[#DFDFDF] text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                  Residents should not lose transparency just because they
                  signed a lease years ago. We deliver clarity and consistency
                  to deposits for every resident, regardless of move-in date.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 pt-4 w-full">
                {residentFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 w-full"
                  >
                    <Check className="w-6 h-6 flex-shrink-0 text-white" />
                    <p className="font-caption font-[number:var(--caption-font-weight)] text-white text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start pt-4 w-full">
                <p className="h-5 flex items-center font-caption-small font-[number:var(--caption-small-font-weight)] text-[#DFDFDF] text-[length:var(--caption-small-font-size)] tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] whitespace-nowrap [font-style:var(--caption-small-font-style)]">
                  No confusion. No guessing. No surprises.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card ref={card2Ref} data-animate="true" style={{ animationDelay: '150ms' } as React.CSSProperties} className="relative flex flex-col items-start gap-4 p-12 bg-[rgba(0,0,0,0.3)] border border-solid border-[#51b0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] [backdrop-filter:blur(10px)] overflow-hidden">
            <CardContent className="flex flex-col items-start gap-4 p-0 w-full">
              <p className="h-[25px] flex items-center font-caption-small font-[number:var(--caption-small-font-weight)] text-[#DFDFDF] text-[length:var(--caption-small-font-size)] tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] whitespace-nowrap [font-style:var(--caption-small-font-style)]">
                For owners &amp; operators
              </p>

              <h3 className="h-[25px] flex items-center font-h5 font-[number:var(--h5-font-weight)] text-white text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] whitespace-nowrap [font-style:var(--h5-font-style)]">
                Every deposit. One system.
              </h3>

              <div className="flex flex-col pt-2 w-full">
                <p className="font-caption font-[number:var(--caption-font-weight)] text-[#DFDFDF] text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                  Most platforms only work going forward. DepositCloud operates
                  across your full portfolio, eliminating fragmented workflows and
                  bringing deposits under consistent operational control.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 pt-4 w-full">
                {operatorFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 w-full"
                  >
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

              <div className="flex flex-col items-start pt-4 w-full">
                <p className="h-5 flex items-center font-caption-small font-[number:var(--caption-small-font-weight)] text-[#DFDFDF] text-[length:var(--caption-small-font-size)] tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] whitespace-nowrap [font-style:var(--caption-small-font-style)]">
                  Built for real portfolios - not clean slates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
