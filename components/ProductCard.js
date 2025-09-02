export default function ProductCard({ title, price, size, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500">Size: {size}</p>
        <p className="text-blue-600 font-bold">₹{price}</p>
      </div>
    </div>
  );
}
