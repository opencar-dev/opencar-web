import { Wrench, Users, Building2, Mountain, ShoppingBag } from "lucide-react";
import { BlueprintCorners, CrosshairNode, DimensionLabel, BlueprintDivider } from "./BlueprintElements";

const segments = [
  {
    icon: Wrench,
    title: "The Aftermarket",
    description: "Performance tuning, aesthetic mods, and restoration.",
  },
  {
    icon: Users,
    title: "Grassroots Enthusiasts",
    description: "Local meetups, takeovers, and community garage nights.",
  },
  {
    icon: Building2,
    title: "Corporate & Industry",
    description: "Professional drives, manufacturer launches, and dealership logistics.",
  },
  {
    icon: Mountain,
    title: "Off-Road & Adventure",
    description: "Standardizing trails, overlanding, and rock-crawling data.",
  },
  {
    icon: ShoppingBag,
    title: "Business & Commerce",
    description: "Streamlining how parts, services, and vehicle data are exchanged.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <DimensionLabel className="mb-4 justify-center">Section 01</DimensionLabel>
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">Our Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
            A "Big Tent" for Car Culture
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
            OpenCar is a non-discriminatory, open-standards collective dedicated to the digital future of the automotive industry. We do not discriminate. If it has wheels and a community, OpenCar is built to support it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative mb-16">
          {/* Crosshair nodes at grid intersection points */}
          <CrosshairNode className="-top-3 -left-3" />
          <CrosshairNode className="-top-3 -right-3" />
          <CrosshairNode className="-bottom-3 -left-3" />
          <CrosshairNode className="-bottom-3 -right-3" />

          {segments.map((segment) => (
            <div
              key={segment.title}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300"
            >
              <BlueprintCorners />
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-[var(--glow-primary)] transition-shadow duration-300">
                <segment.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-mono font-semibold text-foreground mb-2">{segment.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{segment.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">What We Do</span>
          <h3 className="text-xl font-mono font-bold text-foreground mb-4">
            Breaking Silos with Open Standard Formats
          </h3>
          <p className="max-w-xl mx-auto text-muted-foreground text-sm">
            Modern automotive platforms exist in silos—data from one app doesn&apos;t work in another. OpenCar publishes open standards so that:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl border border-border bg-card/50">
            <span className="text-xs font-mono text-primary block mb-2">01</span>
            <h4 className="font-mono font-semibold text-foreground mb-1">Events are Discoverable</h4>
            <p className="text-sm text-muted-foreground">An event posted on a local forum can be seamlessly read by a navigation app or social discovery tool.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card/50">
            <span className="text-xs font-mono text-primary block mb-2">02</span>
            <h4 className="font-mono font-semibold text-foreground mb-1">Data is Universal</h4>
            <p className="text-sm text-muted-foreground">Vehicle specs, part fitments, and venue requirements use a single, unified syntax.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card/50">
            <span className="text-xs font-mono text-primary block mb-2">03</span>
            <h4 className="font-mono font-semibold text-foreground mb-1">Innovation is Accessible</h4>
            <p className="text-sm text-muted-foreground">Small developers and large corporations alike can build on a shared, professional foundation.</p>
          </div>
        </div>

        <BlueprintDivider className="mt-16" />
      </div>
    </section>
  );
};

export default AboutSection;
