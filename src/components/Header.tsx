import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-black/80"}`}>
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex items-center gap-2 h-20 overflow-hidden">
            <img 
              src={logo} 
              alt="LS-SCALES Logo" 
              className="h-36 w-auto mix-blend-lighten opacity-95 hover:opacity-100 transition-opacity duration-300 object-cover object-top"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#about" 
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#case-studies" 
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
            >
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#contact" 
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="default" 
            className="hidden sm:inline-flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_hsl(0_84%_55%/0.5)] active:scale-95"
          >
            Get Started
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 active:scale-95">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-foreground transition-all duration-300 hover:bg-primary" />
              <span className="w-full h-0.5 bg-foreground transition-all duration-300 hover:bg-primary" />
              <span className="w-full h-0.5 bg-foreground transition-all duration-300 hover:bg-primary" />
            </div>
          </button>
        </div>
      </div>
    </header>;
};
export default Header;