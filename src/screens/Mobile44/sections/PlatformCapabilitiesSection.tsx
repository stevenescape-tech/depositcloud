    import { Check } from "lucide-react";
    import { Separator } from "../../../components/ui/separator";

    const benefits = [
      { text: "Mitigate compliance exposure" },
  { text: "Negate operational burden" },
  { text: "Create true move in affordability" },
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

export const PlatformCapabilitiesSection = (): JSX.Element => {
  return (
    <section id="platform" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/platform.png)] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 flex flex-col px-6 py-10 gap-12 md:gap-16 max-w-screen-sm mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-8 w-full">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[28px] tracking-[-1.68px] leading-[normal]">
            Our Solution: A unified platform that does the work for you
          </h2>

          <div className="flex flex-col gap-8">
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-base tracking-[0] leading-7">
              Manages cash deposits, installment plans, and security deposit
              alternatives — all through a single platform.
            </p>

            <div className="flex flex-col gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#51b0ff] flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-sm tracking-[-0.31px] leading-6">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="bg-[#51b0ff] h-[0.5px] w-full" />
          </div>
        </div>

        {/* Phone Images Section - Responsive Layout */}
        <div className="relative w-full max-w-[340px] mx-auto aspect-[340/520]">
          <img
            className="absolute top-0 right-0 w-[65%] h-auto object-contain z-10 drop-shadow-xl"
            alt="DepositCloud App Interface - Back"
            src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/phone-2-back-1.png"
            loading="eager"
          />
          <img
            className="absolute bottom-0 left-0 w-[65%] h-auto object-contain z-20 drop-shadow-xl"
            alt="DepositCloud App Interface - Front"
            src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/phone-front.png"
            loading="eager"
          />
        </div>

        {/* Statistics Section */}
        <div className="flex flex-col gap-8 w-full">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[28px] tracking-[-1.68px] leading-[normal]">
            Value delivered on <br />
            autopilot
          </h2>

          <div className="flex flex-col gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[40px] tracking-[-2.40px] leading-[normal]">
                  {stat.value}
                </div>
                <div className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-sm tracking-[0] leading-7">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col gap-2 w-full">
          <h3 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-2xl tracking-[-1.44px] leading-[normal]">
            All your deposits in one place
          </h3>
          <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-base tracking-[0] leading-7">
            Built by property managers for owners, operators, and renters.
          </p>
        </div>
      </div>
    </section>
  );
};
