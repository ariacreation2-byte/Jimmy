export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img src="/logo.jpg" alt="Jimmy Junior Logo" className="h-14 w-auto rounded-lg" />
        <span className="text-xl font-bold">Jimmy Junior</span>
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="#bestsellers">Best Sellers</a>
        <a href="#sizes">Sizes</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
