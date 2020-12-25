import React, { useState } from 'react';
// import Img from 'react-optimized-image';
import Phone from '../../images/Iphone.png'
import Navbar from '../Navbar'
import { motion } from 'framer-motion';
import NavModal from '../NavModal';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
  setOpen(!open)
  console.log("hello");
  }


  const fadeLeft ={
    hidden: {opacity:0, y:0},
    visible: {opacity:1, y:-40}
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <Navbar handleClick={handleClick} open={open} />
          </div>
          <div className="hero">
          <div className="hero__left">
            <h1>
              Making <span>job hunting </span> <br/>
              way too easier!
            </h1>
            <p>One place with the best jobs companies in tech. <br/>
              Apply to all of them with a single profile <br/>
                and get in touch with hiring managers.</p>
                <button>Get Started</button>
          </div>

          <div className="hero__right">
            <motion.img
              src={Phone}
              alt="author"
              variants={fadeLeft}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1 }}
            />
          </div> 
        </div>
        </div>
        {
          open ? <NavModal open={open}/> : null
        }
        
      </div>
    </>
  )
}

export default Home
