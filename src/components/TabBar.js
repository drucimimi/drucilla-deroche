import React from "react";
import { NavLink } from "react-router-dom";
import {FaHome, FaBook, FaUserTie, FaAddressCard} from "react-icons/fa"

const TabBar = () => {
 return (
  <footer className="navigation">
    <NavLink to="/" activeClassName='active'>
     <FaHome size={24}/> Accueil
     </NavLink>
    <NavLink to="/portfolio" activeClassName='active'>
    <FaBook size={24}/> Portfolio
     </NavLink>
    <NavLink to="/referals" activeClassName='active'>
    <FaUserTie size={24}/> Références
     </NavLink>
    <NavLink to="/contact" activeClassName='active'>
    <FaAddressCard size={24}/> Contact
     </NavLink>
  </footer>
 );
}

export default TabBar;