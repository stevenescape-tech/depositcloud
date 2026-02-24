import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Executive {
  name: string;
  title: string;
  image?: string;
}

const executives: Executive[] = [
  { name: "Executive Name", title: "Title" },
  { name: "Executive Name", title: "Title" },
  { name: "Executive Name", title: "Title" },
  { name: "Executive Name", title: "Title" },
  { name: "Executive Name", title: "Title" },
  { name: "Executive Name", title: "Title" },
];

export const WhoWeAreSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(551.5);
  const [visibleCount, setVisibleCount] = useState(2);
  const [containerWidth, setContainerWidth] = useState(1124);
  const containerRef = useRef<HTMLDivElement>(null);
  const gap = 21;
  const count = executives.length;

  const updateDimensions = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setVisibleCount(1);
      setCardWidth(Math.min(width - 48, 434));
    } else if (width < 1280) {
      setVisibleCount(2);
      setCardWidth(Math.min((width - 92 - gap) / 2, 500));
    } else {
      setVisibleCount(2);
      setCardWidth(551.5);
    }
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    } else {
      setContainerWidth(width);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % count);
  };

  const getVisibleIndices = () => {
    const indices: number[] = [];
    for (let i = 0; i < visibleCount; i++) {
      indices.push((currentIndex + i) % count);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  const renderOrder: number[] = [];
  const totalToShow = Math.min(count, visibleCount + 4);
  const startOffset = Math.floor((totalToShow - visibleCount) / 2);
  for (let i = -startOffset; i < totalToShow - startOffset; i++) {
    renderOrder.push(((currentIndex + i) % count + count) % count);
  }

  const activeGroupWidth = visibleCount * cardWidth + (visibleCount - 1) * gap;
  const centerOffset = (containerWidth - activeGroupWidth) / 2;
  const trackOffset = centerOffset - startOffset * (cardWidth + gap);

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

        <div ref={containerRef} className="w-full overflow-visible">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${trackOffset}px)`,
              gap: `${gap}px`,
            }}
          >
            {renderOrder.map((execIndex, i) => {
              const isActive = visibleIndices.includes(execIndex);
              const exec = executives[execIndex];

              return (
                <div
                  key={`${currentIndex}-${i}`}
                  className="shrink-0 flex flex-col gap-[29px] p-6 md:p-[49px] border border-brand-blue bg-transparent transition-opacity duration-500"
                  style={{
                    width: `${cardWidth}px`,
                    opacity: isActive ? 1 : 0.3,
                    boxShadow: "-20px 20px 26.5px 0px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="w-full bg-[#d9d9d9]"
                    style={{ aspectRatio: "1 / 1" }}
                  />

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
            })}
          </div>
        </div>

        <div className="flex items-center justify-between w-[193px]">
          <button
            onClick={handlePrev}
            className="w-[60px] h-[60px] rounded-full bg-white border border-[#f2f2f2] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-[#2c2c2c]" />
          </button>

          <button
            onClick={handleNext}
            className="w-[60px] h-[60px] rounded-full bg-white border border-[#f2f2f2] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-[#2c2c2c]" />
          </button>
        </div>
      </div>
    </section>
  );
};
