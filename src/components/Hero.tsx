
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-red-500 to-red-600 text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          The Best Burgers
          <span className="block text-yellow-300">In Town</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
          Handcrafted burgers made with premium ingredients and passion
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            onClick={scrollToOrder}
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Order Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg transition-all duration-300"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
