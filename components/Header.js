export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Jimmy Junior" className="h-10 w-10 rounded-full" />
          <span className="font-bold text-xl">Jimmy Junior</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/boys" className="hover:text-yellow-300">Boys</a>
          <a href="/sizes" className="hover:text-yellow-300">Sizes</a>
          <a href="/contact" className="hover:text-yellow-300">Contact</a>
        </nav>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919755502072"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 px-4 py-2 rounded-lg font-medium hover:bg-green-600"
        >
          Order on WhatsApp
        </a>
      </div>
    </header>
  );
}
