import { Code, Globe, Shield } from "lucide-react";
import { BlueprintCorners, CrosshairNode, DimensionLabel, BlueprintDivider } from "./BlueprintElements";

const pillars = [
  {
    icon: Code,
    title: "Open Standards",
    description: "We develop and maintain open specifications that anyone can implement, ensuring interoperability across the automotive ecosystem.",
  },
  {
    icon: Globe,
    title: "Connected Technologies",
    description: "Our standards bridge the gap between automotive systems and modern web technologies, enabling seamless digital experiences.",
  },
  {
    icon: Shield,
    title: "Industry Collaboration",
    description: "We work with partners across the industry to ensure our standards meet real-world needs and drive adoption.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <DimensionLabel className="mb-4 justify-center">Section 01</DimensionLabel>
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
            Driving Automotive Standards Forward
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            opencar is a standards body focused on connected automotive technologies — defining how automotive applications communicate, share data, and interoperate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Crosshair nodes at grid intersection points */}
          <CrosshairNode className="-top-3 -left-3" />
          <CrosshairNode className="-top-3 -right-3" />
          <CrosshairNode className="-bottom-3 -left-3" />
          <CrosshairNode className="-bottom-3 -right-3" />

          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300"
            >
              <BlueprintCorners />
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-[var(--glow-primary)] transition-shadow duration-300">
                <pillar.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-mono font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <BlueprintDivider className="mt-16" />
      </div>
    </section>
  );
};

export default AboutSection;
