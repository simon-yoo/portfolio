import{BiLogoJavascript, BiLogoReact, BiLogoNodejs} from 'react-icons/bi'
import {TbBrandTypescript} from 'react-icons/tb'

function Home(){
    return(
        <div>
      <div className='profile'>
        <div className="profile-left">
          <img className="profile-img" src="/client/public/images/Y.png" alt="" />
        </div>
        <div className="profile-right">
          <div className='about-me'>
            <h1>welcome to my page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis consequuntur accusamus? Libero reprehenderit vel saepe iusto totam maiores, eveniet, numquam nulla explicabo esse possimus sed quisquam cupiditate tenetur ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsum ducimus quod ipsam libero quae eius pariatur, suscipit eligendi a. Dolore cumque nostrum voluptatibus omnis quisquam sunt, asperiores illo ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptatum molestiae tenetur neque facilis reprehenderit, eligendi itaque dolorum nulla, optio, reiciendis animi repudiandae voluptas asperiores a libero expedita necessitatibus rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsum, neque a quos voluptatem aperiam inventore delectus ea odit, dolorum assumenda iure. Quam debitis atque placeat officia quisquam illo sit! lorem</p>
            </div>
      <div className="icon-skills">
        <BiLogoNodejs className="skill" size={40} color={'#403d39'}/>
        <BiLogoJavascript className="skill" size={40} color={'#403d39'}/>
        <BiLogoReact className="skill" size={40} color={'#403d39'}/>
        <TbBrandTypescript className="skill" size={40} color={'#403d39'}/>
      </div>
      </div>
     </div>
        </div>
    )
}
export default Home