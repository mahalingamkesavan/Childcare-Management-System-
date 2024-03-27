import React from 'react';
import { Row,Col,Menu } from 'antd';
import { Dateandtime } from './dateandtime';
import { AuthNavbars } from './Navbars';
import { Link } from 'react-router-dom';

export const Header_userandCustomer = () => {
  
    return (
        <Row >
        
         <Col span={9}>
             <Dateandtime/>
         </Col>  
        
         <Col span={8}>
           <b style={{color:"white"}}>Welcome To Child Care Management</b> 
         </Col> 
         
         <Col span={7}>
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
