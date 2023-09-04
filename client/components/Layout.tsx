
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import NavbarBurger from './NavbarBurger'

function Layout() {
  return (
    <div>
    <Header/>
    <NavbarBurger/>
    <Outlet />
  <Footer/>
    </div>
    
    
  )
}

export default Layout
