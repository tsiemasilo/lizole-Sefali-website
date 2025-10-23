import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"}`}>
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">[LSM] - SCALES</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#case-studies" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
              Case Studies
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="default" className="hidden sm:inline-flex">
            Get Started
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-foreground transition-all" />
              <span className="w-full h-0.5 bg-foreground transition-all" />
              <span className="w-full h-0.5 bg-foreground transition-all" />
            </div>
          </button>
        </div>
      </div>
    </header>;
};
export default Header;