import ProductCard from "./ProductCard";

export default function BestSellers() {
  return (
    <section id="bestsellers" className="section">
      <div className="container">
        <h2>Best Sellers</h2>
        <div className="grid">
          <ProductCard
            title="Blazer 0x4"
            price="450.00"
            image="/product/5516.jpg"
          />
          <ProductCard
            title="Printed Polo"
            price="899.00"
            image="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1200&auto=format&fit=crop"
          />
          <ProductCard
            title="Casual Shorts"
            price="799.00"
            image="https://images.unsplash.com/photo-1618354694520-3f9b8b87b84b?q=80&w=1200&auto=format&fit=crop"
          />
          <ProductCard
            title="Denim Shirt"
            price="999.00"
            image="https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}
