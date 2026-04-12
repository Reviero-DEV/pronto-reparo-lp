export default function InfoCard({
  image,
  icon,
  name,
  role,
  review,
  rating,
  question,
  answer,
  title,
  description,
  className = "",
  delay = 0,
}) {
  return (
    <div
      className={`cardItem reveal ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {icon && <div className="icon-container">{icon}</div>}
      {image && (
        <div className="image-container">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width="400px"
            height="300px"
          />
        </div>
      )}
      {name && <h2>{name}</h2>}
      {role && <span>{role}</span>}
      {review && <p>{review}</p>}
      {rating && <small>{rating}</small>}
      {question && <h3>{question}</h3>}
      {answer && <p>{answer}</p>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </div>
  );
}
