import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import ForumSharpIcon from "@mui/icons-material/ForumSharp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { Avatar, IconButton } from "@mui/material";
import MessengerTab from "../messenger/MessengerTab";
import "../../css/Header.css";
import checkLogin from "../login/LogicLogin";
import { fetchAllInfo } from "../../store/actions/information";

function Header() {
  const id = checkLogin();
  const [user, setUser] = useState();
  useEffect(async () => {
    console.log(id);
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
    // await fetch9Friends(id).then((data) => {
    //   console.log(data);
    //   setListFriend(data);
    // })
  }, []);
  return (
    <div className="header">
      <div className="header__left">
        <a href="/">
          <img
            className="imgHeader"
            src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.sgv.png"
            alt="Fakebook"
          />
        </a>

        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Tìm kiếm trên fakebook" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <SubscriptionsIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <GroupsIcon />
        </div>
        <div className="header__option">
          <SportsEsportsIcon />
        </div>
      </div>

      <div className="header__right">
        {/* <div className="header__info">
          <Avatar
            src={
              user
                ? user.avatar
                : "https://firebasestorage.googleapis.com/v0/b/fakestory-9fb8d.appspot.com/o/file%2FdefaultAvatar.png?alt=media&token=8042470b-2bd9-4f51-825f-d62bb94f6e7b"
            }
          />
          <a href="/profile">
            <h4>{user ? user.fullname : ""}</h4>
          </a>
        </div> */}

        <MessengerTab />

        {/* <IconButton className="header__right-icon">
          <AppRegistrationRoundedIcon />
        </IconButton>
        <IconButton className="header__right-icon">
          <ForumSharpIcon className="is_icon" uk-tooltip="title: Message">
          </ForumSharpIcon>
        </IconButton>
        <IconButton className="header__right-icon">
          <NotificationsIcon />
        </IconButton>
        <IconButton className="header__right-icon">
          <ArrowDropDownRoundedIcon />
        </IconButton> */}
      </div>
    </div>
  );
}

export default Header;
