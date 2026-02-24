import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-1">
          <span className="text-lg font-mono font-bold text-foreground">open</span>
          <span className="text-lg font-mono font-bold text-gradient-primary">car</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-mono text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#standards" className="hover:text-primary transition-colors">Standards</a>
          <a href="#partners" className="hover:text-primary transition-colors">Partners</a>
          <a
            href="https://github.com/opencar-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-md border border-border hover:border-primary/50 hover:text-primary transition-all"
          >
            GitHub
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3 text-sm font-mono text-muted-foreground">
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-primary transition-colors py-1">About</a>
            <a href="#standards" onClick={() => setOpen(false)} className="hover:text-primary transition-colors py-1">Standards</a>
            <a href="#partners" onClick={() => setOpen(false)} className="hover:text-primary transition-colors py-1">Partners</a>
            <a href="https://github.com/opencar-dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors py-1">GitHub</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
