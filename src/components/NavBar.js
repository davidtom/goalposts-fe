import React from "react"
import { NavLink } from 'react-router-dom';
import { Input, Menu} from 'semantic-ui-react'

const NavBar = () => {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  return (
    <div className="navbar ui pointing menu">
      <NavLink to="/" exact className="item">
        Home
      </NavLink>
      <NavLink to="/search" exact className="item">
        Search
      </NavLink>
      <NavLink to="/about" exact className="item">
        About
      </NavLink>
    </div>
  );
};

export default NavBar
