import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Jimmy Junior Kids Wear</h1>
        <p className="text-lg">Premium Boys’ Wear – Made in India, Loved Worldwide</p>
      </section>

      {/* Collections */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Boys Collection</h2>
          <p>Trendy outfits for boys in all sizes (1x10 to 16x26).</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">International Shipping</h2>
          <p>India 🇮🇳 | Middle East 🇦🇪 | USA 🇺🇸 | Thailand 🇹🇭</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Order on WhatsApp</h2>
          <a
            href="https://wa.me/919755502072"
            className="text-green-600 font-bold hover:underline"
          >
            +91 9755502072
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
