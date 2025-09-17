import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">FoodieBook</h3>
            <p className="text-background/80">
              Creating memorable dining experiences with exceptional food and warm hospitality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-background/80 hover:text-primary transition-colors">Home</a>
              <a href="#menu" className="block text-background/80 hover:text-primary transition-colors">Menu</a>
              <a href="#booking" className="block text-background/80 hover:text-primary transition-colors">Book Table</a>
              <a href="#about" className="block text-background/80 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="block text-background/80 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Gourmet Street, NYC</span>
              </div>
              <div className="flex items-center space-x-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@foodiebook.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <div className="space-y-1 text-sm text-background/80">
              <div className="flex justify-between">
                <span>Mon - Thu:</span>
                <span>5PM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat:</span>
                <span>5PM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>4PM - 9PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 FoodieBook. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;