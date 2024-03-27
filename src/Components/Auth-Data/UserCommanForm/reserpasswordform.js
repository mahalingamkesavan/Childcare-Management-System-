import React from 'react';

const Reserpasswordform = (requestData) => {

    const {data, onSubmit, onChange } = requestData
          
    return (
                <div className="bodyContainer">
                <div className="container">
                    <div style={{ textAlign: "center" }}>
                        <img
                            width={250}
                            src="https://1coresolution.com/images/1corelogo-opti.png" />
                    </div>
                    <div className="title">Reset Passward</div>
                   
                    <div className="content">
                        <form onSubmit={(e) => onSubmit(e)} action="#">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input type="text" onChange={onChange} id="UserName" value={data.UserName} placeholder="Enter the username...." required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Old Password</span>
                                    <input type="passward" onChange={onChange} id="OldPassword" value={data.OldPassword} placeholder="Enter the old password...." />
                                </div>
                                <div className="input-box">
                                    <span className="details">New Password</span>
                                    <input type="passward" onChange={onChange} id="NewPassword" value={data.NewPassword} placeholder="Enter the password...." />
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Reset Password"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )
}

export default Reserpasswordform;
