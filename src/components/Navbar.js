import React from 'react';
import styled from 'styled-components';


const Nav = styled.nav `
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  

  .toggle_bar{
  width: 55px;
  height: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transform-origin: 1px;
  position: absolute;
  z-index: 10;
  top: 1em;
  right: 2em;
  
  }

  
  .toggle_bar__top{
  transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  opacity: ${({ open }) => open ? 1 : 0};
  top: -5px;
  left: -2px;
  width: 35%;
  height: 3px;
  background-color: white;
  margin-left: -17px;
  margin-top: -1px;
  transition: all 0.3s linear;
}

.toggle_bar__middle{
  transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  top: 2em;
  width: ${({ open }) => open ? '80%' : '100%' };
  height: 3px;
  background-color: white;
  transition: all 0.3s linear;
}

.toggle_bar__bottom{
  transform: ${({ open }) => open ? 'rotate(-135deg)' : 'rotate(0)'};
  top: 33px;
  left: 37px;
  width: ${({ open }) => open ? '35%' : '50%' };
  height: 3px;
  background-color: white;
  margin-left: ${({ open }) => open ? '21px' : 0 };
  margin-top: ${({ open }) => open ? '-3px' : 0 };
  transition: all 0.3s linear;
}
}

`


const Navbar = ({ handleClick, open}) => {
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  // setOpen(!open)
  // console.log("hello");
  // }
  return (
    <Nav open ={open} >
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="toggle_bar"  onClick={handleClick}>
        <div className="toggle_bar__top toggle_bar__bars"></div>
        <div className="toggle_bar__middle toggle_bar__bars" ></div>
        <div className="toggle_bar__bottom toggle_bar__bars"></div>
      </div>
    </Nav>
  )
}

export default Navbar
