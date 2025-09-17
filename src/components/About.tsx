import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Award Winning",
      description: "Recognized for culinary excellence with 15+ prestigious awards"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Chefs",
      description: "Our team of professional chefs with 10+ years of experience"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fast Service",
      description: "Quick and efficient service without compromising quality"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Made with Love",
      description: "Every dish is prepared with passion and attention to detail"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">About FoodieBook</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Where Every Meal Tells a Story
              </h2>
              <p className="text-lg text-muted-foreground">
                For over a decade, FoodieBook has been crafting exceptional dining experiences 
                that bring people together. Our passion for quality ingredients, innovative recipes, 
                and warm hospitality has made us a beloved destination for food enthusiasts.
              </p>
              <p className="text-muted-foreground">
                From intimate dinners to grand celebrations, we create memorable moments through 
                the art of fine dining. Our commitment to excellence is reflected in every dish 
                we serve and every smile we create.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  {feature.icon}
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center space-y-2">
                    <div className="text-6xl">👨‍🍳</div>
                    <div className="text-lg font-semibold text-foreground">Our Head Chef</div>
                    <div className="text-sm text-muted-foreground">Master of Culinary Arts</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Chef Marco Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">
                    With 15 years of experience in Michelin-starred restaurants, Chef Marco brings 
                    world-class culinary expertise to every dish.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Awards</div>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">10</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;