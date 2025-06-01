
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely amazing burgers! The beef is so juicy and the buns are perfectly toasted. Best burger place in town!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "I've tried every burger joint in the city, and this one takes the crown. The BBQ bacon burger is incredible!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Great atmosphere, friendly staff, and burgers that taste like heaven. The veggie option is surprisingly delicious!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      rating: 5,
      comment: "Quality ingredients, reasonable prices, and fast service. This place has become my go-to lunch spot!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
