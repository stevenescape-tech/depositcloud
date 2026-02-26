import * as React from "react";
import { cn } from "../../lib/utils";

export interface MainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "glass" | "outline";
}

const MainButton = React.forwardRef<HTMLButtonElement, MainButtonProps>(
  ({ className, variant = "glass", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "h-auto w-auto px-6 py-4 rounded-[5px] border-0 shadow-[inset_0_0_0_0.5px_#51b0ff] bg-transparent cursor-pointer transition-all duration-300 font-body font-[number:var(--body-font-weight)] text-white text-base text-center tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] whitespace-nowrap hover:bg-brand-blue/10 focus:outline-2 focus:outline-offset-2 focus:outline-white disabled:cursor-not-allowed",
          variant === "glass" &&
            "shadow-[inset_0_0_0_0.5px_#51b0ff,inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(255,255,255,0.05),0_4px_16px_rgba(0,0,0,0.2)] [-webkit-backdrop-filter:blur(16px)_saturate(180%)_brightness(115%)] [backdrop-filter:blur(16px)_saturate(180%)_brightness(115%)] bg-white/[0.06]",
          variant === "outline" &&
            "",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
MainButton.displayName = "MainButton";

export { MainButton };
