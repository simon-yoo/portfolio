import React, { useState } from 'react'
import Nav from './Nav'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import Menu from './Menu'

const Header: React.FC = () => {
  const [navOpened, setNavOpened] = useState(false)

  function toggleMenu() {
    setNavOpened((prevNavOpened) => !prevNavOpened)
  }

  return (
    <>
      <div className="hidden lg:block bg-browny">
        <Menu toggleMenu={toggleMenu} />
      </div>
      <div className="w-screen flex justify-end">
        {!navOpened && (
          <div className="">
            <button
              className="m-8 text-4xl hover:text-5xl hover:text-browny lg:hidden"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        )}
        {navOpened && (
          <button
            className="m-8 text-4xl hover:text-5xl hover:text-browny lg:hidden"
            onClick={toggleMenu}
          >
            <RxCross2 />
          </button>
        )}
      </div>
      <div
        className={`flex justify-end mr-10 top-0 ${
          navOpened ? 'lg:hidden' : 'hidden'
        }`}
      >
        <Nav toggleMenu={toggleMenu} />
      </div>
    </>
  )
}

export default Header
