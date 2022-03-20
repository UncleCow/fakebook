import React, { useEffect, useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import "../../css/Post.css";
import {
  fetchAllCommentByPostId,
  fetchAllInfo,
  fetchIsReact,
  fetchPost,
} from "../../store/actions/information";
import { ImageViewer } from "react-image-viewer-dv";
import checkLogin from "../login/LogicLogin";
import { YourSpaceComment } from "../post/YourSpaceComment";
import { ShowComment } from "../post/ShowComment";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import fetchTime from "../post/fetchTime";
import { addReact } from "../../store/actions/grow";
// import { LikeCommentShareSpace } from "../post/LikeCommentShareSpace";
// import { addMoreComment, addReact } from "../../store/actions/grow";

function Post(props) {
  const [user, setUser] = useState(null);
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [listComment, setListComment] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [isReactThisPost, setIsReactThisPost] = useState();
  const [isChange, setIsChange] = useState(false);
  const [post ,setPost] = useState(props.post ? props.post : null);

  //check info, fetch comment and list comment
  useEffect(() => {
    const id = checkLogin();
    const idUser = props.post ? props.post.user : 0;
    async function fetch() {
      setTime(fetchTime(props.post ? props.post.time : 0));
      await fetchAllInfo(idUser).then((data) => {
        setUser(data);
        setLink(
          user
            ? user.id == id
              ? "http://localhost:3000/profile"
              : `http://localhost:3000/profile?id=${user ? user.id : 0}`
            : ""
        );
      });
      await fetchAllCommentByPostId(props.post ? props.post.id : 0).then(
        (data) => {
          setListComment(data);
        }
      );
      await fetchIsReact(id, props.post ? props.post.id : 0).then((data) => {
        setIsReactThisPost(data);
      });
    }
    fetch();
  }, [props.post, time, isChange]);
  let showAllComment;

  //effect show comment
  useEffect(
    (showAllComment = () => {
      console.log("Rerender listComment", listComment);
      return listComment.map((comment) => {
        console.log(comment);
        return (
          <ShowComment
            userid={comment ? comment.userid : 0}
            comment={comment}
          />
        );
      });
    }),
    [listComment, isLoad]
  );
  //effect after handlerReact 
  const handlerReact = async () => {
    const data = {
      type: 1,
      user: checkLogin(),
      post: props ? props.post.id : 0,
    };
    console.log(data);
    await addReact(data).then((something) => {
      console.log(something);
      setIsChange(!isChange);
    });
  };

  useEffect( async() => {
    const id = checkLogin();
    await fetchIsReact(id, props.post ? props.post.id : 0).then((data) => {
      setIsReactThisPost(data);
    });
    await fetchPost(post ? post.id : 0).then((data) => {
      setPost(data);
    });
  } ,[isChange])



  return (
    <div className="post">
      <div className="post__top">
        <a href={link}>
          <div className="post__avatar">
            <Avatar
              src={user ? user.avatar : ""}
              className="post__avatar-img"
            />
          </div>
        </a>

        <div className="post__top-info">
          <a href={link}>
            <h3>{user ? user.fullname : ""}</h3>
          </a>
          <p>{time}</p>
        </div>

        <div className="post__top-more">
          <MoreHorizIcon />
        </div>
      </div>

      <div className="post__bottom">
        <p>{post ? post.content : ""}</p>
      </div>

      {post ? (
        post.image ? (
          <div className="post__image">
            <ImageViewer>
              <img src={post ? post.image : ""} alt="" />
            </ImageViewer>
          </div>
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}
      <div className="post__quantity">
        <div className="post__quantity-like">
          {post ? post.react : ""}
        </div>
        <div className="post__quantity-comment">10 comments</div>
      </div>

      {/* Like and comment space */}
      <div>
        <hr />
        <div className="post__options">
          {isReactThisPost ? (
            <div className="post__option btn btn-danger" onClick={handlerReact}>
              <ThumbUpOutlinedIcon />
              <p>Like</p>
            </div>
          ) : (
            <div className="post__option btn btn-primary" onClick={handlerReact}>
              <ThumbUpOutlinedIcon />
              <p>Like</p>
            </div>
          )}

          <div className="post__option">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="post__option">
            <NearMeIcon />
            <p>Share</p>
          </div>
        </div>

        <hr />
      </div>

      {showAllComment()}
      <YourSpaceComment
        setLoad={setLoad}
        listComment={listComment ? listComment : []}
        setListComment={(list) => {
          setListComment(list);
        }}
        user={user}
        post={post ? post : null}
      />
    </div>
  );
}

export default Post;
