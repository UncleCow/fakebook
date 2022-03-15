import React, { useEffect, useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import "../../css/Post.css";
import { fetchAllInfo } from "../../store/actions/information";

function Post(props) {
  const [user, setUser] = useState(null);
  const [time, setTime] = useState("");
  useEffect(() => {
    var DateDiff = {
      inMinutes: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return Math.floor((t2 - t1) / (60 * 1000));
      },
      inHours: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return Math.floor((t2 - t1) / (3600 * 1000));
      },
      inDays: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return Math.floor((t2 - t1) / (24 * 3600 * 1000));
      },
      inWeeks: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7));
      },
      inMonths: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7 * 30));
      },
      inYears: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7 * 30 * 12));
      },
    };
    var dString = props.post ? props.post.time : "";
    var d1 = new Date(dString);
    var d2 = new Date();
    const minutes = DateDiff.inMinutes(d1, d2);
    const hours = DateDiff.inHours(d1, d2);
    const days = DateDiff.inDays(d1, d2);
    const weeks = DateDiff.inWeeks(d1, d2);
    const months = DateDiff.inMonths(d1, d2);
    const years = DateDiff.inYears(d1, d2);

    if (years > 0) {
      setTime(years + " years ago");
    } else if (months > 0) {
      setTime(months + " months ago");
    } else if (weeks > 0) {
      setTime(weeks + " weeks ago");
    } else if (days > 0) {
      setTime(days + " days ago");
    } else if (hours > 0) {
      setTime(hours + " hours ago");
    } else if (minutes > 0) {
      setTime(minutes + " minutes ago");
    } else {
      setTime("just now");
    }
    console.log(time);
    const idUser = props.post ? props.post.user : 0;
    // console.log(props.post);
    async function fetch() {
      await fetchAllInfo(idUser).then((data) => {
        setUser(data);
      });
    }
    fetch();
  }, [props.post, time]);

  return (
    <div className="post">
      <div className="post__top">
        <div className="post__avatar">
          <Avatar src={user ? user.avatar : ""} className="post__avatar-img" />
        </div>
        <div className="post__top-info">
          <h3>{user ? user.fullname : ""}</h3>
          <p>{time}</p>
        </div>
        <div className="post__top-more">
          <MoreHorizIcon />
        </div>
      </div>

      <div className="post__bottom">
        <p>{props.post ? props.post.content : ""}</p>
      </div>

      <div className="post__image">
        <img src={props.post ? props.post.image : ""} alt="" />
      </div>

      <div className="post__quantity">
        {/* quantities of react, comment, share  */}
        <div className="post__quantity-like">
          {props.post ? props.post.react : ""}
        </div>

        <div className="post__quantity-comment">10 comments</div>
      </div>

      <hr />

      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        {/* <div className="post__option">
                <AccountCircleIcon />
                <ExpandMoreIcon />
            </div> */}
      </div>

      <hr />

      <div className="post__comment">
        <div className="post__comment-avatar">
          <Avatar style={{ width: "32px", height: "32px" }} src="" />
        </div>

        <div className="post__comment-input">
          <input type="text" placeholder="Hãy bình luận đầu tiên của bạn" />
        </div>
      </div>

      <div className="show__comment">
        <div className="show__comment-avatar">
          <Avatar
            style={{ width: "32px", height: "32px" }}
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/271715372_1617785131895258_3221287728800887276_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ruMiA_mhn7UAX8fAyyz&_nc_ht=scontent.fdad2-1.fna&oh=03_AVJzGkN4G7peqhCCAwV9vuVB-FObztPF56TYC-NG_HhLQg&oe=625315B3"
          />
        </div>

        <div className="show__comment-details">
          <div className="show__comment-details--top">
            <div className="show__comment-name">
              <h4>Hà Vyy</h4>
            </div>
            <div className="show__comment-content">
              <p>.</p>
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
              <p style={{ margin: "0" }}>12 phút</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
