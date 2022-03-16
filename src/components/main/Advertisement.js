import { useEffect, useState } from "react";
import { fetchNumberFriends } from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";
import ChatProfile from "../profile/ChatProfile";

export default function Advertisement() {
  const [listFriends, setListFriends] = useState([]);
  const id = checkLogin();
  useEffect(async () => {
    await fetchNumberFriends(id, 10).then((data) => {
      setListFriends(data);
    });
  }, []);
  return (
    <div className="sidechat">
      <div className="sidechat_inner" data-simplebar>
        <div
          className="absolute bg-white z-10 w-full -mt-5 lg:-mt-2 transform translate-y-1.5 py-2 border-b items-center flex"
          id="search"
          hidden
        >
          <input type="text" placeholder="Search.." className="flex-1" />
          <ion-icon
            name="close-outline"
            className="text-2xl hover:bg-gray-100 p-1 rounded-full mr-4 cursor-pointer"
            uk-toggle="target: #search;animation: uk-animation-slide-top-small"
          ></ion-icon>
        </div>

        <nav className="responsive-nav border-b extanded mb-2 -mt-2 sidechat_tabs">
          <ul uk-switcher="connect: #chats-tab; animation: uk-animation-fade">
            <li className="uk-active">
              <a className="active" href="#0">
                {" "}
                Friends{" "}
              </a>
            </li>
            <li>
              <a href="#0">
                Groups <span> 10 </span>{" "}
              </a>
            </li>
          </ul>
        </nav>

        <div className="contact-list px-2 uk-switcher" id="chats-tab">
          <div className="p-1">
            <ChatProfile user={listFriends[0]} />
            <ChatProfile user={listFriends[1]} />
            {listFriends[2] ? <ChatProfile user={listFriends[2]} /> : <></>}
            {listFriends[3] ? <ChatProfile user={listFriends[3]} /> : <></>}
            {listFriends[4] ? <ChatProfile user={listFriends[4]} /> : <></>}
            {listFriends[5] ? <ChatProfile user={listFriends[5]} /> : <></>}
            {listFriends[6] ? <ChatProfile user={listFriends[6]} /> : <></>}
            {listFriends[7] ? <ChatProfile user={listFriends[7]} /> : <></>}
            {listFriends[8] ? <ChatProfile user={listFriends[8]} /> : <></>}
            {listFriends[9] ? <ChatProfile user={listFriends[9]} /> : <></>}
            {listFriends[10] ? <ChatProfile user={listFriends[10]} /> : <></>}
          </div>
        </div>
      </div>
      <div
        className="sidechat_overly"
        uk-toggle="target: .sidechat; cls:active"
      ></div>
    </div>
  );
}
