import { useEffect, useRef, useState } from "react";
import { Check, ShoppingBag, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Specialized in e-commerce conversion funnels",
  "Product catalog optimization for Meta",
  "Dynamic retargeting campaigns",
  "Shopping cart abandonment strategies",
  "Seasonal campaign planning",
  "Multi-platform attribution tracking",
];

const EcommerceFocus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Benefits */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <ShoppingBag className="w-4 h-4" />
              <span className="font-semibold text-sm">E-Commerce Experts</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Built for <span className="text-primary animate-glow">Online Stores</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              We don't just run ads—we build revenue-generating machines for e-commerce brands. 
              Our strategies are crafted specifically for online retailers who want measurable growth.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-500 delay-${index * 100}`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="mt-8">
              Start Growing Today
            </Button>
          </div>

          {/* Right side - Stats Cards */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="grid gap-6">
              {/* Card 1 */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:shadow-[0_0_40px_hsl(0_84%_55%_/_0.2)] transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Average Revenue Growth</div>
                    <div className="text-3xl font-bold text-primary">+287%</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  E-commerce clients see massive revenue increases within the first 90 days
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:shadow-[0_0_40px_hsl(0_84%_55%_/_0.2)] transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Cost Per Acquisition</div>
                    <div className="text-3xl font-bold text-primary">-52%</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Optimized campaigns that lower your CPA while increasing conversion rates
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:shadow-[0_0_40px_hsl(0_84%_55%_/_0.2)] transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">E-Commerce Stores Scaled</div>
                    <div className="text-3xl font-bold text-primary">180+</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Trusted by successful online retailers across multiple industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceFocus;
