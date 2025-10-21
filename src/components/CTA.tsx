import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff0000_1px,transparent_1px),linear-gradient(to_bottom,#ff0000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            Ready to Scale Your{" "}
            <span className="text-primary">E-Commerce Store?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Join hundreds of successful e-commerce brands leveraging our Meta campaign expertise 
            to drive unprecedented growth. Let's turn your advertising budget into profit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button variant="hero" size="xl" className="group">
              Schedule a Strategy Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary/30 hover:border-primary hover:bg-primary/10">
              View Our Work
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>No Long-Term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>Results Within 30 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span>Dedicated Account Manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
