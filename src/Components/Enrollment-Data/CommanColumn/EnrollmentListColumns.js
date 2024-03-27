import * as moment from "moment";

const columns = [
    { title: 'Entrollment_ID', dataIndex: 'id', key: 'id', },
    { title: 'child_ID', dataIndex: 'childID', key: 'childID', },
    { title: 'Parent_Id', dataIndex: 'parentId', key: 'parentId', },
    { title: ' joining_Date', key: 'enrollmentStartingDate', dataIndex: 'enrollmentStartingDate',render:(record)=>(<span>{moment(record).format("DD-MM-YYYY")}</span>)},
    { title: ' Ending_Date', key: 'enrollmentEndinggDate', dataIndex: 'enrollmentEndinggDate',render :(record)=>(<span>{moment(record).format("DD-MM-YYYY")}</span>) },
    { title: 'Class_Name', key: 'classname', dataIndex: 'classname', },
    { title: 'Slot_Name', key: 'slotname', dataIndex: 'slotname', },
    { title: 'CreateBy', key: 'createBy', dataIndex: 'createBy', },
    { title: 'CreateDate', key: 'createDate', dataIndex: 'createDate', },
    { title: 'UpdateBy', key: 'updateBy', dataIndex: 'updateBy', },
    { title: 'UpdateDate', key: 'updateDate', dataIndex: 'updateDate', },
    {title :"Admission_Status",key :"admissionStatus",dataIndex :"admissionStatus"},
    {title:"Admission_ApprovedBy",key :"admission_Approveby",dataIndex :"admission_Approveby"}
];

export {columns};