export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Links */}
        <div className="mb-4 md:mb-0">
          <a href="/" className="mr-4 hover:underline">Home</a>
          <a href="/boys" className="mr-4 hover:underline">Boys</a>
          <a href="/sizes" className="mr-4 hover:underline">Sizes</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        {/* Languages */}
        <div className="mb-4 md:mb-0">
          <span className="mr-2">🌐</span>
          <span className="mr-2">English</span>|
          <span className="mx-2">हिंदी</span>|
          <span className="mx-2">العربية</span>|
          <span className="ml-2">ไทย</span>
        </div>

        {/* Socials */}
        <div>
          <a href="https://wa.me/919755502072" className="mr-4 hover:underline">WhatsApp</a>
          <a href="#" className="mr-4 hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
