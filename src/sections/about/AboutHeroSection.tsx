export const AboutHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden border-b-[0.5px] border-brand-blue">
      <div className="absolute inset-0 overflow-hidden opacity-[0.68]">
        <img
          src="/img/about-hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 flex flex-col items-center pt-[176px] border-b-[0.5px] border-brand-blue">
        <div className="flex flex-col items-center gap-[13px] pb-[52px] px-6">
          <h1 className="font-h2 font-bold text-white text-[28px] md:text-[42px] text-center tracking-[-2.52px]">
            About us
          </h1>
          <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-lg text-center leading-7 max-w-[822px]">
            Leading the future of security deposit management with transparency, innovation, and unwavering commitment to our clients and their residents.
          </p>
        </div>
      </div>
    </section>
  );
};
