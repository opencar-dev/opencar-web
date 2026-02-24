const Footer = () => {
  return (
    <footer className="border-t border-border py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-mono font-bold text-foreground">open</span>
            <span className="text-xl font-mono font-bold text-gradient-primary">car</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-mono text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#standards" className="hover:text-primary transition-colors">Standards</a>
            <a href="#partners" className="hover:text-primary transition-colors">Partners</a>
            <a href="https://github.com/opencar-dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </nav>
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-muted-foreground font-mono">
            <a href="mailto:hello@opencar.dev" className="hover:text-primary transition-colors">hello@opencar.dev</a>
            <span className="hidden md:inline">·</span>
            <span>© {new Date().getFullYear()} opencar. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
