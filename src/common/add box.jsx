import Button from "./button";
import React from "react";

function AddBox(props) {
  const { id, header, children, buttonId, onCancel, onSubmit} = props;
  return (
    <>
      <div className="add-box" id={id}>
        <h3 className="card-header-title">{header}</h3>
        <div className="box-container">{children}</div>
        <div className="buttons">
          <Button
            class="submit"
            id={buttonId}
            buttonContent="Submit"
            onclick={onSubmit}
          />

          <Button
            class="cancel"
            id={buttonId}
            buttonContent="Cancel"
            onclick={onCancel}
          />
        </div>
      </div>
    </>
  );
}

export default AddBox;
