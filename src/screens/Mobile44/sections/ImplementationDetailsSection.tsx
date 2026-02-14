    import { Separator } from "../../../components/ui/separator";

export const ImplementationDetailsSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/section---implement.png)] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-white/40" />
      <div className="relative z-10 flex flex-col items-center gap-2.5 pt-[22px] pb-7 px-6">
        <div className="flex flex-col items-center justify-center gap-3.5 w-full">
          <div className="flex flex-col items-center gap-[15px] w-full">
            <div className="flex flex-col items-center justify-center w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
              <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#595959] text-[14px] text-center tracking-[0] leading-7">
                Retroactive Implementation
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
              <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[28px] text-center tracking-[-1.68px] leading-[normal]">
                Implement without starting over
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
              <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-base text-center tracking-[0] leading-7">
                Most deposit solutions stop at new leases, forcing operators to
                manage existing residents across complicated parallel systems.
              </p>
            </div>

            <Separator className="w-full bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/divider.svg)] bg-[length:100%_100%] h-px opacity-0 animate-fade-in [--animation-delay:800ms]" />

            <div className="flex items-center justify-center w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:1000ms]">
              <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-base text-center tracking-[0] leading-7">
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
