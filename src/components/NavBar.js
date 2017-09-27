import React from "react"
import { NavLink } from 'react-router-dom';
import {SiteLogo, SiteHeader} from "./PageAssets";

const NavBar = (props) => {

  return (
    <div id="top-banner" className="navbar ui menu pointing secondary fluid left aligned">
      <SiteLogo />
      <SiteHeader />
      <NavLink to="/" exact className="item">
        Home
      </NavLink>
      <NavLink to="/search" exact className="item">
        Search
      </NavLink>
      <NavLink to="/about" exact className="item">
        About
      </NavLink>
      {props.authData.isLoggedIn &&
      <NavLink to="/admin" exact className="item admin-link">
        Admin
      </NavLink>
      }
    </div>
  );
};

export default NavBar
