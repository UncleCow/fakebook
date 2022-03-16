import React from "react";
import { Avatar } from "@mui/material";
import "../../css/Story.css";

function Story({ img, profSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="story">
      <Avatar className="story__avatar" src={profSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
