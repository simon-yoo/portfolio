import { NavLink } from "react-router-dom"
import Navbar from "./NavbarBurger"

function Header(){
    return(
        <nav className="nav-container">
            <div className="main-logo">logo</div>
        <ul className="nav-links">
          <NavLink className="home-link" to={`/`}><li>Home</li></NavLink>
          <NavLink className="projects-link" to="/projects"><li >Projects</li></NavLink>
          <NavLink className="contact-link" to="/contact"><li >Contact</li></NavLink>
        </ul>
       <Navbar/>
       </nav>
    )
}

export default Header