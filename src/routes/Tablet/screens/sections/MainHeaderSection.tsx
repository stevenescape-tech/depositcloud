export const MainHeaderSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Platform", href: "#platform" },
    { label: "Features", href: "#features" },
    { label: "Book a demo", href: "#book-demo" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full items-center justify-center gap-[11px] bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),url(https://c.animaapp.com/mjyhvu36aqUy0x/img/header.png)] bg-cover bg-center backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] py-4 border-b-[0.5px] border-[#51b0ff]">
      <nav className="flex w-full max-w-[694px] items-center justify-between px-4">
        <img
          className="w-[201px] h-[30.69px]"
          alt="Depositcloud logo"
          src="https://c.animaapp.com/mjyi28kyx0b5Zs/img/depositcloud-logo.svg"
        />

        <div className="inline-flex items-center justify-center gap-[50px]">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
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
