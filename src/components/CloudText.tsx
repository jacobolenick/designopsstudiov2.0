import { useRef, useState } from "react";

type CloudTextProps = {
  children: string;
  className?: string;
  onHoverChange?: (hovered: boolean) => void;
};

export function CloudText({
  children,
  className = "",
  onHoverChange,
}: CloudTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleEnter = () => {
    setHovering(true);
    onHoverChange?.(true);
  };

  const handleLeave = () => {
    setHovering(false);
    onHoverChange?.(false);
  };

  return (
    <div
      ref={ref}
      className={`cloud-text-wrap select-none ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
    >
      <span className="cloud-text-dots" aria-hidden="true">
        {children}
      </span>
      <span
        className={`cloud-text-fill ${hovering ? "cloud-text-fill-active" : ""}`}
        aria-hidden="true"
        style={{
          backgroundPosition: `${spotlight.x}% ${spotlight.y}%`,
          ["--cloud-x" as string]: `${spotlight.x}%`,
          ["--cloud-y" as string]: `${spotlight.y}%`,
        }}
      >
        {children}
      </span>
      <span className="sr-only">{children}</span>
    </div>
  );
}
