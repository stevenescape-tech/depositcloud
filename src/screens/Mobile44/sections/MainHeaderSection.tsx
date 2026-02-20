import { useState } from "react";

export const MainHeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    // Smooth scroll to top
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
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[10000] flex w-full items-center justify-between bg-black/60 backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] py-4 px-4 border-b-[0.5px] border-[#51b0ff]">
        <img
          className="w-[150px] h-auto cursor-pointer"
          alt="Depositcloud logo"
          src="/img/depositcloud-logo.svg"
          onClick={handleLogoClick}
        />

        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex items-center justify-center text-white hover:opacity-80 transition-opacity z-[10001]"
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
      </header>

      <div
        className={`fixed inset-0 z-[9999] bg-black transition-all duration-300 ${
          isMenuOpen
            ? "opacity-95 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <nav
          className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-300 delay-100 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href="#platform"
            onClick={(e) => handleClick(e, '#platform')}
            className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-2xl text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity"
            style={{
              transitionDelay: isMenuOpen ? '50ms' : "0ms",
            }}
          >
            Platform
          </a>
          
          <a
            href="#features"
            onClick={(e) => handleClick(e, '#features')}
            className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-2xl text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity"
            style={{
              transitionDelay: isMenuOpen ? '100ms' : "0ms",
            }}
          >
            Features
          </a>
          
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-2xl text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity"
            style={{
              transitionDelay: isMenuOpen ? '150ms' : "0ms",
            }}
          >
            Book a demo
          </a>
          
          <a
            href="https://new.depositcloud.com/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-2xl text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity"
            style={{
              transitionDelay: isMenuOpen ? '200ms' : "0ms",
            }}
          >
            Login
          </a>
        </nav>
      </div>
    </>
  );
};
