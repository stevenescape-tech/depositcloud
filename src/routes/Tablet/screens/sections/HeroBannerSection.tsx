import { Button } from "../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-[85px] min-h-screen px-4 relative w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.70)_100%),url(/img/hero.png)] bg-center bg-cover bg-fixed bg-no-repeat">
      <div className="inline-flex flex-col items-center justify-center gap-[85px] relative max-w-[694px] w-full z-10">
        <div className="inline-flex flex-col items-center gap-11 relative opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          <h1 className="relative w-full font-h1 font-[number:var(--h1-font-weight)] text-white text-[55px] text-center tracking-[-3.30px] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
            Deposits were broken... <br />
            We fixed them.
          </h1>

          <p className="max-w-[564px] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] relative font-body font-[number:var(--body-font-weight)] [font-style:var(--body-font-style)]">
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
          className="h-auto w-fit px-[23px] py-4 bg-transparent rounded-[5px] border border-solid border-[#51b0ff] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#51b0ff]/10 cursor-pointer transition-colors opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:800ms]"
        >
          <span className="font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
            Book a demo
          </span>
        </Button>
      </div>
    </section>
  );
};
