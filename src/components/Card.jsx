import diptaPhoto from '../assets/dipta.jpg'

function Card({ item }) {
  return (
    <article className="card">
      <img src={diptaPhoto} alt={item.title} className="card__image" loading="lazy" />
      <div className="card__content">
        <h2 className="card__title">{item.title}</h2>
        <p className="card__description">{item.description}</p>
      </div>
    </article>
  )
}

export default Card
