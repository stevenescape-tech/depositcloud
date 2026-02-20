import { Button } from "../ui/button";
import { useState } from "react";

interface NavigationProps {
  variant?: 'home' | 'legal';
}

const navigationItems = [
  { label: "Platform", href: "#platform", external: false },
  { label: "Features", href: "#features", external: false },
  { label: "Book a demo", href: "#contact", external: false },
  { label: "Login", href: "https://new.depositcloud.com/sign_in", external: true },
];

export const Navigation = ({ variant = 'home' }: NavigationProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (variant === 'legal') {
      window.location.href = '/';
    } else {
      const startPosition = window.pageYOffset;
      const distance = -startPosition;
      const duration = 1500;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external: boolean) => {
    if (external) {
      return;
    }

    e.preventDefault();
    
    if (variant === 'legal') {
      window.location.href = '/' + href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1500;
        let start: number | null = null;

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t: number, b: number, c: number, d: number) => {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
      }
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header role="banner" className="fixed top-0 left-0 right-0 z-[10002] flex flex-col w-full items-center justify-center gap-[11px] bg-black/70 backdrop-blur-md py-4 border-b-[0.5px] border-b-[#51b0ff]">
        {/* Desktop Navigation (1280px+) */}
        <nav role="navigation" aria-label="Main navigation" className="hidden xl:flex w-full max-w-[1112px] mx-auto px-4 items-center justify-between translate-y-[-1rem] animate-fade-in opacity-0">
          <button
            onClick={handleLogoClick}
            className="cursor-pointer bg-transparent border-0 p-0 focus:outline-2 focus:outline-offset-2 focus:outline-white"
            aria-label={variant === 'legal' ? 'Return to homepage' : 'Return to top of page'}
          >
            <img
              className="w-[262px] h-10"
              alt="DepositCloud"
              src="/img/depositcloud-logo.svg"
            />
          </button>

          <div className="inline-flex items-center justify-center gap-[63px]">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="h-auto p-0 [font-family:'Courier_Prime',Helvetica] font-normal text-white text-lg text-center tracking-[-1.26px] leading-[normal] whitespace-nowrap hover:bg-transparent hover:text-white/80 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
                asChild
              >
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
                ) : (
                  <a href={item.href} onClick={(e) => handleClick(e, item.href, item.external)}>{item.label}</a>
                )}
              </Button>
            ))}
          </div>
        </nav>

        {/* Tablet Navigation (768px - 1279px) */}
        <nav className="hidden md:flex xl:hidden w-full mx-auto px-[46px] items-center justify-between translate-y-[-1rem] animate-fade-in opacity-0">
          <button
            onClick={handleLogoClick}
            className="cursor-pointer bg-transparent border-0 p-0 focus:outline-2 focus:outline-offset-2 focus:outline-white"
            aria-label={variant === 'legal' ? 'Return to homepage' : 'Return to top of page'}
          >
            <img
              className="w-[201px] h-[30.69px]"
              alt="DepositCloud"
              src="/img/depositcloud-logo.svg"
            />
          </button>

          <div className="inline-flex items-center justify-center gap-[50px]">
            {navigationItems.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-base text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-white"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href, item.external)}
                  className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-base text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-white"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </nav>

        {/* Mobile Navigation (<768px) */}
        <div className="flex md:hidden w-full px-4">
          <div className="flex w-full items-center justify-between">
            <button
              onClick={handleLogoClick}
              className="cursor-pointer bg-transparent border-0 p-0 focus:outline-2 focus:outline-offset-2 focus:outline-white"
              aria-label={variant === 'legal' ? 'Return to homepage' : 'Return to top of page'}
            >
              <img
                className="w-[150px] h-auto"
                alt="DepositCloud"
                src="/img/depositcloud-logo.svg"
              />
            </button>

            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
              
              <div className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside header, fixed positioning */}
      <div
        className={`md:hidden fixed inset-0 bg-black transition-all duration-300 ${
          isMenuOpen ? 'opacity-95 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 10000 }}
        onClick={toggleMenu}
      >
        <nav
          role="navigation"
          aria-label="Mobile menu"
          className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-300 delay-100 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navigationItems.map((item, index) => (
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-2xl text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-white"
                style={{
                  transitionDelay: isMenuOpen ? `${(index + 1) * 50}ms` : "0ms",
                }}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href, item.external)}
                className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-2xl text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-white"
                style={{
                  transitionDelay: isMenuOpen ? `${(index + 1) * 50}ms` : "0ms",
                }}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>
      </div>
    </>
  );
};
