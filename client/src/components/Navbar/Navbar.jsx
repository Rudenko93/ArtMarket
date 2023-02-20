import { useEffect, useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import useOutsideAlerter from "./hooks/useOutsideAlerter"
import "./Navbar.scss"

const currentUser = {
  id: 1,
  name: "Name LastName",
  isSeller: true,
}
// const currentUser = null

export function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const { ref, isShow, setIsShow } = useOutsideAlerter(false)
  const { pathname } = useLocation()

  const changeNavbarActive = () => {
    window.scrollY > 0 ? setNavbar(true) : setNavbar(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarActive)
    return () => {
      window.removeEventListener("scroll", changeNavbarActive)
    }
  }, [])

  return (
    <header className={navbar || pathname !== "/" ? "active" : "inactive"}>
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
              <div
                className="user"
                onClick={() => setIsShow(!isShow)}
                ref={ref}>
                <img height={32} width={32} src="/img/user.svg" alt="user" />
                <span>{currentUser?.name}</span>

                {isShow && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link to="/artworks">Artworks</Link>
                        <Link to="/add">New artwork</Link>
                      </>
                    )}
                    <Link to="/orders">Orders</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/">Logout</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {(navbar || pathname !== "/") && (
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
