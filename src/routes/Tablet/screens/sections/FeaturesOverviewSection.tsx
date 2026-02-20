
import { Card, CardContent } from "../../components/ui/card";

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

export const FeaturesOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Dsc"
        src="/img/-dsc1222-1.png"
      />

      <div className="relative flex flex-col items-center gap-3.5 px-[37px] py-14">
        <p className="text-center [font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs tracking-[0] leading-7">
          Built for every community, affordable, student, conventional, and
          single family.
        </p>

        <h2 className="text-center [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[32px] tracking-[-1.92px] leading-[normal]">
          A deposit platform for all residents,
          <br />
          not just new leases.
        </h2>

        <p className="text-center [font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm tracking-[0] leading-7">
          Supports every deposit type - cash deposits, installment plans, and
          security deposit alternatives.
        </p>

        <div className="w-full h-px bg-[url(/img/divider-2.svg)] bg-[100%_100%]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[21px] w-full mt-6">
          <Card className="relative flex flex-col items-start gap-4 p-12 bg-[rgba(0,0,0,0.3)] border border-solid border-[#51b0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] [backdrop-filter:blur(10px)] overflow-hidden">
            <CardContent className="flex flex-col items-start gap-4 p-0 w-full">
              <p className="h-[25px] flex items-center font-caption-small font-[number:var(--caption-small-font-weight)] text-[#DFDFDF] text-[length:var(--caption-small-font-size)] tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] [font-style:var(--caption-small-font-style)]">
                For residents
              </p>

              <h3 className="h-[25px] flex items-center font-h5 font-[number:var(--h5-font-weight)] text-white text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] whitespace-nowrap [font-style:var(--h5-font-style)]">
                Clarity from move-in to move-out.
              </h3>

              <div className="flex flex-col pt-2 w-full">
                <p className="font-caption font-[number:var(--caption-font-weight)] text-[#DFDFDF] text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                  Residents should not lose transparency just because they signed
                  a lease years ago. We deliver clarity and consistency to
                  deposits for every resident, regardless of move-in date.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 pt-4 w-full">
                {residentFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 w-full"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18C13.9672 18 18 13.9672 18 9C18 4.03276 13.9672 0 9 0C4.03276 0 0 4.03276 0 9C0 13.9672 4.03276 18 9 18ZM12.9727 7.34766L8.47266 11.8477C8.14219 12.1781 7.60781 12.1781 7.28086 11.8477L5.03086 9.59766C4.70039 9.26719 4.70039 8.73281 5.03086 8.40586C5.36133 8.07539 5.89570 8.07539 6.22266 8.40586L7.875 10.0582L11.7773 6.15234C12.1078 5.82188 12.6422 5.82188 12.9691 6.15234C13.2996 6.48281 13.2996 7.01719 12.9691 7.34414L12.9727 7.34766Z" fill="#51B1FF"/></svg>
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

          <Card className="relative flex flex-col items-start gap-4 p-12 bg-[rgba(0,0,0,0.3)] border border-solid border-[#51b0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] [backdrop-filter:blur(10px)] overflow-hidden">
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
                    <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18C13.9672 18 18 13.9672 18 9C18 4.03276 13.9672 0 9 0C4.03276 0 0 4.03276 0 9C0 13.9672 4.03276 18 9 18ZM12.9727 7.34766L8.47266 11.8477C8.14219 12.1781 7.60781 12.1781 7.28086 11.8477L5.03086 9.59766C4.70039 9.26719 4.70039 8.73281 5.03086 8.40586C5.36133 8.07539 5.89570 8.07539 6.22266 8.40586L7.875 10.0582L11.7773 6.15234C12.1078 5.82188 12.6422 5.82188 12.9691 6.15234C13.2996 6.48281 13.2996 7.01719 12.9691 7.34414L12.9727 7.34766Z" fill="#51B1FF"/></svg>
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
