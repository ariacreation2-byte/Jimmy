export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 text-center">
        <img 
          src="/logo.png" 
          alt="Jimmy Junior Kids Wear" 
          className="mx-auto mb-6 w-28 h-28 rounded-full shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Jimmy Junior Kids Wear
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Premium Boys’ Wear – Made in India, Loved Worldwide
        </p>
        <a 
          href="https://wa.me/919755502072" 
          className="inline-block mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Order on WhatsApp
        </a>
      </section>

      {/* Boys Collection */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Boys Collection</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Trendy outfits for boys in all sizes (1x10 to 16x26). Designed with comfort and style for every occasion.
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <img src="/products/product1.jpg" alt="Boys Wear 1" className="rounded-lg mb-3"/>
            <p className="font-medium">Casual Set</p>
          </div>
          <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <img src="/products/product2.jpg" alt="Boys Wear 2" className="rounded-lg mb-3"/>
            <p className="font-medium">Party Wear</p>
          </div>
          <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <img src="/products/product3.jpg" alt="Boys Wear 3" className="rounded-lg mb-3"/>
            <p className="font-medium">Denim Collection</p>
          </div>
          <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
            <img src="/products/product4.jpg" alt="Boys Wear 4" className="rounded-lg mb-3"/>
            <p className="font-medium">Ethnic Style</p>
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">International Shipping</h2>
        <p className="text-lg text-gray-600 mb-6">
          We proudly deliver worldwide with fast and reliable shipping.
        </p>
        <div className="flex justify-center space-x-6 text-4xl">
          <span>🇮🇳</span>
          <span>🇦🇪</span>
          <span>🇺🇸</span>
          <span>🇹🇭</span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600">
          Have questions or want to place a bulk order? Contact us directly.
        </p>
        <a 
          href="https://wa.me/919755502072" 
          className="inline-block mt-6 bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
        <div className="mt-6 flex justify-center space-x-6 text-gray-600 text-2xl">
          <a href="https://wa.me/919755502072">💬</a>
          <a href="#">📷</a>
          <a href="#">📘</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>🌍 English | हिन्दी | العربية | ไทย</p>
        <p className="mt-2 text-sm">© 2025 Jimmy Junior Kids Wear. All rights reserved.</p>
      </footer>
    </div>
  );
}
