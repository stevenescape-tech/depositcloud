import { Button } from "../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-[85px] min-h-screen px-4 relative w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.70)_100%),url(https://c.animaapp.com/mk4ukvevAaIUXO/img/hero.png)] bg-center bg-cover bg-fixed">
      <div className="inline-flex flex-col items-center justify-center gap-[85px] relative">
        <div className="flex flex-col w-full max-w-[694px] items-center gap-6 relative">
          <h1 className="w-full [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[55px] text-center tracking-[-3.30px] leading-normal">
            Deposits were broken... <br />
            We fixed them.
          </h1>

          <p className="w-full max-w-[564px] text-white text-sm text-center tracking-[0] leading-7 [font-family:'Courier_Prime',Helvetica] font-normal">
            DepositCloud didn&apos;t just connect the dots, we automated the
            dots. Unlock resident affordability while reducing operational and
            financial risk for properties.
          </p>
        </div>

        <Button
          variant="outline"
          className="h-auto w-fit px-[23px] py-4 bg-transparent rounded-[5px] border border-solid border-[#51b0ff] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#51b0ff]/10"
        >
          <span className="font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
            Book a demo
          </span>
        </Button>
      </div>
    </section>
  );
};
