import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EcommerceFocus from "@/components/EcommerceFocus";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated gradient background */}
      <div 
        className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-red-950/20 to-black bg-[length:200%_200%] animate-gradient-shift"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a0000 25%, #000000 50%, #330000 75%, #000000 100%)',
          backgroundSize: '200% 200%',
        }}
      />
      
      <Header />
      <main className="pt-28">
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
