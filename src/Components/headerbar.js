import React from "react";

const Headerbar = () =>{
    return(
        <Nav>
        <Bars />
  
        <NavMenu>
        <NavLink to='/about' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>

    )
}
export default Headerbar;