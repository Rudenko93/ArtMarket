import { Link } from "react-router-dom"
import "./ProductCard.scss"

export function ProductCard({ product }) {
  return (
    <Link to="" className="link">
      <div className="gigCard">
        <img src={product.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={product.pp} alt="" />
            <span>{product.username}</span>
          </div>
          <p>{product.desc}</p>
          <div className="star">
            <img src="/img/star.png" alt="" />
            <span>{product.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="/img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {product.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  )
}
