import { CheckIcon } from "lucide-react";

const benefits = [
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

export const PlatformCapabilitiesSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden [background:url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/platform.png)_50%_50%_/_cover]">
      <div className="flex flex-col px-[37px] py-[60px] gap-[60px]">
        <div className="flex flex-col gap-[35px] max-w-[303px]">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[28px] tracking-[-1.68px] leading-[normal]">
            Our Solution: A unified platform that does the work for you
          </h2>

          <div className="flex flex-col gap-[34px]">
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-xs tracking-[0] leading-7">
              Manages cash deposits, installment plans, and security deposit
              alternatives — all through a single platform.
            </p>

            <div className="flex flex-col gap-2.5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckIcon className="w-4 h-4 flex-shrink-0 text-[#2b2b2b]" />
                  <span className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-[11px] tracking-[-0.31px] leading-6">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/divider.svg)] h-px bg-[100%_100%]" />
          </div>
        </div>

        <div className="relative h-[411px] max-w-[303px]">
          <img
            className="absolute top-0 right-0 w-[200px] h-[411px] object-cover z-10"
            alt="Phone back"
            src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/phone-2-back-1-1.png"
          />
          <img
            className="absolute bottom-0 left-0 w-[200px] h-[411px] object-cover z-20"
            alt="Phone front"
            src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/phone-front-1.png"
          />
        </div>

        <div className="flex flex-col gap-[30px] max-w-[303px]">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[28px] tracking-[-1.68px] leading-[normal]">
            Value delivered on <br />
            autopilot
          </h2>

          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[40px] tracking-[-2.40px] leading-[normal]">
                {stat.value}
              </div>
              <div className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-sm tracking-[0] leading-7">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[5px] max-w-[302px]">
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
