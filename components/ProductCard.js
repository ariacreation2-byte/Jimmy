import { useState } from "react";

export default function ProductCard({ title, price, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
        onClick={() => setIsOpen(true)} // Modal open
      />

      {/* Title & Price */}
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-gray-600">₹{price}</p>

      {/* Zoom Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Modal Image */}
          <img
            src={image}
            alt={title}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 bg-white text-black px-3 py-1 rounded"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
