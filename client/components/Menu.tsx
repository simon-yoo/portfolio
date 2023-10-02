import { useNavigate } from 'react-router-dom'
// Import Tailwind CSS in your main TypeScript file

interface Props {
  toggleMenu: () => void
}

function Menu(props: Props) {
  const navigate = useNavigate()

  function goTo(link: string) {
    props.toggleMenu()
    navigate(link)
  }

  return (
    <>
      <nav className="flex bg-browny text-d_color h-[100px] shadow-2xl m-8">
        <ul className="w-full flex text-2xl items-center justify-around">
          <li className="w-full flex duration-300 hover:text-3xl justify-center">
            <button
              className="link link-underline link-underline-black text-d_color"
              onClick={() => goTo('/')}
            >
              Home
            </button>
          </li>
          <li className="w-full flex duration-300 hover:text-3xl justify-center">
            <button
              className="link link-underline link-underline-black text-d_color"
              onClick={() => goTo('/projects')}
            >
              Projects
            </button>
          </li>
          <li className="w-full flex duration-300 hover:text-3xl justify-center">
            <button
              className="link link-underline link-underline-black text-d_color"
              onClick={() => goTo('/contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
