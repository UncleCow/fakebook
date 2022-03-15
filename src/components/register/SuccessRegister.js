import React from 'react'
import '../../css/SuccessRegister.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function SuccessRegister() {
  return (
    <div className="success">
        <div className="success__form">
            <div className="success__notice">
                <CheckCircleOutlineIcon style={{fontSize:"80"}}/>
                <p>SUCCESS!</p>
            </div>
            <div className="success__content">
                <div className="success__content-text">
                    <p>Congratulations, your account has been successfully created!</p>
                    <div className="success__content-login">
                        <a href="./login">Continue</a>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default SuccessRegister