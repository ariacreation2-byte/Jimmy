import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <main style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Welcome to Jimmy Junior Kids Wear
        </h2>
        <p style={{ marginTop: "10px", color: "gray" }}>
          Only Boys Collection – Sizes 1x10 & 16x26 available
        </p>
      </main>
    </div>
  );
  }
