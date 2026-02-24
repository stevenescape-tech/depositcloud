import { Carousel } from "../components/ui/carousel";
import { MainButton } from "../components/ui/main-button";

interface Executive {
  name: string;
  title: string;
  image?: string;
}

const executives: Executive[] = [
  { name: "Michael Bowman", title: "Founder & CEO", image: "/img/michael-bowman.jpg" },
  { name: "Ash Bell", title: "President & COO", image: "/img/ash-bell.jpg" },
  { name: "Hannah Crompton", title: "SVP of Finance", image: "/img/hannah-crompton.jpg" },
  { name: "Niki Trimble", title: "SVP of Client Success", image: "/img/niki-trimble.png" },
  { name: "Daria Davis", title: "SVP of DevOps", image: "/img/daria-davis.jpg" },
];

const ExecutiveCard = ({ exec }: { exec: Executive }): JSX.Element => (
  <div
    className="shrink-0 flex flex-col gap-[29px] p-6 md:p-[49px] border-[0.25px] border-brand-blue bg-white/35 [-webkit-backdrop-filter:blur(10px)_saturate(180%)_brightness(105%)] [backdrop-filter:blur(10px)_saturate(180%)_brightness(105%)]"
    style={{
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(255,255,255,0.2), -20px 20px 26.5px 0px rgba(0,0,0,0.05)",
    }}
  >
    {exec.image ? (
      <img
        src={exec.image}
        alt={exec.name}
        className="w-full object-cover bg-[#d9d9d9]"
        style={{ aspectRatio: "1 / 1" }}
      />
    ) : (
      <div
        className="w-full bg-[#d9d9d9]"
        style={{ aspectRatio: "1 / 1" }}
      />
    )}

    <div className="flex flex-col gap-[9px]">
      <h3 className="font-bold text-[#2c2c2c] text-xl md:text-[24px] tracking-[-1.44px] leading-normal">
        {exec.name}
      </h3>
      <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#5a5a5a] text-sm tracking-[-0.31px] leading-6">
        {exec.title}
      </p>
    </div>
  </div>
);

export const WhoWeAreSection = (): JSX.Element => {
  const carouselItems = executives.map((exec, i) => (
    <ExecutiveCard key={i} exec={exec} />
  ));

  return (
    <section id="about" className="relative w-full overflow-hidden scroll-mt-[72px]">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[url(/img/whoweare-bg.png)] bg-cover bg-center bg-no-repeat opacity-15" />

      <div className="relative z-10 flex flex-col items-center gap-[52px] pt-[85px] pb-[52px] px-0">
        <h2 className="font-h2 font-bold text-[#2c2c2c] text-[28px] md:text-[42px] text-center tracking-[-2.52px]">
          Who we are
        </h2>

        <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2c2c2c] text-lg text-center leading-7">
          The team behind DepositCloud
        </p>

        <Carousel items={carouselItems} />

        <a href="/about">
          <MainButton variant="outline" className="text-[#2c2c2c] hover:text-[#2c2c2c]">
            Learn more about us
          </MainButton>
        </a>
      </div>
    </section>
  );
};
