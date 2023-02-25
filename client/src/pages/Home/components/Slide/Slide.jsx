import Slider from "infinite-react-carousel"
import "./Slide.scss"

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
