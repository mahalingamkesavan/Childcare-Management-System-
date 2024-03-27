import { useEffect, useState } from "react";
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import {GetChildProfileandParent} from "../../Variables/APIEndPoints";
import { Base_url } from "../../Variables/APIEndPoints";
import { Pagination,Card,Input } from 'antd';
import * as React from "react";
import { useDispatch } from "react-redux";
import GetActiveChildCount from "./GetActiveChildCount";
import { fetchchildprofileFailed,fetchchildprofileSuccess,fetchchildprofilerequest } from "../../redux/Child_Profiles/Child_Profiles.Action";
const { Meta } = Card;


export const GetChildProfile = () => {
  
    var count = GetActiveChildCount();  const disPatch = useDispatch();

    const [data, setdata] = useState([]);  const [search, setSearch] = useState(null);
 
    const [pagenation,setpagination]=useState({currentvalue:1,pageSizevalue:20});
    
    function onShowSizeChange(current, pageSize) {
        setpagination({currentvalue:current,pageSizevalue:pageSize})
      }

         useEffect( () => {
           
            disPatch(fetchchildprofilerequest());
           
            if (search?.trim() === "")  setSearch(null); var url = `${Base_url}${GetChildProfileandParent}${search}&page=${pagenation.currentvalue}&ItemsPerPage=${pagenation.pageSizevalue}`;
           
             MainAxios(url, HTTP_METHOD.Get, "")

             .then((res) =>{
                 setdata(res?.childProfiles);
                 disPatch(fetchchildprofileSuccess(res?.childProfiles));
                })
             
             .catch((error) => {
                console.log(error?.response?.data?.Message)
                disPatch(fetchchildprofileFailed(error?.response?.data))
            });
         }, [search,pagenation]);

  return (
    <div>
            <div style={{ padding: 10, alignItems: "center", textAlign: "center" }}>
                    <Input
                    style={{ width: "290px",backgroundColor:"GrayText",color:"black"  }}
                    placeholder="Search Child"
                    onChange={(e) => {
                        var value = e.target.value;
                        setSearch(value.replace(/\s+/g,null));
                    }}
                    />
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    {data.map((child) =>  { 
                    return (
                        <>
                        <Card
                        key={child.childId}
                        style={{
                            width: "320px",
                            height: "250px",
                            display: "flex",
                            flexDirection: "column",
                            color: "white",
                            marginBottom: "40px",
                            backgroundColor: "black",
                            marginRight: "5px",
                        }}
                        >
                        <Meta
                            title={
                            <div style={{ color: "white" }}>
                                {child.childFirstName + " " + child.childLastName}
                            </div>
                            }
                            description={
                            <div>
                                <div style={{ color: "white" }}>
                                Child Id : {"\t\t" + child.childId}{" "}
                                </div>
                                <div style={{ color: "white" }}>
                                Date of Birth : {"\t" + child.dob.split("T")[0]}{" "}
                                </div>
                                <div style={{ color: "white" }}>
                                Gender : {"\t" + child.gender}
                                </div>
                                <div style={{ color: "white" }}>
                                Parent Name :
                                {"\t" +
                                    child.parentFirstName +
                                    " " +
                                    child.parentLastName}
                                </div>
                                <div style={{ color: "white" }}>
                                Email : {"\t" + child.email}
                                </div>
                                <div style={{ color: "white" }}>
                                Phone NUmber :{"\t" + child.phoneNumber}
                                </div>
                                <div style={{ color: "white" }}>
                                Class Starting Date :
                                {"\t" + child.classStartingDate.split("T")[0]}
                                </div>
                                <div style={{ color: "white" }}>
                                Class Ending Date :
                                {"\t" + child.classEndingDate.split("T")[0]}
                                </div>
                            </div>
                            }
                        />
                        </Card>
                      
                        </>
                    );
                    })}
            </div>
               <div>
                    <Pagination
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={3}
                    total={count}
                    />
                </div>
    </div>
  );
};
