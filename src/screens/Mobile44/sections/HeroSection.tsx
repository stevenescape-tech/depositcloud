    import { Button } from "../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section 
      className="relative flex flex-col min-h-screen items-center justify-center gap-8 px-4 w-full overflow-hidden bg-[url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/hero.png)] bg-cover bg-center bg-fixed bg-no-repeat"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="flex flex-col w-full max-w-md items-center justify-center gap-8 relative z-10">
        <div className="flex flex-col items-center w-full gap-5 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          <h1 className="w-full font-h1 font-[number:var(--h1-font-weight)] text-white text-4xl sm:text-[40px] text-center tracking-[-0.06em] leading-tight [font-style:var(--h1-font-style)]">
            Deposits were broken... <br />
            We fixed them.
          </h1>

          <p className="text-white text-center tracking-[0] leading-7 w-full font-caption font-[number:var(--caption-font-weight)] text-base sm:text-[length:var(--caption-font-size)] [font-style:var(--caption-font-style)]">
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
          className="w-auto min-w-[164px] h-auto px-6 py-4 bg-transparent rounded-[5px] border border-solid border-[#51b0ff] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#51b0ff]/10 transition-colors opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:800ms] cursor-pointer"
        >
          <span className="font-body font-[number:var(--body-font-weight)] text-white text-base text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
            Book a demo
          </span>
        </Button>
      </div>
    </section>
  );
};
