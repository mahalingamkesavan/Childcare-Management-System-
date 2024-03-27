import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Col, Layout, Menu, Row, theme } from "antd";
import { Link } from "react-router-dom";
import { GetParentList } from "../APIService/ParentServicess";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetParentProfile } from "../APIService/ParentServicess";
import { useSelector } from "react-redux";
import {UserProfile} from "../APIService/Authservicess";
import { Admin,User,Customer } from "../Variables/ConstantVariable";
import { Header_admin } from "../Features/header_admin";
import { Header_userandCustomer } from "../Features/Header_userandCustomer";
import { AllNavbars} from "../Features/Navbars";
const { Header, Content, Sider } = Layout;


const SideBar = ({ children }) => {
  
          var items = []; const nav=useNavigate(); var disPatch=useDispatch();

          var [date,setdate]=useState(new Date()); 

          var userdata; useEffect(()=>{ 
            if(data===null)  
            userdata=(UserProfile(disPatch));GetParentList(disPatch) 
          },[userdata]);

          const data=useSelector((store) =>store?.Token?.data) ; const role=data?.role.toString();

          useEffect(() => { 
            if(data !=undefined)  
            GetParentProfile(disPatch,data);
          },[data]);
          
          if (role === User) {
            items = [
              AllNavbars[0],
              AllNavbars[6], 
              AllNavbars[1],
              AllNavbars[7],
            ];
          }

          if (role === Customer) {
            items = [
              AllNavbars[0],
              AllNavbars[5]["children"][0],
              AllNavbars[1],
              AllNavbars[6],
              AllNavbars[4],
              AllNavbars[7],
            ];
          }

          if (role === Admin) {
            items = [
              AllNavbars[0],
              AllNavbars[5],
              AllNavbars[1],
              AllNavbars[2],
              AllNavbars[4],
              AllNavbars[6],
              AllNavbars[7],

            ];
          }

          const { token: { colorBgContainer }} = theme.useToken();

          useEffect(()=>{  { setTimeout(() => { nav("/logOut") }, 10800000) }  })
           
          useEffect(()=>{
            var timer=setInterval(()=>setdate(new Date()),1000);
            return function cleanup() {clearInterval(timer) };
          },)

        
          return (
            <Layout>
                 <Sider breakpoint="lg" collapsedWidth="0">
                <div>
                  <Row className="logo">
                    <Col span={6} style={{ paddingLeft: "10px" }}>
                      <UserOutlined />
                    </Col>
                    <Col span={18} style={{ paddingLeft: "10px" }}>
                      {data?.username}
                    </Col>
                  </Row>
                </div>
                <Menu
                style={{marginTop:40}}
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={["8"]}
                  items={items.map((item, index) => ({
                    key: index,
                    icon: item.icon,
                    label: <Link to={item.key}>{item.label}</Link>,
                    children: item.children,
                  }))}
                />
                 </Sider>
                 <Layout>
                      <Header style={{height:60}}>
                 
                          { (role === User || role === Customer ) &&(<Header_userandCustomer/>) }
                         
                          { role=== Admin && (<Header_admin/>) }
                      </Header>
                      <Content
                           style={{
                             margin: "10px 12px 10px",
                             overflowY: "auto",
                             overflowX: "auto",
                             minHeight: 350,
                           }}
                      >
                         <main style={{ padding: 24, background: colorBgContainer }} > 
                           {children}
                         </main>
                      </Content>
                 </Layout>
            </Layout>
          );
};

export default SideBar;


    

   
