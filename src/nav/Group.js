import React from 'react'
import Header from "../components/main/Header"
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../css/Group.css"

function Group() {
  return (
    <div className="group">
        <Header />
        {/* anh bia group */}
        <div className="container content">
            <div className="group__content">
                <img className="group__img" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/241193346_1969179889909106_5829942367530293162_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8631f5&_nc_ohc=v-01iANskXYAX-gBpK6&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-BjdxYSgHyELq2zIICwMITf19Bu3f7c4nCVvs2SJeriw&oe=622B70E9" alt="friends"/>
            </div>
            <div className="group__info">
                <div className="group__info-left">
                    <div className="group__info-name">
                        <h1>Cóc Đà Nẵng</h1>
                    </div>
                    <div className="group__info-desc">
                        <LockRoundedIcon />
                        <p >Nhóm riêng tư</p>
                        <h5>3,1k thành viên</h5>
                    </div>
                    <div className="group__info-members">
                        <div className="group__info-member">
                            <img
                                style={{height: "36px", width: "36px", border: "1px solid #fff", borderRadius: "50%"}} 
                                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/271938041_2169811093174583_576429252828901778_n.jpg?stp=c0.180.320.320a_dst-jpg_p320x320&_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2ElI4K1GdKMAX9geqaT&_nc_ht=scontent.fdad1-3.fna&oh=00_AT-RMBf3zzicXwvU5V_Q2mXrSLreFzt3mWompKzRx6XcoQ&oe=622BEAFC" 
                                alt="" 
                            />
                        </div>
                        <div className="group__info-member">
                            <img
                                style={{height: "36px", width: "36px", border: "1px solid #fff", borderRadius: "50%"}} 
                                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/271938041_2169811093174583_576429252828901778_n.jpg?stp=c0.180.320.320a_dst-jpg_p320x320&_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2ElI4K1GdKMAX9geqaT&_nc_ht=scontent.fdad1-3.fna&oh=00_AT-RMBf3zzicXwvU5V_Q2mXrSLreFzt3mWompKzRx6XcoQ&oe=622BEAFC" 
                                alt="" 
                            />
                        </div>
                        <div className="group__info-member">
                            <img
                                style={{height: "36px", width: "36px", border: "1px solid #fff", borderRadius: "50%"}} 
                                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/271938041_2169811093174583_576429252828901778_n.jpg?stp=c0.180.320.320a_dst-jpg_p320x320&_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2ElI4K1GdKMAX9geqaT&_nc_ht=scontent.fdad1-3.fna&oh=00_AT-RMBf3zzicXwvU5V_Q2mXrSLreFzt3mWompKzRx6XcoQ&oe=622BEAFC" 
                                alt="" 
                            />
                        </div>
                        <div className="group__info-member">
                            <img
                                style={{height: "36px", width: "36px", border: "1px solid #fff", borderRadius: "50%"}} 
                                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/271938041_2169811093174583_576429252828901778_n.jpg?stp=c0.180.320.320a_dst-jpg_p320x320&_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2ElI4K1GdKMAX9geqaT&_nc_ht=scontent.fdad1-3.fna&oh=00_AT-RMBf3zzicXwvU5V_Q2mXrSLreFzt3mWompKzRx6XcoQ&oe=622BEAFC" 
                                alt="" 
                            />
                        </div>
                    </div>
                </div>

                <div className="group__info-right">
                    <div className="group__right-content">
                        <div className="group__right-status">
                
                        </div>
                        <div className="group__right-invite">
                            <button className="group__invite-btn">
                                <span>+</span>
                                Mời
                            </button>
                        </div>
                        <div className="group__right-more">
                            <KeyboardArrowDownIcon className="group__more-down" type="button"/>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Group