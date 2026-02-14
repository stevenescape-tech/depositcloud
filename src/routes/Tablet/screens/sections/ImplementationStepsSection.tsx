import { Separator } from "../../components/ui/separator";

export const ImplementationStepsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-2.5 px-4 py-14 xl:py-[85px] relative">
      <div className="absolute inset-0 bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/section---implement.png)] bg-cover bg-center opacity-15" />
      <div className="relative z-10 w-full px-[30px]">
        <div className="flex flex-col w-full items-center justify-center relative">
          <div className="flex flex-col items-center gap-[26px] relative w-full">
            <div className="flex flex-col items-center justify-center w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
              <p className="relative flex items-center justify-center max-w-[408.5px] font-body font-[number:var(--body-font-weight)] text-[#595959] text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                Retroactive Implementation
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
              <h2 className="relative flex items-center justify-center font-h2 font-[number:var(--h2-font-weight)] text-[#2b2b2b] text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                Implement without starting over
              </h2>
            </div>

            <div className="flex flex-col w-full items-center justify-center opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
              <p className="relative flex items-center justify-center max-w-[948px] font-body font-[number:var(--body-font-weight)] text-[#2b2b2b] text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                Most deposit solutions stop at new leases, forcing operators
                to manage existing residents across complicated parallel
                systems.
              </p>
            </div>

            <div className="relative w-full max-w-[450px] opacity-0 animate-fade-in [--animation-delay:800ms] my-6">
              <Separator className="w-full bg-[#51b0ff] h-[0.5px]" />
            </div>

            <div className="flex items-center justify-center w-full max-w-[948px] opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:1000ms]">
              <p className="text-[#2b2b2b] text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] font-body font-[number:var(--body-font-weight)] [font-style:var(--body-font-style)]">
                DepositCloud unifies all deposits and residents in one platform,
                managing migration end-to-end without interrupting day-to-day
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
