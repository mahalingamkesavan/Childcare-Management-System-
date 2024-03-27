import { Button, Modal } from 'antd';
import { useState } from 'react';
import { toast } from 'react-toastify';
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import { DeleteSuccessfull } from '../../Variables/ConstantVariable';
import {Base_url,DeleteParentById} from "../../Variables/APIEndPoints"

const DeleteParent = ({ record, records }) => {

  const { id, createBy } = records || {};

  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  const showModal = () => { setIsModalOpen(true); }; const handleCancel = () => { setIsModalOpen(false); };

  const responce = (e) => { toast.success(e) }; const errorresponce = (e) => { toast.error(e) }

   const handleOk =async () => {
   
      const url = `${Base_url}${DeleteParentById}${records.id}`;

     await MainAxios(url,HTTP_METHOD.Delete,"")

        .then(res => {
               
          if (res.results.message === DeleteSuccessfull) {  responce(res.results.message);  window.location.reload(false);  }
               
          else { errorresponce(res.results.message) }
                
        })
        
        .catch((e) => errorresponce(e.response.data.message))
    
        setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}> Delete </Button>
      <Modal title="Delete Confirmation " open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure delete this task?..</p>
      </Modal>
    </>
  );
};

export default DeleteParent;
