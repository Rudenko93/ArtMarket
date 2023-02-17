import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <header>
      <div className="left">ArtMarket</div>
      <div className="right">
        <Link>ArtMarket Business</Link>
        <Link>Explore</Link>
        <Link>English</Link>
        <Link>Become a Seller</Link>
        <Link>Sign in</Link>
      </div>
      <div className="bottom"></div>
    </header>
  )
}
