import { ExternalLink, GitBranch, FileCode } from "lucide-react";
import { BlueprintCorners, DimensionLabel, CrosshairNode } from "./BlueprintElements";

const standards = [
  {
    name: "OC-EVENT",
    version: "1.0",
    description:
      "The universal schema for automotive gatherings. Accounts for surface types (on-road/off-road), venue categories (business/parking lot), and event dynamics (static/rally).",
    tags: ["Events", "Discoverability", "Schema"],
    specsUrl: "https://github.com/opencar-dev/opencar-specs/blob/main/specifications/OC-EVENT.md",
    githubUrl: "https://github.com/opencar-dev/opencar-specs",
  },
  {
    name: "OC-DATA",
    version: "Coming Soon",
    description:
      "Standards for aftermarket part interoperability and vehicle profiles. Enables universal exchange of parts, services, and vehicle data.",
    tags: ["Parts", "Vehicle Profiles", "Commerce"],
    specsUrl: null,
    githubUrl: "https://github.com/opencar-dev/opencar-specs",
  },
];

const StandardsSection = () => {
  return (
    <section id="standards" className="py-24 relative">
      <div className="absolute inset-0 scanline pointer-events-none" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <DimensionLabel className="mb-4 justify-center">Section 02</DimensionLabel>
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">Our Standards</span>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
            Open Specifications
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Each standard is developed openly on GitHub. Contributions and feedback are welcome.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {standards.map((standard) => (
            <div
              key={standard.name}
              className="relative p-6 rounded-xl border border-border bg-card border-glow"
            >
              <BlueprintCorners />
              {/* Crosshair accent nodes */}
              <CrosshairNode className="-top-1 left-1/2 -translate-x-1/2" />
              <CrosshairNode className="-bottom-1 left-1/2 -translate-x-1/2" />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileCode className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-bold text-foreground">{standard.name}</h3>
                    <span className="text-xs font-mono text-primary">{standard.version}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {standard.specsUrl && (
                    <a
                      href={standard.specsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      <FileCode className="w-3.5 h-3.5" />
                      Spec
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={standard.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{standard.description}</p>
              <div className="flex flex-wrap gap-2">
                {standard.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
