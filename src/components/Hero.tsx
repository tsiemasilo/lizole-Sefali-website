import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-analytics.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Red glow effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm border border-primary/20">
                Meta Campaign Specialists
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Drive Results with{" "}
              <span className="text-primary animate-glow">
                Data-Driven
              </span>{" "}
              Advertising
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              From strategy to analytics, we run Meta campaigns that boost engagement, 
              drive conversions, and expand your brand's reach—exclusively for e-commerce stores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                View Case Studies
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-primary">250+</div>
                <div className="text-muted-foreground">Active Campaigns</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">4.5x</div>
                <div className="text-muted-foreground">Avg. ROAS</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">$50M+</div>
                <div className="text-muted-foreground">Ad Spend Managed</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_50px_hsl(0_84%_55%_/_0.3)]">
              <img
                src={heroImage}
                alt="Analytics Dashboard"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl border border-primary/20 shadow-[0_0_30px_hsl(0_84%_55%_/_0.2)] animate-fade-in">
              <div className="text-sm text-muted-foreground mb-2">Campaign Performance</div>
              <div className="text-3xl font-bold text-primary">+156%</div>
              <div className="text-sm text-muted-foreground">Conversion Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
