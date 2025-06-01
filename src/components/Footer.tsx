
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Burger Heaven</h3>
            <p className="text-gray-300 leading-relaxed">
              Serving the best handcrafted burgers in town since 2020. 
              Quality ingredients, passionate cooking, and happy customers.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Burger Street, Food City</p>
              <p>📞 (555) 123-BURGER</p>
              <p>✉️ hello@burgerheaven.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Thursday: 11am - 10pm</p>
              <p>Friday - Saturday: 11am - 11pm</p>
              <p>Sunday: 12pm - 9pm</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Burger Heaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
