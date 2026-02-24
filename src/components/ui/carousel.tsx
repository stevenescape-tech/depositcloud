import { useState, useEffect, useCallback, useRef, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: ReactNode[];
  variant?: "light" | "dark";
  visibleCountDesktop?: number;
  visibleCountMobile?: number;
  cardWidthDesktop?: number;
  cardWidthTabletMax?: number;
  cardWidthMobileMax?: number;
  gap?: number;
  containerHeightOffset?: number;
  adjacentOpacity?: number;
}

export const Carousel = ({
  items,
  variant = "light",
  visibleCountDesktop = 2,
  visibleCountMobile = 1,
  cardWidthDesktop = 551.5,
  cardWidthTabletMax = 500,
  cardWidthMobileMax = 434,
  gap = 21,
  containerHeightOffset = 90,
  adjacentOpacity = 0.3,
}: CarouselProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStyles, setCardStyles] = useState<Record<number, { left: number; opacity: number; transition: string }>>({});
  const [cardWidth, setCardWidth] = useState(cardWidthDesktop);
  const [visibleCount, setVisibleCount] = useState(visibleCountDesktop);
  const [containerWidth, setContainerWidth] = useState(1280);
  const [containerHeight, setContainerHeight] = useState(cardWidthDesktop + containerHeightOffset);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isTransitioning = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const count = items.length;

  const updateDimensions = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setVisibleCount(visibleCountMobile);
      setCardWidth(Math.min(width - 48, cardWidthMobileMax));
    } else if (width < 1280) {
      setVisibleCount(visibleCountDesktop);
      setCardWidth(Math.min((width - 92 - gap) / visibleCountDesktop, cardWidthTabletMax));
    } else {
      setVisibleCount(visibleCountDesktop);
      setCardWidth(cardWidthDesktop);
    }
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    } else {
      setContainerWidth(width);
    }
  }, [visibleCountMobile, visibleCountDesktop, cardWidthMobileMax, cardWidthTabletMax, cardWidthDesktop, gap]);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    const measure = () => {
      cardRefs.current.forEach((el) => {
        if (el) el.style.height = "auto";
      });
      requestAnimationFrame(() => {
        const heights = cardRefs.current
          .filter((el): el is HTMLDivElement => el !== null)
          .map((el) => el.offsetHeight);
        if (heights.length > 0) {
          const maxH = Math.max(...heights);
          setContainerHeight(maxH);
          cardRefs.current.forEach((el) => {
            if (el) el.style.height = `${maxH}px`;
          });
        }
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cardWidth, items]);

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
      else if (isAdjacent) opacity = adjacentOpacity;
      styles[i] = { left, opacity, transition: "left 500ms ease-in-out, opacity 500ms ease-in-out" };
    }
    return styles;
  }, [count, getRelativePos, gap, adjacentOpacity]);

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
      else if (isAdjacent) opacity = adjacentOpacity;

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      navigate(deltaX < 0 ? 1 : -1);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div className="flex flex-col items-center gap-[52px] w-full">
      <div ref={containerRef} className="w-full relative touch-pan-y" style={{ height: containerHeight }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {items.map((item, index) => {
          const style = cardStyles[index] || { left: 0, opacity: 0, transition: "none" };

          return (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="absolute top-0 [&>*]:h-full"
              style={{
                width: `${cardWidth}px`,
                left: `${style.left}px`,
                opacity: style.opacity,
                transition: style.transition,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between w-[193px]">
        <button
          onClick={() => navigate(-1)}
          className={`w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-90 active:shadow-none ${
            variant === "dark"
              ? "bg-[#2c2c2c] border border-[#444] shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
              : "bg-white border border-[#f2f2f2] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          }`}
          aria-label="Previous"
        >
          <ChevronLeft className={`w-6 h-6 ${variant === "dark" ? "text-white" : "text-[#2c2c2c]"}`} />
        </button>

        <button
          onClick={() => navigate(1)}
          className={`w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-90 active:shadow-none ${
            variant === "dark"
              ? "bg-[#2c2c2c] border border-[#444] shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
              : "bg-white border border-[#f2f2f2] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          }`}
          aria-label="Next"
        >
          <ChevronRight className={`w-6 h-6 ${variant === "dark" ? "text-white" : "text-[#2c2c2c]"}`} />
        </button>
      </div>
    </div>
  );
};
