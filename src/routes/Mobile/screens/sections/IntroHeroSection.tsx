import { Button } from "../../components/ui/button";

export const IntroHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[85px] pt-[113px] pb-[120px] px-4 relative w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(0,0,0,0.56)_100%),url(https://c.animaapp.com/mlmpqe9tsgQxxy/img/hero.png)] bg-center bg-cover">
      <div className="flex flex-col w-full max-w-[301px] items-center justify-center gap-[30px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="w-full [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[40px] text-center tracking-[-2.40px] leading-normal mb-5">
            Deposits were broken... <br />
            We fixed them.
          </h1>

          <p className="text-white text-center tracking-[0] leading-7 w-full font-caption font-[number:var(--caption-font-weight)] text-[length:var(--caption-font-size)]">
            DepositCloud didn&apos;t just connect the dots, we automated the
            dots. Unlock resident affordability while reducing operational and
            financial risk for properties.
          </p>
        </div>

        <Button
          variant="outline"
          className="w-[164px] h-auto px-[23px] py-4 bg-transparent rounded-[5px] border border-solid border-[#51b0ff] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#51b0ff]/10"
        >
          <span className="font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
            Book a demo
          </span>
        </Button>
      </div>
    </section>
  );
};
