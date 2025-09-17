import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Delicious Food
                <span className="text-primary block">Awaits You</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience the finest dining with our carefully crafted menu and exceptional service. 
                Book your table now for an unforgettable culinary journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Book a Table
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Menu
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-2xl font-bold text-primary">4.9</span>
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Awards</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/30 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🍽️</div>
                  <div className="text-xl font-semibold text-foreground">Premium Dining</div>
                  <div className="text-muted-foreground">Fresh ingredients, exceptional taste</div>
                </div>
              </div>
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="text-2xl">👨‍🍳</div>
                <div>
                  <div className="font-semibold text-sm">Expert Chefs</div>
                  <div className="text-xs text-muted-foreground">10+ Years Experience</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="text-2xl">🚚</div>
                <div>
                  <div className="font-semibold text-sm">Fast Delivery</div>
                  <div className="text-xs text-muted-foreground">30min or less</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;