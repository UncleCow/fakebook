import React, { useState } from "react";
import Header from "../main/Header";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IntroGroup from "./IntroGroup";
import MemberGroup from "./MemberGroup";
import MeetingGroup from "./MeetingGroup";
import DiscusGroup from "./DiscusGroup";
import "../../css/Group.css";

function Group() {
  const [status, onStatus] = useState(null);
  const [active, setActive] = useState("active");

  const handleClick = (step) => {
    onStatus(step);
  };
  return (
    <div className="group">
      <Header />
      {/* anh bia group */}
      <div className="container content">
        <div className="group__content">
          <img
            className="group__img"
            src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/274025879_5813233755356922_1065552287285668961_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8631f5&_nc_ohc=77LEtWiPCvwAX8lRWLp&_nc_ht=scontent.fdad1-1.fna&oh=00_AT8A32KZikaJD7eD03ct9x-Y8EQFl-14TXaVVfbIy7_Oag&oe=623781AF"
            alt="friends"
          />
        </div>
        <div className="group__info">
          <div className="group__info-left">
            <div className="group__info-name">
              <h1>Cóc Đà Nẵng</h1>
            </div>
            <div className="group__info-desc">
              <LockRoundedIcon />
              <p>Nhóm riêng tư</p>
              <h5>3,1k thành viên</h5>
            </div>
            <div className="group__info-members">
              <div className="flex items-center -space-x-2">
                <img
                  src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/275447245_1383547318759464_8339327508738987291_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=l1ghodLQuuMAX-Iprqo&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9UQBfNXH8UjYhq4jOKx4ax7lTklY36rpw9x-oFbo-5Hg&oe=623572EB"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/275195234_1900829773450419_8832090657846807701_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=IefxsESKtG0AX9E5_jg&_nc_oc=AQkxahLnb92CfvsAeFpK1Dw5pSFiZPoXwflVihIz7dvi84U9OJK7h16qm18l96rSgjQ&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT_gilRfndxjvfVIROJL-mGXN16Bk88NmFlQ6s--sJEOHg&oe=6235F5D2"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/275966084_336033741813441_4829483894134311026_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=dbeb18&_nc_ohc=sffJUlvH0J0AX-Q8bof&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8RyyA_aCwHSrUw4lE3CWAeGrKP5xuaMJLfyiQ1NZzeTA&oe=62372C50"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vFiwvOBlVaIAX9l3JwA&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT9EttU5e09pGFFZhUV68fmX0Kr80cNes25DQN6pvlffKA&oe=62577A49"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/146994747_2854728808188423_7615033960248435066_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6u4ZHovT0t0AX8sAYQ5&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT8mWCOb4hMjg445O8ZCGq2kZmY-vCqSkPBZnCZJjnwe-g&oe=6256F388"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/146994747_2854728808188423_7615033960248435066_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6u4ZHovT0t0AX8sAYQ5&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT8mWCOb4hMjg445O8ZCGq2kZmY-vCqSkPBZnCZJjnwe-g&oe=6256F388"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/146994747_2854728808188423_7615033960248435066_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6u4ZHovT0t0AX8sAYQ5&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT8mWCOb4hMjg445O8ZCGq2kZmY-vCqSkPBZnCZJjnwe-g&oe=6256F388"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/146994747_2854728808188423_7615033960248435066_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6u4ZHovT0t0AX8sAYQ5&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT8mWCOb4hMjg445O8ZCGq2kZmY-vCqSkPBZnCZJjnwe-g&oe=6256F388"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
            </div>
          </div>
          <div>
            <nav className="responsive-nav border-t -mb-0.5 lg:pl-6">
              <ul>
                <li className="">
                  <a href="#" onClick={() => handleClick(1)}>
                    Giới thiệu
                  </a>
                </li>
                <li className="active">
                  <a href="/group" onClick={() => handleClick(0)}>
                    Thảo Luận
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleClick(2)}>
                    Tạo cuộc họp
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleClick(3)}>
                    Thành viên
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#e5ede5" }}>
        <div className="mcontainer">
          {!status && (
            <div className="">
              <DiscusGroup />
            </div>
          )}

          {status === 3 && (
            <div className="">
              <MemberGroup />
            </div>
          )}

          {status === 1 && (
            <div div className="">
              <IntroGroup />
            </div>
          )}

          {status === 2 && (
            <div className="">
              <MeetingGroup />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Group;
