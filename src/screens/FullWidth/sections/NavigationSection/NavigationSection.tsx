import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "Book a demo", href: "#contact" },
];

const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // 1.5 seconds for slower scroll
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

export const NavigationSection = (): JSX.Element => {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full items-center justify-center gap-[11px] bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),url(https://c.animaapp.com/mjyhvu36aqUy0x/img/header.png)] bg-cover bg-center backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] py-4 border-b-[0.5px] border-[#51b0ff]">
      <nav className="flex w-full max-w-[1128px] items-center justify-between px-4 translate-y-[-1rem] animate-fade-in opacity-0">
        <img
          className="w-[262px] h-10 cursor-pointer"
          alt="Depositcloud logo"
          src="https://c.animaapp.com/mjyhvu36aqUy0x/img/depositcloud-logo.svg"
          onClick={handleLogoClick}
        />

        <div className="inline-flex items-center justify-center gap-[63px]">
          {navigationItems.map((item, index) => (
            <Button
              key={item.label}
              variant="ghost"
              className="h-auto p-0 [font-family:'Courier_Prime',Helvetica] font-normal text-white text-lg text-center tracking-[-1.26px] leading-[normal] whitespace-nowrap hover:bg-transparent hover:text-white/80 transition-colors"
              asChild
            >
              <a href={item.href} onClick={(e) => handleClick(e, item.href)}>{item.label}</a>
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
};
