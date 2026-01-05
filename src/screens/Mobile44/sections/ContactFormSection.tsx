import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState, useEffect } from "react";

const formFields = [
  { id: "fullName", placeholder: "Full Name", type: "text", required: true },
  { id: "companyName", placeholder: "Company name", type: "text", required: true },
  { id: "portfolioSize", placeholder: "Portfolio size", type: "text", required: true },
  { id: "workEmail", placeholder: "Work email", type: "email", required: true },
];

export const ContactFormSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    portfolioSize: "",
    workEmail: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setTouchedFields((prev) => ({ ...prev, [id]: true }));
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== "");

  useEffect(() => {
    if (isFormValid) {
      setShowError(false);
    }
  }, [isFormValid]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const allTouched = formFields.reduce((acc, field) => {
      acc[field.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouchedFields(allTouched);

    if (!isFormValid) {
      setShowError(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setShowError(false);

    try {
      const response = await fetch('https://formspree.io/f/xaqnzljo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          company: formData.companyName,
          portfolio: formData.portfolioSize,
          email: formData.workEmail,
          _replyto: formData.workEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      setSubmitStatus("success");
      setFormData({
        fullName: "",
        companyName: "",
        portfolioSize: "",
        workEmail: "",
      });
      setTouchedFields({});
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#161616] overflow-hidden">
      <div className="absolute top-px -left-2.5 w-[1945px] bg-[url(https://c.animaapp.com/mjyrmx59BNbwHP/img/divider.svg)] h-px bg-[100%_100%]" />

      <div className="w-full mx-auto px-6 pt-[30px] pb-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-7 w-full mb-[77px] translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className="w-full mt-[-1.00px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[-1.68px] leading-[normal]">
            See what DepositCloud unlocks for your portfolio
          </h2>

          <p className="w-full h-24 flex items-center justify-center [font-family:'Courier_Prime',Helvetica] font-normal text-neutral-300 text-base text-center tracking-[0] leading-7">
            A short walkthrough tailored to your operational model and the
            resident experience you&apos;re accountable for.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="flex flex-col items-start gap-[41px] w-full">
            {formFields.map((field) => (
              <Input
                key={field.id}
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id as keyof typeof formData]}
                onChange={handleInputChange}
                required={field.required}
                disabled={isSubmitting || submitStatus === "success"}
                className={`w-full h-12 bg-white border border-solid px-7 [font-family:'Courier_Prime',Helvetica] font-normal text-[#595959] text-xs tracking-[0] leading-7 placeholder:text-[#595959] disabled:opacity-50 ${
                  touchedFields[field.id] && !formData[field.id as keyof typeof formData].trim()
                    ? 'border-red-500'
                    : 'border-[#51b0ff]'
                }`}
              />
            ))}
          </div>

          {showError && (
            <p className="text-red-500 text-center [font-family:'Courier_Prime',Helvetica] font-normal text-xs -mt-2">
              Please complete all fields
            </p>
          )}

          <Button
            type="submit"
            variant="outline"
            disabled={isSubmitting || submitStatus === "success"}
            className={`w-auto min-w-[239px] h-auto mt-[52px] px-[23px] py-4 rounded-[5px] border border-solid bg-transparent hover:bg-transparent font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] disabled:opacity-100 ${
              submitStatus === "success"
                ? 'border-green-500 hover:bg-green-500/10'
                : 'border-[#51b0ff] hover:bg-[#51b0ff]/10'
            }`}
          >
            {submitStatus === "success" ? "success! thank you" : isSubmitting ? "Sending..." : "Submit demo request"}
          </Button>

          {submitStatus === "error" && (
            <p className="text-red-400 text-center [font-family:'Courier_Prime',Helvetica] font-normal text-xs mt-2">
              Sorry, there was an error. Please try again or email us directly.
            </p>
          )}
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
