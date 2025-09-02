export default function Home() {
  return (
    <div className="p-6">
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Jimmy Junior Kids Wear</h2>
        <p className="text-lg text-gray-600">
          Premium Boys’ Wear – Made in India, Loved Worldwide 🌍
        </p>
      </section>

      <section className="text-center py-8 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Boys Collection</h3>
        <p className="text-gray-600">
          Trendy outfits for boys in all sizes <b>(1x10 to 16x26)</b>.
        </p>
      </section>

      <section className="text-center py-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">🌎 International Shipping</h3>
        <p className="text-gray-600">
          India 🇮🇳 | Middle East 🇦🇪 | USA 🇺🇸 | Thailand 🇹🇭
        </p>
      </section>

      <section className="text-center py-8">
        <a
          href="https://wa.me/919755502072"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
        >
          Order on WhatsApp
        </a>
      </section>
    </div>
  );
}
