// components/SkincareProducts.tsx
import Image from 'next/image';
import { skincareItems, SkincareItem } from '@/data/skincare'; // Adjust path as needed

const SkincareProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Skincare Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skincareItems.map((item: SkincareItem) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Display the first image from the images array */}
            <div className="relative w-full h-64 mb-4">
              <Image
                src={item.images[0] || '/images/skincare/placeholder.jpg'} // Fallback image
                alt={item.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
                onError={(e) => {
                  e.currentTarget.src = '/images/skincare/placeholder.jpg'; // Fallback on error
                }}
              />
            </div>
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.desc}</p>
            <p className="text-lg font-bold mt-2">KES {item.wholesale}</p>
            <p className="text-sm text-gray-500">Category: {item.category}</p>
            <p className="text-sm text-gray-500">Code: {item.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkincareProducts;