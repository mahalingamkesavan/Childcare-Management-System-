import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useParams } from "react-router-dom";
import MainAxios from '../../redux/CommonAxios';
import HTTP_METHOD from "../../Variables/HTTPmethods";
import { Childlistculumns } from "../Child-Data/ChildListCulumn";
import { ParentChildUrl } from "../../Variables/APIEndPoints";

const GetParentChild = () => {

  const columns=Childlistculumns();

  const { Id } = useParams(); const [parentchild, setparentchildrelation] = useState();
  
  const { parent, childList } = parentchild || {}

  const url = `${ParentChildUrl}${Id}`;

  useEffect(() => { MainAxios(url, HTTP_METHOD.Get,"").then(res => setparentchildrelation(res.parentChildData)) }, [Id])

  const parentname = parent?.firstName

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Parent Details</h2>
        <div>
          <h1>Parent Name :{parentname}</h1>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>Child Details</h2>
        <Table rowKey={record => record.id} columns={columns} dataSource={childList} />
      </div>
    </div>);
}


export default GetParentChild;







