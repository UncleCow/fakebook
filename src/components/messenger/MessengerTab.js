import React, { useEffect, useState } from "react";
import "../../css/MessengerTab.css";
import { fetchAllInfo } from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";
import { OptionTag } from "./OptionTag";
function MessengerTab() {
  const [user, setUser] = useState();
  useEffect(async () => {
    const id = checkLogin();
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
  }, []);

  return (
    <div className="header_widgets">
      <a href="#" className="is_icon" uk-tooltip="title: Cart">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
      </a>
      <div uk-drop="mode: click" className="header_dropdown dropdown_cart">
        <div className="drop_headline">
          <h4> My Cart </h4>
          <a
            href="#"
            className="btn_action hover:bg-gray-100 mr-2 px-2 py-1 rounded-md underline"
          >
            {" "}
            Checkout{" "}
          </a>
        </div>

        <ul className="dropdown_cart_scrollbar" data-simplebar>
          <li>
            <div className="cart_avatar">
              <img src="assets/images/product/2.jpg" alt="" />
            </div>
            <div className="cart_text">
              <div className=" font-semibold leading-4 mb-1.5 text-base line-clamp-1">
                {" "}
                Wireless headphones{" "}
              </div>
              <p className="text-sm">Type Accessories </p>
            </div>
            <div className="cart_price">
              <span> $14.99 </span>
              <button className="type"> Remove</button>
            </div>
          </li>
        </ul>

        <div className="cart_footer">
          <p> Subtotal : $ 320 </p>
          <h1>
            {" "}
            Total : <strong> $ 320</strong>{" "}
          </h1>
        </div>
      </div>

      <a href="#" className="is_icon" uk-tooltip="title: Notifications">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
        </svg>
        <span>3</span>
      </a>
      <div uk-drop="mode: click" className="header_dropdown">
        <div className="dropdown_scrollbar" data-simplebar>
          <div className="drop_headline">
            <h4>Notifications </h4>
            <div className="btn_action">
              <a href="#" data-tippy-placement="left" title="Notifications">
                <ion-icon name="settings-outline"></ion-icon>
              </a>
              <a href="#" data-tippy-placement="left" title="Mark as read all">
                <ion-icon name="checkbox-outline"></ion-icon>
              </a>
            </div>
          </div>
          <ul>
            <li>
              <a href="#">
                <div className="drop_avatar">
                  <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                </div>
                <span className="drop_icon bg-gradient-primary">
                  <i className="icon-feather-thumbs-up"></i>
                </span>
                <div className="drop_text">
                  <p>
                    <strong>Adrian Mohani</strong> Like Your Comment On Video
                    <span className="text-link">Learn Prototype Faster </span>
                  </p>
                  <time> 2 hours ago </time>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <a href="#" className="is_icon" uk-tooltip="title: Message">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>4</span>
      </a>
      <div uk-drop="mode: click" className="header_dropdown is_message">
        <div className="dropdown_scrollbar" data-simplebar>
          <div className="drop_headline">
            <h4>Messages </h4>
            <div className="btn_action">
              <a href="#" data-tippy-placement="left" title="Notifications">
                <ion-icon
                  name="settings-outline"
                  uk-tooltip="title: Message settings ; pos: left"
                ></ion-icon>
              </a>
              <a href="#" data-tippy-placement="left" title="Mark as read all">
                <ion-icon name="checkbox-outline"></ion-icon>
              </a>
            </div>
          </div>
          <input
            type="text"
            className="uk-input"
            placeholder="Search in Messages"
          />
          <ul>
            <li className="un-read">
              <a href="#">
                <div className="drop_avatar">
                  {" "}
                  <img src="assets/images/avatars/avatar-7.jpg" alt="" />
                </div>
                <div className="drop_text">
                  <strong> Stella Johnson </strong> <time>12:43 PM</time>
                  <p> Alex will explain you how ... </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <a href="./messenger" className="see-all">
          {" "}
          See all in Messages
        </a>
      </div>

      <a href="#">
        <img
          src={user ? user.avatar : ""}
          className="is_avatar"
          alt=""
        />
      </a>
      <OptionTag />
    </div>
  );
}

export default MessengerTab;
