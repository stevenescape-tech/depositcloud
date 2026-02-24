import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Executive {
  name: string;
  title: string;
  image?: string;
}

const executives: Executive[] = [
  { name: "Michael Bowman", title: "Founder & CEO", image: "/img/michael-bowman.jpg" },
  { name: "Ash Bell", title: "President & COO", image: "/img/ash-bell.jpg" },
  { name: "Hannah Crompton", title: "SVP of Finance", image: "/img/hannah-crompton.jpg" },
  { name: "Niki Trimble", title: "SVP of Client Success", image: "/img/niki-trimble.jpg" },
  { name: "Daria Davis", title: "SVP of DevOps", image: "/img/daria-davis.jpg" },
];

export const WhoWeAreSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStyles, setCardStyles] = useState<Record<number, { left: number; opacity: number; transition: string }>>({});
  const [cardWidth, setCardWidth] = useState(551.5);
  const [visibleCount, setVisibleCount] = useState(2);
  const [containerWidth, setContainerWidth] = useState(1280);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
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

  const getRelativePos = useCallback((index: number, fromIndex: number) => {
    let rel = index - fromIndex;
    if (rel > count / 2) rel -= count;
    if (rel < -count / 2) rel += count;
    return rel;
  }, [count]);

  const calcStyles = useCallback((fromIndex: number, cw: number, cWidth: number, vc: number) => {
    const groupWidth = vc * cw + (vc - 1) * gap;
    const center = (cWidth - groupWidth) / 2;
    const styles: Record<number, { left: number; opacity: number; transition: string }> = {};

    for (let i = 0; i < count; i++) {
      const rel = getRelativePos(i, fromIndex);
      const left = center + rel * (cw + gap);
      const isActive = rel >= 0 && rel < vc;
      const isAdjacent = rel === -1 || rel === vc;
      let opacity = 0;
      if (isActive) opacity = 1;
      else if (isAdjacent) opacity = 0.3;
      styles[i] = { left, opacity, transition: "left 500ms ease-in-out, opacity 500ms ease-in-out" };
    }
    return styles;
  }, [count, getRelativePos]);

  useEffect(() => {
    setCardStyles(calcStyles(currentIndex, cardWidth, containerWidth, visibleCount));
  }, [containerWidth, cardWidth]);

  const navigate = (direction: number) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    const prevIndex = currentIndex;
    const newIndex = ((currentIndex + direction) % count + count) % count;

    const groupWidth = visibleCount * cardWidth + (visibleCount - 1) * gap;
    const center = (containerWidth - groupWidth) / 2;

    const newStyles: Record<number, { left: number; opacity: number; transition: string }> = {};

    for (let i = 0; i < count; i++) {
      const prevRel = getRelativePos(i, prevIndex);
      const newRel = getRelativePos(i, newIndex);
      const newLeft = center + newRel * (cardWidth + gap);

      const wasActive = prevRel >= 0 && prevRel < visibleCount;
      const wasAdjacent = prevRel === -1 || prevRel === visibleCount;
      const wasVisible = wasActive || wasAdjacent;

      const isActive = newRel >= 0 && newRel < visibleCount;
      const isAdjacent = newRel === -1 || newRel === visibleCount;
      const willBeVisible = isActive || isAdjacent;

      let opacity = 0;
      if (isActive) opacity = 1;
      else if (isAdjacent) opacity = 0.3;

      if (wasVisible && willBeVisible) {
        newStyles[i] = { left: newLeft, opacity, transition: "left 500ms ease-in-out, opacity 500ms ease-in-out" };
      } else if (wasVisible && !willBeVisible) {
        const exitLeft = center + (direction > 0 ? -2 : visibleCount + 1) * (cardWidth + gap);
        newStyles[i] = { left: exitLeft, opacity: 0, transition: "left 500ms ease-in-out, opacity 300ms ease-in-out" };
      } else if (!wasVisible && willBeVisible) {
        newStyles[i] = { left: newLeft, opacity, transition: "left 500ms ease-in-out, opacity 500ms ease-in-out" };
      } else {
        newStyles[i] = { left: newLeft, opacity: 0, transition: "none" };
      }
    }

    const enteringCards: number[] = [];
    for (let i = 0; i < count; i++) {
      const prevRel = getRelativePos(i, prevIndex);
      const newRel = getRelativePos(i, newIndex);
      const wasVisible = (prevRel >= -1 && prevRel <= visibleCount);
      const willBeVisible = (newRel >= -1 && newRel <= visibleCount);
      if (!wasVisible && willBeVisible) {
        enteringCards.push(i);
      }
    }

    if (enteringCards.length > 0) {
      const preStyles = { ...cardStyles };
      enteringCards.forEach((i) => {
        const newRel = getRelativePos(i, newIndex);
        const enterLeft = center + newRel * (cardWidth + gap);
        preStyles[i] = { left: enterLeft, opacity: 0, transition: "none" };
      });
      setCardStyles(preStyles);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setCurrentIndex(newIndex);
          setCardStyles(newStyles);
        });
      });
    } else {
      setCurrentIndex(newIndex);
      setCardStyles(newStyles);
    }

    setTimeout(() => {
      isTransitioning.current = false;
    }, 550);
  };

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

        <div ref={containerRef} className="w-full relative" style={{ height: cardWidth + 90 }}>
          {executives.map((exec, index) => {
            const style = cardStyles[index] || { left: 0, opacity: 0, transition: "none" };

            return (
              <div
                key={index}
                className="absolute top-0 shrink-0 flex flex-col gap-[29px] p-6 md:p-[49px] border-[0.25px] border-brand-blue bg-white/35 [-webkit-backdrop-filter:blur(10px)_saturate(180%)_brightness(105%)] [backdrop-filter:blur(10px)_saturate(180%)_brightness(105%)]"
                style={{
                  width: `${cardWidth}px`,
                  left: `${style.left}px`,
                  opacity: style.opacity,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(255,255,255,0.2), -20px 20px 26.5px 0px rgba(0,0,0,0.05)",
                  transition: style.transition,
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
          })}
        </div>

        <div className="flex items-center justify-between w-[193px]">
          <button
            onClick={() => navigate(-1)}
            className="w-[60px] h-[60px] rounded-full bg-white border border-[#f2f2f2] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-[#2c2c2c]" />
          </button>

          <button
            onClick={() => navigate(1)}
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
