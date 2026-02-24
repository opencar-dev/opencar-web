import { FileText, Code, GitMerge } from "lucide-react";
import { BlueprintCorners, DimensionLabel, BlueprintDivider } from "./BlueprintElements";

const governance = {
  title: "Governance & Neutrality",
  description:
    "OpenCar is governed by its members—the people who own and build the automotive web. We follow a consensus-based process modeled after international standards (ISO) so no single entity controls the format. We are not married to any single segment of the industry. Our goal is to build the \"pipes\" that allow the entire industry to flow more efficiently.",
};

const steps = [
  {
    num: "1",
    icon: FileText,
    title: "Read the Spec",
    description: "Check out the specs directory for OC-EVENT 1.0.",
    href: "https://github.com/opencar-dev/opencar-specs/tree/main/specs",
  },
  {
    num: "2",
    icon: Code,
    title: "Implement",
    description: "Add OpenCar compatibility to your platform.",
    href: "#standards",
  },
  {
    num: "3",
    icon: GitMerge,
    title: "Contribute",
    description: "Suggest changes or new standards via the RFC process.",
    href: "https://github.com/opencar-dev/opencar-specs",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <BlueprintDivider className="mb-16" />
        <div className="text-center mb-16">
          <DimensionLabel className="mb-4 justify-center">Section 04</DimensionLabel>
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">Get Involved</span>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
            {governance.title}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {governance.description}
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-mono font-bold text-foreground mb-4">
            Join the Movement
          </h3>
          <p className="text-muted-foreground text-sm mb-8">
            We are looking for website owners, app developers, and industry leaders to help shape these standards.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <a
              key={step.num}
              href={step.href}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <BlueprintCorners />
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-[var(--glow-primary)] transition-shadow">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-mono text-primary mb-1">{step.num}</span>
              <h4 className="font-mono font-semibold text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground flex-1">{step.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
