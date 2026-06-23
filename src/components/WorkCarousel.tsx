import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FramedImage } from "./FramedImage";

const CAROUSEL_HEIGHT = {
  base: 320,
  sm: 380,
  md: 460,
};

const WORK_IMAGE_VERSION = "5";

const workItems = [
  {
    src: `/work/espresso-ui.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Espresso UI design system",
    label: "Espresso UI",
    width: 4568,
    height: 3372,
  },
  {
    src: `/work/orgspace-invite.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Orgspace — invite team error state",
    label: "Orgspace",
    width: 5184,
    height: 3351,
  },
  {
    src: `/work/orgspace-upload.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Orgspace — upload CSV success",
    label: "Orgspace",
    width: 5184,
    height: 3351,
  },
  {
    src: `/work/orgspace-review.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Orgspace — review import",
    label: "Orgspace",
    width: 1024,
    height: 661,
  },
  {
    src: `/work/orgspace-activate.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Orgspace — activate account",
    label: "Orgspace",
    width: 6860,
    height: 4988,
  },
  {
    src: `/work/crtside-onboarding.png?v=${WORK_IMAGE_VERSION}`,
    alt: "CRTSIDE — mobile onboarding",
    label: "CRTSIDE",
    width: 10335,
    height: 5949,
  },
  {
    src: `/work/crtside-app.png?v=${WORK_IMAGE_VERSION}`,
    alt: "CRTSIDE — mobile app screens",
    label: "CRTSIDE",
    width: 6597,
    height: 5604,
  },
  {
    src: `/work/axs-list.png?v=${WORK_IMAGE_VERSION}`,
    alt: "AXS Inventory — seat list view",
    label: "AXS Inventory",
    width: 3471,
    height: 2460,
  },
  {
    src: `/work/axs-map.png?v=${WORK_IMAGE_VERSION}`,
    alt: "AXS Inventory — hybrid map view",
    label: "AXS Inventory",
    width: 3620,
    height: 2568,
  },
];

function getCarouselHeight(viewportWidth: number) {
  if (viewportWidth >= 768) return CAROUSEL_HEIGHT.md;
  if (viewportWidth >= 640) return CAROUSEL_HEIGHT.sm;
  return CAROUSEL_HEIGHT.base;
}

function getSlideWidth(
  item: (typeof workItems)[0],
  carouselHeight: number,
  viewportWidth: number
) {
  const naturalWidth = carouselHeight * (item.width / item.height);
  return Math.min(naturalWidth, viewportWidth - 48);
}

export function WorkCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(1200);

  const carouselHeight = getCarouselHeight(viewportWidth);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(center - slideCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth);
    };
    onResize();
    window.addEventListener("resize", onResize);

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollState, { passive: true });
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (el) el.removeEventListener("scroll", updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    updateScrollState();
  }, [viewportWidth, updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    const slide = slideRefs.current[activeIndex];
    if (!el || !slide) return;
    const amount = slide.offsetWidth + 20;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section id="work" className="py-24 md:py-32 overflow-hidden bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mb-12 md:mb-16">
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em]">
          Selected work
        </h2>
        <p className="mt-3 text-muted text-[15px] md:text-[16px]">
          Product design, design systems, and mobile experiences.
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex items-start gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 md:px-10 pb-4"
        >
          {workItems.map((item, i) => {
            const slideWidth = getSlideWidth(item, carouselHeight, viewportWidth);

            return (
              <div
                key={item.src}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className="flex-shrink-0 snap-center"
              >
                <div style={{ width: slideWidth, height: carouselHeight }}>
                  <FramedImage
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    priority={i < 2}
                    fill
                    className="h-full w-full"
                  />
                </div>
                <p className="mt-3 text-[13px] text-muted">{item.label}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {workItems.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex
                    ? "w-6 bg-ink"
                    : "w-1.5 bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-black/[0.03] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft strokeWidth={1.5} className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-black/[0.03] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronRight strokeWidth={1.5} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
