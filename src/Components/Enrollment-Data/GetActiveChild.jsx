import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import { Base_url } from '../../Variables/APIEndPoints';
import {GetActiveChildList } from "../../Variables/APIEndPoints";
import { columns } from './CommanColumn/EnrollmentListColumns';


function GetActiveChild() {

    const url = `${Base_url}${GetActiveChildList}`; const [ActiveChild, setActiveChild] = useState([]);

    useEffect(() => { MainAxios(url, HTTP_METHOD.Get, "").then((res) => setActiveChild(res)).catch((error) => console.log(error)); }, [])
   
    return <Table rowKey={recod => recod.id} columns={columns} dataSource={ActiveChild} />
}
export default GetActiveChild;
