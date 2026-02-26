import { Carousel } from "../../components/ui/carousel";

interface Executive {
  name: string;
  title: string;
  image?: string;
  bio: string;
}

const executives: Executive[] = [
  {
    name: "Michael Bowman",
    title: "Founder & CEO",
    image: "/img/michael-bowman.jpg",
    bio: "Founder of DepositCloud, Michael sets the company's strategic direction and long-term vision. With a background in accounting, business science, and property management, he launched the platform to modernize security deposit processes and reduce operational burden for owners and operators.",
  },
  {
    name: "Ash Bell",
    title: "President & COO",
    image: "/img/ash-bell.jpg",
    bio: "Ash leads operational execution across the organization. With more than twenty years in PropTech and FinTech, he specializes in deploying complex financial solutions at scale while maintaining stability, regulatory compliance, and service reliability.",
  },
  {
    name: "Hannah Crompton",
    title: "EVP of Finance",
    image: "/img/hannah-crompton.jpg",
    bio: "Hannah oversees financial strategy, governance, and performance. She manages enterprise accounting systems, capital planning, and risk controls to ensure transparency, compliance, and long-term financial stability as the company scales.",
  },
  {
    name: "Niki Trimble",
    title: "EVP of Client Success",
    image: "/img/niki-trimble.jpg",
    bio: "Niki drives implementation and long-term partner outcomes across major client portfolios. Her work focuses on adoption, operational performance, and delivering measurable value while reducing administrative burden for clients.",
  },
  {
    name: "Daria Davis",
    title: "EVP of DevOps",
    image: "/img/daria-davis.jpg",
    bio: "Daria directs platform architecture, security, and scalability. She oversees infrastructure and system integrations that ensure reliable performance and secure data exchange across large multifamily portfolios.",
  },
];

const ExecutiveCard = ({ exec }: { exec: Executive }): JSX.Element => (
  <div
    className="shrink-0 flex flex-col gap-[20px] p-6 md:p-[30px] border-[0.25px] border-brand-blue bg-white/35 [-webkit-backdrop-filter:blur(10px)_saturate(180%)_brightness(105%)] [backdrop-filter:blur(10px)_saturate(180%)_brightness(105%)]"
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
      <div className="w-full bg-[#d9d9d9]" style={{ aspectRatio: "1 / 1" }} />
    )}

    <div className="flex flex-col gap-[9px]">
      <h3 className="font-bold text-[#2c2c2c] text-xl md:text-[24px] tracking-[-1.44px] leading-normal">
        {exec.name}
      </h3>
      <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#5a5a5a] text-sm tracking-[-0.31px] leading-6">
        {exec.title}
      </p>
    </div>

    <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2c2c2c] text-sm tracking-[-0.31px] leading-6">
      {exec.bio}
    </p>
  </div>
);

export const MeetExecutiveTeamSection = (): JSX.Element => {
  const carouselItems = executives.map((exec, i) => (
    <ExecutiveCard key={i} exec={exec} />
  ));

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[url(/img/whoweare-bg.jpg)] bg-cover bg-center bg-no-repeat opacity-15" />

      <div className="relative z-10 flex flex-col items-center gap-[52px] pt-[85px] pb-[85px] px-0">
        <div className="flex flex-col items-center gap-[13px]">
          <h2 className="font-h2 font-bold text-[#2c2c2c] text-[28px] md:text-[42px] text-center tracking-[-2.52px]">
            Meet our executive team
          </h2>

          <p className="[font-family:'Courier_Prime',Helvetica] font-normal text-[#2c2c2c] text-sm text-center leading-7">
            The team behind DepositCloud
          </p>
        </div>

        <Carousel items={carouselItems} cardWidthDesktop={440} />
      </div>
    </section>
  );
};
