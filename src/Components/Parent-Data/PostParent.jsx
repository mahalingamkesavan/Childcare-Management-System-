import "./Parent.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StorageKey from "../../Variables/LocalStorageKey";
import { useSelector } from "react-redux";
import { RegisterParent } from "../../APIService/ParentServicess";
import ParentregistrationForm from "./ParentRegisterForm/ParentregistrationForm";
import { GetChildList } from "../../APIService/Childservices";
import {Table } from "antd";
import { Childlistculumns } from "../Child-Data/ChildListCulumn";
import UpdateParentModal from "./UpdatePopupParent";
import { UpdateParentservice } from "../../APIService/ParentServicess";
import { Card } from "antd";

const { Meta } = Card;

function InsertParent() {

    const disPatch = useDispatch();
    const parentprofie = useSelector((store) => store?.ParentProfile?.data);
    const [data, setData] = useState({});
    const [child, setSelectedItems] = useState();
    const nav = useNavigate();
    const column = Childlistculumns();

    async function Submit(e) {
       
        e.preventDefault();
        if (parentprofie) {
          await UpdateParentservice(data,true);
             console.log("check for upDATE");
         } else {

                  data.loginname = localStorage.getItem(StorageKey.Username);

                   var responce = await RegisterParent(data);

                if (responce === "registration_successfull")
                  setTimeout(() => {
                    nav("/PostChild");
                  }, 4000);
                }
    }

        function handle(e) {
          const newdata = { ...data };
          newdata[e.target.id] = e.target.value;
          setData(newdata);
        }

      useEffect(() => {
        if (localStorage.getItem("Parent Id") !== null)
          GetChildList(disPatch, localStorage.getItem("Parent Id")).then((res) => {
            setSelectedItems(res);
          });
      }, []);

  return (
    <>
      {parentprofie !== null && (
        <div>
          <div style={{ paddingLeft: "15pc" }}>
            <Card
              style={{
                width: "400px",
                height: "240px",
                paddingLeft: "40px",
                marginBottom: "40px",
                backgroundColor: "lightblue",
                marginRight: "5px",
              }}
            >
              <Meta
                title={
                  <div style={{ color: "black" }}>
                    {parentprofie?.firstName + " " + parentprofie?.lastName}{" "}
                  </div>
                }
                description={
                  <div>
                    <div style={{ color: "black" }}>
                      User Email : {parentprofie?.email}
                    </div>
                    <div style={{ color: "black" }}>
                      Phone Number :{parentprofie?.phoneNumber}{" "}
                    </div>
                    <div style={{ color: "black" }}>
                      Address :{parentprofie?.address}{" "}
                    </div>
                    <div style={{ color: "black" }}>
                      Pincode:{parentprofie?.city}{" "}
                    </div>
                    <div style={{ color: "black" }}>
                      State :{parentprofie?.state}{" "}
                    </div>
                    <div style={{ paddingLeft: "5pc", paddingTop: "13px" }}>
                      
                      <UpdateParentModal records={parentprofie}/>
                    
                    </div>
                  </div>
                }
              />
            </Card>
          </div>
          <div style={{ width: 900, marginLeft: 10 }}>
            <h1 style={{ textAlign: "left", paddingLeft: 10 }}>Chil Details</h1>
            <Table
              style={{ overflowX: "hidden" }}
              rowKey={(record) => record.id}
              columns={column}
              dataSource={child}
            />
          </div>
        </div>
      )}
      
      {parentprofie ===null && (
        <ParentregistrationForm
          data={data}
          onChange={handle}
          onSubmit={(e) => Submit(e)}
        />
      )}
    </>
  );
}

export default InsertParent;