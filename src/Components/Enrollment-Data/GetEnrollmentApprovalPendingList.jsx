import { useEffect, useState } from "react";
import * as moment from "moment"
import { Button, Col, Row, Space, Table } from 'antd';
import EnrollmentApproval from './UpdateEnrollmentApproval'
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import { Base_url } from "../../Variables/APIEndPoints";
import {AdmissionApprovalpending } from "../../Variables/APIEndPoints";

export default function GetEnrollmentApprovalList() {

    const url = `${Base_url}${AdmissionApprovalpending}`;

    const [data, setdata] = useState([])

    useEffect(  () => { const Fetchdata=async () => { 
        
        await MainAxios(url, HTTP_METHOD.Get, "") .then(res => setdata(res));}
       
         Fetchdata();
        }, [])

    return <Table rowKey={record => record.id} columns={columns} dataSource={data} />
}

const columns = [
    { title: 'Entrollment_ID', dataIndex: 'id', key: 'id', },
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
        title: "Action", render: (record, records) => {
            return (
                <Row>
                    <Space size={10}>
                        <Col span={12} >
                            <Button type="primary" onClick={() => EnrollmentApproval(records, "Approved")}>Approved</Button>
                        </Col>
                        <Col span={12} >
                            <Button type="primary" onClick={() => EnrollmentApproval(records, "Rejected")}>Rejected</Button>
                        </Col>
                    </Space>
                </Row>
            )
        }
    }
];
