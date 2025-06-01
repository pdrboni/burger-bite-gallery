
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    burger: "",
    quantity: "1",
    notes: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Submitted!",
      description: "We'll contact you shortly to confirm your order.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      burger: "",
      quantity: "1",
      notes: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Order Now
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to taste perfection? Place your order and we'll get it ready for you!
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">Place Your Order</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="mt-2"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="mt-2"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-gray-700 font-medium">Choose Your Burger *</Label>
                  <Select value={formData.burger} onValueChange={(value) => handleChange("burger", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a burger" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="classic">Classic Beef Burger - $12.99</SelectItem>
                      <SelectItem value="bbq">BBQ Bacon Burger - $15.99</SelectItem>
                      <SelectItem value="mushroom">Mushroom Swiss - $13.99</SelectItem>
                      <SelectItem value="spicy">Spicy Jalapeño - $14.99</SelectItem>
                      <SelectItem value="veggie">Veggie Delight - $11.99</SelectItem>
                      <SelectItem value="double">Double Cheeseburger - $16.99</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-gray-700 font-medium">Quantity</Label>
                  <Select value={formData.quantity} onValueChange={(value) => handleChange("quantity", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="text-gray-700 font-medium">Special Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  className="mt-2 min-h-[100px]"
                  placeholder="Any special requests or dietary requirements..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-4 text-lg transition-all duration-300"
              >
                Submit Order
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
