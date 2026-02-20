import { Button } from "../../components/ui/button";

const navigationItems = [
  { label: "Platform", href: "#platform", external: false },
  { label: "Features", href: "#features", external: false },
  { label: "Book a demo", href: "#contact", external: false },
  { label: "Login", href: "https://new.depositcloud.com/sign_in", external: true },
];

export const MainNavigationSection = (): JSX.Element => {
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external: boolean) => {
    if (external) {
      return;
    }
    
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Get the header height to offset the scroll
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full items-center justify-center gap-[11px] bg-black/60 backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] py-4 border-b-[0.5px] border-[#51b0ff]">
      <nav className="flex w-full items-center justify-between px-[30px]">
        <img
          className="w-[201px] h-[30.69px] cursor-pointer"
          alt="Depositcloud logo"
          src="/img/depositcloud-logo.svg"
          onClick={handleLogoClick}
        />

        <div className="inline-flex items-center justify-center gap-[50px]">
          {navigationItems.map((item, index) => (
            item.external ? (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-base text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer"
              >
                {item.label}
              </a>
            ) : (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-0 hover:bg-transparent [font-family:'Courier_Prime',Helvetica] font-normal text-white text-base text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:text-white/80 transition-colors"
                asChild
              >
                <a href={item.href} onClick={(e) => handleClick(e, item.href, item.external)}>{item.label}</a>
              </Button>
            )
          ))}
        </div>
      </nav>
    </header>
  );
};
