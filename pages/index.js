import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Jimmy Junior Kids Wear</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Premium Boys Wear – From India to the World 🌎
        </p>
        <a
          href="/boys"
          className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
        >
          Explore Collection
        </a>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-bold">Available Sizes</h3>
          <p>1×10 & 16×26</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Shipping</h3>
          <p>India, Middle East, USA, Thailand</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Easy Orders</h3>
          <p>Direct WhatsApp Ordering</p>
        </div>
      </section>

      <Footer />
    </div>
  );
    }
