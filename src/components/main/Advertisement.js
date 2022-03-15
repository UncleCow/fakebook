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
            <ChatProfile user={listFriends[2]} />
            <ChatProfile user={listFriends[3]} />
            <ChatProfile user={listFriends[4]} />
            <ChatProfile user={listFriends[5]} />
            <ChatProfile user={listFriends[6]} />
            <ChatProfile user={listFriends[7]} />
            <ChatProfile user={listFriends[8]} />
            <ChatProfile user={listFriends[9]} />
            <ChatProfile user={listFriends[10]} />

            {/* <a href="chats-friend.html">
              <div className="contact-avatar">
                <img
                  src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-1/275195234_1900829773450419_8832090657846807701_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2vQl7pkAXAMAX-6TYcm&_nc_oc=AQnRH2QTU2Kh_EXPgGCXI09_8sWkQ-vE4CnCoP0URS5pKzsJNRQfsgoptf2wKVDIGL-4g8WZff12OxMpnxyGJO7n&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_nxmEl2R0fOuCvgeBsZ3jtSDjuqVX7BmCjtJ1oIfh6HQ&oe=62300712"
                  alt=""
                />
                <span className="user_status status_online"></span>
              </div>
              <div className="contact-username"> Dennis Han</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img
                  src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/186508564_1190584688055729_2861365645398630008_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=89NSyiqzDowAX_cfg_7&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_n1Yh1mDz4LLLxiZMkMGjKJJ7wCNEbe57EcRfmt4-Eeg&oe=625018D5"
                  alt=""
                />
                <span className="user_status"></span>
              </div>
              <div className="contact-username"> Erica Jones</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img
                  src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-1/146994747_2854728808188423_7615033960248435066_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=MczUU4hza9gAX-65JJb&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_wWSfZ4ZDA8xF3ceoylo8qMDQx0K2e3kV0GfSbkgxTFA&oe=6250A6B8"
                  alt=""
                />
              </div>
              <div className="contact-username">Stella Johnson</div>
            </a>

            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-5.jpg" alt="" />
              </div>
              <div className="contact-username">Adrian Mohani </div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img
                  src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/137557375_2916092331943656_2214375182347264348_n.jpg?stp=c0.41.320.320a_dst-jpg_p320x320&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=LMxB1l5s32YAX_3pBq3&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8niC_mdQ8rx5cgx-j2pe8arBppw7jxfaPwi1iYtSeSTw&oe=62513A79"
                  alt=""
                />
              </div>
              <div className="contact-username"> Jonathan Madano</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img
                  src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/273204751_3043962012529671_8729037933383831606_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nnTBtYUJ_g4AX_eRQsW&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_K_4ugjA7w4gmTRWzGMp2jCH034kvf-NxGJMPCVLjQ0Q&oe=6230053D"
                  alt=""
                />
                <span className="user_status"></span>
              </div>
              <div className="contact-username"> Erica Jones</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                <span className="user_status status_online"></span>
              </div>
              <div className="contact-username"> Dennis Han</div>
            </a>

            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-5.jpg" alt="" />
              </div>
              <div className="contact-username">Adrian Mohani </div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-6.jpg" alt="" />
              </div>
              <div className="contact-username"> Jonathan Madano</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                <span className="user_status"></span>
              </div>
              <div className="contact-username"> Erica Jones</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                <span className="user_status status_online"></span>
              </div>
              <div className="contact-username"> Dennis Han</div>
            </a>
          </div>
          <div className="p-1">
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-7.jpg" alt="" />
              </div>
              <div className="contact-username"> Alex Dolgove</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-8.jpg" alt="" />
                <span className="user_status status_online"></span>
              </div>
              <div className="contact-username"> Dennis Han</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                <span className="user_status"></span>
              </div>
              <div className="contact-username"> Erica Jones</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-3.jpg" alt="" />
              </div>
              <div className="contact-username">Stella Johnson</div>
            </a>

            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-5.jpg" alt="" />
              </div>
              <div className="contact-username">Adrian Mohani </div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-6.jpg" alt="" />
              </div>
              <div className="contact-username"> Jonathan Madano</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                <span className="user_status"></span>
              </div>
              <div className="contact-username"> Erica Jones</div>
            </a>
            <a href="chats-friend.html">
              <div className="contact-avatar">
                <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                <span className="user_status status_online"></span>
              </div>
              <div className="contact-username"> Dennis Han</div>
            </a> */}
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
