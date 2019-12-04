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
      <div className="navbar-name">
          <Link to="/manifest">CURIOSITY MISSION MANIFEST</Link>
      </div>
    </div>

  );
}



export default Navbar
