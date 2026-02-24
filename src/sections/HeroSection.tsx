import { MainButton } from "../components/ui/main-button";

export const HeroSection = (): JSX.Element => {
  return (
    <section
      role="region"
      aria-label="Hero banner"
      className="relative flex flex-col min-h-screen items-center justify-center gap-8 md:gap-20 px-4 md:px-6 xl:px-4 w-full overflow-hidden bg-[url(/img/hero.jpg)] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="inline-flex flex-col items-center justify-center gap-8 md:gap-20 relative max-w-md md:max-w-3xl xl:max-w-5xl w-full z-10">
        <div className="inline-flex flex-col items-center gap-5 md:gap-11 relative opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          <h1 className="relative w-full font-h1 font-[number:var(--h1-font-weight)] text-white text-4xl md:text-5xl xl:text-[75px] text-center tracking-[-0.06em] leading-tight [font-style:var(--h1-font-style)]">
            Deposits were broken... <br />
            We fixed them.
          </h1>

          <p className="max-w-4xl text-white text-base xl:text-[length:var(--body-font-size)] text-center tracking-[0] xl:tracking-[var(--body-letter-spacing)] leading-7 xl:leading-[var(--body-line-height)] relative font-body font-[number:var(--body-font-weight)] [font-style:var(--body-font-style)]">
            DepositCloud didn&apos;t just connect the dots, we automated the
            dots. Unlock resident affordability while reducing operational and
            financial risk for properties.
          </p>
        </div>

        <MainButton
          variant="glass"
          onClick={() => {
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Book a demo - scroll to contact form"
          className="opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:800ms]"
        >
          Book a demo
        </MainButton>
      </div>
    </section>
  );
};
