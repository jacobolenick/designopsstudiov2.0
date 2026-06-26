type ClientLogoProps = {
  src: string;
  name: string;
  tooltip: string;
  className?: string;
};

function ClientLogo({ src, name, tooltip, className = "" }: ClientLogoProps) {
  return (
    <div className="group relative flex justify-center">
      <img
        src={src}
        alt={name}
        draggable={false}
        aria-describedby={`tooltip-${name.toLowerCase()}`}
        className={`h-6 w-auto cursor-default opacity-45 brightness-0 transition-opacity group-hover:opacity-80 md:h-7 ${className}`}
      />
      <div
        id={`tooltip-${name.toLowerCase()}`}
        role="tooltip"
        className="invisible absolute bottom-[calc(100%+12px)] left-1/2 z-50 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 rounded-xl border border-ink/10 bg-white px-4 py-3 text-left opacity-0 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.2)] transition-all duration-200 group-hover:visible group-hover:opacity-100 md:w-80"
      >
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
          {name}
        </p>
        <p className="text-[13px] leading-relaxed text-ink/80">{tooltip}</p>
      </div>
    </div>
  );
}

const clients: {
  src: string;
  name: string;
  tooltip: string;
  className?: string;
}[] = [
  {
    src: "/clients/adobe.png",
    name: "Adobe",
    tooltip:
      "We worked on a retainer with Adobe for 1 year working on their Behance and Adobe Portfolio platforms — added marketplaces, digital downloads, and connecting your Behance inbox and Adobe Portfolio inbox for selling services.",
  },
  {
    src: "/clients/cisco.png",
    name: "Cisco",
    tooltip:
      "We were hired on retainer to build them a 0–1 AI dashboard for CISOs and SOC analysts.",
    className: "h-8 md:h-9",
  },
  {
    src: "/clients/axs.png",
    name: "AXS",
    tooltip:
      "We were hired on retainer to build them a B2B suite of products and work on Amazon One software for ticket entry to concerts.",
  },
];

export function ClientLogos() {
  return (
    <section className="px-6 pb-12 pt-4 md:px-10 md:pb-16 md:pt-6">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-8 text-center text-[13px] text-muted md:mb-10">
          Some of our clients
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 md:gap-x-20">
          {clients.map((client) => (
            <ClientLogo
              key={client.name}
              src={client.src}
              name={client.name}
              tooltip={client.tooltip}
              className={client.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
