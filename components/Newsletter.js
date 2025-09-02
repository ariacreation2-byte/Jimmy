// components/Newsletter.js
export default function Newsletter(){
  return (
    <section className="news section">
      <div className="container">
        <h2>Sign up for our newsletter</h2>
        <p style={{color:"var(--muted)", marginTop:4, marginBottom:14}}>
          Stay updated on new arrivals, special offers and more.
        </p>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input className="input" type="email" placeholder="Email address" required />
          <button className="btn-primary" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
