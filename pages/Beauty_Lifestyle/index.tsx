import { useCart } from '@/components/context/CartContext';
import Image from 'next/image';
import { skincareItems } from '@/data/skincare';

function skincareItemToProduct(item: SkincareItem): Product {
  return {
    id: item.id,
    code: item.code,
    name: item.name,
    desc: item.desc,
    retail: item.wholesale, // or set a real retail price if you want
    wholesale: item.wholesale,
    type: item.category,    // or 'skincare'
    images: item.images,
  };
}

export default function BeautyLifestyle() {
  const { addToCart } = useCart();

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {skincareItems.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
          <Image src={product.images[0]} alt={product.name} width={400} height={160} className="w-full h-40 object-cover rounded-md mb-3"/>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-3">
            Wholesale: <span className="font-medium text-black-500">KES {product.wholesale}</span>
          </p>
          <button
            onClick={() => addToCart(skincareItemToProduct(product))}
            className="w-full bg-black text-white p-2 rounded hover:bg-yellow-600 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}