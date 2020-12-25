import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';

const NavModal = ( { open }) => {

  


  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="nav_modal"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "100vh" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] ,  }}
            >
    <Link to="/Login" className="nav_modal__links">
      Login
    </Link>
    <Link to="/Register" className="nav_modal__links">
      Register
    </Link>
    </motion.div>
    </AnimatePresence>
    
  )
}

export default NavModal
