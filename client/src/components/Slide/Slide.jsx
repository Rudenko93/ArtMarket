import { useState } from "react"
import { cards } from "../../../../api/data"
import Slider from "infinite-react-carousel"
import "./Slide.scss"
import { CatCard } from "../CatCard"

export function Slide({ children, slidesToShow, arrowsScroll }) {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  )
}
