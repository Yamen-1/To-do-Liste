import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const ThemeButton = () => {
  const { toggleLayout } = useContext(ThemeContext)
  return (
    <button onClick={toggleLayout}>Layout ändern</button>
  )
}

export default ThemeButton