import React from "react";
import { Card, CardContent } from "./card";

const BlueCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5 md:w-6 md:h-6 flex-shrink-0"} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18C13.9672 18 18 13.9672 18 9C18 4.03276 13.9672 0 9 0C4.03276 0 0 4.03276 0 9C0 13.9672 4.03276 18 9 18ZM12.9727 7.34766L8.47266 11.8477C8.14219 12.1781 7.60781 12.1781 7.28086 11.8477L5.03086 9.59766C4.70039 9.26719 4.70039 8.73281 5.03086 8.40586C5.36133 8.07539 5.89570 8.07539 6.22266 8.40586L7.875 10.0582L11.7773 6.15234C12.1078 5.82188 12.6422 5.82188 12.9691 6.15234C13.2996 6.48281 13.2996 7.01719 12.9691 7.34414L12.9727 7.34766Z" fill="#51B1FF"/>
  </svg>
);

interface FeatureCardProps {
  category: string;
  title: string;
  description: string;
  features: string[];
  footer: string;
  animationDelay?: number;
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ category, title, description, features, footer, animationDelay }, ref) => {
    return (
      <Card
        ref={ref}
        data-animate="true"
        style={animationDelay ? { animationDelay: `${animationDelay}ms` } as React.CSSProperties : undefined}
        className="relative flex flex-col items-start gap-4 p-7 md:p-12 bg-black/30 border-[0.25px] border-solid border-brand-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.35)] [-webkit-backdrop-filter:blur(18px)_saturate(180%)_brightness(105%)] [backdrop-filter:blur(18px)_saturate(180%)_brightness(105%)] overflow-hidden"
      >
        <CardContent className="flex flex-col items-start gap-4 p-0 w-full">
          <p className="font-caption-small font-[number:var(--caption-small-font-weight)] text-[#DFDFDF] text-[length:var(--caption-small-font-size)] tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] [font-style:var(--caption-small-font-style)]">
            {category}
          </p>

          <h3 className="w-full font-h5 font-[number:var(--h5-font-weight)] text-white text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
            {title}
          </h3>

          <div className="flex flex-col pt-2 w-full">
            <p className="font-caption font-[number:var(--caption-font-weight)] text-[#DFDFDF] text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 pt-4 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 w-full"
              >
                <BlueCheckIcon />
                <p className="font-caption font-[number:var(--caption-font-weight)] text-white text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start pt-4 w-full">
            <p className="font-caption-small font-[number:var(--caption-small-font-weight)] text-[#DFDFDF] text-[length:var(--caption-small-font-size)] tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] [font-style:var(--caption-small-font-style)]">
              {footer}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
);

FeatureCard.displayName = "FeatureCard";
