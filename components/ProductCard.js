import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductCard({ title, price, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
        onClick={() => setIsOpen(true)} // Open Modal
      />

      {/* Title & Price */}
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-gray-600">₹{price}</p>

      {/* Zoom Modal with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // background click close
          >
            <motion.img
              src={image}
              alt={title}
              className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // prevent background close
            />

            {/* Close Button */}
            <button
              className="absolute top-5 right-5 bg-white text-black px-3 py-1 rounded"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
