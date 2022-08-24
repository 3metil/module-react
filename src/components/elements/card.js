import './card.css';

function Card({url, title, description, price, weight}) {
    return (
        <div className="card">
        <img className='card-preview' src={url} alt="" />

        <h2 className="card__title">{title}</h2>

        <p className="card__description">{description}
        
        </p>
        <div className="card__price">{price} / {weight}</div>
        </div>
    );
}

export default Card;