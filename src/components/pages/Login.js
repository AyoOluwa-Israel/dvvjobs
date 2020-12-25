import React, {useState} from 'react'
import { motion} from 'framer-motion';
import {FaTimes} from 'react-icons/fa'
import { useHistory } from "react-router-dom";

const Login = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  const history = useHistory();

  const handleLogin = () => {
    setLoginOpen(!loginOpen)
    console.log("hello");
    let path = '/'; 
    history.push(path);

  }
  return ( ! loginOpen && 
    <motion.div className="login"
      initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration: 1, }}
    >
    <div className="login__left"></div>
    <div className="login__right">
      <div className="login__close">
        <h1>logo</h1>
        <FaTimes size={35} color="#ffffff" onClick={handleLogin}/>
      </div>

      <div className="login__bottom">
        <div className="login__hero">
          <p>Login to</p>
        </div>
        <div className="login__text__logo">
          Logo
        </div>
      </div>

      <div className="login__form">
        <form action="">
          <label htmlFor="" className="login__label">Email Address</label>
          <input type="email" name="" id="" placeholder="izzyfresher@gmail.com"/>
          
          <label htmlFor="" className="login__label">Password</label>
          <input type="password" name="" id="" placeholder="**********"/>
        </form>
        <button type="submit" className="login__btn">Login</button>
      </div>
      
      
    </div>
      
    </motion.div>
  )
}

export default Login
