export default function InfoCard({ image, icon, title, description }) {
  return (
    <div className="cardItem">
      {icon && <div className="icon-container">{icon}</div>}
      {image && (
        <div className="image-container">
          <img src={image} alt={title} loading="lazy" width="400px" height="300px"/>
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
