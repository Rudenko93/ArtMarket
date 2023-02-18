import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.scss"

const currentUser = {
  id: 1,
  name: "Name LastName",
  isSeller: true,
}

export function Navbar() {
  let a = true

  if (a) {
    console.log("1")
  } else {
    console.log("2")
  }

  console.log("1")
  const [navbarIsActive, setNavbarIsActive] = useState(false)
  const [optionsIsActive, setOptionsIsActive] = useState(false)

  const renderUser = () => {
    if (currentUser) {
      return !currentUser?.isSeller ? (
        <></>
      ) : (
        <div className="user">
          <img></img>
          <span>{currentUser?.name}</span>
          <div className="options">
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
        </div>
      )
    } else {
      return (
        <>
          <Link to="/">Become a Seller</Link>
          <Link to="/">Sign in</Link>
          <button>JOIN</button>
        </>
      )
    }
  }

  const changeNavbarActive = () => {
    window.scrollY > 0 ? setNavbarIsActive(true) : setNavbarIsActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarActive)
    return () => {
      window.removeEventListener("scroll", changeNavbarActive)
    }
  }, [])

  return (
    <header className={navbarIsActive ? "active" : "inactive"}>
      <div className="container">
        <div className="top">
          <div className="left">
            <Link to="/">ArtMarket</Link>
          </div>
          <div className="right">
            <Link to="/">ArtMarket Business</Link>
            <Link to="/">Explore</Link>
            <Link to="/">English</Link>
            {renderUser()}
          </div>
        </div>
      </div>
      {navbarIsActive && (
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
