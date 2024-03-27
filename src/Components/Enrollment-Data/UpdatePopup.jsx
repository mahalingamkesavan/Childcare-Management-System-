import { Button, Modal } from "antd";
import { useState, memo } from "react";
import {  toast } from "react-toastify";
import UpdateEnrollment from "./UpdateEntrollment";

const UpdateEntrollmentModal = ({ record, records }) => {
   
    const [isModalOpen, setIsModalOpen] = useState(false);
    const responce = (e) => toast.success(e);
    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);
    return (
        <>
            <Button type="primary" onClick={showModal}>  Update  </Button>
            <Modal
                title="Update Enrollment"
                open={isModalOpen}
                onOk={handleOk}
                footer={null}
                onCancel={handleCancel}>
                <UpdateEnrollment records={records} handleCancel={handleCancel} />
            </Modal>
        </>
    );
};
export default memo(UpdateEntrollmentModal);
