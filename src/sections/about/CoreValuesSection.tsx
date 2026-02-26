import React from "react";
import { useScrollAnimation } from "../../lib/useScrollAnimation";

interface CoreValue {
  title: string;
  subtitle: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    title: "Radical honesty",
    subtitle: "The unvarnished truth",
    description: "We lead with facts, not spin. Bugs, delays, or legal barriers are shared openly because transparency builds durable trust always.",
  },
  {
    title: "People first",
    subtitle: "The hospitality standard",
    description: "We manage deposits, but we serve people – residents awaiting refunds, managers buried in paperwork, and our own team. Every decision asks: does this make life easier and more dignified?",
  },
  {
    title: "Move with velocity",
    subtitle: "Speed is a feature",
    description: "Delay kills momentum in multifamily. Fast refunds, integrations, and decisions give our clients freedom to operate and close deals sooner.",
  },
  {
    title: "Extreme Ownership:",
    subtitle: "The buck stops here",
    description: "We own outcomes end to end. No blame shifting, no excuses. If there is a problem, we solve it and deliver results.",
  },
  {
    title: "Assumptive Leadership",
    subtitle: "Define the future",
    description: "We lead with the facts, assume the yes, and present the roadmap that guides partners toward fully offloaded deposit management.",
  },
];

const CoreValueCard = ({ value, animationDelay }: { value: CoreValue; animationDelay?: number }): JSX.Element => {
  const ref = useScrollAnimation();
  return (
  <div
    ref={ref}
    data-animate="true"
    style={animationDelay ? { animationDelay: `${animationDelay}ms` } as React.CSSProperties : undefined}
    className="bg-black/10 border-[0.25px] border-brand-blue flex flex-col gap-2 p-[33px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.35)] [-webkit-backdrop-filter:blur(18px)_saturate(180%)_brightness(105%)] [backdrop-filter:blur(18px)_saturate(180%)_brightness(105%)]"
  >
    <div className="flex flex-col">
      <h3 className="font-bold text-white text-xl tracking-[-1.2px] leading-[27px]">
        {value.title}
      </h3>
      <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-sm tracking-[-0.31px] leading-6">
        {value.subtitle}
      </p>
    </div>
    <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm tracking-[-0.31px] leading-6">
      {value.description}
    </p>
  </div>
  );
};

export const CoreValuesSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[url(/img/about-corevalues-bg.jpg)] bg-cover bg-center bg-scroll md:bg-fixed" />
      <div className="absolute inset-0 bg-[rgba(22,22,22,0.7)]" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-[65px] py-[85px] px-6 xl:px-[78px]">
        <h2 className="font-h2 font-bold text-white text-[28px] md:text-[42px] text-center tracking-[-2.52px]">
          Our core values
        </h2>

        <div className="flex flex-col gap-[22px] w-full max-w-[1124px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {coreValues.slice(0, 2).map((value, i) => (
              <CoreValueCard key={i} value={value} animationDelay={i * 150} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px]">
            {coreValues.slice(2).map((value, i) => (
              <CoreValueCard key={i} value={value} animationDelay={(i + 2) * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
