// components/CategoryCard.js
export default function CategoryCard({ title, image, href="#"}){
  return (
    <a className="card" href={href}>
      <img src={image} alt={title} />
      <div className="card-body">
        <div className="card-title">{title}</div>
      </div>
    </a>
  );
}
