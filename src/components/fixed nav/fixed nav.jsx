import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import "./fixed nav.css";

function FixedNav(props) {
  function getTodayDate() {
    const string = new Date().toISOString().slice(0, 10);
    return string;
  }

  const handleLogout = () => {
    console.log("logout", sessionStorage.getItem("email"));
    sessionStorage.clear();
  };

  return (
    <>
      <div className="fixedNav">
        <ul>
          <div className="row items">
            <li className="col-md-6 col-lg-4 col-6  ">
              <Link to="/movies">
                <img
                  className="App-logo"
                  src="../../../images/simple.jpg"
                  alt="logo"
                />
              </Link>
            </li>
            <li className="col-md-6 col-lg-4 col-0 " id="date">
              Today : {getTodayDate()}
            </li>
            <li className="col-md-6 col-lg-4 col-6  logout">
              <Link
                
                to="/login"
                onClick={() => handleLogout()}
              >
                <span className="logoutIcon">
                  <i className="ri-logout-box-line"></i>
                </span>
                Logout
              </Link>
            </li>

            
            <li className=" col-12 ">
              <span className="menu" onClick={props.handleSideNav}>
                <i className="ri-menu-line menu-icon"></i>
              </span>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default FixedNav;
