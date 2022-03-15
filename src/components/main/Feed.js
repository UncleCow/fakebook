import React, { useEffect, useState } from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "../../css/Feed.css";
import { fetchPost } from "../../store/actions/information";

function Feed() {
  const [post, setPost] = useState();
  useEffect( async() => {
    await fetchPost(2).then((data) => {
      console.log(data);
      setPost(data);
    });
  }, [])
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        post ={post}
      />
    </div>
  );
}

export default Feed;
