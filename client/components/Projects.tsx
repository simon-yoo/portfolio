import { Link } from 'react-router-dom'
import Project from './Project'

function Projects() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex rounded-lg justify-center items-center border-4 p-4 w-[150px] border-browny cursor-pointer duration-700 hover:scale-110 hover:bg-browny hover:text-d_color my-[100px]">
          <Link
            download="simon-cv.pdf"
            to="/simon-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center border-b border-b-browny  m-10 p-10">
        <h3 className="text-2xl md:text-4xl m-8">My Projects</h3>
        <p className="m-10 text-lg md:text-xl">
          Heres a list of most of the projects Ive been working on lately. All
          of these were built during my coding camp adventure on{' '}
          <a
            href="https://devacademy.co.nz/?gclid=CjwKCAjwoqGnBhAcEiwAwK-OkeSi0fK4zo50VoS1x-wdvujkEEC4qZ0RE9bRMr11i5rGm4IDHEt00hoCocsQAvD_BwE"
            target="_blank"
            rel="noopener noreferrer"
          >
            DevAcademy
          </a>
          , where Ive been coding for almost 4 months non-stop until I completed
          all the projects required to get my Full-Stack Developer
          certification.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-[600px] lg:w-[1000px] rounded-xl cursor-pointer hover:scale-105 m-10 items-center border-2 shadow-2xl p-10 justify-center ">
          <Project
            title="Wardrobe Wonders"
            img="/images/wa-wo.png"
            tech="React"
            link="https://wardrobe-wonders.onrender.com/"
            repo="https://github.com/matai-2023/wa-wo"
          />
          <p className="text-lg md:text-xl">
            My team final project built within a week at Dev Academy.
          </p>
        </div>
        <div className="flex flex-col w-[600px] lg:w-[1000px] rounded-xl cursor-pointer hover:scale-105 m-10 items-center border-2 shadow-2xl p-10 justify-center ">
          <Project
            title="World GYM"
            img="/images/world-gym.png"
            tech="React"
            link="https://wardrobe-wonders.onrender.com/"
            repo="https://github.com/simon-yoo/gym"
          />
          <p className="text-lg md:text-xl">
            My team final project built within a week at Dev Academy.
          </p>
        </div>
      </div>
    </>
  )
}

export default Projects
