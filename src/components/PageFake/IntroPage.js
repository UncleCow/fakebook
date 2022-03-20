import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import ErrorIcon from '@mui/icons-material/Error';
import Container from '@mui/material/Container'
import ForumIcon from '@mui/icons-material/Forum';
import "../../css/IntroPage.css"

function IntroPage() {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#fff', borderRadius: 2, padding: "40px 30px 20px" }}>
      <div className="intro__top">
        <h2 className="">CHUNG</h2>
        <hr />
        <div className="intro__top-like"> 
          <div className="intro__top-like--count">
            <ThumbUpIcon sx={{margin: "6px"}} />
            <p>211.640 người thích trang này, bao gồm 43 bạn bè của bạn</p>
          </div>
          <div className="intro__top-like-ava">
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
          </div>
        </div>

        <div className="intro__top-flow">
          <LibraryAddCheckIcon sx={{margin: "6px"}}/>
          <p>211.506 người theo dõi Trang này</p>
        </div>

        <div className="intro__top-event">
          <InsertInvitationIcon sx={{margin: "6px"}}/>
          <a href="https://www.facebook.com/search/?bqf=str%2FS%25E1%25BB%25B1%2Bki%25E1%25BB%2587n%2Bth%25E1%25BB%2583%2Bthao%2Fkeywords_pages&ref=page_about_category&f=AbrnnlwZAdyJ8jxHKsh5Nw6gpqQH-GJYTvaHQI3162AS6E3pYvsAGiOuWONs7G5cSfRwpuG0PpoydnBor0vRit0UC5lSi_5PcVXfqytinE1VSyJ28J9wrBCVvlpm-Y0DHHkJ5oS8F8sQhzZ3sa_7ZXvBusObo-75IPN_DffNtQ5FkA" >
            Sự kiện thể thao
          </a>
        </div>
      </div>

      <div className="intro__middle">
        <h2 className="">THÔNG TIN LIÊN HỆ BỔ SUNG</h2>
        <hr />
        <div className="intro__middle-global"> 
          <LanguageIcon sx={{margin: "6px"}}/>
          <a href="https://www.colormerun.vn/?fbclid=IwAR0mR-YoT5q5gvU0qU_ZwRMnH-XgGYLVjEIUpP5378_2iinVP3cpNPZJh6o" >
            http://www.colormerun.vn/
          </a>
        </div>
        <div className="intro__middle-gmail">
          <EmailIcon sx={{margin: "6px"}}/>
          <a href="info@pulse.vn" >
            info@pulse.vn
          </a>
        </div>

        <div className="intro__middle-mess">
          <div className="intro__middle-mess--logo">
            <ForumIcon sx={{margin: "6px"}}/>
            <a href="./messenger" className="">
              Gửi tin nhắn
            </a>  
          </div>
        </div>
      </div>

      <div className="intro__bottom">
        <h2>Thông tin thêm</h2>
        <hr />
        <div className="intro__bottom-intro">
          <div className="">
            <ErrorIcon sx={{margin: "6px"}}/>
            <h3>Giới thiệu</h3>
          </div>
          <p>Color Me Run - Ngày hội chạy bộ sắc màu với đích đến ấn tượng là sân khấu ca nhạc hoành tráng, sẽ mang đến cho bạn những trải nghiệm khó quên.</p>
        </div>
        <div className="intro__bottom-intro">
          <div className="">
            <ErrorIcon sx={{margin: "6px"}}/>
            <h3>Thông tin bổ sung</h3>
          </div>
          <p>Color Me Run- Đường Chạy Sắc Màu là sự kiện thể thao độc đáo kết hợp với chương trình âm nhạc ấn tượng lần đầu tiên được tổ chức tại Việt Nam.</p>
        </div>
      </div>
    </Container>
  )
}

export default IntroPage