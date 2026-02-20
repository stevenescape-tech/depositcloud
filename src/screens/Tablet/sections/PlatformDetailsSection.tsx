import { Check } from "lucide-react";
import { Separator } from "../../../components/ui/separator";

const benefits = [
  "Mitigate compliance exposure",
  "Negate operational burden",
  "Create true move in affordability",
];

const statistics = [
  {
    value: "6 of the top 10",
    description: "NMHC operators trust DepositCloud",
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

export const PlatformDetailsSection = (): JSX.Element => {
  return (
    <section
      id="platform"
      className="relative w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url(/img/platform.png)] bg-cover bg-center bg-no-repeat opacity-15" />
      <div className="absolute inset-0 bg-white/60" />
      
      <div className="relative w-full max-w-[768px] mx-auto px-[37px] py-[60px]">
        {/* Left Content Wrapper - Constrained width to allow space for phones */}
        <div className="relative z-10 flex flex-col max-w-[55%]">
          <div className="flex flex-col gap-[35px]">
            <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[32px] tracking-[-1.92px] leading-normal">
              Our Solution: A unified platform that does the work for you
            </h2>

            <div className="flex flex-col gap-6">
              <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-xs tracking-[0] leading-7">
                Manages cash deposits, installment plans, and security deposit
                alternatives — all through a single platform.
              </p>

              <div className="flex flex-col gap-4 py-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#51b0ff] flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-[11px] tracking-[-0.31px] leading-6">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="bg-[#51b0ff] h-[0.5px] w-full" />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-12">
            <h3 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[35px] tracking-[-2.10px] leading-normal">
              Value delivered on <br />
              autopilot
            </h3>

            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <h4 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[40px] tracking-[-2.40px] leading-normal">
                  {stat.value}
                </h4>
                <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-sm tracking-[0] leading-7">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <h3 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-2xl tracking-[-1.44px] leading-normal">
              All your deposits in one place
            </h3>
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-base tracking-[0] leading-7">
              Built by property managers for owners, operators, and renters.
            </p>
          </div>
        </div>

        {/* Phone Container - Positioned Absolute Right */}
        <div className="absolute top-[100px] right-[37px] w-[40%] max-w-[320px] aspect-[468/710] z-0 opacity-0 translate-y-[40px] animate-slide-up [--animation-delay:200ms]">
          <img
            className="absolute top-0 right-0 w-[70%] h-auto object-contain z-10 drop-shadow-xl"
            alt="Phone back"
            src="/img/phone-2-back-1.png"
            loading="eager"
          />
          <img
            className="absolute top-[32%] left-0 w-[70%] h-auto object-contain z-20 drop-shadow-xl"
            alt="Phone front"
            src="/img/phone-front-1.png"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
