import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const formFields = [
  { id: "fullName", placeholder: "Full Name" },
  { id: "companyName", placeholder: "Company name" },
  { id: "portfolioSize", placeholder: "Portfolio size" },
  { id: "workEmail", placeholder: "Work email" },
];

export const ContactFormSection = (): JSX.Element => {
  return (
    <section id="contact" className="relative w-full bg-[#161616] overflow-hidden">
      <div className="w-full h-px bg-[url(https://c.animaapp.com/mjyi28kyx0b5Zs/img/divider.svg)] bg-[100%_100%]" />

      <div className="w-full max-w-[694px] mx-auto flex flex-col items-center justify-center pt-[59px] pb-0 px-4">
        <header className="flex flex-col items-center gap-[13px] w-full mb-4">
          <h1 className="w-full [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[-1.92px] leading-[normal]">
            See what DepositCloud unlocks for your portfolio
          </h1>

          <p className="flex items-center justify-center w-full h-24 [font-family:'Courier_Prime',Helvetica] font-normal text-neutral-300 text-base text-center tracking-[0] leading-7">
            A short walkthrough tailored to your operational model and the
            resident experience you&apos;re accountable for.
          </p>
        </header>

        <div className="flex flex-col items-center gap-4 pt-4 w-full max-w-[422px]">
          {formFields.map((field) => (
            <Input
              key={field.id}
              id={field.id}
              placeholder={field.placeholder}
              className="w-full h-12 bg-white border border-solid border-[#51b0ff] px-7 font-body font-[number:var(--body-font-weight)] text-[#595959] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]"
            />
          ))}

          <Button className="w-[239px] h-auto px-[23px] py-4 mt-8 rounded-[5px] border border-solid border-[#51b0ff] bg-transparent hover:bg-[#51b0ff]/10 font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            Submit demo request
          </Button>
        </div>

        <p className="flex items-center justify-center w-full mt-8 mb-4 [font-family:'Courier_Prime',Helvetica] font-normal text-base text-center tracking-[0] leading-4">
          <span className="text-[#dfdfdf] leading-7">
            You can also email us at{" "}
          </span>
          <a
            href="mailto:sales@depositcloud.com"
            className="text-[#51b0ff] leading-7 underline"
          >
            sales@depositcloud.com
          </a>
        </p>
      </div>

      <footer className="flex flex-col w-full items-center gap-[15px] mt-8 bg-transparent">
        <div className="w-full h-px bg-[url(https://c.animaapp.com/mjyi28kyx0b5Zs/img/divider-2.svg)] bg-[100%_100%]" />

        <div className="flex w-full max-w-[694px] items-center justify-center px-4 pb-4">
          <div className="flex items-center justify-center w-full [font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-[10px] tracking-[0] leading-7">
            DepositCloud © 2018 - 2026
          </div>

          <nav className="flex items-center justify-center w-full [font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-[10px] text-right tracking-[0] leading-[10px]">
            <a href="#" className="leading-7 underline">
              Terms of Service
            </a>
            <span className="leading-[0.1px]">
              &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <a href="#" className="leading-7 underline">
              Privacy policy
            </a>
            <span className="leading-[0.1px]">
              &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <a href="#" className="leading-7 underline">
              Legal Notices
            </a>
          </nav>
        </div>
      </footer>
    </section>
  );
};
