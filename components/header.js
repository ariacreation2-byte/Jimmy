import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 shadow-md flex items-center bg-white">
      <Image 
        src="/logo.png" 
        alt="Jimmy Junior Logo" 
        width={120} 
        height={60} 
      />
      <h1 className="ml-4 text-xl font-bold">Jimmy Junior Kids Wear</h1>
    </header>
  );
          }
