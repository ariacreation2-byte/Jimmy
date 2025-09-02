import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-semibold">Welcome to Jimmy Junior Kids Wear</h2>
        <p className="mt-2 text-gray-600">Only Boys Collection – Sizes 1x10 & 16x26 available</p>
      </main>
    </div>
  );
}
