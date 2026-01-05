import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const formFields = [
  { placeholder: "Full Name" },
  { placeholder: "Company name" },
  { placeholder: "Portfolio size" },
  { placeholder: "Work email" },
];

export const ContactFormSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#161616] overflow-hidden">
      <div className="absolute top-px -left-2.5 w-[1945px] bg-[url(https://c.animaapp.com/mjyrmx59BNbwHP/img/divider.svg)] h-px bg-[100%_100%]" />

      <div className="w-full max-w-[327px] mx-auto px-6 pt-[30px] pb-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-7 w-full mb-[77px] translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className="w-full mt-[-1.00px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[-1.68px] leading-[normal]">
            See what DepositCloud unlocks for your portfolio
          </h2>

          <p className="w-full h-24 flex items-center justify-center [font-family:'Courier_Prime',Helvetica] font-normal text-neutral-300 text-base text-center tracking-[0] leading-7">
            A short walkthrough tailored to your operational model and the
            resident experience you&apos;re accountable for.
          </p>
        </div>

        <form className="flex flex-col items-center gap-4 w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="flex flex-col items-start gap-[41px] w-full">
            {formFields.map((field, index) => (
              <Input
                key={index}
                placeholder={field.placeholder}
                className="w-full h-12 bg-white border border-solid border-[#51b0ff] px-7 [font-family:'Courier_Prime',Helvetica] font-normal text-[#595959] text-xs tracking-[0] leading-7 placeholder:text-[#595959]"
              />
            ))}
          </div>

          <Button
            type="submit"
            variant="outline"
            className="w-[239px] h-[42px] mt-[52px] px-[23px] py-4 rounded-[5px] border border-solid border-[#51b0ff] bg-transparent hover:bg-transparent font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)] h-auto"
          >
            Submit demo request
          </Button>
        </form>

        <div className="w-full mt-[27px] flex flex-col items-center justify-center gap-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-xs text-center tracking-[0] leading-7">
            You can also email us at
          </p>
          <a
            href="mailto:sales@depositcloud.com"
            className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#51b0ff] text-xs text-center tracking-[0] leading-7 underline"
          >
            sales@depositcloud.com
          </a>
        </div>
      </div>

      <footer className="flex flex-col w-full items-center gap-[15px] mt-[58px] bg-transparent">
        <div className="relative w-[1920px] bg-[url(https://c.animaapp.com/mjyrmx59BNbwHP/img/divider-5.svg)] h-px bg-[100%_100%]" />

        <div className="flex w-full max-w-[408px] items-center justify-center px-6 pb-7">
          <div className="flex flex-col w-full max-w-[266px] items-start">
            <p className="w-full flex items-center justify-center mt-[-1.00px] [font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-[8px] tracking-[0] leading-7">
              DepositCloud © 2018 - 2026
            </p>

            <p className="w-full flex items-center justify-center [font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-[8px] tracking-[0] leading-[8px]">
              <a href="#" className="leading-[14px] underline">
                Terms of Service
              </a>
              <span className="leading-[14px]">
                &nbsp;|&nbsp;
              </span>
              <a href="#" className="leading-[14px] underline">
                Privacy policy
              </a>
              <span className="leading-[14px]">
                &nbsp;|&nbsp;
              </span>
              <a href="#" className="leading-[14px] underline">
                Legal Notices
              </a>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
