export default function ProductCard({ title, price, size, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer text-center bg-white shadow rounded-xl p-4 hover:shadow-lg transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">Size: {size}</p>
      <p className="text-blue-600 font-bold">₹{price}</p>
    </div>
  );
}
