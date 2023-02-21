import { useState } from "react"
import { cards } from "../../../../api/data"
import "./Slider.scss"

export function Slider() {
  const [curr, setCurr] = useState(0)
  const prev = () => {
    setCurr(curr === 0 ? cards.length - 1 : curr - 1)
  }
  const next = () => {
    setCurr(curr === cards.length - 1 ? 0 : curr + 1)
  }

  return (
    <div className="wrapper">
      <div className="slider">
        <div
          className="container"
          style={{ transform: `translateX(-${curr * 100}%)` }}>
          {cards.map((card) => (
            <img src={card.img} alt="" />
          ))}
        </div>
        <div className="icons">
          <div className="icon" onClick={prev}>
            prev
          </div>
          <div className="icon" onClick={next}>
            next
          </div>
        </div>
      </div>
    </div>
  )
}
