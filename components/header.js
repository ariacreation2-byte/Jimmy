import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Jimmy Junior Logo" width={40} height={40} />
        <h1 className="text-xl font-bold">Jimmy Junior</h1>
      </div>
      <nav className="flex gap-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/boys" className="hover:underline">Boys</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}
