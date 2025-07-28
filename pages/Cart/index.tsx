import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index

// 'use client';

// import { useCart } from '@/components/context/CartContext';
// import Image from 'next/image';
// import Link from 'next/link';

// const CartPage = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   const total = cart.reduce((sum, item) => sum + item.wholesale, 0);

//   return (
//     <div className="px-6 py-10 bg-black text-white">
//       <h1 className="text-3xl font-bold text-yellow-400 mb-6">Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-gray-300">🛒 Your cart is empty. <Link href="/">Go shopping</Link></p>
//       ) : (
//         <>
//           <ul className="space-y-4">
//             {cart.map((item, index) => (
//               <li key={index} className="flex gap-4 items-center border-b pb-4">
//                 <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
//                 <div className="flex-1">
//                   <h2 className="font-semibold text-yellow-200">{item.name}</h2>
//                   <p className="text-gray-400 text-sm">{item.desc}</p>
//                   <p className="text-yellow-500">KES {item.wholesale.toLocaleString()}</p>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-400"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-6">
//             <p className="text-lg font-bold text-white">Total: KES {total.toLocaleString()}</p>
//             <div className="flex gap-4 mt-4">
//               <button
//                 onClick={clearCart}
//                 className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
//               >
//                 Clear Cart
//               </button>
//               <Link
//                 href="/checkout"
//                 className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-black font-semibold"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
