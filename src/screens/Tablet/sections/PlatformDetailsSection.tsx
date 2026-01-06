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
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/mjyi28kyx0b5Zs/img/platform.png)",
      }}
    >
      <div className="w-full max-w-[768px] mx-auto px-[37px] py-[60px]">
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
                  <img
                    className="w-6 h-6 flex-shrink-0"
                    alt="Check"
                    src="https://c.animaapp.com/mjyhvu36aqUy0x/img/check-icon.png"
                  />
                  <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-[11px] tracking-[-0.31px] leading-6">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full max-w-[473px] h-px">
              <img
                className="w-full"
                alt="Divider"
                src="https://c.animaapp.com/mjyi28kyx0b5Zs/img/divider.svg"
              />
            </div>
          </div>

          <div className="relative w-full h-[710px] my-8 flex justify-center items-start opacity-0 translate-y-[40px] animate-slide-up [--animation-delay:200ms]">
            <div className="relative w-[468px] h-[710px]">
              <img
                className="absolute top-0 right-0 w-[234px] h-[482px] object-contain z-10"
                alt="Phone back"
                src="https://c.animaapp.com/mjyi28kyx0b5Zs/img/phone-2-back-1.png"
              />
              <img
                className="absolute top-[228px] left-0 w-[234px] h-[482px] object-contain z-20"
                alt="Phone front"
                src="https://c.animaapp.com/mjyi28kyx0b5Zs/img/phone-front.png"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-8">
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
      </div>
    </section>
  );
};
