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
  const id = checkLogin();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      ;
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
      {posts[0] ? <Post post={posts[0]} /> : <> </>}
      {posts[1] ? <Post post={posts[1]} /> : <> </>}
      {posts[2] ? <Post post={posts[2]} /> : <> </>}
      {posts[3] ? <Post post={posts[3]} /> : <> </>}
      {posts[4] ? <Post post={posts[4]} /> : <> </>}
    </div>
  );
}

export default Feed;
