import { useEffect, useState } from "react";
import {  Table } from 'antd';
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import {columns} from "./CommanColumn/EnrollmentListColumns";
import { Base_url } from "../../Variables/APIEndPoints";
import {AdmissionApprovallList} from "../../Variables/APIEndPoints";

export default function EnrollmentApprovalList() 
{
   const url=`${Base_url}${AdmissionApprovallList}`;

   const [data,setdata]=useState([]);

   const [Getdata,setDataSource]=useState([]);

  useEffect(()=>{MainAxios(url,HTTP_METHOD.Get,"").then((res)=>setdata(res)).catch((error)=>console.log(error.response.data.Message)); },[]);
   
  useEffect(()=>{if(data.length>0)setDataSource(data)},[data]); 

  return <Table rowKey={record =>record.id} columns={columns} dataSource={Getdata}/>
}

