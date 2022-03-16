import React, { useState } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Avatar } from "@mui/material";
import UploadDemo from "../../firebase/UploadDemo";
import checkLogin from "../login/LogicLogin";
import "../../css/MessageSender.css";

function UploadPostSpace(props) {
  const [input, setInput] = useState("");
  const [isUploadImage, setIsUploadImage] = useState(false);
  const [image, setImage] = useState();
  const id = checkLogin();
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={props.user ? props.user.avatar : ""} />
        <form className="formUploadPost" accept-charset="utf-8" action="http://localhost:8080/FakeStory/AddPost" method="post">
          <div className="formUpload">
            <input
              type="text"
              className="messageSender__input"
              name="content"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Bạn đang nghĩ gì thể?`}
            />  
             <button type="submit">Post</button>
          </div>
          
          {isUploadImage ? <UploadDemo setImage={setImage} content={input} /> : <div></div>}
          <input type="hidden" name="image" value={image} />
          <input type="hidden" name="user_id" value={id} />
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Video trực tiếp</h3>
        </div>
        <div
          className="messageSender__option"
          onClick={() => setIsUploadImage(!isUploadImage)}
        >
          <ImageIcon style={{ color: "green" }} />
          <h3>Ảnh/video</h3>
        </div>
        <div className="messageSender__option">
          <SentimentVerySatisfiedIcon style={{ color: "#f7b928" }} />
          <h3>Cảm xúc/Hoạt động</h3>
        </div>
      </div>
    </div>
  );
}

export default UploadPostSpace;
