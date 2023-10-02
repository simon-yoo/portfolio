import { Link } from 'react-router-dom'

interface Props {
  title: string
  img: string
  tech: string
  link: string
  repo: string
}

function Project(props: Props) {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node',
  }

  const link = props.link || 'http://'
  const repo = props.repo || 'http://'

  return (
    <>
      <div>
        <a
          href={link}
          className="flex justify-center "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" w-[450px] h-[450px]">
            <img
              className="w-full rounded-full h-full shadow-xl"
              src={props.img}
              alt={'Screenshot of ' + props.title}
            />
          </div>
        </a>
        <div className="flex flex-col items-center m-[70px]">
          <div>
            <p>
              {props.tech.split(' ').map((t) => (
                <i
                  className={
                    'fab, fa-sass, fa-css3-alt, fa-js-square, fa-react, fa-vuejs, fa-chart-bar, fa-node'
                  }
                  key={t}
                />
              ))}
            </p>
            <p className="text-3xl"> {props.title} </p>
          </div>
          {/* {props.children} */}
          <div className="flex justify-center items-center mt-[50px]">
            <a
              className="m-4 border-4 rounded-xl duration-700 p-4 border-browny cursor-pointer hover:scale-110 hover:bg-browny hover:text-d_color"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View source <i className="fas fa-external-link-alt" />
            </a>
            <a
              className="m-4 border-4 rounded-xl duration-700 p-4 border-browny cursor-pointer hover:scale-110 hover:bg-browny hover:text-d_color"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Project
