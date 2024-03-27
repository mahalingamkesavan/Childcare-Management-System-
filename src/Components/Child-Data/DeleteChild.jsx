import { Button, Modal } from 'antd';
import { useState } from 'react';
import { SuccessMessage, ErrorMessage } from "../../Features/SuccessMessageToast";
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import {DeleteSuccessfull,DeleteConfirmation} from "../../Variables/ConstantVariable";
import { Base_url } from '../../Variables/APIEndPoints';
import {DeleteChildById} from "../../Variables/APIEndPoints";

const DeleteChild = ({ record, records }) => {

  const { id } = records || {};

  const [isModalOpen, setIsModalOpen] = useState(false);  const showModal = () => { setIsModalOpen(true); };

  const  handleOk = async () => {
   
      const url = `${Base_url}${DeleteChildById}${records.id}`
     
     await MainAxios(url, HTTP_METHOD.Delete, "")
        
     .then(res => {
          
      if (res.results.message === DeleteSuccessfull)
               {SuccessMessage(res.results.message) ;window.location.reload(false); }
     else  
         {  SuccessMessage(res.results.message)}

    }).catch((e) => {console.log(e.response); ErrorMessage(e.response.data.message)})
   
    setIsModalOpen(false);
  }

  const handleCancel = () => { setIsModalOpen(false); };

  return (
    <>
      <Button type="primary" onClick={showModal}> Delete </Button>
      <Modal title={DeleteConfirmation} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure delete this task?..</p>
      </Modal>
    </>
  );

}
export default DeleteChild
































    // const [data, setStatus] = useState("");
    // console.log(data);
    // useEffect(() => {
    //     // DELETE request using fetch with set headers
    //     const requestOptions = {
    //         method: 'DELETE',
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem("Token")}`,
    //             'My-Custom-Header': 'foobar'
    //         }
    //     };
    //     fetch(`https://localhost:7232/Child/DeleteChildById?id=8`, requestOptions)
    //         .then(async response => {
    //             const data = await response.json();
    //             console.log(data);
    //             // check for error response
    //             if (!response.ok) {
    //                 // get error message from body or default to response status
    //                 const error = (data && data.message) || response.status;
    //                 return Promise.reject(error);
    //             }
    //             setStatus('Delete successful');
    //         })

    // }, []);
