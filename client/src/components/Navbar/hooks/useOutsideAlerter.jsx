import { useEffect, useRef, useState } from "react"

export default function useOutsideAlerter(initialIsVisible) {
  const [isShow, setIsShow] = useState(initialIsVisible)
  const ref = useRef(null)

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsShow(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("touchstart", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("touchstart", handleClick)
    }
  })

  return { ref, isShow, setIsShow }
}
