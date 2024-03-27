import { Button, Modal } from 'antd';
import { useState, memo } from 'react';
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import {DeleteSuccessfull,DeleteConfirmation} from "../../Variables/ConstantVariable";
import {DeleteEnrollmentById} from "../../Variables/APIEndPoints";
import { Base_url } from '../../Variables/APIEndPoints';
import { SuccessMessage,ErrorMessage } from '../../Features/SuccessMessageToast';

const DeleteEnrollment = ({ record, records }) => {

  const [isModalOpen, setIsModalOpen] = useState(false); const showModal = () => { setIsModalOpen(true); };

    const handleOk = async () => {
        
            const url = `${Base_url}${DeleteEnrollmentById}${records.id}`;

       await MainAxios(url,HTTP_METHOD.Delete,"")

               .then(res => {

                if (res.results.message === DeleteSuccessfull) { SuccessMessage(res.results.message); window.location.reload();  } })
                
                .catch((e) => ErrorMessage(e.response.data.message));
         
                setIsModalOpen(false);
        };

       const handleCancel = () => { setIsModalOpen(false); };

  return (
    <>
      <Button type="primary" onClick={showModal}> Delete </Button>
      <Modal title={DeleteConfirmation} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h2>Are you sure delete this task?..</h2>
      </Modal>
    </>
  );
};
export default memo(DeleteEnrollment);