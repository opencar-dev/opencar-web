import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "FuelEmpire",
    url: "https://fuelempire.app",
    description: "Automotive fuel tracking and analytics platform.",
  },
  {
    name: "ATLA Build",
    url: "https://atlabuild.com",
    description: "Connected automotive application development.",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
            Partner Applications
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Organizations building on opencar standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
              <span className="mt-auto text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                {partner.url.replace("https://", "")}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
