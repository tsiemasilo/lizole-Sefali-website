import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">[LS]</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Data-driven Meta campaigns that drive real results for e-commerce stores.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Meta Campaigns</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Strategy & Analytics</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Conversion Optimization</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Brand Expansion</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                hello@ls.com
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 [LS]. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
