import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FramedImage } from "./FramedImage";

const CAROUSEL_HEIGHT = {
  base: 320,
  sm: 380,
  md: 460,
};

const WORK_IMAGE_VERSION = "9";

const workItems = [
  {
    src: `/work/espresso-ui.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Espresso UI design system",
    label: "Espresso UI",
    width: 4568,
    height: 3372,
  },
  {
    src: `/work/coffee-order-notes-home.jpg?v=${WORK_IMAGE_VERSION}`,
    alt: "Coffee Order Notes — welcome screen and note library",
    label: "Coffee Order Notes",
    width: 1024,
    height: 728,
  },
  {
    src: `/work/coffee-order-notes-ui.jpg?v=${WORK_IMAGE_VERSION}`,
    alt: "Coffee Order Notes — product UI components and settings",
    label: "Coffee Order Notes",
    width: 1024,
    height: 728,
  },
  {
    src: `/work/visual-app.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Visual App — design system components",
    label: "Visual App",
    width: 1024,
    height: 769,
  },
  {
    src: `/work/orgspace-upload.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Orgspace — upload CSV success",
    label: "Orgspace",
    width: 5184,
    height: 3351,
  },
  {
    src: `/work/orgspace-activate.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Orgspace — activate account",
    label: "Orgspace",
    width: 6860,
    height: 4988,
  },
  {
    src: `/work/orgspace-staffing-drawer.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Orgspace — staffing timeline with integrations drawer",
    label: "Orgspace",
    width: 1024,
    height: 687,
  },
  {
    src: `/work/orgspace-team-chart.png?v=${WORK_IMAGE_VERSION}`,
    alt: "Orgspace — team chart with org structure",
    label: "Orgspace",
    width: 1024,
    height: 697,
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
  trackWidth: number
) {
  const naturalWidth = carouselHeight * (item.width / item.height);
  return Math.min(naturalWidth, Math.max(trackWidth - 24, 240));
}

export function WorkCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(1200);
  const [trackWidth, setTrackWidth] = useState(800);

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
    const el = scrollRef.current;
    if (!el) return;

    const updateTrackWidth = () => {
      setTrackWidth(el.clientWidth);
      updateScrollState();
    };

    updateTrackWidth();
    const observer = new ResizeObserver(updateTrackWidth);
    observer.observe(el);

    return () => observer.disconnect();
  }, [updateScrollState, viewportWidth]);

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
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <section id="work" className="overflow-hidden px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 md:mb-8">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em]">
            Selected work
          </h2>
          <p className="mt-3 text-[15px] text-muted md:text-[16px]">
            Product design, design systems, and mobile experiences.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex items-start gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pl-6 pb-4"
        >
          {workItems.map((item, i) => {
            const slideWidth = getSlideWidth(
              item,
              carouselHeight,
              trackWidth
            );

            return (
              <div
                key={item.src}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className="flex-shrink-0 snap-start"
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

        <div className="mt-8 flex items-center justify-between pl-6">
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-black/[0.03] disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft strokeWidth={1.5} className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-black/[0.03] disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight strokeWidth={1.5} className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
