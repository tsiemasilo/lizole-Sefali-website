import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const smoothScroll = (targetId: string) => {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
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
            <button 
              onClick={() => smoothScroll('services')}
              className="relative text-foreground/80 hover:text-primary transition-all duration-500 font-medium group cursor-pointer bg-transparent border-0"
            >
              <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">
                Services
              </span>
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-red-400 to-primary transition-all duration-500 group-hover:w-full" />
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-primary/5 blur-xl transition-all duration-500" />
            </button>
            
            <button 
              onClick={() => smoothScroll('about')}
              className="relative text-foreground/80 hover:text-primary transition-all duration-500 font-medium group cursor-pointer bg-transparent border-0"
            >
              <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">
                About
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-red-400 to-primary transition-all duration-500 group-hover:w-full" />
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-primary/5 blur-xl transition-all duration-500" />
            </button>
            
            <button 
              onClick={() => smoothScroll('case-studies')}
              className="relative text-foreground/80 hover:text-primary transition-all duration-500 font-medium group cursor-pointer bg-transparent border-0"
            >
              <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">
                Case Studies
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-red-400 to-primary transition-all duration-500 group-hover:w-full" />
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-primary/5 blur-xl transition-all duration-500" />
            </button>
            
            <button 
              onClick={() => smoothScroll('contact')}
              className="relative text-foreground/80 hover:text-primary transition-all duration-500 font-medium group cursor-pointer bg-transparent border-0"
            >
              <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">
                Contact
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-red-400 to-primary transition-all duration-500 group-hover:w-full" />
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-primary/5 blur-xl transition-all duration-500" />
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="default" 
            className="hidden sm:inline-flex relative overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_hsl(0_84%_55%/0.8)] active:scale-95 group"
          >
            <span className="relative z-10">Get Started</span>
            {/* Animated gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-red-600 to-primary bg-[length:200%_100%] animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-ping bg-primary/30" />
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