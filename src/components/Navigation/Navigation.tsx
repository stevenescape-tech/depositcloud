import { Button } from "../ui/button";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../../lib/constants";

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="5" r="4.5" />
    <path d="M0 18C0 13.5817 3.58172 10 8 10C12.4183 10 16 13.5817 16 18H0Z" />
  </svg>
);

interface NavigationProps {
  variant?: 'home' | 'legal';
}

const navLinks = [
  { label: "Platform", href: "#platform", external: false },
  { label: "Features", href: "#features", external: false },
  { label: "Book a demo", href: "#contact", external: false },
  { label: "Get Support", href: "#support", external: false, hasDropdown: true },
  { label: "About", href: "/about", external: false },
];

const SupportDropdown = () => (
  <div className="absolute top-full left-0 mt-3 w-[420px] z-50
    border border-brand-blue bg-black/75 
    [backdrop-filter:blur(19px)] [-webkit-backdrop-filter:blur(19px)]
    shadow-[-20px_20px_26px_rgba(0,0,0,0.05)]
    p-10 flex flex-col gap-3">
    <p className="font-h2 text-white text-2xl tracking-[-1.44px] leading-normal">Support</p>
    <p className="[font-family:'Courier_Prime',Helvetica] text-white text-sm tracking-[-0.98px] leading-normal">
      855-753-1650 or email{" "}
      <a
        href="mailto:support@depositcloud.com"
        className="text-brand-blue underline hover:opacity-80 transition-opacity"
        onClick={(e) => e.stopPropagation()}
      >
        support@depositcloud.com
      </a>
    </p>
  </div>
);

