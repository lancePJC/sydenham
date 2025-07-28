import React, { useState } from 'react';
import Image from 'next/image';
import { skincareItems, SkincareItem } from '@/data/skincare';

const EvoludermPage: React.FC = () => {
  const evoludermProducts = skincareItems.filter((item) => item.code.startsWith('EVOLUDERM-'));
  const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: number]: number }>({});

  const handleNextImage = (itemId: number, totalImages: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [itemId]: ((prev[itemId] || 0) + 1) % totalImages,
    }));
  };

  const handlePrevImage = (itemId: number, totalImages: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [itemId]: ((prev[itemId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const handleAddToCart = (item: SkincareItem) => {
    alert(`Added ${item.name} to cart!`);
    // Implement cart logic here (e.g., context, localStorage, or API call)
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Evoluderm Products</h1>
      {evoludermProducts.length === 0 ? (
        <p className="text-gray-600">No Evoluderm products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {evoludermProducts.map((item: SkincareItem) => {
            const currentImageIndex = currentImageIndices[item.id] || 0;
            return (
              <div
                key={item.id}
                className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Carousel */}
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={item.images[currentImageIndex] || '/images/skincare/placeholder.jpg'}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded"
                    onError={(e) => {
                      e.currentTarget.src = '/images/skincare/placeholder.jpg';
                    }}
                  />
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => handlePrevImage(item.id, item.images.length)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={() => handleNextImage(item.id, item.images.length)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100"
                  >
                    &gt;
                  </button>
                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {item.images.map((_, index) => (
                      <span
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-400'
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.desc}</p>
                <p className="text-lg font-bold mt-2">KES {item.wholesale}</p>
                <p className="text-sm text-gray-500">Category: {item.category}</p>
                <p className="text-sm text-gray-500">Code: {item.code}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EvoludermPage;