import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.scss"

const currentUser = {
  id: 1,
  name: "Name LastName",
  isSeller: true,
}
// const currentUser = null

export function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const [options, setOptions] = useState(false)

  const toggleNavbar = () => {
    window.scrollY > 0 ? setNavbar(true) : setNavbar(false)
  }

  const toggleOptions = () => {
    setOptions(!options)
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleNavbar)
    return () => {
      window.removeEventListener("scroll", toggleNavbar)
    }
  }, [])

  return (
    <header className={navbar ? "active" : "inactive"}>
      <div className="container">
        <div className="top">
          <div className="left">
            <Link to="/">ArtMarket</Link>
          </div>
          <div className="right">
            <Link to="/">ArtMarket Business</Link>
            <Link to="/">Explore</Link>
            <Link to="/">English</Link>

            {!currentUser ? (
              <>
                <Link to="/">Become a Seller</Link>
                <Link to="/">Sign in</Link>
                <button>JOIN</button>
              </>
            ) : (
              <div className="user" onClick={toggleOptions}>
                <img height={32} width={32} src="/img/user.svg" alt="user" />
                <span>{currentUser?.name}</span>
                {options && (
                  <div className="options ">
                    {currentUser?.isSeller && (
                      <>
                        <span>Artworks</span>
                        <span>New artwork</span>
                      </>
                    )}
                    <span>Orders</span>
                    <span>Messages</span>
                    <span>Logout</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {navbar && (
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
