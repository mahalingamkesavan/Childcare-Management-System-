import React, { useState } from "react";
import { toast } from "react-toastify";
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods"
import { Base_url } from "../../Variables/APIEndPoints";
import {UpdateChildById } from "../../Variables/APIEndPoints";
import {UpdatedSuccessfull} from "../../Variables/ConstantVariable";


export default function UpdateChild({ records, handleCancel }) {

    const url = `${Base_url}${UpdateChildById}`;

    const [data, setData] = useState(records);

    const showToastMessage = (e) => { toast.success(e); }; const showToastError = (e) => { toast.error(e); }

    data.dateOfBirth = data.dateOfBirth.split("T")[0];

    async function Submit(e) {
        
    e.preventDefault();
       await MainAxios(url, HTTP_METHOD.Put, data)
            .then(res => {
                if (res.results.message === UpdatedSuccessfull) {
                    window.location.reload();
                    showToastMessage(res.results.message);
                }
                else { showToastError(res.results.message); }
                handleCancel()
            })
            .catch(error => {
                if (error.response.data.message === null) {
                    showToastError(error.response.data.message);
                }
                else {
                    PrintvalidationError(error.response.data.errors);
                };
            })
    }

    const PrintvalidationError = (obj) => {
        for (var key in obj) {
            for (let index = 0; index < obj[key].length; index++) {
                showToastError(obj[key][index]);
            }
        }
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    
    return (
        <div >
            <div className="content">
                <form onSubmit={(e) => Submit(e)} action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" onChange={(e) => handle(e)} id='firstName' value={data.firstName} placeholder="Enter your name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" onChange={(e) => handle(e)} id='lastName' value={data.lastName} placeholder="Enter your lastname" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Gender </span>
                            <select type='text' className="classdropdown" onChange={(e) => handle(e)} id='gender' value={data.gender} >
                                <option>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="input-box">
                            <span className="details">Date Of Birth</span>
                            <input type='date' onChange={(e) => handle(e)} id='dateOfBirth' value={data.dateOfBirth} required />
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Update " />
                    </div>
                </form>
            </div>
        </div>
    )

};

