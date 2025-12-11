export default function HeroBackground() {
  return (
    <>
      <GlowEffects />
      <GridPattern />
    </>
  );
}

function GlowEffects() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-[250px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[400px] md:h-[600px] bg-[#00FF88]/10 rounded-full blur-[80px] sm:blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[180px] sm:w-[300px] md:w-[400px] h-[180px] sm:h-[300px] md:h-[400px] bg-[#00FF88]/5 rounded-full blur-[60px] sm:blur-[120px]" />
    </div>
  );
}

function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-5 sm:opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
