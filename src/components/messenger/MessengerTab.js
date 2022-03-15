import React from 'react'
import "../../css/MessengerTab.css"

function MessengerTab() {
  return (
    <div className="header_widgets">
        <a href="/" className="is_icon" uk-tooltip="title: Cart">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
        </a>
        <div uk-drop="mode: click" className="header_dropdown dropdown_cart">
            
            <div className="drop_headline">
                <h4>  My Cart </h4>
                <a href="/" className="btn_action hover:bg-gray-100 mr-2 px-2 py-1 rounded-md underline"> Checkout </a>
            </div>

            <ul className="dropdown_cart_scrollbar" data-simplebar>
                <li>
                    <div className="cart_avatar">
                        <img src="assets/images/product/2.jpg" alt="" />
                    </div>
                    <div className="cart_text">
                        <div className=" font-semibold leading-4 mb-1.5 text-base line-clamp-1"> Wireless headphones </div>
                        <p className="text-sm">Type Accessories  </p>
                    </div>
                    <div className="cart_price">
                        <span> $14.99 </span>
                        <button className="type"> Remove</button>
                    </div>
                </li>
            </ul>

            <div className="cart_footer">
                <p> Subtotal : $ 320 </p>
                <h1> Total :  <strong> $ 320</strong> </h1>
            </div>
        </div>

        <a href="/" className="is_icon" uk-tooltip="title: Notifications">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
            <span>3</span>
        </a>
        <div uk-drop="mode: click" className="header_dropdown">
                <div  className="dropdown_scrollbar" data-simplebar>
                    <div className="drop_headline">
                        <h4>Notifications </h4>
                        <div className="btn_action">
                        <a href="/" data-tippy-placement="left" title="Notifications">
                            <ion-icon name="settings-outline"></ion-icon>
                        </a>
                        <a href="/" data-tippy-placement="left" title="Mark as read all">
                            <ion-icon name="checkbox-outline"></ion-icon>
                        </a>
                    </div>
                    </div>
                    <ul>
                        <li>
                            <a href="/">
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

        {/* Message  */}
        <a href="/" className="is_icon" uk-tooltip="title: Message">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
            <span>4</span>
        </a>
        <div uk-drop="mode: click" className="header_dropdown is_message">
            <div  className="dropdown_scrollbar" data-simplebar>
                <div className="drop_headline">
                        <h4>Messages </h4>
                    <div className="btn_action">
                        <a href="/" data-tippy-placement="left" title="Notifications">
                            <ion-icon name="settings-outline" uk-tooltip="title: Message settings ; pos: left"></ion-icon>
                        </a>
                        <a href="/" data-tippy-placement="left" title="Mark as read all">
                            <ion-icon name="checkbox-outline"></ion-icon>
                        </a>
                    </div>
                </div>
                <input type="text" className="uk-input" placeholder="Search in Messages" />
                <ul>
                    <li className="un-read">
                        <a href="/">
                            <div className="drop_avatar"> <img src="assets/images/avatars/avatar-7.jpg" alt="" />
                            </div>
                            <div className="drop_text">
                                <strong> Stella Johnson </strong> <time>12:43 PM</time>
                                <p>  Alex will explain you how ...  </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <a href="/" className="see-all"> See all in Messages</a>
        </div>


        <a href="/">
            <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/275707321_333705188712963_9209046027110419434_n.jpg?stp=c0.28.240.240a_dst-jpg_p240x240&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9C1A9qk0RcsAX8XTGRQ&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9aIne-e8eg_-uDssK2efl8WTou8F38KR_5sQgKPqqoHw&oe=6233FE40" className="is_avatar" alt="" />
        </a>
        <div uk-drop="mode: click;offset:5" className="header_dropdown profile_dropdown">

            <a href="./profile" className="user">
                <div className="user_avatar">
                    <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/275707321_333705188712963_9209046027110419434_n.jpg?stp=c0.28.240.240a_dst-jpg_p240x240&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9C1A9qk0RcsAX8XTGRQ&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9aIne-e8eg_-uDssK2efl8WTou8F38KR_5sQgKPqqoHw&oe=6233FE40" alt="" />
                </div>
                <div className="user_name">
                    <div> Minh Huy </div>
                    <span> @_cow812</span>
                </div>
            </a>
            <hr/>
            <a href="pages-upgrade.html" className="is-link">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
            </a> 
            <hr/>
            <a href="page-setting.html">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                My Account 
            </a>
            <a href="groups.html">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"  clip-rule="evenodd" />
                </svg>
                Manage Pages 
            </a>
            <a href="pages-setting.html">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
                My Billing 
            </a>
            <a href="/" id="night-mode" className="btn-night-mode">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    Night mode
                <span className="btn-night-mode-switch">
                    <span className="uk-switch-button"></span>
                </span>
            </a>
            <a href="form-login.html">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                Log Out 
            </a>

            
        </div>

    </div>
  )
}

export default MessengerTab