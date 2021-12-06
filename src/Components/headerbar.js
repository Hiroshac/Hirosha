import React from "react";
import '../css/Com.css';

import {Nav} from 'react-bootstrap';

const Headerbar = () =>{
    return(
  <div>
    <Nav className='justify-content-end'>
      <Nav.Item>
        <Nav.Link href="../App.js">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Project</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>About </Nav.Link>
      </Nav.Item>
    </Nav>
    {/* <a className="tag">Home</a>
    <a>Projects</a>
    <a>skills</a>
    <a>About</a> */}
  </div>

    )
}
export default Headerbar;
