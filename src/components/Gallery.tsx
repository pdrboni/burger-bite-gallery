
import { useState } from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
      alt: "Delicious burger with fries"
    },
    {
      src: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=400&fit=crop",
      alt: "BBQ bacon burger"
    },
    {
      src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=400&fit=crop",
      alt: "Gourmet burger with mushrooms"
    },
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop",
      alt: "Spicy burger with jalapeños"
    },
    {
      src: "https://images.unsplash.com/photo-1551782450-17144efb5c50?w=400&h=400&fit=crop",
      alt: "Double cheeseburger"
    },
    {
      src: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=400&fit=crop",
      alt: "Veggie burger"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual feast of our mouth-watering creations
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img 
              src={selectedImage} 
              alt="Selected burger"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
