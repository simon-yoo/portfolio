import { BiLogoJavascript, BiLogoReact, BiLogoNodejs } from 'react-icons/bi'
import { TbBrandTypescript } from 'react-icons/tb'

function Home() {
  return (
    <div>
      <div className="profile">
        <div className="profile-left ">
          <img className="profile-img" src="/images/Y.png" alt="" />
        </div>
        <div className="flex flex-col m-[50px] lg:w-[750px]">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="uppercase m-4">Welcome</h1>
            <p className="text-lg md:text-2xl mt-4">
              My journey as a software developer began at Dev Academy, a
              renowned coding Bootcamp that sparked my passion for
              problem-solving and innovative thinking. With a solid foundation
              in coding, I am driven to continuously expand my knowledge and
              tackle new challenges in the dynamic world of software
              development. I am eager to contribute my skills, learn from
              experienced professionals, and make a meaningful impact in the
              industry. I am excited to connect with like-minded individuals and
              organisations to collaborate, grow, and thrive in the world of
              software development. Let's connect and explore opportunities to
              create innovative solutions together.
            </p>
          </div>
          <div className="icon-skills">
            <BiLogoNodejs className="skill" size={40} color={'#403d39'} />
            <BiLogoJavascript className="skill" size={40} color={'#403d39'} />
            <BiLogoReact className="skill" size={40} color={'#403d39'} />
            <TbBrandTypescript className="skill" size={40} color={'#403d39'} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
