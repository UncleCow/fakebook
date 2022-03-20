import React, { useState } from 'react'
import AboutPage from './AboutPage'
import IntroPage from './IntroPage'
import VideoPage from './VideoPage'
import ImagePage from './ImagePage'
import Header from '../main/Header'
import "../../css/Page.css";

function Page() {
    const [status, onStatus] = useState(null);
    const [active, setActive] = useState("active");

    const handleClick = (step) => {
    onStatus(step);
    };

    return (
    <>
        <Header />
        <div className="mcontainer">
            <div className="page">
                <div className="pages_banner">
                    <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/group/group-cover-1.jpg" alt=""/>
                </div>
                <div className="pages_content">
                    <div className="page_avatar">
                        <div className="page_avatar_holder"> 
                            <img src="http://demo.foxthemes.net/socialitev2.2/assets/images/group/group-3.jpg" alt=""/>
                        </div>
                        <div className="icon_change_photo" hidden> 
                            <ion-icon name="camera" className="text-xl"></ion-icon> 
                        </div>
                    </div>
                    <div className="page_info">
                        <h1> Graphic Design </h1>
                        <p> Public group ·  12 members</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center -space-x-4">
                            <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/275447245_1383547318759464_8339327508738987291_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=l1ghodLQuuMAX-Iprqo&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9UQBfNXH8UjYhq4jOKx4ax7lTklY36rpw9x-oFbo-5Hg&oe=623572EB" alt="" className="w-10 h-10 rounded-full border-2 border-white"/>
                            <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/275195234_1900829773450419_8832090657846807701_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=IefxsESKtG0AX9E5_jg&_nc_oc=AQkxahLnb92CfvsAeFpK1Dw5pSFiZPoXwflVihIz7dvi84U9OJK7h16qm18l96rSgjQ&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT_gilRfndxjvfVIROJL-mGXN16Bk88NmFlQ6s--sJEOHg&oe=6235F5D2" alt="" className="w-10 h-10 rounded-full border-2 border-white"/>
                            <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/275966084_336033741813441_4829483894134311026_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=dbeb18&_nc_ohc=sffJUlvH0J0AX-Q8bof&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8RyyA_aCwHSrUw4lE3CWAeGrKP5xuaMJLfyiQ1NZzeTA&oe=62372C50" alt="" className="w-10 h-10 rounded-full border-2 border-white"/>
                            <img src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vFiwvOBlVaIAX9l3JwA&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT9EttU5e09pGFFZhUV68fmX0Kr80cNes25DQN6pvlffKA&oe=62577A49" alt="" className="w-10 h-10 rounded-full border-2 border-white"/>
                            <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/146994747_2854728808188423_7615033960248435066_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6u4ZHovT0t0AX8sAYQ5&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT8mWCOb4hMjg445O8ZCGq2kZmY-vCqSkPBZnCZJjnwe-g&oe=6256F388" alt="" className="w-10 h-10 rounded-full border-2 border-white"/>
                            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-red-100 text-red-500 font-semibold"> 
                                12+
                            </div>
                        </div>
                        <a href="#" className="flex items-center justify-center h-9 px-5 rounded-md bg-blue-600 text-white  space-x-1.5">
                            <ion-icon name="thumbs-up"></ion-icon>
                            <span> Flow </span>
                        </a>
                    </div>

                </div>

                <nav className="responsive-nav border-t -mb-0.5 lg:pl-6">
                    <ul>
                        <li className="active">
                            <a href="/Page" onClick={() => handleClick(0)}>
                                Trang chủ
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleClick(1)}>
                                Giới thiệu
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleClick(2)}>
                                Ảnh
                            </a>    
                        </li>
                        <li>
                            <a href="#" onClick={() => handleClick(3)}>
                                Video
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {!status && (
                <div className="">
                    <AboutPage />
                </div>
            )}

            {status === 3 && (
                <div className="">
                    <VideoPage />
                </div>
            )}

            {status === 1 && (
                <div div className="">
                    <IntroPage />
                </div>
            )}

            {status === 2 && (
                <div className="">
                    <ImagePage />
                </div>
            )}
        </div>
    </>
  )
}

export default Page