import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { fetchAllInfo } from "../../store/actions/information";

export const ShowComment = (props) => {
  const id = props.comment? props.comment.userid : 0;
  const [user, setUser] = useState();
  useEffect(async () => {
    ;
    await fetchAllInfo(id).then((data) => {
      ;
      setUser(data);
    });
  }, []);
  return (
    <div className="show__comment">
      <div className="show__comment-avatar">
        <Avatar
          style={{ width: "32px", height: "32px" }}
          src={user ? user.avatar : ""}
        />
      </div>

      <div className="show__comment-details">
        <div className="show__comment-details--top">
          <div className="show__comment-name">
            <h4>{user ? user.fullname: ""}</h4>
          </div>
          <div className="show__comment-content">
            <p>{props.comment ? props.comment.content : ""}</p>
          </div>
        </div>

        <div className="show__comment-details--bottom">
          <div className="show__comment-like">
            <button>Thích</button>
          </div>
          <div className="show__comment-feedback">
            <button>Phản hồi</button>
          </div>
          <div className="show__comment-time">
            <p style={{ margin: "0" }}>thoi gian</p>
          </div>
        </div>
      </div>
    </div>
  );
};
