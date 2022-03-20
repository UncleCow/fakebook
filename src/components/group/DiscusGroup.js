import React from 'react'
import Grid from '@mui/material/Grid';
import UploadPostSpace from "../main/UploadPostSpace"
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GroupsIcon from '@mui/icons-material/Groups';
import "../../css/DiscusGroup.css"

function DiscusGroup() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <UploadPostSpace />
        </Grid>
        <Grid item xs={4}>  
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
        </Grid>
      </Grid>
    </div>
  )
}

export default DiscusGroup