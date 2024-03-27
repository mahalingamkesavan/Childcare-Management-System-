import React from 'react';
import { Row,Col,Menu } from 'antd';
import { Dateandtime } from './dateandtime';
import { AuthNavbars } from './Navbars';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined,BellOutlined } from "@ant-design/icons";

export const Header_admin = () => {
  
    
    return (
     <Row >
         <Col span={7}>
             <Dateandtime/>
         </Col>  
       
         <Col span={4}>
             <Link style={{ color: "white" }} to="/GetenrollmentApproval">
               <BellOutlined /> Request Approval Pending
             </Link>
         </Col>

         <Col span={5}>
         <Link style={{ color: "white" }} to="/ChildProfile">
                            <CheckCircleOutlined /> Active Child Profile's
         </Link>
         </Col> 
       
         <Col>
                  <Menu
                       theme="dark"
                       mode="horizontal"
                       style={{height:"10px"}}
                       items={AuthNavbars.map((item, index) => ({
                         key: index,
                         icon: item.icon,
                         label:<b><Link to={item.key}>{item.label}</Link></b> ,
                         children: item.children,
                       }))}
                     />
         </Col>
     </Row>
  )
}
