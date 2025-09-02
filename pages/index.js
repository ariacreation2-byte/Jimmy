import { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      title: "Blazer 0x4",
      price: "450.00",
      size: "0x4",
      image: "/product/5516.jpg",
    },
    {
      title: "Printed Polo",
      price: "899.00",
      size: "16x26",
      image:
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Casual Shorts",
      price: "799.00",
      size: "10x20",
      image:
        "https://images.unsplash.com/photo-1618354694520-3f9b8b87b84b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Denim Shirt",
      price: "999.00",
      size: "0x4",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Boys T-shirt",
      price: "650.00",
      size: "16x26",
      image:
        "https://images.unsplash.com/photo-1519456262455-5928bffcc8a0?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Header />

      {/* Products */}
      <section id="products" className="section">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                onClick={() => setSelectedImage(product.image)}
              />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
          />
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container flex justify-between flex-wrap gap-4 py-4">
          <div>© {new Date().getFullYear()} Jimmy Junior — The Premium Brand</div>
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
