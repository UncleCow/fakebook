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
  const showPosts = () => {
    return posts ? posts.map(post => <Post post={post} />) : <div></div>
  }
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
      {showPosts()}
    </div>
  );
}

export default ProfileFeed;
