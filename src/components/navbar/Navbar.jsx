    import React from 'react'
    import './navbar.scss'
    import { FaFacebook } from "react-icons/fa";
    import { BsGithub } from "react-icons/bs";
    import { FaInstagram } from "react-icons/fa6";
    import { FaLinkedinIn } from "react-icons/fa";
    import { motion } from 'framer-motion'
   

    const Navbar = () => {
    return (
    <nav className='navbar'>
    {/* Sidebar */}
     
    <div className="wrapper">
    <motion.span whileHover={{ y:-4 }} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .4 }} >Praxant</motion.span>
    <div className="social">
        <motion.a  whileHover={{ y:-4 }} href="/facebook">
            <FaFacebook className='icon-fb' />
        </motion.a>

        <motion.a  whileHover={{ y:-4 }} href="/facebook">
            <BsGithub className='icon-fb' />
        </motion.a>

        <motion.a  whileHover={{ y:-4 }} href="/facebook">
            <FaInstagram className='icon-fb' />

        </motion.a>

        <motion.a  whileHover={{ y:-4 }} href="/facebook">
            <FaLinkedinIn className='icon-fb' />
        </motion.a>
    </div>
    </div>
    </nav>
    )
    }

    export default Navbar