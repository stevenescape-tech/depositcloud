import { Separator } from "../../components/ui/separator";

export const ImplementationDetailsSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center gap-2.5 pt-11 pb-14 px-4 relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/mjyrmx59BNbwHP/img/section---implement.png)",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-3.5 w-full max-w-[303px]">
        <div className="flex flex-col items-center gap-[15px] w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#595959] text-xs text-center tracking-[0] leading-7">
              Retroactive Implementation
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#2b2b2b] text-[28px] text-center tracking-[-1.68px] leading-[normal]">
              Implement without starting over
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-xs text-center tracking-[0] leading-7">
              Most deposit solutions stop at new leases, forcing operators to
              manage existing residents across complicated parallel systems.
            </p>
          </div>

          <Separator className="w-full bg-[url(https://c.animaapp.com/mjyrmx59BNbwHP/img/divider.svg)] bg-[length:100%_100%] h-px" />

          <div className="flex items-center justify-center w-full">
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2b2b2b] text-xs text-center tracking-[0] leading-7">
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
