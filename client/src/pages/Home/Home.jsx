import { Featured } from "../../components/Featured"
import { TrustedBy } from "../../components/TrustedBy"
import { Slide } from "../../components/Slide/"
import { CatCard } from "../../components/CatCard"
import { cards } from "../../../../api/data"
import "./Home.scss"

export function Home() {
  return (
    <div className="">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={2}>
        {cards.map((card) => (
          <CatCard card={card} id={card.id} />
        ))}
      </Slide>
    </div>
  )
}
