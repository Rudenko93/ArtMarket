import { useState } from "react"
import { ProductCard } from "./components/ProductCard/"
import { products } from "../../../../api/data"
import "./Category.scss"

export function Category() {
  const [sort, setSort] = useState("sales")
  const [open, setOpen] = useState(false)
  const [inpVal, setInpVal] = useState({ min: "", max: "" })
  // const minRef = useRef()
  // const maxRef = useRef()

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  // const apply = () => {
  //   console.log(minRef.current.value)
  //   console.log(maxRef.current.value)
  // }

  return (
    <div className="category">
      <div className="container">
        <span className="breadcrumbs">
          MyArt {">"} Graphics & Design {">"}{" "}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with MyArt AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input
              type="text"
              placeholder="min"
              value={inpVal.min}
              onChange={(e) => setInpVal({ ...inpVal, min: e.target.value })}
            />
            <input
              type="text"
              placeholder="max"
              value={inpVal.max}
              onChange={(e) => setInpVal({ ...inpVal, max: e.target.value })}
            />
            <button onClick={() => console.log(inpVal)}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="/img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="products">
          {products.map((product) => (
            <ProductCard product={product} id={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
