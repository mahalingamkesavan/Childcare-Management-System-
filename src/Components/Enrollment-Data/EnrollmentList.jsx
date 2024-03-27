import React, { useEffect, useState } from 'react';
import { Col, Input, Row, Space, Table } from 'antd';
import DeleteEnrollment from "./DeleteEnrollment"
import UpdatePopup from "./UpdatePopup";
import * as moment from "moment";
import { useDispatch,useSelector } from 'react-redux';
import { Admin } from '../../Variables/ConstantVariable';
import { GetEnrollment } from "../../APIService/EnrollmentServices";

export const GetEnrollmentList = () => {

    const [GetEntrollment, SetEntrollment] = useState([]); const [value, setValue] = useState(null);
    
    var disPatch = useDispatch();  const parentprofie=useSelector((store) =>store?.Token?.data) ;var role=parentprofie?.role;

    useEffect(() => { if (value?.trim() ==="") setValue(null);  GetEnrollment(disPatch,value).then((res) => SetEntrollment(res)); },[value])

    const columns = [
        { title: 'Enrollment_ID', dataIndex: 'id', key: 'id', },
        { title: 'child_ID', dataIndex: 'childID', key: 'childID', },
        { title: 'Parent_Id', dataIndex: 'parentId', key: 'parentId', },
        { title: ' joining_Date', key: 'enrollmentStartingDate', dataIndex: 'enrollmentStartingDate', render: (record) => (<span>{moment(record).format("DD-MM-YYYY")}</span>) },
        { title: ' Ending_Date', key: 'enrollmentEndinggDate', dataIndex: 'enrollmentEndinggDate', render: (record) => (<span>{moment(record).format("DD-MM-YYYY")}</span>) },
        { title: 'Class_Name', key: 'classname', dataIndex: 'classname', },
        { title: 'Slot_Name', key: 'slotname', dataIndex: 'slotname', },
        { title: 'CreateBy', key: 'createBy', dataIndex: 'createBy', },
        { title: 'CreateDate', key: 'createDate', dataIndex: 'createDate', },
        { title: 'UpdateBy', key: 'updateBy', dataIndex: 'updateBy', },
        { title: 'UpdateDate', key: 'updateDate', dataIndex: 'updateDate', },
        {
            title: 'Action', render: (record, records) => {
                return (
                    <Row>
                        <Space size={8}>
                            <Col span={12}>
                                {role=== Admin && <DeleteEnrollment records={records} />}
                            </Col>
                            <Col span={12}>
                                <UpdatePopup records={records} />
                            </Col>
                        </Space>
                    </Row>)
            }
        }
    ];

    return (
        <div>
           <div style={{ padding: 10,  textAlign: "center" }}>
             <Input
               style={{ width: "290px",backgroundColor:"GrayText",color:"black" }}
               placeholder="Search Parent"
               onChange={(e) => {
                 var value = e.target.value;
                 setValue(value.replace(/\s+/,null));
               }}
             />
           </div>
           <div>
           <Table rowKey={record => record.id} columns={columns} dataSource={GetEntrollment} />
           </div>
           
        </div>)


}



