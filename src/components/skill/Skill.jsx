import React from 'react'
import './skill.scss'
import { FaInstagram } from "react-icons/fa6";
import {motion} from 'framer-motion'


const Skill = () => {
  return (
    <div className='skill-container'>
        
        <button className="btn btn-skill">Play with my skills</button>
        {/* icon image  */}
        <motion.div>
        <FaInstagram size={45}/>

        </motion.div>

    </div>
  )
}

export default Skill