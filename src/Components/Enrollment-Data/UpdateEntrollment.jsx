import { useState} from "react";
import { toast } from "react-toastify";
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import { Base_url } from "../../Variables/APIEndPoints";
import {UpdateEnrollmentById} from "../../Variables/APIEndPoints";
import { GetClassList,GetSlotList } from "../../APIService/ClassAndSlotServicess";
import { useEffect } from "react";

export default function UpdateEnrollment({ records, handleCancel }) {

    const url = `${Base_url}${UpdateEnrollmentById}`;

    const showToastMessage = (e) => { toast.success(e); }; const ErrorToastMessage = (e) => { toast.error(e); };

    const [data, setData] = useState(records);

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

    data.enrollmentStartingDate = data.enrollmentStartingDate.split("T")[0];

    data.enrollmentEndinggDate = data.enrollmentEndinggDate.split("T")[0];

   async function  Submit(e) {
       
        e.preventDefault();
       
         await MainAxios(url, HTTP_METHOD.Put, { ...data,createBy: localStorage.getItem("Username"), })
            .then((res) => {

                if (res.results.message === "Updated_Successfull") {
                    showToastMessage(res.results.message);
                    window.location.reload();
                } 
                else {ErrorToastMessage(res.results.message); }

                handleCancel();
            })
            .catch((error) => {
                if (error.response.data.Message === null) {
                    ErrorToastMessage(error.response.data.Message);
                }
                else {
                    PrintvalidationError(error.response.data.errors);
                }
            });
    }
    const PrintvalidationError = (obj) => {
        for (var key in obj) {
            for (let i = 0; i < obj[key].length; i++) {
                ErrorToastMessage(obj[key][i])
            }
        }
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }
    
    return (
        <div className="content">

            <form onSubmit={(e) => Submit(e)} action="#">
                <div className="user-details">
                   
                    <div className="input-box">
                        <span className="details">Class Starting Date</span>
                        <input
                            type="date"
                            onChange={(e) => handle(e)}
                            id="enrollmentStartingDate"
                            value={data.enrollmentStartingDate}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Class Enting Date </span>
                        <input
                            type="date"
                            id="enrollmentEndinggDate"
                            value={data.enrollmentEndinggDate}
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
                    <input type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
}

