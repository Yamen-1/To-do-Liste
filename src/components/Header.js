import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='Header' >
      <h1>Meine To Do App</h1>
      <ul>
        <li><a href="/">Startseite</a></li>
        <li><a href="/todos">Todos</a></li>
        <li><a href="/help">Help</a></li>
      </ul>
      <ul>
        <li><Link to="/">Startseite mit Link</Link></li>
        <li><Link to="/todos">Todos mit Link</Link></li>
        <li><Link to="/help">Help mit Link</Link></li>
      </ul>
    </div>
  )
}

export default Header