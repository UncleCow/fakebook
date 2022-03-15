import React, { useEffect, useState } from "react";
import SidebarRow from "./SidebarRow";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import "../../css/Sidebar.css";
import checkLogin from "../login/LogicLogin";
import { fetchAllGroupByUser, fetchAllInfo } from "../../store/actions/information";

function Sidebar() {
  const id = checkLogin();
  const [user, setUser] = useState(null);
  const [listPages, setListPages] = useState([]);
  useEffect( async () => {
    console.log(id);
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
    await fetchAllGroupByUser(id).then((data) => {
      setListPages(data);
    })
  },[]);  
  return (
    <div className="sidebar">
      <div className="sidebarHeader ">
        <SidebarRow
          src={user?user.avatar: ""}
          title={user? user.fullname: "user"}
        />
        <SidebarRow Icon={CoronavirusIcon} title="Covid-19 Infomation Center" />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={GroupsRoundedIcon} title="Groups" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={LiveTvIcon} title="Watch" />
        <SidebarRow Icon={KeyboardArrowDownSharpIcon} title="More" />
      </div>
      <div className=" sidebarFooter">
        <div className="titleSidebarFooter">
          <span>Your shortcuts</span>
        </div>
        <div className="mainSidebarFooter">
          <SidebarRow
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/269853607_4865244843588935_6939299051371911022_n.jpg?stp=c42.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=pgxGzzoDLsQAX9Ba60G&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-BoYkIblcos_CIow4zK1h_F3FLHXHUMhDMZLFMx9gBNw&oe=621CBC99"
            title="Chủ Phòng Net Đà Nẵng"
          />
          <SidebarRow
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/269853607_4865244843588935_6939299051371911022_n.jpg?stp=c42.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=pgxGzzoDLsQAX9Ba60G&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-BoYkIblcos_CIow4zK1h_F3FLHXHUMhDMZLFMx9gBNw&oe=621CBC99"
            title="Việc Làm Đà Nẵng"
          />
          <SidebarRow
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/269853607_4865244843588935_6939299051371911022_n.jpg?stp=c42.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=pgxGzzoDLsQAX9Ba60G&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-BoYkIblcos_CIow4zK1h_F3FLHXHUMhDMZLFMx9gBNw&oe=621CBC99"
            title="Nghiện Setup"
          />
          <SidebarRow
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/269853607_4865244843588935_6939299051371911022_n.jpg?stp=c42.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=pgxGzzoDLsQAX9Ba60G&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-BoYkIblcos_CIow4zK1h_F3FLHXHUMhDMZLFMx9gBNw&oe=621CBC99"
            title="Chợ Đà Nẵng"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
