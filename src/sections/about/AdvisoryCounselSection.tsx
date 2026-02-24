import { Carousel } from "../../components/ui/carousel";

interface Advisor {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const advisors: Advisor[] = [
  {
    name: "David Walther",
    title: "Chief Revenue Officer, Asset Living",
    image: "/img/david-walther.jpg",
    bio: "David drives strategic partnerships and growth initiatives at Asset Living. With more than twenty years in finance, real estate, and strategy, he brings deep technical expertise shaped by advisory roles at KPMG and RSM, where he supported over one hundred acquisitions.",
  },
  {
    name: "Mark Stringer",
    title: "EVP, Avenue5 Residential",
    image: "/img/mark-stringer.jpg",
    bio: "Mark leads revenue-focused services at Avenue5, drawing on multifamily experience dating to 1992. A licensed broker and former Greystar managing director, he provides practical insight on operational efficiency and portfolio performance.",
  },
];

const AdvisorCard = ({ advisor }: { advisor: Advisor }): JSX.Element => (
  <div
    className="shrink-0 flex flex-col gap-[29px] p-6 md:p-[49px] border border-brand-blue bg-black/20 [-webkit-backdrop-filter:blur(10px)_saturate(180%)_brightness(80%)] [backdrop-filter:blur(10px)_saturate(180%)_brightness(80%)]"
    style={{
      boxShadow: "-20px 20px 26.5px 0px rgba(0,0,0,0.05)",
    }}
  >
    <img
      src={advisor.image}
      alt={advisor.name}
      className="w-full object-cover bg-[#d9d9d9]"
      style={{ aspectRatio: "1 / 1" }}
    />

    <div className="flex flex-col gap-[9px]">
      <h3 className="font-bold text-white text-xl md:text-[24px] tracking-[-1.44px] leading-normal">
        {advisor.name}
      </h3>
      <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#dfdfdf] text-sm tracking-[-0.31px] leading-6">
        {advisor.title}
      </p>
    </div>

    <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-base tracking-[-0.31px] leading-6">
      {advisor.bio}
    </p>
  </div>
);

export const AdvisoryCounselSection = (): JSX.Element => {
  const carouselItems = advisors.map((advisor, i) => (
    <AdvisorCard key={i} advisor={advisor} />
  ));

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-[0.68]">
        <img
          src="/img/about-advisory-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 flex flex-col items-center pt-[85px] pb-[65px] px-0">
        <div className="flex flex-col items-center gap-[13px] w-full max-w-[1160px]">
          <h2 className="font-h2 font-bold text-white text-[28px] md:text-[42px] text-center tracking-[-2.52px]">
            Our advisory counsel
          </h2>

          <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-white text-sm text-center leading-7 max-w-[752px]">
            Experienced industry leaders providing strategic guidance and independent perspective.
          </p>
        </div>

        <div className="w-full mt-[52px]">
          <Carousel
            items={carouselItems}
            variant="dark"
            containerHeightOffset={350}
          />
        </div>
      </div>
    </section>
  );
};
