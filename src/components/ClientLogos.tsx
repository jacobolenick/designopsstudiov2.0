type ClientLogoProps = {
  src: string;
  alt: string;
  className?: string;
};

function ClientLogo({ src, alt, className = "" }: ClientLogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={`h-6 md:h-7 w-auto opacity-45 brightness-0 ${className}`}
    />
  );
}

export function ClientLogos() {
  return (
    <section className="px-6 md:px-10 py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-[13px] text-muted mb-8 md:mb-10">
          Some of our clients
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 md:gap-x-20 gap-y-8">
          <ClientLogo src="/clients/adobe.png" alt="Adobe" />
          <ClientLogo
            src="/clients/cisco.png"
            alt="Cisco"
            className="h-8 md:h-9"
          />
          <ClientLogo src="/clients/axs.png" alt="AXS" />
        </div>
      </div>
    </section>
  );
}
