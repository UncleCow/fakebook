import React from 'react'
import Header from '../main/Header'
import "../../css/Messesger.css"

function Messenger() {
  return (
    <div>
        <Header />
         <div className="messages-container">
            <div className="messages-container-inner">
                <div className="messages-inbox">
                    <div className="messages-headline">
                        <div className="input-with-icon" hidden>
                            <input id="autocomplete-input" type="text" placeholder="Search" />
                            <i className="icon-material-outline-search"></i>
                        </div>
                        <h2 className="text-2xl font-semibold">Chats</h2>
                        <span className="absolute icon-feather-edit mr-4 text-xl uk-position-center-right cursor-pointer"></span>
                    </div>
                    <div className="messages-inbox-inner" data-simplebar>
                        <ul>
                            <li>
                                <a href="/">
                                    <div className="message-avatar"><i className="status-icon status-online"></i>
                                        <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vFiwvOBlVaIAX-WY4Fs&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_9qaow6lAynJ77fQ_qXgtTTCKy09n7AFGm2x5f_BJi2w&oe=625385C9" alt=""/>
                                    </div>

                                    <div className="message-by">
                                        <div className="message-by-headline">
                                            <h5>Trung Dũng</h5>
                                            <span>onl 4 hours ago</span>
                                        </div>
                                        <p>Đúng đúng đúng, hảo hảo, hảo hán</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="message-content">

                    <div className="messages-headline">
                        <h4> Lê Trung Dũng </h4>
                        <a href="/" className="message-action text-red-500"><i className="icon-feather-trash-2"></i> <span className="md:inline hidden"> Delete Conversation</span> </a>
                    </div>
                    
                    <div className="message-content-scrolbar" data-simplebar>

                        <div className="message-content-inner">
                                
                            <div className="message-time-sign">
                                <span>28 June, 2020</span>
                            </div>

                            <div className="message-bubble me">
                                <div className="message-bubble-inner">
                                    <div className="message-avatar"><img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=kKT9dPX7P3gAX_6nekZ&tn=1EWs77YRhzmoYX5L&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8A91q4rkKDvmbM1AXjNMUZOI6mA_FlvdRtD3L62ZN-KA&oe=6255F021" alt=""/></div>
                                    <div className="message-text"><p>Mày thấy cái môn prj đó như thế nào, có khó không? chứ tao thấy khó quá chời quá đất</p></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                            <div className="message-bubble">
                                <div className="message-bubble-inner">
                                    <div className="message-avatar"><img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vFiwvOBlVaIAX-WY4Fs&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_9qaow6lAynJ77fQ_qXgtTTCKy09n7AFGm2x5f_BJi2w&oe=625385C9" alt=""/></div>
                                    <div className="message-text"><p>Môn đó khó thật tao đồng ý với ý kiến của m 👍</p></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                            <div className="message-bubble me">
                                <div className="message-bubble-inner">
                                    <div className="message-avatar"><img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=kKT9dPX7P3gAX_6nekZ&tn=1EWs77YRhzmoYX5L&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8A91q4rkKDvmbM1AXjNMUZOI6mA_FlvdRtD3L62ZN-KA&oe=6255F021" alt=""/></div>
                                    <div className="message-text"><p>Môn đó gặp mấy đứa code ngu như tao thì chẳng bt làm sao cho qua môn cả. 😉</p></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="message-bubble me">
                                <div className="message-bubble-inner">
                                    <div className="message-avatar"><img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=kKT9dPX7P3gAX_6nekZ&tn=1EWs77YRhzmoYX5L&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8A91q4rkKDvmbM1AXjNMUZOI6mA_FlvdRtD3L62ZN-KA&oe=6255F021" alt=""/></div>
                                    <div className="message-text"><p>Mà mày thấy cô dậy mình như thế nào?</p></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                            <div className="message-bubble">
                                <div className="message-bubble-inner">
                                    <div className="message-avatar"><img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vFiwvOBlVaIAX-WY4Fs&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_9qaow6lAynJ77fQ_qXgtTTCKy09n7AFGm2x5f_BJi2w&oe=625385C9" alt=""/></div>
                                    <div className="message-text"><p>Cô đó phải nói là tuyệt vời, vừa xinh đẹp vừa giỏi, h cô mà thấy tao khen cô chắc cô cho nhóm tao 10 điểm môn này 😎</p></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                            <div className="message-bubble me">
                                <div className="message-bubble-inner">
                                    <div className="message-avatar"><img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=kKT9dPX7P3gAX_6nekZ&tn=1EWs77YRhzmoYX5L&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8A91q4rkKDvmbM1AXjNMUZOI6mA_FlvdRtD3L62ZN-KA&oe=6255F021" alt=""/></div>
                                    <div className="message-text"><p>Đúng đúng đúng, hảo hảo, hảo hán 🙂</p></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                            <div className="message-bubble">
                                <div className="message-bubble-inner">
                                    <div className="message-avatar"><img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vFiwvOBlVaIAX-WY4Fs&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_9qaow6lAynJ77fQ_qXgtTTCKy09n7AFGm2x5f_BJi2w&oe=625385C9" alt=""/></div>
                                    <div className="message-text">
                                        <div className="typing-indicator">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="message-reply">
                            <textarea cols="1" rows="1" placeholder="Your Message"></textarea>
                            <button className="button ripple-effect">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Messenger