import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ShippingBar from "../components/ShippingBar";
import Newsletter from "../components/Newsletter";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    { title: "Blazer 0x4", price: "₹450.00", size: "0x4", image: "/product/5516.jpg" },
    { title: "Printed Polo", price: "₹899.00", size: "1x10", image: "/product/5515.jpg" },
    { title: "Casual Shorts", price: "₹799.00", size: "16x26", image: "/product/5505.jpg" },
    { title: "Denim Shirt", price: "₹999.00", size: "1x10", image: "/product/denim.jpg" },
    { title: "Formal Shirt", price: "₹1,299.00", size: "16x26", image: "/product/formal.jpg" },
  ];

  return (
    <>
      <Header />
      <Hero />
      <ShippingBar />

      {/* Products Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition"
                onClick={() => setSelectedImage(p.image)}
              >
                <img src={p.image} alt={p.title} className="w-full h-60 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-gray-500">Size: {p.size}</p>
                  <p className="text-blue-600 font-bold">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed Product"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}

      <Newsletter />

      {/* Footer */}
      <footer className="footer">
        <div className="container flex justify-between items-center flex-wrap gap-4">
          <div>© {new Date().getFullYear()} Jimmy Junior — The Premium Brand</div>
          <div className="flex gap-6">
            <a href="https://wa.me/919755502072" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://www.instagram.com/jimmy_junior_kids_wear" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#" aria-disabled="true" className="text-gray-400">Facebook</a>
          </div>
        </div>
      </footer>
    </>
  );
}
