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
    console.log("logout", sessionStorage.getItem("email"))
    sessionStorage.clear();
  };

  return (
    <>
      <div className="fixedNav">
        <ul>
          <li>
            <Link to="/home">
              <img
                className="App-logo"
                src="../../../images/simple.jpg"
                alt="logo"
              />
            </Link>
          </li>

          <li id="date"> Today : {getTodayDate()}</li>

          <li>
            <span>
              <i className="ri-logout-box-line"></i>
            </span>
            <Link to="/login" onClick={() => handleLogout()}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FixedNav;
