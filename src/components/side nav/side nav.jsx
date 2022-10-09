import React from "react";
import { NavLink } from "react-router-dom";
// css//
import "./side nav.css";

function SideNav(props) {
  return (
    <nav className="sideNav" id={props.id}>
      <ul>
        <li>
          <NavLink to="/movies" onClick={props.handleSideNav}>
            All Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/moviesList" onClick={props.handleSideNav}>
            Movies List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
