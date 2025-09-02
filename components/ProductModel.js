export default function ProductModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
        <p className="text-gray-500">Size: {product.size}</p>
        <p className="text-xl font-semibold mt-2">₹{product.price}</p>
        <a
          href={`https://wa.me/919755502072?text=I%20want%20to%20order%20${product.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
