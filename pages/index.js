import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Jimmy Junior</h2>
        <p className="text-lg text-gray-700">
          Premium Boys Wear Collection – Sizes available from 1x10 to 16x26
        </p>
      </main>
    </div>
  );
}
