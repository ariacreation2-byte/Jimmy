// components/Header.js
export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/logo.jpg" alt="Jimmy Junior Logo" />
          <span>Jimmy Junior</span>
        </div>

        <nav className="nav">
          <a href="#boys">Boys</a>
          <a href="#sizes">Sizes</a>
          <a href="#bestsellers">Best Sellers</a>
          <a className="cta" href="https://wa.me/919755502072" target="_blank" rel="noreferrer">
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
