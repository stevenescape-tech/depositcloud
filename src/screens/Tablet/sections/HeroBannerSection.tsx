import { Button } from "../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section 
      className="relative flex flex-col items-center justify-center gap-20 min-h-screen px-6 w-full overflow-hidden bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/hero.png)] bg-cover bg-center bg-no-repeat"
      aria-label="Hero banner"
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="inline-flex flex-col items-center justify-center gap-20 relative z-10 w-full max-w-3xl">
        <div className="flex flex-col w-full items-center gap-6 relative">
          <h1 className="w-full [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-5xl md:text-[55px] text-center tracking-[-0.06em] leading-tight">
            Deposits were broken... <br />
            We fixed them.
          </h1>

          <p className="w-full max-w-xl text-white text-sm md:text-base text-center tracking-[0] leading-7 [font-family:'Courier_Prime',Helvetica] font-normal">
            DepositCloud didn&apos;t just connect the dots, we automated the
            dots. Unlock resident affordability while reducing operational and
            financial risk for properties.
          </p>
        </div>

        <Button
          onClick={() => {
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          variant="outline"
          className="h-auto w-fit px-6 py-4 bg-transparent rounded-[5px] border border-solid border-[#51b0ff] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#51b0ff]/10 cursor-pointer transition-colors"
        >
          <span className="font-body font-[number:var(--body-font-weight)] text-white text-base text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
            Book a demo
          </span>
        </Button>
      </div>
    </section>
  );
};
