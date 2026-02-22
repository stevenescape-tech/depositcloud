import { MainButton } from "../components/ui/main-button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { useState, useEffect } from "react";
import { FORMSPREE_ENDPOINT } from "../lib/constants";

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
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.workEmail,
          company: formData.companyName,
          portfolio: formData.portfolioSize,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
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
    <section id="contact" role="region" aria-labelledby="contact-heading" className="relative w-full bg-brand-dark overflow-hidden">
      <Separator className="bg-brand-blue h-[0.5px]" />

      <div className="flex flex-col items-center justify-center xl:max-w-[1112px] mx-auto px-6 pt-[30px] md:px-[30px] md:pt-14 xl:px-4 xl:pt-[85px] pb-0 md:pb-14 xl:pb-0">
        <header className="flex flex-col items-center gap-8 mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 id="contact-heading" className="font-h2 font-[number:var(--h2-font-weight)] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] text-white text-center [font-style:var(--h2-font-style)]">
            See what DepositCloud unlocks for your portfolio
          </h2>

          <p className="max-w-[822px] font-body font-[number:var(--body-font-weight)] text-neutral-300 text-[length:var(--body-font-size)] text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            A short walkthrough tailored to your operational model and the
            resident experience you&apos;re accountable for.
          </p>
        </header>

        <form onSubmit={handleSubmit} aria-label="Contact form" className="flex flex-col items-center gap-6 w-full max-w-[507px] mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {formFields.map((field) => (
            <div key={field.id} className="w-full">
              <label htmlFor={field.id} className="sr-only">
                {field.placeholder}
              </label>
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id as keyof typeof formData]}
                onChange={handleInputChange}
                required={field.required}
                disabled={isSubmitting || submitStatus === "success"}
                aria-required={field.required}
                aria-invalid={touchedFields[field.id] && !formData[field.id as keyof typeof formData].trim()}
                aria-describedby={touchedFields[field.id] && !formData[field.id as keyof typeof formData].trim() ? `${field.id}-error` : undefined}
                className={`h-12 md:h-16 bg-white text-[#595959] font-body font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] px-7 disabled:opacity-50 focus:outline-2 focus:outline-offset-2 focus:outline-brand-blue ${
                  touchedFields[field.id] && !formData[field.id as keyof typeof formData].trim()
                    ? 'border-red-500'
                    : 'border-brand-blue'
                }`}
              />
              {touchedFields[field.id] && !formData[field.id as keyof typeof formData].trim() && (
                <span id={`${field.id}-error`} className="sr-only">
                  {field.placeholder} is required
                </span>
              )}
            </div>
          ))}

          {showError && (
            <p role="alert" className="text-red-500 text-center font-body text-sm -mt-2">
              Please complete all fields
            </p>
          )}

          <MainButton
            variant="outline"
            type="submit"
            disabled={isSubmitting || submitStatus === "success"}
            aria-label={submitStatus === "success" ? "Form submitted successfully" : isSubmitting ? "Submitting form" : "Submit demo request"}
            className={`min-w-[239px] mt-8 disabled:opacity-100 ${
              submitStatus === "success"
                ? 'border-green-500 hover:bg-green-500/10'
                : ''
            }`}
          >
            {submitStatus === "success" ? "success! thank you" : isSubmitting ? "Sending..." : "Submit demo request"}
          </MainButton>

          {submitStatus === "error" && (
            <p role="alert" className="text-red-400 text-center font-body">
              Sorry, there was an error submitting your request. Please try again or email us directly.
            </p>
          )}
        </form>

        <p className="text-center font-body text-[#DFDFDF] text-lg leading-none mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          You can also email us at{" "}
          <a
            href="mailto:sales@depositcloud.com"
            className="text-brand-blue underline font-body [font-style:var(--body-font-style)] font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] text-[length:var(--body-font-size)] leading-[var(--body-line-height)] hover:text-brand-blue/80 transition-colors"
          >
            sales@depositcloud.com
          </a>
        </p>
      </div>

    </section>
  );
};
