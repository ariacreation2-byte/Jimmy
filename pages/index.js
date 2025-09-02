import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "Blazer 0x4",
      price: 450,
      size: "0x4",
      image: "/products/5501.jpg",
    },
    {
      title: "Printed Polo",
      price: 899,
      size: "16x26",
      image: "/products/5502.jpg",
    },
    {
      title: "Casual Shorts",
      price: 799,
      size: "10x20",
      image: "/products/5503.jpg"
    },
    {
      title: "Denim Shirt",
      price: 999,
      size: "0x4",
      image: "/products/denim.jpg",
    },
    {
      title: "Boys T-shirt",
      price: 650,
      size: "16x26",
      image: "/products/tshirt.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="max-w-lg w-full p-4">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full rounded-xl"
            />
            <h3 className="text-white text-xl font-semibold mt-4">
              {selectedProduct.title}
            </h3>
            <p className="text-gray-300">Size: {selectedProduct.size}</p>
            <p className="text-yellow-400 font-bold">
              ₹{selectedProduct.price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
                       }
