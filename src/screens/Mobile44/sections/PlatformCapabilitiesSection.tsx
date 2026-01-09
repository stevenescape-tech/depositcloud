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
      <div className="absolute inset-0 bg-[url(https://c.animaapp.com/mk4ukvevAaIUXO/img/platform.png)] bg-cover bg-center opacity-15" />
      <div className="relative z-10 flex flex-col px-6 py-[30px] gap-[60px]">
        <div className="flex flex-col gap-[35px] w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[28px] tracking-[-1.68px] leading-[normal]">
            Our Solution: A unified platform that does the work for you
          </h2>

          <div className="flex flex-col gap-[34px]">
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-base tracking-[0] leading-7">
              Manages cash deposits, installment plans, and security deposit
              alternatives — all through a single platform.
            </p>

            <div className="flex flex-col gap-2.5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    className="w-4 h-4 flex-shrink-0"
                    alt="Check"
                    src="https://c.animaapp.com/mk4ukvevAaIUXO/img/check-icon.png"
                    loading="lazy"
                  />
                  <span className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-sm tracking-[-0.31px] leading-6">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-[#51b0ff]" />
          </div>
        </div>

        <div className="relative w-full h-0 pb-[150%] max-w-[320px] mx-auto opacity-0 translate-y-[40px] animate-slide-up [--animation-delay:400ms]">
          <img
            className="absolute top-0 right-0 w-[50%] h-auto object-contain z-10"
            alt="Phone back"
            src="https://c.animaapp.com/mk4ukvevAaIUXO/img/phone-2-back-1-1.png"
            loading="lazy"
          />
          <img
            className="absolute bottom-0 left-0 w-[50%] h-auto object-contain z-20"
            alt="Phone front"
            src="https://c.animaapp.com/mk4ukvevAaIUXO/img/phone-front-1.png"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-[30px] w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
          <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[28px] tracking-[-1.68px] leading-[normal]">
            Value delivered on <br />
            autopilot
          </h2>

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

        <div className="flex flex-col gap-[9px] w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:800ms]">
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
