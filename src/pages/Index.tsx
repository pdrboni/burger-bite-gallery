
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Menu />
      <Reviews />
      <Gallery />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default Index;
