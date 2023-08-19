
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
     <nav className="nav-container">
      <ul className="nav-links">
        <NavLink className="home-link" to={`/`}><li>Home</li></NavLink>
        <NavLink className="projects-link" to="/projects"><li >Projects</li></NavLink>
        <NavLink className="contact-link" to="/contact"><li >Contact</li></NavLink>
      </ul>
     </nav>
    <Outlet />

    </div>
  )
}

export default Layout
