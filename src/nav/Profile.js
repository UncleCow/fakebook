/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ProfileFeed from "../components/main/ProfileFeed";
import RightBarProfile from "../components/main/RightBarProfile";
import About from "../components/main/About";
import Photos from "../components/main/Photos";
import Friends from "../components/main/Friends";
import { ImageViewer } from "react-image-viewer-dv";
import Header from "../components/main/Header";
import "../css/Profile.css";

function Profile() {
  const [status, onStatus] = useState(null);

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
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/151266852_114763457273805_3886756789292532879_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=E8k0WJrgNe0AX9PnxBO&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-IXRhV7JnhW85dtRK4X5HFVtFeME8MLmVLnejgUFPYgw&oe=6243DA5E"
                alt="image cover"
              />
            </ImageViewer>
            <ImageViewer>
              <img
                className="profileUserImg"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=_AiCoqvSsOsAX83yOYT&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-tBShqDtEIxGh5HTg21Fe83VAhB68WDbwQh2DLvnThVw&oe=62461E21"
                alt="user image"
              />
            </ImageViewer>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Nguyễn Minh Huy</h4>
            <span className="profileInfoDesc">HV</span>
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
            <RightBarProfile changeStatus={handleClick} />
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
