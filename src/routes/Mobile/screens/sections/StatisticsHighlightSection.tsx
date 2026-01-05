import { Separator } from "../../components/ui/separator";

export const StatisticsHighlightSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-7 py-8">
      <div className="flex flex-col max-w-screen-md items-center gap-6 w-full px-4">
        <div className="flex flex-col items-center gap-3.5 w-full">
          <div className="flex items-center justify-center w-full">
            <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-7">
              Built for every one involved
            </p>
          </div>

          <div className="flex items-center justify-center w-full">
            <h2 className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[-1.68px] leading-normal">
              From friction to flow.
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-7 max-w-md">
            A deposit operation that runs continuously — across systems,
            residents, and time.
          </p>
        </div>
      </div>

      <Separator className="w-full bg-white/20" />
    </section>
  );
};
