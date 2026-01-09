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

export const PlatformOverviewSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/mk4ukvevAaIUXO/img/platform.png)",
      }}
    >
      <div className="flex flex-col gap-[60px] px-[37px] py-[60px]">
        <div className="flex flex-col gap-[35px] w-full max-w-[303px]">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[28px] tracking-[-1.68px] leading-normal">
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
                  <img
                    className="flex-shrink-0"
                    alt="Icon"
                    src="https://c.animaapp.com/mk4ukvevAaIUXO/img/icon.svg"
                  />
                  <span className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-[11px] tracking-[-0.31px] leading-6">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[url(https://c.animaapp.com/mk4ukvevAaIUXO/img/divider.svg)] h-px bg-[length:100%_100%]" />
          </div>
        </div>

        <div className="relative w-full max-w-[303px] h-[411px]">
          <img
            className="absolute top-0 right-0 w-[200px] h-[411px] object-cover"
            alt="Phone back"
            src="https://c.animaapp.com/mk4ukvevAaIUXO/img/phone-2-back-1-1.png"
          />
          <img
            className="absolute bottom-0 left-0 w-[200px] h-[411px] object-cover"
            alt="Phone front"
            src="https://c.animaapp.com/mk4ukvevAaIUXO/img/phone-front-1.png"
          />
        </div>

        <div className="flex flex-col gap-[30px] w-full max-w-[303px]">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[28px] tracking-[-1.68px] leading-normal">
            Value delivered on <br />
            autopilot
          </h2>

          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[40px] tracking-[-2.40px] leading-normal">
                {stat.value}
              </div>
              <div className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-sm tracking-[0] leading-7">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[9px] w-full max-w-[302px]">
          <h3 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-2xl tracking-[-1.44px] leading-normal">
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
