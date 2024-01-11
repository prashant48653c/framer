import {motion} from "framer-motion"
import './hero.scss'
const Hero = () => {
  return (
    <div>
        <div className="wrapper-hero">
            <div className="hero-text">
                <h1>Prashant Acharya</h1>
            </div>

            <div className="hero-images">
               <motion.img    className="hero-img" src="https://previews.123rf.com/images/spaxia/spaxia1104/spaxia110400042/9359492-portrait-of-young-man-thinking-black-background.jpg" alt="Hero image of the developer" />
            </div>
        </div>
    </div>
  )
}

export default Hero