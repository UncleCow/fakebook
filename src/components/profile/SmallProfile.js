import React, { useEffect, useState } from "react";

export const SmallProfile = (props) => {
  const [link, setLink] = useState("http://localhost:3000/profile/");
  useEffect(() => {
      ;
      const id = props.user ? props.user.id : 0;
      const link = "http://localhost:3000/profile/" + id;
      setLink(link);
  }, [props.user])
  return (
    <div className="rightbarFollowing">
        {props.user ?
        (<a href={link}>
        <img
          src={
            props.user
              ? props.user.avatar
              : "https://firebasestorage.googleapis.com/v0/b/fakestory-9fb8d.appspot.com/o/file%2FdefaultAvatar.png?alt=media&token=8042470b-2bd9-4f51-825f-d62bb94f6e7b"
          }
          alt="img"
          className="rightbarFollowingImg"
        />
        <span className="rightbarFollowingName">
          {props.user ? props.user.fullname : "Add more"}
        </span>
      </a>) : <div></div> }
      
    </div>
  );
};
