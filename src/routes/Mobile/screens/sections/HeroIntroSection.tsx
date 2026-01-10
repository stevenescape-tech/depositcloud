import { Separator } from "../../components/ui/separator";

export const HeroIntroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-7 relative">
      <div className="flex flex-col max-w-screen-md items-center gap-6 relative w-full">
        <div className="flex flex-col w-full items-center gap-3.5 relative">
          <div className="flex flex-col items-center relative w-full">
            <p className="relative [font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-7">
              Built for every one involved
            </p>
          </div>

          <div className="flex flex-col items-center relative w-full">
            <h1 className="relative [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[-1.68px] leading-[normal]">
              From friction to flow.
            </h1>
          </div>
        </div>

        <div className="w-full items-center flex flex-col">
          <p className="relative [font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-7 max-w-[301px]">
            A deposit operation that runs continuously — across systems,
            residents, and time.
          </p>
        </div>
      </div>

      <Separator className="w-full bg-[url(https://c.animaapp.com/mjyrmx59BNbwHP/img/divider.svg)] h-px bg-[100%_100%]" />
    </section>
  );
};
