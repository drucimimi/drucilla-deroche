import React from "react";
import { NavLink } from "react-router-dom";
import {FaHome, FaBook, FaUserTie, FaAddressCard, FaEllipsisV} from "react-icons/fa"

const TabBar = () => {
 return (
  <footer className="navigation">
    <NavLink to="/" activeClassName='active'>
     <FaHome size={24}/> Accueil
     </NavLink>
    <NavLink to="/portfolio" activeClassName='active'>
    <FaBook size={24}/> Portfolio
     </NavLink>
     <div className="dropdown">
        <button id="plus" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <FaEllipsisV size={24}/> Plus
        </button>
        <div className="dropdown-menu" aria-labelledby="plus">
          <NavLink className="dropdown-item" to="/referals" activeClassName='active'>
            <FaUserTie size={24}/> Références
          </NavLink>
          <NavLink className="dropdown-item" to="/contact" activeClassName='active'>
            <FaAddressCard size={24}/> Contact
          </NavLink>
        </div>
     </div>
  </footer>
 );
}

export default TabBar;