export const Navigation = ({ variant = 'home' }: NavigationProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const supportTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (variant === 'legal' || window.location.pathname !== '/') {
      navigate('/');
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external: boolean, hasDropdown?: boolean) => {
    if (external) return;
    if (hasDropdown) { e.preventDefault(); return; }

    e.preventDefault();
    
    if (variant === 'legal') {
      navigate('/' + href);
    } else if (href.startsWith('/')) {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        setIsMenuOpen(false);
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
      } else {
        navigate('/' + href);
      }
    }
    setIsMenuOpen(false);
  };

  const openSupport = () => {
    if (supportTimeout.current) clearTimeout(supportTimeout.current);
    setSupportOpen(true);
  };

  const closeSupport = () => {
    supportTimeout.current = setTimeout(() => setSupportOpen(false), 150);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const loginButtonDesktop = (
    <a
      href={LOGIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-[9px] h-10 w-[102px] pl-[11px] pr-[8px] py-[7px] rounded-[6px] border border-solid border-brand-blue [font-family:'Courier_Prime',Helvetica] font-normal text-white text-base text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:bg-brand-blue/10 transition-all cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-white"
    >
      <UserIcon className="w-[15px] h-[14px] shrink-0 text-brand-blue" />
      Login
    </a>
  );

  const loginButtonTablet = (
    <a
      href={LOGIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-[9px] h-9 w-[90px] pl-[11px] pr-[8px] py-[7px] rounded-[6px] border border-solid border-brand-blue [font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:bg-brand-blue/10 transition-all cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-white"
    >
      <UserIcon className="w-[13px] h-[12px] shrink-0 text-brand-blue" />
      Login
    </a>
  );

  const loginButtonMobile = (
    <a
      href={LOGIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-[9px] h-10 px-5 py-[7px] rounded-[6px] border border-solid border-brand-blue [font-family:'Courier_Prime',Helvetica] font-normal text-white text-2xl text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:bg-brand-blue/10 transition-all cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-white"
      style={{
        transitionDelay: isMenuOpen ? `${(navLinks.length + 1) * 50}ms` : "0ms",
      }}
    >
      <UserIcon className="w-[15px] h-[14px] shrink-0 text-brand-blue" />
      Login
    </a>
  );

  return (
    <>
      <header role="banner" className="fixed top-0 left-0 right-0 z-[10002] flex flex-col w-full items-center justify-center gap-[11px] bg-black/50 py-4 border-b-[0.5px] border-b-brand-blue/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.3)] [-webkit-backdrop-filter:blur(20px)_saturate(180%)_brightness(110%)] [backdrop-filter:blur(20px)_saturate(180%)_brightness(110%)]">
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

          <div className="inline-flex items-center justify-center gap-[40px]">
            {navLinks.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative flex items-center"
                  onMouseEnter={openSupport}
                  onMouseLeave={closeSupport}
                >
                  <button
                    className="h-auto p-0 [font-family:'Courier_Prime',Helvetica] font-normal text-white text-base text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap transition-colors bg-transparent border-0 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-white hover:text-brand-blue"
                  >
                    {item.label}
                  </button>
                  {supportOpen && (
                    <div onMouseEnter={openSupport} onMouseLeave={closeSupport}>
                      <SupportDropdown />
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="h-auto p-0 [font-family:'Courier_Prime',Helvetica] font-normal text-white text-base text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:bg-transparent hover:text-brand-blue transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
                  asChild
                >
                  <a href={item.href} onClick={(e) => handleClick(e, item.href, item.external)}>{item.label}</a>
                </Button>
              )
            ))}
            {loginButtonDesktop}
          </div>
        </nav>

        {/* Tablet Navigation (768px - 1279px) */}
        <nav className="hidden md:flex xl:hidden w-full mx-auto px-[46px] items-center justify-between translate-y-[-1rem] animate-fade-in opacity-0">
          <button
            onClick={handleLogoClick}
            className="cursor-pointer bg-transparent border-0 p-0 shrink-0 focus:outline-2 focus:outline-offset-2 focus:outline-white"
            aria-label={variant === 'legal' ? 'Return to homepage' : 'Return to top of page'}
          >
            <img
              className="w-[262px] h-10"
              alt="DepositCloud"
              src="/img/depositcloud-logo.svg"
            />
          </button>

          <div className="inline-flex items-center justify-center gap-[16px] lg:gap-[28px]">
            {navLinks.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative flex items-center"
                  onMouseEnter={openSupport}
                  onMouseLeave={closeSupport}
                >
                  <button className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs lg:text-sm text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap transition-colors bg-transparent border-0 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-white hover:text-brand-blue">
                    {item.label}
                  </button>
                  {supportOpen && (
                    <div onMouseEnter={openSupport} onMouseLeave={closeSupport}>
                      <SupportDropdown />
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href, item.external)}
                  className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-xs lg:text-sm text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:text-brand-blue transition-colors cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-white"
                >
                  {item.label}
                </a>
              )
            ))}
            {loginButtonTablet}
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

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black transition-all duration-300 ${
          isMenuOpen ? 'opacity-95 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 10003 }}
        onClick={toggleMenu}
      >
        <div className="flex w-full px-4 py-4">
          <div className="flex w-full items-center justify-between">
            <button
              onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); handleLogoClick(); }}
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
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <nav
          role="navigation"
          aria-label="Mobile menu"
          className={`flex flex-col items-center justify-center flex-1 gap-8 transition-all duration-300 delay-100 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ height: 'calc(100% - 72px)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((item, index) => (
            item.hasDropdown ? (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="[font-family:'Courier_Prime',Helvetica] font-normal text-brand-blue text-2xl text-center tracking-[-1.12px] leading-[normal]">
                  {item.label}
                </span>
                <p className="[font-family:'Courier_Prime',Helvetica] text-white text-sm text-center tracking-[-0.5px] px-8">
                  855-753-1650 or{" "}
                  <a
                    href="mailto:support@depositcloud.com"
                    className="text-brand-blue underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    support@depositcloud.com
                  </a>
                </p>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href, item.external)}
                className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-2xl text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:text-brand-blue transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
                style={{
                  transitionDelay: isMenuOpen ? `${(index + 1) * 50}ms` : "0ms",
                }}
              >
                {item.label}
              </a>
            )
          ))}
          {loginButtonMobile}
        </nav>
      </div>
    </>
  );
};
