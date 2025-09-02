export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 py-6 text-center text-gray-600 text-sm">
      <p>© {new Date().getFullYear()} Jimmy Junior — Premium Kids Wear</p>
      <div className="mt-2 space-x-4">
        <a href="https://wa.me/919755502072" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="https://www.instagram.com/jimmy_junior_kids_wear" target="_blank" rel="noreferrer">Instagram</a>
        <a href="#" aria-disabled="true">Facebook</a>
      </div>
    </footer>
  );
}
