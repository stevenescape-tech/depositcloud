import { Check } from "lucide-react";
import { Separator } from "../ui/separator";

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

export const UnifiedPlatformSection = (): JSX.Element => {
  return (
    <section id="platform" className="relative w-full overflow-hidden py-10 md:py-[60px] xl:py-[85px]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-[url(/img/platform.png)] bg-cover bg-center bg-no-repeat opacity-15" />
      <div className="absolute inset-0 bg-white/40" />
      
      <div className="relative z-10 container mx-auto px-6 md:px-[37px] xl:px-4 max-w-[1112px]">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-12 xl:gap-8">
          
          {/* Left Content Column */}
          {/* On Tablet (md), constrain width to 55% to avoid overlap with absolute images */}
          <div className="flex flex-col gap-8 md:gap-12 xl:gap-[35px] flex-1 md:max-w-[55%] xl:max-w-[500px] relative z-20">
            
            {/* Header Group */}
            <div className="flex flex-col gap-6 md:gap-[35px]">
              <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-[#2b2b2b] text-[28px] md:text-[32px] tracking-[-1.68px] md:tracking-[-1.92px] leading-normal">
                Our Solution: A unified platform that does the work for you
              </h2>

              <div className="flex flex-col gap-6">
                <p className="font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-base tracking-[0] leading-7">
                  Manages cash deposits, installment plans, and security deposit
                  alternatives — all through a single platform.
                </p>

                <div className="flex flex-col gap-3 md:gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-blue flex-shrink-0">
                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <p className="font-caption font-[number:var(--caption-font-weight)] text-[#2b2b2b] text-sm md:text-[11px] xl:text-base tracking-[-0.31px] leading-6">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator className="bg-brand-blue h-[0.5px] w-full" />
              </div>
            </div>

            {/* Mobile Phone Placement (Inline) - Visible only on Mobile */}
            <div className="md:hidden relative w-full max-w-[340px] mx-auto aspect-[340/520] my-4">
               <img
                 className="absolute top-0 right-0 w-[65%] h-auto object-contain z-10 drop-shadow-xl"
                 alt="Phone back"
                 src="/img/uploaded-asset-1771098261908-1.png"
                 loading="lazy"
                 decoding="async"
               />
               <img
                 className="absolute bottom-0 left-0 w-[65%] h-auto object-contain z-20 drop-shadow-xl"
                 alt="Phone front"
                 src="/img/uploaded-asset-1771098261907-0.png"
                 loading="lazy"
                 decoding="async"
               />
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-8 md:gap-[30px]">
              <h3 className="font-h2 font-[number:var(--h2-font-weight)] text-[#2b2b2b] text-[28px] md:text-[35px] tracking-[-1.68px] md:tracking-[-2.10px] leading-normal">
                Value delivered on <br />
                autopilot
              </h3>

              <div className="flex flex-col gap-6 md:gap-8">
                {statistics.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <h4 className="font-h4 font-[number:var(--h4-font-weight)] text-[#2b2b2b] text-[40px] tracking-[-2.40px] leading-normal">
                      {stat.value}
                    </h4>
                    <p className="font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-sm tracking-[0] leading-7">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Text */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h5 className="font-h5 font-[number:var(--h5-font-weight)] text-[#2b2b2b] text-2xl tracking-[-1.44px] leading-normal">
                All your deposits in one place
              </h5>
              <p className="font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-base tracking-[0] leading-7">
                Built by property managers for owners, operators, and renters.
              </p>
            </div>
          </div>

          {/* Tablet/Desktop Phone Images */}
          {/* Tablet: Absolute positioned right */}
          {/* Desktop: Flex item right */}
          
          {/* Container for Tablet/Desktop images */}
          <div className="hidden md:block absolute top-[100px] right-[37px] w-[40%] max-w-[320px] aspect-[468/710] z-10 xl:static xl:block xl:w-[628px] xl:h-[958px] xl:max-w-none xl:aspect-auto xl:flex-shrink-0">
             {/* Tablet Images */}
             <div className="xl:hidden w-full h-full relative">
                <img
                  className="absolute top-0 right-0 w-[70%] h-auto object-contain z-10 drop-shadow-xl"
                  alt="Phone back"
                  src="/img/uploaded-asset-1771098261908-1.png"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="absolute top-[32%] left-0 w-[70%] h-auto object-contain z-20 drop-shadow-xl"
                  alt="Phone front"
                  src="/img/uploaded-asset-1771098261907-0.png"
                  loading="lazy"
                  decoding="async"
                />
             </div>

             {/* Desktop Images */}
             <div className="hidden xl:block relative w-full h-full">
                <img
                  src="/img/uploaded-asset-1771098261908-1.png"
                  alt="Phone back"
                  className="absolute top-0 right-0 w-[360px] h-[741px] object-contain z-10 drop-shadow-2xl"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/img/uploaded-asset-1771098261907-0.png"
                  alt="Phone front"
                  className="absolute top-[217px] left-0 w-[360px] h-[741px] object-contain z-20 drop-shadow-2xl"
                  loading="lazy"
                  decoding="async"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
