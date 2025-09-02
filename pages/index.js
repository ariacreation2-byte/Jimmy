import Header from "@/components/Header";
import ShippingBar from "@/components/ShippingBar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <ShippingBar />
      <main className="container">
        <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
