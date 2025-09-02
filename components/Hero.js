// components/Hero.js
export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <h1>Kids Wear (Only Boys)</h1>
          <p>High-quality & affordable boys’ clothing — Made in India, shipped worldwide.</p>
          <a className="btn" href="https://wa.me/919755502072" target="_blank" rel="noreferrer">Shop Now</a>
        </div>

        <div className="hero-figure">
          <img
            src="https://images.unsplash.com/photo-1593032457860-9e8b0f6f8d60?q=80&w=1200&auto=format&fit=crop"
            alt="Happy kid wearing tee"
          />
        </div>
      </div>
    </section>
  );
}
