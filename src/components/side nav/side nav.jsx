import React from "react";
import { NavLink } from "react-router-dom";
// css//
import "./side nav.css";

function SideNav(props) {
  return (
    <nav className="sideNav">
      <ul>
        <li>
          <NavLink to="/movies">All Movies</NavLink>
        </li>
        <li>
          <NavLink to="/moviesList">Movies List</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
