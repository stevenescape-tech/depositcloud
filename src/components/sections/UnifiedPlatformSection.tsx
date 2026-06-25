import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { Separator } from "../ui/separator";

const benefits = [
  "Mitigate compliance exposure",
  "Negate operational burden",
  "Create true move in affordability",
];

const platformFeatures = [
  {
    title: "Automated Move-out Processing",
    description: "Customized work flows reduce site teams workload",
  },
  {
    title: "Compliance and Service Engine",
    description: "50-state, County, City and Zip",
  },
  {
    title: "Real-time Relief",
    description: "Retroactive conversion of current residents and escheatment",
  },
  {
    title: "Human-based Customer Service",
    description: "Zero AI resident interactions",
  },
  {
    title: "Single Source of Truth",
    description: "All your deposit & move-out data in one place",
  },
];

export const UnifiedPlatformSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    const section = sectionRef.current;
    const phone = phoneRef.current;
    if (!section || !phone) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionCenter = rect.top + rect.height / 2;
        const viewCenter = windowHeight / 2;
        const offset = (viewCenter - sectionCenter) * 0.12;
        phone.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="platform" className="relative w-full overflow-x-clip py-10 md:py-[60px] xl:py-[85px] scroll-mt-[72px]">
      <div className="absolute inset-0 bg-[url(/img/platform.jpg)] bg-cover bg-center bg-no-repeat opacity-15 rotate-180" />
      <div className="absolute inset-0 bg-white/40" />
      
      <div className="relative z-10 container mx-auto px-6 md:px-[37px] xl:px-4 max-w-[1112px]">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-12 xl:gap-8">
          
          <div className="flex flex-col gap-8 md:gap-12 xl:gap-[35px] flex-1 md:max-w-[50%] xl:max-w-[500px] relative z-20">
            
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
                      <p className="font-caption font-[number:var(--caption-font-weight)] text-[#2b2b2b] text-xs md:text-[13px] xl:text-sm tracking-[-0.31px] leading-6">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator className="bg-brand-blue h-[0.5px] w-full" />
              </div>
            </div>

            <div className="md:hidden relative w-full max-w-[340px] mx-auto my-4">
              <img
                className="w-full h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                alt="DepositCloud app screens"
                src="/img/phones-v1.png"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex flex-col gap-4 md:gap-5">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <p className="font-body font-bold text-[#2b2b2b] text-sm md:text-base tracking-[-0.3px] leading-6">
                    {feature.title}
                  </p>
                  <p className="font-body font-[number:var(--body-font-weight)] text-[#595959] text-sm tracking-[0] leading-6">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-base tracking-[0] leading-7">
              Built by property managers for owners, operators, and renters.
            </p>
          </div>

          <div className="hidden md:flex absolute top-0 bottom-0 right-0 w-[48%] xl:w-[50%] z-10 items-center justify-end">
            <img
              ref={phoneRef}
              className="w-full max-h-full h-auto object-contain object-right drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] will-change-transform transition-transform duration-100 ease-out"
              alt="DepositCloud app screens"
              src="/img/phones-v1.png"
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
