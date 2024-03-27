import { Button, Modal } from "antd";
import { useState, memo } from "react";
import {  toast } from "react-toastify";
import UpdateChild from "./UpdateChild"

  const UpdatePopupChild = ({ record, records }) => {

    const { id, createBy } = records || {};
    const [isModalOpen, setIsModalOpen] = useState(false);
    const responce = (e) => toast.success(e);
    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);
    return (
        <>
            <Button type="primary" onClick={showModal}>  Update  </Button>
            <Modal
                title="Update Parent"
                open={isModalOpen}
                onOk={handleOk}
                footer={null}
                onCancel={handleCancel}>
                <UpdateChild records={records} handleCancel={handleCancel} />
            </Modal>
        </>
    );
}

  export default UpdatePopupChild;
