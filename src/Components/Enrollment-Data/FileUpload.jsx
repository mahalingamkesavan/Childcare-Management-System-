import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { FileUploadAPILink } from "../../Variables/APIEndPoints";
import axios from "axios";
import StorageKey from "../../Variables/LocalStorageKey";
import { SuccessMessage,ErrorMessage } from "../../Features/SuccessMessageToast";

export const FileUpload = () => {

  const [FileDetails, setFile] = useState();


  const savefile = (e) => { setFile(e.target.files[0]); };   const url = `${FileUploadAPILink}/PostFile`;

  const Uploadfile = () => {

    const formdata = new FormData();
    
    formdata.append("FileDetails", FileDetails);
    formdata.append("EnrollmentId", localStorage.getItem("EnrollmentId"));

    axios.post(url, formdata,
      {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem(StorageKey.Token), maxBodyLength: Infinity, "Content-Type": "multipart/form-data" },
      }).then(res => SuccessMessage(res.data.message))
      .catch((e) => ErrorMessage(e.response.data.message))
  }

  return (
    <>
      <div> <h1>Upload Image</h1>
        <input type={"file"} onChange={savefile} />
        <input type={"button"} value="upload" onClick={Uploadfile} />
      </div>
      <div> <h1>Upload BirthCertificate</h1>
        <input type={"file"} onChange={savefile} />
        <input type={"button"} value="upload" onClick={Uploadfile} />
      </div>
    </>
  )
}