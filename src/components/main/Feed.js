import React, { useEffect, useState } from "react";
import StoryReel from "./StoryReel";
import UploadPostSpace from "./UploadPostSpace";
import Post from "./Post";
import "../../css/Feed.css";
import {
  fetchAllInfo,
  fetchPost,
  fetchPostFeed,
} from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";

function Feed() {
  const showAllPosts = () => {
    return posts ? posts.map(post => <Post post={post} /> ): <></>;
  }
  const id = checkLogin();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
    await fetchPostFeed(id).then((data) => {
      setPosts(data);
    });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <UploadPostSpace user={user} />
      {showAllPosts()}
    </div>
  );
}

export default Feed;
