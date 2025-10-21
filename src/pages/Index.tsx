import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EcommerceFocus from "@/components/EcommerceFocus";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <EcommerceFocus />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
