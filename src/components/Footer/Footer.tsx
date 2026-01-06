import { Separator } from "../ui/separator";
import { useLocation } from "react-router-dom";

const footerLinks = [
  { text: "Terms of Service", href: "/terms-of-service" },
  { text: "Privacy policy", href: "/privacy-policy" },
  { text: "Legal Notices", href: "/legal-notices" },
];

export const Footer = (): JSX.Element => {
  const location = useLocation();

  return (
    <footer role="contentinfo" className="flex flex-col items-center gap-6 bg-transparent mt-auto pb-6 w-full">
      <Separator className="bg-[#51b0ff] h-[0.5px] w-full" />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1128px] mx-auto px-4 py-2 gap-4 md:gap-0">
        <div className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#8C8C8C] text-[10px] md:text-sm leading-7">
          DepositCloud © 2018 - 2026
        </div>

        <nav aria-label="Footer navigation" className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#8C8C8C] text-[10px] md:text-sm text-center md:text-right tracking-[0] leading-[10px] md:leading-7">
          {footerLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <span key={link.text}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = link.href;
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`leading-7 underline transition-colors cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-white ${
                    isActive ? 'text-white' : 'text-[#8C8C8C] hover:text-white'
                  }`}
                >
                  {link.text}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="leading-[0.1px]">
                    &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};
