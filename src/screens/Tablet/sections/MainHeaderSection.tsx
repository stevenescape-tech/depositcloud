export const MainHeaderSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Platform", href: "#platform" },
    { label: "Features", href: "#features" },
    { label: "Book a demo", href: "#contact" },
  ];

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

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex flex-col w-full items-center justify-center gap-[11px] bg-black/70 backdrop-blur-md backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] py-4 border-b-[0.5px] border-[#51b0ff]">
      <nav className="flex w-full max-w-[694px] items-center justify-between px-4 translate-y-[-1rem] animate-fade-in opacity-0">
        <img
          className="w-[201px] h-[30.69px] cursor-pointer"
          alt="Depositcloud logo"
          src="/img/depositcloud-logo.svg"
          onClick={handleLogoClick}
        />

        <div className="inline-flex items-center justify-center gap-[50px]">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-base text-center tracking-[-1.12px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
