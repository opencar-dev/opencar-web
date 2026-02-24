import { BlueprintCorners, DimensionLabel, BlueprintDivider } from "./BlueprintElements";

const stages = [
  {
    code: "NP",
    name: "Proposal Stage",
    description: "A New Work Item Proposal is submitted to a technical committee to confirm the market need.",
  },
  {
    code: "WD",
    name: "Preparatory Stage",
    description: "A working group of experts prepares a Working Draft.",
  },
  {
    code: "CD",
    name: "Committee Stage",
    description: "The draft is shared for comments until a consensus is reached.",
  },
  {
    code: "DIS",
    name: "Enquiry Stage",
    description: "The Draft International Standard is submitted for a vote/public comment.",
  },
  {
    code: "FDIS",
    name: "Approval Stage",
    description: "The Final Draft is submitted for a formal vote.",
  },
  {
    code: "ISO",
    name: "Publication Stage",
    description: "The final standard is released.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <BlueprintDivider className="mb-16" />
        <div className="text-center mb-16">
          <DimensionLabel className="mb-4 justify-center">Section 04</DimensionLabel>
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
            ISO Development Process
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            opencar follows the ISO consensus framework — a six-stage lifecycle ensuring every standard is technically sound and widely accepted.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-primary/10" />

          <div className="space-y-6">
            {stages.map((stage, i) => (
              <div key={stage.code} className="relative flex gap-4 md:gap-6 items-start group">
                {/* Node on the line */}
                <div className="relative z-10 flex-shrink-0 w-12 md:w-16 h-12 md:h-16 rounded-lg border border-border bg-card flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <span className="text-xs md:text-sm font-mono font-bold text-primary">{stage.code}</span>
                </div>

                {/* Content card */}
                <div className="relative flex-1 p-4 md:p-5 rounded-xl border border-border bg-card group-hover:border-primary/30 transition-all duration-300">
                  <BlueprintCorners />
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[10px] font-mono text-primary/40">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-sm md:text-base font-mono font-semibold text-foreground">{stage.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
