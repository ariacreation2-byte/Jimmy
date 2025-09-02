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
        onClick={() => setIsOpen(true)} // Click → Open Modal
      />

      {/* Title & Price */}
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-gray-600">₹{price}</p>

      {/* Zoom Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)} // Click outside → Close
        >
          <img
            src={image}
            alt={title}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
