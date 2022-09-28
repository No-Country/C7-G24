import React from "react";
import {NavLink} from "react-router-dom";
import "../../styles/NavBar.css";



const NavBar = () => {
  return <div>
    <NavLink
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        to="home"
      >
        Home
    </NavLink>
    <NavLink
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        to="/donate"
      >
        Donate
    </NavLink>
    <NavLink
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        to="/forms"
      >
        Ser Voluntario
    </NavLink>
  </div>;
};

export default NavBar