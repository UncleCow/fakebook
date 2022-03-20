import React from 'react'
import Container from '@mui/material/Container'
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GroupsIcon from '@mui/icons-material/Groups';
import CommentIcon from '@mui/icons-material/Comment';
import GroupIcon from '@mui/icons-material/Group';
import Avatar from '@mui/material/Avatar';
import "../../css/IntroGroup.css"

function IntroGroup() {
  return (
    <Container maxWidth="sm">
      <div className="discus__overview">
        <h3>Giới thiệu</h3>
        <div className="discus__overview-status">
          <LockIcon />
          <div>
            <h2>Riêng tư</h2>
            <p>Chỉ thành viên mới nhìn thấy mọi người trong nhóm và những gì họ đăng.</p>
          </div>
        </div>
        <div className="discus__overview-dis">
          <RemoveRedEyeIcon />
          <div>
            <h2>Hiển thị</h2>
            <p>Ai cũng có thể tìm nhóm này.</p>
          </div>
        </div>
        <div className="discus__overview-general">
          <GroupsIcon />
          <div>
            <h2>Tổng quát</h2>
          </div>
        </div>
      </div>
      <div className="discus__overview">
        <div className="discus__member">
          <h2>Thành viên </h2>
          <hr />
          <div className="discus__member-ava">
            <Avatar alt="Remy Sharp" src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/241407277_225485136229124_7421568854085560864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=p4_FI1TrsbAAX-4FRRn&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8kBG7IgFxy-m5WGSOFSqr6Wy-BAhrCFx8Mj9PYz_wmqg&oe=6237D199" />
            <Avatar alt="Travis Howard" src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ofd4SRGxQt4AX_0Vmwh&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8xrQlNDdxM0F5EIV7ucASjPL_h7NExgDQs_2RsU4K6JA&oe=62577A49" />
            <Avatar alt="Cindy Baker" src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/275447245_1383547318759464_8339327508738987291_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=l1ghodLQuuMAX-wflIF&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-NBqLePtSYS-z-RSbVUZiLcYxW0mN1wDyRAGJ8uBGDJA&oe=62376D2B" />
          </div>
          <p>Dov, Học và 3 người bạn khác là thành viên.</p>
          <div className="discus__member-admin">
            <Avatar alt="Remy Sharp" src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/241407277_225485136229124_7421568854085560864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=p4_FI1TrsbAAX-4FRRn&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8kBG7IgFxy-m5WGSOFSqr6Wy-BAhrCFx8Mj9PYz_wmqg&oe=6237D199" />
            <Avatar alt="Travis Howard" src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ofd4SRGxQt4AX_0Vmwh&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8xrQlNDdxM0F5EIV7ucASjPL_h7NExgDQs_2RsU4K6JA&oe=62577A49" />
            <Avatar alt="Cindy Baker" src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/275447245_1383547318759464_8339327508738987291_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=l1ghodLQuuMAX-wflIF&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-NBqLePtSYS-z-RSbVUZiLcYxW0mN1wDyRAGJ8uBGDJA&oe=62376D2B" />
          </div>
          <p>Duy là quản trị viên. Khanh và Khanh là người kiểm duyệt.</p>
          <button>Xem tất cả</button>
        </div>
      </div>

      <div className="discus__overview">
        <h3>Hoạt động</h3>
        <div className="discus__overview-act">
          <CommentIcon />
          <div>
            <h4>Hôm nay có 1 bài viết mới</h4>
            <p>14 trong tháng trước</p>
          </div>
        </div>
        <div className="discus__overview-dis">
          <GroupIcon />
          <div>
            <h4>Tổng cộng 535 thành viên</h4>
            <p>+5 trong tuần trước</p>
          </div>
        </div>
        <div className="discus__overview-general">
          <GroupsIcon />
          <div>
            <h4>Ngày tạo: 4 tuần trước</h4>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default IntroGroup