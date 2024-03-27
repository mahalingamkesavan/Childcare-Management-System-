import { useEffect, useState } from "react";
import { Table } from 'antd';
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import { Base_url } from "../../Variables/APIEndPoints";
import {AdmissionRejectedList} from "../../Variables/APIEndPoints";
import { columns } from "./CommanColumn/EnrollmentListColumns"; 


export default function EnrollmentRejectedList() {
  
   const url = `${Base_url}${AdmissionRejectedList}`;

   const [data, setdata] = useState([]);

   useEffect(() => { MainAxios(url,HTTP_METHOD.Get, "").then((res) => setdata(res)).catch((error) => console.log(error)); },[])

   return <Table rowKey={record => record.id} columns={columns} dataSource={data} />
}
