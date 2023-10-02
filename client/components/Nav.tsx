import { useNavigate } from 'react-router-dom'
// Import Tailwind CSS in your main TypeScript file

interface Props {
  toggleMenu: () => void
}

function Nav(props: Props) {
  const navigate = useNavigate()

  function goTo(link: string) {
    props.toggleMenu()
    navigate(link)
  }

  return (
    <>
      <nav className="w-[300px] text-d_color bg-browny h-[300px] rounded-lg shadow-2xl">
        <ul className="w-full h-full flex flex-col items-center justify-around text-2xl">
          <li className=" hover:text-3xl duration-300 link link-underline link-underline-black">
            <button className=" " onClick={() => goTo('/')}>
              Home
            </button>
          </li>
          <li className=" hover:text-3xl duraion-300 link link-underline link-underline-black">
            <button className="" onClick={() => goTo('/projects')}>
              Projects
            </button>
          </li>
          <li className=" hover:text-3xl duraion-300 link link-underline link-underline-black">
            <button className="" onClick={() => goTo('/contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
