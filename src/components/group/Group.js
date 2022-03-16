import React from 'react'
import Header from "../main/Header"
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../../css/Group.css"

function Group() {
  return (
    <div className="group">
        <Header />
        {/* anh bia group */}
        <div className="container content">
            <div className="group__content">
                <img className="group__img" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/241193346_1969179889909106_5829942367530293162_n.jpg?stp=dst-jpg_p600x600&_nc_cat=105&ccb=1-5&_nc_sid=8631f5&_nc_ohc=WPp0Z0b5XaQAX87luhd&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8Kooig8eVbxOD9LB2LUcAkJFNmHyLZ8pZ5wOkHb17_Wg&oe=62315FA9" alt="friends"/>
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
                                src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/250535406_2730474957097952_3222727891550472945_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=W7ZcL8UGa6wAX93LGDs&_nc_ht=scontent.fdad1-1.fna&oh=00_AT88-kZnPPFWUhr9Cjky7rUFWerwUjphGIasYan2oV3teg&oe=62304C24" 
                                alt="" 
                            />
                        </div>
                        <div className="group__info-member">
                            <img
                                style={{height: "36px", width: "36px", border: "1px solid #fff", borderRadius: "50%"}} 
                                src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/250535406_2730474957097952_3222727891550472945_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=W7ZcL8UGa6wAX93LGDs&_nc_ht=scontent.fdad1-1.fna&oh=00_AT88-kZnPPFWUhr9Cjky7rUFWerwUjphGIasYan2oV3teg&oe=62304C24" 
                                alt="" 
                            />
                        </div>
                        <div className="group__info-member">
                            <img
                                style={{height: "36px", width: "36px", border: "1px solid #fff", borderRadius: "50%"}} 
                                src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/250535406_2730474957097952_3222727891550472945_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=W7ZcL8UGa6wAX93LGDs&_nc_ht=scontent.fdad1-1.fna&oh=00_AT88-kZnPPFWUhr9Cjky7rUFWerwUjphGIasYan2oV3teg&oe=62304C24" 
                                alt="" 
                            />
                        </div>
                        <div className="group__info-member">
                            <img
                                style={{height: "36px", width: "36px", border: "1px solid #fff", borderRadius: "50%"}} 
                                src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/250535406_2730474957097952_3222727891550472945_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=W7ZcL8UGa6wAX93LGDs&_nc_ht=scontent.fdad1-1.fna&oh=00_AT88-kZnPPFWUhr9Cjky7rUFWerwUjphGIasYan2oV3teg&oe=62304C24" 
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
            <hr />
        </div>
    </div>
  )
}

export default Group