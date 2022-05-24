import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import ThemeButton from "./ThemeButton";

const Header = () => {
  // Context von Theme verwenden:
  const { appLayout } = useContext(ThemeContext)

  // variablen aus App layout destrukturieren: 
  const { istHell, hell, dunkel } = appLayout
  // istHell wenn true, dann eigenschaften von hell, wenn false, eigenscahften von dunkel
  const layout = istHell ? hell : dunkel
  return (
    <div className='Header' >
      <ThemeButton />
      <h1 style={{color: layout.text, background: layout.hintergrund }}>Meine To Do App</h1>
      <ul>
        <li><Link to="/">Startseite mit Link</Link></li>
        <li><Link to="/todos">Todos mit Link</Link></li>
        <li><Link to="/help">Help mit Link</Link></li>
      </ul>
    </div>
  )
}

export default Header