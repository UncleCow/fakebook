import React from "react";

const ChatProfile = (props) => {
  return (
    <a href="chats-friend.html">
      <div className="contact-avatar">
        <img src={props.user? props.user.avatar: ""} alt="" />
      </div>
      <div className="contact-username"> {props.user? props.user.fullname: ""}</div>
    </a>
  );
};
export default ChatProfile;
