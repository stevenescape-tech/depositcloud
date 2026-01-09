import { useState } from "react";

const navigationItems = [
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "Book a demo", href: "#book-demo" },
];

export const MainHeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),url(https://c.animaapp.com/mk4ukvevAaIUXO/img/header.png)] bg-cover bg-center backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] py-4 px-4 border-b-[0.5px] border-[#51b0ff]">
        <img
          className="w-[150px] h-auto"
          alt="Depositcloud logo"
          src="https://c.animaapp.com/mk4ukvevAaIUXO/img/depositcloud-logo.svg"
        />

        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex items-center justify-center text-white hover:opacity-80 transition-opacity z-50"
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon */}
          <div className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
          
          {/* X Icon */}
          <div className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-300 ${
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
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={toggleMenu}
              className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-2xl text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity"
              style={{
                transitionDelay: isMenuOpen ? `${(index + 1) * 50}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
