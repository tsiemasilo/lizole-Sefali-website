import { useEffect, useRef, useState } from "react";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Meta Campaign Mastery",
    description: "Laser-focused Facebook & Instagram strategies that turn browsers into buyers. We decode your audience DNA and architect campaigns engineered for explosive growth.",
    animation: "group-hover:rotate-12 group-hover:scale-110"
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Domination",
    description: "Real-time intelligence meets relentless optimization. Watch your ROI skyrocket as we continuously refine every metric, every click, every conversion.",
    animation: "group-hover:translate-y-[-8px] group-hover:scale-110"
  },
  {
    icon: Users,
    title: "Audience Magnetism",
    description: "Stop interrupting. Start connecting. We craft hyper-targeted campaigns that speak directly to your ideal customers and compel them to act.",
    animation: "group-hover:scale-125"
  },
  {
    icon: Zap,
    title: "Conversion Acceleration",
    description: "From scroll to sold in seconds. We engineer every touchpoint to eliminate friction and maximize customer lifetime value.",
    animation: "group-hover:rotate-[-12deg] group-hover:scale-110"
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            Everything You Need to{" "}
            <span className="text-primary animate-glow">Dominate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive paid advertising solutions designed specifically for e-commerce stores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`group relative bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 blur-sm" />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                    <Icon className={`w-8 h-8 text-primary transition-all duration-500 ${service.animation}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-all duration-300 group-hover:tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Multiple corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/10 rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
