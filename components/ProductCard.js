export default function ProductCard({ product }) {
  return (
    <div className="text-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded-lg shadow"
      />
      <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">₹{product.price}</p>
    </div>
  );
}
