import { Link } from "react-router-dom"
import "./CatCard.scss"

export function CatCard({ card }) {
  return (
    <Link to="/categories/123">
      <div className="catCard">
        <img src={card.img} />
        <span className="title">{card.title}</span>
        <span className="desc">{card.desc}</span>
      </div>
    </Link>
  )
}
