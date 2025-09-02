import Header from "../components/Header";
import Hero from "../components/Hero";
import ShippingBar from "../components/ShippingBar";
import CategoryCard from "../components/CategoryCard";
import Newsletter from "../components/Newsletter";
import BestSellers from "../components/BestSellers"; // 👈 new import

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ShippingBar />

      {/* Categories */}
      <section className="section">
        <div className="container">
          <h2>Categories</h2>
          <div id="boys" className="grid">
            <CategoryCard
              title="Boys Tees"
              image="product/5516.jpg"
            />
            <CategoryCard
              title="Boys Shirts"
              image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop"
            />
            <CategoryCard
              title="Shorts & Bottoms"
              image="https://images.unsplash.com/photo-1546954418-5fd4d3d7b8a8?q=80&w=1200&auto=format&fit=crop"
            />
            <CategoryCard
              title="Accessories"
              image="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <BestSellers />   {/* 👈 yaha direct component call kar diya */}

      {/* Sizes strip */}
      <section id="sizes" className="section" style={{ paddingTop: 0 }}>
        <div
          className="container"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 16,
          }}
        >
          <strong>Sizes:</strong> 1x10, 16x26 & custom bulk on request.
        </div>
      </section>

      <Newsletter />

      {/* Footer */}
      <footer className="footer">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div>
            © {new Date().getFullYear()} Jimmy Junior — The Premium Brand
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <a
              href="https://wa.me/919755502072"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href=" https://www.instagram.com/jimmy_junior_kids_wear"
              style={{ color: "var(--muted)" }}
            >
              Instagram
            </a>
            <a href="#" aria-disabled="true" style={{ color: "var(--muted)" }}>
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
