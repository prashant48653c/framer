import {motion} from "framer-motion"
import './hero.scss'
const Hero = () => {
return (
<div>
<div className="wrapper-hero">

  <div className="hero-text">
    <div>
    <h1>Prashant Acharya</h1>
      <h2>FullStack Developer</h2>
    </div>
    <p>
      Hey there, welcome to my portfolio website – a creative hub where I showcase my passion-fueled projects in a laid-back and down-to-earth way.

    </p>
      
      <button className="btn btn-resume" >Resume</button>
  </div>

  <div className="hero-images">
      <motion.img className="hero-img" src="https://media.licdn.com/dms/image/D5603AQHZcF8kHbVQNg/profile-displayphoto-shrink_800_800/0/1695956003175?e=2147483647&v=beta&t=CY4N9s_DCygr6SKyqGPPzPZ37n1gw10tPoW908H9v-4" />
  </div>


</div>
</div>
)
}

export default Hero