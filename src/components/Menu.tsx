
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Menu = () => {
  const menuItems = [
    {
      name: "Classic Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, onion, and our special sauce",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop"
    },
    {
      name: "BBQ Bacon Burger",
      description: "Smoky BBQ sauce, crispy bacon, cheddar cheese, and onion rings",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop"
    },
    {
      name: "Mushroom Swiss",
      description: "Sautéed mushrooms, Swiss cheese, and garlic aioli",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=200&fit=crop"
    },
    {
      name: "Spicy Jalapeño",
      description: "Jalapeños, pepper jack cheese, spicy mayo, and avocado",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
    },
    {
      name: "Veggie Delight",
      description: "Plant-based patty with fresh vegetables and herb sauce",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop"
    },
    {
      name: "Double Cheeseburger",
      description: "Two beef patties, double cheese, pickles, and ketchup",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1551782450-17144efb5c50?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each burger is crafted with love and the finest ingredients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{item.name}</CardTitle>
                <CardDescription className="text-gray-600">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">{item.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
