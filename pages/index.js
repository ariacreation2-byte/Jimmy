import Header from "../components/Header";
import Hero from "../components/Hero";
import ShippingBar from "../components/ShippingBar";
import Newsletter from "../components/Newsletter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    title: "Blazer 0x4",
    price: "₹450.00",
    size: "0x4",
    image: "/product/5516.jpg",
  },
  {
    title: "Printed Polo",
    price: "₹899.00",
    size: "1x10",
    image:
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Casual Shorts",
    price: "₹799.00",
    size: "16x26",
    image:
      "https://images.unsplash.com/photo-1618354694520-3f9b8b87b84b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Denim Shirt",
    price: "₹999.00",
    size: "1x10",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Classic Jacket",
    price: "₹1,499.00",
    size: "16x26",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Header />
      <Hero />
      <ShippingBar />

      {/* Products Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-3 hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelected(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-3">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-600">Size: {product.size}</p>
                  <p className="text-lg font-bold text-green-600">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative bg-white rounded-xl shadow-lg max-w-2xl w-full p-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-[500px] object-contain rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold">{selected.title}</h3>
                <p className="text-gray-600">Size: {selected.size}</p>
                <p className="text-lg font-bold text-green-600">
                  {selected.price}
                </p>
              </div>
              <button
                className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Newsletter />

      {/* Footer */}
      <footer className="footer">
        <div className="container flex justify-between gap-4 flex-wrap">
          <div>
            © {new Date().getFullYear()} Jimmy Junior — The Premium Brand
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/919755502072" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/jimmy_junior_kids_wear"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a href="#" aria-disabled="true" className="text-gray-500">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
