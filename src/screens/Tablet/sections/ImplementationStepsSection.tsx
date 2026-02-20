import { Separator } from "../../../components/ui/separator";

export const ImplementationStepsSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col w-full items-center gap-2.5 px-0 py-14">
      <div className="absolute inset-0 bg-[url(/img/section---implement.png)] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-white/40" />
      
      <div className="relative z-10 flex flex-col w-full max-w-[694px] items-center justify-center gap-3.5 px-4">
        <div className="flex flex-col w-full items-center gap-3.5">
          <div className="flex flex-col w-full items-start gap-3.5">
            <div className="flex flex-col items-center justify-center w-full">
              <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#595959] text-[14px] text-center tracking-[0] leading-7">
                Retroactive Implementation
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[32px] text-center tracking-[-1.92px] leading-[normal]">
                Implement without starting over
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-base text-center tracking-[0] leading-7">
                Most deposit solutions stop at new leases, forcing operators to
                manage existing residents across complicated parallel systems.
              </p>
            </div>
          </div>

          <Separator className="w-full max-w-[450px] bg-[#e5e5e5]" />

          <div className="flex items-center justify-center w-full">
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-base text-center tracking-[0] leading-7">
              DepositCloud unifies all deposits and residents in one platform,
              managing migration end-to-end without interrupting day-to-day
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
