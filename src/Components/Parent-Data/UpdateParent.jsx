import React, { useState } from "react";
import {UpdateParentservice} from "../../APIService/ParentServicess"

function UpdateParent({ records, handleCancel }) {

    const [data, setData] = useState(records)

   async function Submit(e) {
       
    e.preventDefault();
       
    await UpdateParentservice(data,handleCancel);

   
    }

    function handle(e) {
        const newdata = {...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <div>
            <div className="content">
                <form onSubmit={(e) => Submit(e)} action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" onChange={(e) => handle(e)} id="firstName" value={data.firstName} placeholder="Enter your name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" onChange={(e) => handle(e)} id="lastName" value={data.lastName} placeholder="Enter your lastname" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="email" onChange={(e) => handle(e)} id="email" value={data.email} placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="number" onChange={(e) => handle(e)} id="phoneNumber" value={data.phoneNumber} placeholder="Enter your number" required />
                        </div>
                        <div className="input-box">
                            <span className="details">State</span>
                            <input type="text" onChange={(e) => handle(e)} id="state" value={data.state} placeholder="Chelect your State" required />
                        </div>
                        <div className="input-box">
                            <span className="details">City</span>
                            <input type="text" onChange={(e) => handle(e)} id="city" value={data.city} placeholder="Chelect your City" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Pincode</span>
                            <input type="number" onChange={(e) => handle(e)} id="pincode" value={data.pincode} placeholder="Enter Your Pincode" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Address</span>
                            <input type="text" onChange={(e) => handle(e)} id="address" value={data.address} placeholder="Enter Your Address" required />
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default UpdateParent;
