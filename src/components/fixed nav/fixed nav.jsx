import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import "./fixed nav.css";

function FixedNav(props) {
  const handleLogout = () => {
    console.log("logout", sessionStorage.getItem("email"));
    sessionStorage.clear();
  };

  return (
    <>
      <div className="fixedNav">
        <ul>
          <div className="row items">
            <li className="col-xl-1 col-1   ">
              <span className="menu" onClick={props.handleSideNav}>
                <i className="ri-menu-line menu-icon"></i>
              </span>
            </li>
            <li className="col-xl-8 col-8  ">
              <Link to="/movies">
                <img
                  className="App-logo"
                  src="data:image/png;base64,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"
                  alt="logo"
                />
              </Link>
            </li>
            <li className="col-xl-3 col-3  logout">
              <Link to="/login" onClick={() => handleLogout()}>
                <span className="logoutIcon">
                  <i className="ri-logout-box-line"></i>
                </span>
                Logout
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default FixedNav;
