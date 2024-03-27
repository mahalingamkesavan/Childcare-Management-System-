import { Button, Modal } from "antd";
import { useState, memo } from "react";
import UpdateParent from "./UpdateParent";

const UpdateParentModal = ({ record, records }) => {

    const { id, createBy } = records || {};

    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <UpdateParent records={records} handleCancel={handleCancel} />
            </Modal>
        </>
    );
}
export default memo(UpdateParentModal);
