import React, { useEffect, useState } from 'react';
import {  Table, Input } from 'antd';
import { GetChildList } from "../../APIService/Childservices";
import { useDispatch,useSelector } from 'react-redux';
import {Childlistculumns} from "./ChildListCulumn";


export const ChilComponent = () => {
 
  const [ChildData, SetChild] = useState([]);  const disPatch=useDispatch(); const [value, setValue] = useState(null);

  const data=useSelector((store) =>store?.Token?.data);  const role=data?.role.toString();

  const columns=Childlistculumns();
 
  useEffect (() => {  if (value?.trim() === "") setValue(null); GetChildList(disPatch,value).then((res)=>SetChild(res));},[value]);

return (
 <div>
  <div style={{padding:10,textAlign:"center"}}>
      <Input
          style={{ width: "290px",backgroundColor:"GrayText",color:"black" }}
          placeholder="Search Child"
          onChange={(e) => {
            var value = e.target.value;
            value = value.replace(/\s+/g, "");
            setValue(value);
          }}
            />
  </div>
  <Table  rowKey={record => record.id} columns={columns} dataSource={ChildData} />
 </div>)
}
