import { Separator } from "../components/ui/separator";

const features = [
  { text: "Mitigate compliance exposure" },
  { text: "Negate operational burden" },
  { text: "Create true move in affordability" },
];

const stats = [
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

export const Platform = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[768px] min-h-[1093px] overflow-hidden bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/platform.png)] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col gap-[35px] px-[37px] pt-[60px] pb-8">
        <div className="flex flex-col gap-[35px] max-w-[694px]">
          <h1 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[32px] tracking-[-1.92px] leading-normal">
            Our Solution: A unified platform that does the work for you
          </h1>

          <div className="flex flex-col gap-[35px]">
            <div className="flex flex-col gap-6">
              <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-xs tracking-[0] leading-7">
                Manages cash deposits, installment plans, and security deposit
                alternatives — all through a single platform.
              </p>

              <div className="flex flex-col gap-4 py-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <img
                        alt="Icon"
                        src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/icon.svg"
                      />
                    </div>
                    <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-[11px] tracking-[-0.31px] leading-6">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="w-[473px] bg-[#2b2b2b]" />
            </div>

            <div className="flex flex-col gap-[30px] mt-8">
              <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[35px] tracking-[-2.10px] leading-normal">
                Value delivered on <br />
                autopilot
              </h2>

              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[40px] tracking-[-2.40px] leading-normal">
                    {stat.value}
                  </div>
                  <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-sm tracking-[0] leading-7">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[17px] mt-8">
              <h3 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-2xl tracking-[-1.44px] leading-normal">
                All your deposits in one place
              </h3>
              <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-base tracking-[0] leading-7">
                Built by property managers for owners, operators, and renters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-56 left-[497px] w-[234px] h-[482px] object-cover"
        alt="Phone back"
        src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/phone-2-back-1.png"
      />

      <img
        className="absolute top-[484px] left-[377px] w-[234px] h-[482px] object-cover"
        alt="Phone front"
        src="https://c.animaapp.com/mlmpqe9tsgQxxy/img/phone-front.png"
      />
    </div>
  );
};
