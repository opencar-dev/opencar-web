import { ArrowRight } from "lucide-react";
import { CrosshairNode, DimensionLabel } from "./BlueprintElements";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-[100px]" />

      {/* Blueprint crosshair accents at corners */}
      <CrosshairNode className="top-8 left-8 !w-4 !h-4 hidden md:block" />
      <CrosshairNode className="top-8 right-8 !w-4 !h-4 hidden md:block" />
      <CrosshairNode className="bottom-8 left-8 !w-4 !h-4 hidden md:block" />
      <CrosshairNode className="bottom-8 right-8 !w-4 !h-4 hidden md:block" />

      {/* Dimension annotations */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 hidden md:block">
        <DimensionLabel>opencar.dev</DimensionLabel>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm font-mono text-primary">The Open Standard for the Global Automotive Ecosystem</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-extrabold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">open</span>
          <span className="text-gradient-primary">car</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-sans leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          The common language that allows websites, apps, and hardware to talk to one another.
          Ensuring automotive culture—in all its forms—thrives in a connected world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#standards"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono font-semibold text-sm hover:shadow-[var(--glow-primary)] transition-all duration-300"
          >
            Explore Standards
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/opencar-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-mono font-semibold text-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
