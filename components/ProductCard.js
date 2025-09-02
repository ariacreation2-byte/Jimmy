// components/ProductCard.js
export default function ProductCard({ title, price, image }){
  return (
    <div className="card product">
      <img src={image} alt={title} />
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="price">₹ {price}</div>
      </div>
    </div>
  );
}
