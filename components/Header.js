export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Jimmy Junior Logo" className="h-12" />
        <h1 className="text-2xl font-bold text-gray-800">Jimmy Junior</h1>
      </div>

      {/* Navigation */}
      <nav className="space-x-6 text-gray-700 font-medium">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/boys" className="hover:text-blue-600">Boys</a>
        <a href="/sizes" className="hover:text-blue-600">Sizes</a>
        <a href="https://wa.me/919755502072" className="text-green-600 hover:underline">WhatsApp</a>
      </nav>
    </header>
  );
}
