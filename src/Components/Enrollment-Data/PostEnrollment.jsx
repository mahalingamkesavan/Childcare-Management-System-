import React, { useEffect, useState } from "react";
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import { Base_url } from "../../Variables/APIEndPoints";
import {RegistrationEnrollment } from "../../Variables/APIEndPoints";
import StorageKey from "../../Variables/LocalStorageKey";
import { useDispatch } from "react-redux";
import { GetChildList } from "../../APIService/Childservices";

import { SuccessMessage,ErrorMessage } from "../../Features/SuccessMessageToast";
import { RegistrationSuccessfull,InternalServerError,selectchildName } from "../../Variables/ConstantVariable";
import { GetClassList,GetSlotList } from "../../APIService/ClassAndSlotServicess";


export default function InsertEnrollment() {

            const url = `${Base_url}${RegistrationEnrollment}`; 
            
            var disPatch=useDispatch();

            const [data, setData] = useState({});

            const [selectedItems, setSelectedItems] = useState([]); 
           
            const [selectedItem, setSelectedItem] = useState(
                { classdata:[], 
                  slotdata:[] 
                }
                ); 
           
            useEffect(()=>
                    {
                    async  function name() 
                    {
                     setSelectedItem({ classdata:await GetClassList(),  slotdata:await GetSlotList() }) }
                     name();
                     },[])

            useEffect(()=> {
                    const FunctionAction = async() =>
                    {
                        if(localStorage.getItem("Parent Id")!== null)
                        {
                        await GetChildList(disPatch,localStorage.getItem("Parent Id")).then(res =>{setSelectedItems(res)})
                        }
                    };
                    FunctionAction();
            },[])

            async function Submit(e) {
               
                e.preventDefault();
                console.log(data);
                await MainAxios(url, HTTP_METHOD.Post, {
                    ...data,
                    parentId: localStorage.getItem(StorageKey.ParentId),
                    createBy: localStorage.getItem(StorageKey.Username),
                })
                    .then((res) => {
                        if (res.results.message === RegistrationSuccessfull) {
                            SuccessMessage(res.results.message);
                            localStorage.setItem(StorageKey.EnrollmentId, res.id);
                        } else {
                            ErrorMessage(res.results.message);
                        }
                    })
                    .catch((error) => {
                        if (error.response.data.Message === InternalServerError) {
                            ErrorMessage(error.response.data.message);
                        } else {
                            PrintvalidationError(error.response.data.errors);
                        }
                    });
            }

            const PrintvalidationError = (obj) => {
                for (var key in obj) {
                    for (let i = 0; i < obj[key].length; i++) {
                        ErrorMessage(obj[key][i]);
                    }
                }
            };

            function handle(e) {
                const newdata = { ...data };
                newdata[e.target.id] = e.target.value;
                setData(newdata);
                
                if(newdata.childID ===''||data.slotname === '' ||data.classNamename ===''){
                    ErrorMessage(selectchildName)
                }  
            }

            return (
                <div className="container">
                    <div style={{ textAlign: "center" }}>
                        <img
                            width={250}
                            src="https://1coresolution.com/images/1corelogo-opti.png"
                        />
                    </div>
                    <div className="title">Registration Enrollment</div>
                    <div className="content">
                        <form onSubmit={(e) => Submit(e)} action="#">
                            <div className="user-details">
                            <div className="input-box">
                                <span className="details">Child Name </span>
                                <select
                                    type="text"
                                    className="classdropdown"
                                    onChange={(e) =>{ handle(e)}}
                                    id="childID"
                                    value={data.childID}
                                >
                                    <option value={''} key={-1}>-select-</option>
                                    {
                                        selectedItems.map((iterm)=>{ return(
                                            <option  value={iterm.id} key={iterm.id} >{iterm.firstName} </option>
                                        )})
                                    }
                                </select>
                                </div>
                                <div className="input-box">
                                    <span className="details">class Starting Date</span>
                                    <input
                                        type="date"
                                        onChange={(e) => handle(e)}
                                        id="enrollmentStartingDate"
                                        value={data.entrollmentStartingDate}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">class Entding Date </span>
                                    <input
                                        type="date"
                                        id="enrollmentEndinggDate"
                                        value={data.entrollmentEndinggDate}
                                        onChange={(e) => handle(e)}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">class Name </span>
                                    <select
                                        type="text"
                                        className="classdropdown"
                                        onChange={(e) => handle(e)}
                                        id="classname"
                                        value={data.classNamename}
                                    >
                                         <option value={''} key={-1}>-select-</option>
                                        {
                                        selectedItem?.classdata?.map((iterms)=>{ return(
                                            <option  value={iterms?.className} key={iterms?.classId} >{iterms?.className} </option>
                                        )})
                                    }
                                    </select>
                                </div>
                                <div className="input-box">
                                    <span className="details">Slot Name </span>
                                    <select
                                        type="text"
                                        className="classdropdown"
                                        onChange={(e) => handle(e)}
                                        id="slotname"
                                        value={data.slotname}
                                    >
                                         <option value={''} key={-1}>-select-</option>
                                        {
                                        selectedItem?.slotdata?.map((iterms)=>{ return(
                                            <option  value={iterms?.slotname} key={iterms?.slotId} >{iterms?.slotName} </option>
                                        )})
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            );
}
