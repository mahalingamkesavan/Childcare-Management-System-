import { Col, Row, Space, Table } from "antd";
import * as moment from "moment";
import UpdatePopupChild from "../Child-Data/UpdatePopupChild";
import {Admin} from "../../Variables/ConstantVariable";
import {useSelector } from 'react-redux';
import DeleteChild from "./DeleteChild";

export const  Childlistculumns = () =>{
   
    const data=useSelector((store) =>store?.Token?.data) ;const role=data?.role.toString();

    const columns = [
        { title: 'Child ID', dataIndex: 'id', key: 'id', },
        { title: 'Parent ID', dataIndex: 'parentID', key: 'parentID', },
        { title: 'Gender', dataIndex: 'gender', key: 'gender', },
        { title: 'Date Of Birth', key: 'dateOfBirth', dataIndex: 'dateOfBirth', render: (record) => (<span>{moment(record).format("DD-MM-YYYY")}</span>) },
        { title: 'First Name', key: 'firstName', dataIndex: 'firstName', },
        { title: 'Last Name', key: 'lastName', dataIndex: 'lastName', },
        { title: 'Status', key: 'status', dataIndex: 'status', },
        {
          title: 'Action', render: (record, records) => {
            return (
              <Row>
                <Space size={10}>
                  <Col span={12}>
                    {role === Admin && <DeleteChild records={records} />}
                  </Col>
                  <Col span={12}>
                    <UpdatePopupChild records={records} />
                  </Col>
                </Space>
              </Row>)
          }
        }
      ];

      return columns;
}


