import React, { useEffect, useState } from "react";
import { Col, Row, Space, Table } from "antd";
import DeleteParent from "./DeleteParent";
import UpdateParentModal from "./UpdatePopupParent";
import { useNavigate } from "react-router-dom";
import { GetParentList } from "../../APIService/ParentServicess";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";

export const ParentComponent = () => {

      const columns = [
        {
          title: "ParentID #",
          dataIndex: "id",
          key: "id",
          render: (record) => (
            <label onClick={() => historyOfChild(`/GetParentChild/${record}`)}>
              {" "}
              {record}{" "}
            </label>
          ),
        },
        { title: "PhoneNumber", dataIndex: "phoneNumber", key: "phoneNumber" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "First Name", key: "firstName", dataIndex: "firstName" },
        { title: "Last Name", key: "lastName", dataIndex: "lastName" },
        { title: "Address", key: "address", dataIndex: "address" },
        { title: "City", key: "city", dataIndex: "city" },
        { title: "State", key: "State", dataIndex: "state" },
        { title: "Pincode", key: "Pincode", dataIndex: "pincode" },
        { title: "Status", key: "status", dataIndex: "status" },
        {
          title: "Actions",
          render: (record, records) => {
            return (
              <Row>
                <Space size={10}>
                  <Col span={12}>
                    {role === "Admin" && <DeleteParent records={records} />}
                  </Col>
                  <Col span={12}>
                    <UpdateParentModal records={records} />
                  </Col>
                </Space>
              </Row>
            );
          },
        },
      ];

      const [GetParent, setparent] = useState([]); const [value, setValue] = useState(null);

      const data = useSelector((store) => store?.Token?.data); const role = data?.role.toString();

      const disPatch = useDispatch(); const historyOfChild = useNavigate();

      useEffect(() => {  if (value?.trim() ==="") setValue(null);   GetParentList(disPatch,value).then((res) => setparent(res));  }, [value]);
  
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
          <Table
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={GetParent}
          />
    </div>
  );
};
