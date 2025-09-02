import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Boys T-Shirt Set",
    price: "550",
    image: "/products/product1.jpg",
  },
  {
    id: 2,
    title: "Boys Casual Wear",
    price: "720",
    image: "/products/product2.jpg",
  },
  {
    id: 3,
    title: "Boys Denim Jacket",
    price: "899",
    image: "/products/product3.jpg",
  },
  {
    id: 4,
    title: "Boys Party Outfit",
    price: "1200",
    image: "/products/product4.jpg",
  },
];

export default function BestSellers() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover rounded-lg shadow cursor-pointer hover:scale-105 transition"
                onClick={() => {
                  setActiveImage(product.image);
                  setIsOpen(true);
                }}
              />
              <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={activeImage}
            alt="Zoomed Product"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
