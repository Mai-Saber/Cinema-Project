import React from "react";

const Icon = (props) => {
  const { title, onClick, id, className } = props;
  return (
    <i
      title={title}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={onClick}
      id={id}
      className={className}
    ></i>
  );
};

export default Icon;
