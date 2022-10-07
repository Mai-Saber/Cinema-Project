import React from "react";
import Button from "./button";

function Card(props) {
  const { imgSrc, movieName, onClick } = props;
  return (
    <>
      <div className="card">
        <img src={imgSrc} alt="movie's img" />
        <div className="content">
          <h3>{movieName}</h3>
        </div>
        <Button
          onclick={onClick}
          class="readMore btn btn-primary"
          buttonContent="Read More ..."
        />
      </div>
    </>
  );
}

export default Card;
