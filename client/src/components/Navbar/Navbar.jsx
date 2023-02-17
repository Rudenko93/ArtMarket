import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.scss"

export function Navbar() {
  const [isActive, setIsActive] = useState(true)

  const changeActive = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", changeActive)
    return () => {
      window.removeEventListener("scroll", changeActive)
    }
  }, [])

  return (
    <header className={isActive ? "active" : "inactive"}>
      <div className="container">
        <div className="top">
          <div className="left">
            <Link to="/">ArtMarket</Link>
          </div>
          <div className="right">
            <Link to="/">ArtMarket Business</Link>
            <Link to="/">Explore</Link>
            <Link to="/">English</Link>
            <Link to="/">Become a Seller</Link>
            <Link to="/">Sign in</Link>
            <button>JOIN</button>
          </div>
        </div>
      </div>
      {isActive && (
        <>
          {" "}
          <hr />
          <div className="bottom">
            <span>Graphics & Design</span>
            <span>Video & Animations</span>
            <span>Writing & Translation</span>
            <span>All services</span>
            <span>Digital Marketing</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Business</span>
            <span>Lifestyle</span>
          </div>
        </>
      )}
    </header>
  )
}
