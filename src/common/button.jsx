import React from "react";

function Button(props) {
  const { iconClassName, disabled, buttonContent, variant, id, onclick } =
    props;
  return (
    <React.Fragment>
      <button
        className={"button-" + props.class}
        variant={variant}
        id={id}
        onClick={onclick}
        disabled={disabled}
      >
        <i className={iconClassName}></i>
        {buttonContent}
      </button>
    </React.Fragment>
  );
}

export default Button;
