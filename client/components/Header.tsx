import React, { useState } from 'react'
import Nav from './Nav'

const Header: React.FC = () => {
  const [navOpened, setNavOpened] = useState(false)
  function toggleMenu() {
    setNavOpened((prevNavOpened) => !prevNavOpened)
  }
  return (
    <nav className="nav-container">
      <div className="main-logo">Logo</div>

      <div className="absolute z-50 pl-4 pt-3 pr-4 flex justify-between items-center">
        {!navOpened && (
          <div>
            <button
              className="fixed top-10 text-[10px] right-10 hover:scale-125 ease-in duration-100 hover:text-blue-400"
              onClick={toggleMenu}
            >
              <i className="fa-solid  fa-bars absolute top-0 right-0 h-10 w-10"></i>
            </button>
          </div>
        )}
        {navOpened && (
          <button
            className="fixed top-10 right-10 hover:text-blue-400 hover:scale-125 ease-in duration-100"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-times text-3xl transition ease-in-out focus:-rotate-45 duration-300 absolute top-0 right-0 h-10 w-10"></i>
          </button>
        )}

        <nav
          className={`text-orange fixed right-20 hover:scale-125 ease-in duration-100 top-[100px] h-0  backdrop-filter backdrop-blur-md bg-opacity-5 shadow-transparent transition-all ease-in-out duration-200 ${
            navOpened ? 'opacity-100' : 'hidden'
          }`}
        >
          <Nav toggleMenu={toggleMenu} />
        </nav>
      </div>
    </nav>
  )
}

export default Header
