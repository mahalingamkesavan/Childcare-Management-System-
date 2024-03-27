import React, { useState } from "react";
import {RegistrationChild} from "../../Variables/APIEndPoints";
import { Base_url } from "../../Variables/APIEndPoints";
import { useNavigate } from 'react-router-dom';
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import StorageKey from "../../Variables/LocalStorageKey";
import { useSelector } from "react-redux";
import{RegistrationSuccessfull,InternalServerError,Admin,Customer} from "../../Variables/ConstantVariable";
import { SuccessMessage, ErrorMessage } from "../../Features/SuccessMessageToast";
import 'react-toastify/dist/ReactToastify.css';

function InsertChild() {

    const url = `${Base_url}${RegistrationChild}`;

    const [Childdata, setChildData] = useState({parentId :'',firstName: '', lastName: '', status: '', gender: '', dateOfBirth: '' })

    const nav = useNavigate();

    const data=useSelector((store) =>store?.Token?.data) ;const role=data?.role.toString();
   
    const ParentData=useSelector((store)=>store?.ParentList?.data);

   async function Submit(e) {

        e.preventDefault();
  
        if( localStorage.getItem(StorageKey.ParentId) ===null )
        {
            localStorage.setItem(StorageKey.ParentId,Childdata.parentId);
        }
      
       await MainAxios(url, HTTP_METHOD.Post, { ...Childdata,parentId:localStorage.getItem(StorageKey.ParentId)})
            .then(res => {
                if (res.results.message === RegistrationSuccessfull) {
                    SuccessMessage(res.results.message);
                    localStorage.setItem(StorageKey.ChildId, res.id);
                    setTimeout(() => { nav("/PostEnrollment") }, 4000);
                }
                else { ErrorMessage(res.results.message); }
            })
            .catch((error) => {
                console.log(error.response.data.Message);
                if (error.response.data.Message === InternalServerError) {
                    ErrorMessage(error.response.data.Message);
                }
                else {
                    PrintvalidationError(error.response.data.errors);
                }
            })
    }

    function handle(e) {
        const newdata = { ...Childdata }
        newdata[e.target.id] = e.target.value
        console.log(newdata);
        setChildData(newdata)
    }

    const PrintvalidationError = (obj) => {
        for (var key in obj) {
            for (let i = 0; i < obj[key].length; i++) {
                ErrorMessage(obj[key][i])
            }
        }
    }

    return (
        <div className="container">
            <div style={{ textAlign: "center" }}>
                <img
                    width={250}
                    src="https://1coresolution.com/images/1corelogo-opti.png" />
            </div>
            <div className="title">Registration Child</div>
            <div className="content">
                <form onSubmit={(e) => Submit(e)} action="#">
                    <div className="user-details">
                   
                        { (role === Admin || role === Customer  )  &&
                           
                           <div className="input-box">
                           <span className="details">Parent Name </span>
                               <input 
                               type="text" 
                               id="parentId"
                               onChange={(e) =>handle(e)}
                               list="ParentName" 
                               placeholder="Enter your parent Id"
                               value={Childdata.parentId}
                               />
                                <datalist id="ParentName">
                                {
                                        ParentData?.map((iterm)=>{ 
                                            return(
                                            <option  value={iterm?.id} key={iterm?.id} >{iterm?.firstName}</option>
                                        )})
                                    }
                                </datalist> 
                        </div>
                        }
                       
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" onChange={(e) => handle(e)} id='firstName' value={Childdata.firstName} placeholder="Enter your name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" onChange={(e) => handle(e)} id='lastName' value={Childdata.lastName} placeholder="Enter your lastname" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Date Of Birth</span>
                            <input type='date' onChange={(e) => handle(e)} id='dateOfBirth' value={Childdata.dateOfBirth} required />
                        </div>
                       
                        <div className="input-box">
                            <span className="details">Gender </span>
                            <select type='text' className="classdropdown" onChange={(e) => handle(e)} id='gender' placeholder="Gender" value={Childdata.gender} >
                                <option>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
    
}
export default InsertChild;
