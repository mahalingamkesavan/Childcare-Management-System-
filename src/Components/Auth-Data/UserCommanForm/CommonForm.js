import { Link } from "react-router-dom";
import React from 'react';
import { useSelector } from "react-redux";

const CommonForm = (requestData) => {

    const { formtitle ,data, onSubmit, onChange } = requestData;
    
    const Userdata=useSelector((store) =>store?.Token?.data)

    return (
        <div>
            <div className="container" style={{marginTop: "10pc"}}>
                <div style={{ textAlign: "center",marginRight:"10px"}}>
                    <img
                        width={250}
                        src="https://www.pngall.com/wp-content/uploads/5/Account-Login-Button-PNG-Clipart.png"/>
                </div>
                <div className="title">{formtitle}</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)} action="#" >
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input type="text" onChange={onChange} id="Username" value={data.Username} placeholder="Enter your Username" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input onChange={onChange} id="Email" value={data.Email} placeholder="Email" type='Email'></input>
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="passward" onChange={onChange} id="Password" value={data.Password} placeholder="Enter your Password" />
                            </div>
                            <div className="input-box">
                               {Userdata?.role===undefined && <Link to={"/"}>Already Have an Account? Login</Link>} 
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CommonForm;
