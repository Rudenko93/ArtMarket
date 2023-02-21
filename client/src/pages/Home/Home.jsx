import { Featured } from "../../components/Featured"
import { TrustedBy } from "../../components/TrustedBy"
import { Slider } from "../../components/Slider/"
import "./Home.scss"

export function Home() {
  return (
    <div className="">
      <Featured />
      <TrustedBy />
      <Slider />
    </div>
  )
}
