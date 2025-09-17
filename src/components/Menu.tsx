import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Star } from "lucide-react";

const menuCategories = [
  {
    id: "starters",
    name: "Starters",
    items: [
      {
        id: 1,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce, parmesan cheese, croutons with caesar dressing",
        price: 12.99,
        rating: 4.8,
        vegetarian: true,
        image: "🥗"
      },
      {
        id: 2,
        name: "Bruschetta",
        description: "Toasted bread with fresh tomatoes, basil, and garlic",
        price: 9.99,
        rating: 4.6,
        vegetarian: true,
        image: "🍞"
      },
      {
        id: 3,
        name: "Buffalo Wings",
        description: "Spicy chicken wings served with ranch dressing",
        price: 14.99,
        rating: 4.9,
        vegetarian: false,
        image: "🍗"
      }
    ]
  },
  {
    id: "mains",
    name: "Main Courses",
    items: [
      {
        id: 4,
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon with lemon herb butter and seasonal vegetables",
        price: 24.99,
        rating: 4.9,
        vegetarian: false,
        image: "🐟"
      },
      {
        id: 5,
        name: "Ribeye Steak",
        description: "Premium 12oz ribeye steak with garlic mashed potatoes",
        price: 32.99,
        rating: 4.8,
        vegetarian: false,
        image: "🥩"
      },
      {
        id: 6,
        name: "Vegetable Pasta",
        description: "Fresh pasta with seasonal vegetables in creamy alfredo sauce",
        price: 18.99,
        rating: 4.7,
        vegetarian: true,
        image: "🍝"
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: 7,
        name: "Chocolate Cake",
        description: "Rich chocolate cake with vanilla ice cream",
        price: 8.99,
        rating: 4.9,
        vegetarian: true,
        image: "🍰"
      },
      {
        id: 8,
        name: "Crème Brûlée",
        description: "Classic French dessert with caramelized sugar top",
        price: 9.99,
        rating: 4.8,
        vegetarian: true,
        image: "🍮"
      }
    ]
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("starters");

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:mx-auto mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="px-6">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="text-4xl">{item.image}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary">${item.price}</span>
                          {item.vegetarian && (
                            <Badge variant="secondary" className="text-xs">
                              Vegetarian
                            </Badge>
                          )}
                        </div>
                        <Button size="sm" className="group-hover:shadow-sm">
                          <Plus className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;