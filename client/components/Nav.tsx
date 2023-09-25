import { useNavigate } from 'react-router-dom'

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
    <nav className=" p-10 flex 2-[250px] lg:w-[300px] rounded-md bg-blue-100 ">
      <ul className="text-xl w-full lg:text-2xl">
        <li>
          <button
            className="text-black font-bold hover:scale-125 ease-in duration-100 hover:max-w-full h-0.5  hover:text-blue-400 mb-2"
            onClick={() => goTo('/')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="text-black font-bold hover:scale-125 ease-in duration-100 hover:max-w-full h-0.5  hover:text-blue-400 mb-2"
            onClick={() => goTo('/projects')}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="text-black font-bold hover:scale-125 ease-in duration-100 hover:max-w-full h-0.5  hover:text-blue-400 mb-2"
            onClick={() => goTo('/contact')}
          >
            Contact
          </button>
        </li>
      </ul>
      <div className="flex w-[50px] text-black justify-end"></div>
    </nav>
  )
}

export default Nav
