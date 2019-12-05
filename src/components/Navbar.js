import './Navbar.css';

import React from 'react';

import {
  Link
} from "react-router-dom";



const Navbar = () => {
  return(

    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/"><img src="../../marsflix.png" alt="logo" />
        </Link>
      </div>
      <div className="navbar-nav">
        <div>
          <Link to="/manifest">MANIFEST</Link>
        </div>
        <div>
          <Link to="/about">ABOUT</Link>
        </div>
      </div>
    </div>

  );
}



export default Navbar
