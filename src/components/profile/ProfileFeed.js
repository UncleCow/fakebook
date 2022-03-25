import React, { useEffect, useState } from "react";
import UploadPostSpace from "../main/UploadPostSpace";
import Post from "../main/Post";
import "../../css/ProfileFeed.css";
import {
  fetchAllInfo,
  fetchPostByUserId,
  fetchPostFeed,
} from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";
import { useParams } from "react-router-dom";

function ProfileFeed(props) {
  const { userId } = useParams();
  ;
  const id = userId ? userId : checkLogin();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      ;
      setUser(data);
    });
    await fetchPostByUserId(id).then((data) => {
      ;
      setPosts(data);
    });
  }, []);
  return (
    <div className="subFeed">
      {props.isPost ? <UploadPostSpace /> : <></>}

      {posts[0] ? <Post post={posts[0]} /> : <></>}
      {posts[1] ? <Post post={posts[1]} /> : <></>}
      {posts[2] ? <Post post={posts[2]} /> : <></>}
      {posts[3] ? <Post post={posts[3]} /> : <></>}
      {posts[4] ? <Post post={posts[4]} /> : <></>}
      {posts[5] ? <Post post={posts[5]} /> : <></>}
      {posts[6] ? <Post post={posts[6]} /> : <></>}
      {posts[7] ? <Post post={posts[7]} /> : <></>}
      {posts[8] ? <Post post={posts[8]} /> : <></>}
      {posts[9] ? <Post post={posts[9]} /> : <></>}
      {posts[10] ? <Post post={posts[10]} /> : <></>}
      {posts[11] ? <Post post={posts[11]} /> : <></>}
    </div>
  );
}

export default ProfileFeed;
