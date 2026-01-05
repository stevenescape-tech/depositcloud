import { Button } from "../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center gap-[30px] px-4 relative w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.70)_100%),url(https://c.animaapp.com/mjyhvu36aqUy0x/img/hero.png)] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="flex flex-col w-full max-w-[301px] items-center justify-center gap-[30px] relative z-10">
        <div className="flex flex-col items-center w-full gap-5 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          <h1 className="w-full font-h1 font-[number:var(--h1-font-weight)] text-white text-[40px] text-center tracking-[-2.40px] leading-[normal] [font-style:var(--h1-font-style)]">
            Deposits were broken... <br />
            We fixed them.
          </h1>

          <p className="text-white text-center tracking-[0] leading-7 w-full font-caption font-[number:var(--caption-font-weight)] text-[length:var(--caption-font-size)] [font-style:var(--caption-font-style)]">
            DepositCloud didn&apos;t just connect the dots, we automated the
            dots. Unlock resident affordability while reducing operational and
            financial risk for properties.
          </p>
        </div>

        <Button className="w-[164px] h-auto px-[23px] py-4 bg-transparent rounded-[5px] border border-solid border-[#51b0ff] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#51b0ff]/10 transition-colors opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:800ms]">
          <span className="font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
            Book a demo
          </span>
        </Button>
      </div>
    </section>
  );
};
