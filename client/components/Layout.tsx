import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook,AiOutlineGithub} from 'react-icons/ai'

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
    <hr />
     <div className='icon-links'>
     <a className="icon" href="https://www.instagram.com/simonshyoo/"> <span><AiOutlineInstagram size={30} color={'#424445'}/></span> <span>Instagram</span></a>
     <a className="icon" href="https://www.linkedin.com/in/simon-yoo-12b078183/"><span><AiOutlineLinkedin size={30} color={'#424445'}/></span> <span>LinkedIn</span></a>
     <a className="icon" href="https://github.com/simon-yoo"><span><AiOutlineGithub size={30} color={'#424445'} /></span><span>Github</span></a>
     <a className="icon" href="https://www.facebook.com/yoosghn0"><span><AiOutlineFacebook size={30} color={'#424445'}/></span><span>Facebook</span></a>
     </div>
    </div>
    
    
  )
}

export default Layout
