import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section role="region" aria-label="Hero banner" className="relative flex flex-col min-h-screen items-center justify-center gap-[85px] py-[255px] px-4 w-screen overflow-hidden bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/hero.png)] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="inline-flex flex-col items-center justify-center gap-[85px] relative max-w-[974px] w-full z-10">
        <div className="inline-flex flex-col items-center gap-11 relative opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          <h1 className="relative w-full font-h1 font-[number:var(--h1-font-weight)] text-white text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
            Deposits were broken... <br />
            We fixed them.
          </h1>

          <p className="max-w-[974px] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] relative font-body font-[number:var(--body-font-weight)] [font-style:var(--body-font-style)]">
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
          aria-label="Book a demo - scroll to contact form"
          className="h-auto w-auto px-[23px] py-4 bg-transparent rounded-[5px] border border-solid border-[#51b0ff] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#51b0ff]/10 transition-colors opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:800ms] cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-white"
        >
          <span className="font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
            Book a demo
          </span>
        </Button>
      </div>
    </section>
  );
};
