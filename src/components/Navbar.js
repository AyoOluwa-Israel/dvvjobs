import React from 'react'
import styled from 'styled-components';

const Nav = styled.nav `
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;

`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="toggle_bar">
        <div className="toggle_bar__top toggle_bar__bars"></div>
        <div className="toggle_bar__bottom toggle_bar__bars"></div>
      </div>
    </Nav>
  )
}

export default Navbar
