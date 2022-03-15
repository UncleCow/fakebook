/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import ProfileFeed from "../components/main/ProfileFeed";
import RightBarProfile from "../components/main/RightBarProfile";
import About from "../components/main/About";
import Photos from "../components/main/Photos";
import Friends from "../components/main/Friends";
import { ImageViewer } from "react-image-viewer-dv";
import "../css/Profile.css";
<<<<<<< HEAD

function Profile() {
  const [status, onStatus] = useState(null);

=======
import Header from "../components/main/Header";
import checkLogin from "../components/login/LogicLogin";
import { fetch9Friends, fetchAllInfo } from "../store/actions/information";
import { useParams } from "react-router-dom";

function Profile(props) {
  const [status, onStatus] = useState(null);
  const [user, setUser] = useState(null);
  const [listFriends, setListFriend] = useState([]);
  // const id = props.match.params.id ? props.match.params.id : checkLogin();
  const { userId } = useParams();
  const id = userId ? userId : checkLogin();
  
  useEffect( async () => {
    console.log(id);
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
    await fetch9Friends(id).then((data) => {
      console.log(data);
      setListFriend(data);
    })
  },[]);  
>>>>>>> c18a0d94f402a4e71da1999f90245756fee86387
  const handleClick = (step) => {
    onStatus(step);
  };
  return (
    <div className="profile">
      <div className="profileRight">
        <Header />
        <div className="profileRightTop">
          <div className="profileCover">
            <ImageViewer>
              <img
                className="profileCoverImg"
                src={user ? user.background : ""}
                alt="image cover"
              />
            </ImageViewer>
            <ImageViewer>
              <img
                className="profileUserImg"
                src={user ? user.avatar  : ""}
                alt="user image"
              />
            </ImageViewer>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">{user ? user.fullname : ""}</h4>
            <span className="profileInfoDesc">{user ? user.description : ""}</span>
          </div>
          <div className="profileNav">
            <a href="/profile" onClick={() => handleClick(0)}>
              Posts
            </a>
            <a href="#" onClick={() => handleClick(1)}>
              About
            </a>
            <a href="#" onClick={() => handleClick(2)}>
              Friends
            </a>
            <a href="#" onClick={() => handleClick(3)}>
              Photos
            </a>
          </div>
        </div>
        {status === 3 && (
          <div className="profileRightBottom">
            <Photos />
          </div>
        )}

        {!status && (
          <div className="profileRightBottom">
            <ProfileFeed />
            <RightBarProfile listFriends={listFriends ? listFriends : []} user={user ? user : null} changeStatus={handleClick} />
          </div>
        )}

        {status === 1 && (
          <div className="profileRightBottom">
            <About />
          </div>
        )}

        {status === 2 && (
          <div className="profileRightBottom">
            <Friends />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
