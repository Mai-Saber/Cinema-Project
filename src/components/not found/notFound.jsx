import React from "react";
import "./not found.css";

const NotFound = () => {
  return (
    <div className="error-div">
      <h1>
        Oops, Error 404 ! Not Found{"  "}
        <span className="icon">
          <i className="ri-emotion-normal-line"></i>
        </span>
      </h1>
      <img src="../../../images/logo.jpg" alt="img" />
    </div>
  );
};

export default NotFound;
