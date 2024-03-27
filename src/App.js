import SingIn from "./Components/Auth-Data/SignIn";
import ParentSignUp from "./Components/Auth-Data/Parent_SignUp";
import AdminSingUp from "./Components/Auth-Data//Admi_SignUp";
import SignUp from "./Components/Auth-Data//SignUp";
import LogOut from "./AuthService/Logout";
import PasswordReset from "./Components/Auth-Data/PasswordReset";

import InsertParent from './Components/Parent-Data/PostParent';
import GetParentById from './Components/Parent-Data/GetParentbyId'
import { ParentComponent } from "./Components/Parent-Data/GetParentList";

import { ChilComponent } from './Components/Child-Data/GetChildList'
import InsertChild from './Components/Child-Data/PostChild'
import GetChildById from './Components/Child-Data/GetChildById';

import GetParentChild from './Components/ParentChild-Data/ParentChild'
import InsertEnrollment from "./Components/Enrollment-Data/PostEnrollment"
import { GetEnrollmentList } from './Components/Enrollment-Data/EnrollmentList'
import { FileUpload } from "./Components/Enrollment-Data/FileUpload"
import GetEnrollmentApprovalList from "./Components/Enrollment-Data/GetEnrollmentApprovalPendingList";
import EnrollmentApprovalList from "./Components/Enrollment-Data/EnrollmentApprovalList"
import EnrollmentRejectedList from "./Components/Enrollment-Data/EnrollmentRejectedList"
import GetActiveChildCount from './Components/Enrollment-Data/GetActiveChildCount';
import GetActiveChild from './Components/Enrollment-Data/GetActiveChild';
import { GetChildProfile } from './Components/Enrollment-Data/ChildProfile';

import SideBar from "./Home/middlecomponent"
import { Route, Routes } from "react-router-dom";
import Homepage from './Home/Homepage';
import Profile from "./Home/profile"
import { Provider, useSelector } from "react-redux";
import { Store } from "./redux/Store";
import PrivateRout from "./AuthService/protectedRoutes";
import { Result, Spin } from "antd";


function App() {

  return (
    <Provider store={Store}>
      <Data/>
    </Provider>
  )
}

const Data = () =>{
  const useLoader = () => {
    var data = useSelector(state=>state);
      return data?.ParentList?.loading || data?.ParentProfile?.loading ||
      data?.ChildList?.loading || data?.EnrollmentList?.loading || data?.Token?.loading
      ||data?.ChildProfileList?.loading
  }
  return (
  <>
    <Spin size='large' spinning={useLoader()}>
      <Routes>
        <Route path={"/"} element={<SingIn />} />
        <Route path="/ParentSignUp" element={<ParentSignUp />} />

        <Route element={<PrivateRout/>}>
          <Route path="/CreateParentSignUpInAdmin" element={<SideBar><ParentSignUp /></SideBar>} />
          <Route path={"/SignUp"} element={<SideBar><SignUp /></SideBar>} />
          <Route path={"/AdminSignUp"} element={<SideBar><AdminSingUp /></SideBar>} />
          <Route path={"/PasswordReset"} element ={<SideBar><PasswordReset/></SideBar>} />
        
          <Route path={'/PostParent'} element={<SideBar><InsertParent /></SideBar>} />
          <Route path={"/GetParentlist"} element={<SideBar><ParentComponent /></SideBar>} />
          <Route path={'/GetParent'} element={<GetParentById />} />
          <Route path={'/ParentChild'} element={<GetParentChild />} />
          <Route path={"/GetParentChild/:Id"} element={<SideBar><GetParentChild /></SideBar>} />
          
          <Route path={'/PostChild'} element={<SideBar><InsertChild /></SideBar>} />
          <Route path={'/GetChild'} element={<GetChildById />} />
          <Route path={'/GetChilList'} element={<SideBar><ChilComponent /></SideBar>} />

          <Route path={'/PostEnrollment'} element={<SideBar><InsertEnrollment /></SideBar>} />
          <Route path={"/GetEnrollmentList"} element={<SideBar><GetEnrollmentList /></SideBar>} />
          <Route path={"/FileUpload"} element={<SideBar><FileUpload /></SideBar>} />
          <Route path={"/GetenrollmentApproval"} element={<SideBar><GetEnrollmentApprovalList /></SideBar>} />
          <Route path={"/ApprovalList"} element={<SideBar><EnrollmentApprovalList /></SideBar>} />
          <Route path={"/RejectedList"} element={<SideBar><EnrollmentRejectedList /></SideBar>} />
          <Route path={'/ActiveChildCount'} element={<GetActiveChildCount />} />
          <Route path={'/ActiveChild'} element={<SideBar><GetActiveChild /></SideBar>} />
          <Route path={'/ChildProfile'} element={<SideBar><GetChildProfile /></SideBar>} />

          <Route path={"/logOut"} element={<SideBar><LogOut /></SideBar>} />
          <Route path={"/home"} element={<SideBar><Homepage /></SideBar>} />
          <Route path={"/profile"} element={<SideBar><Profile /></SideBar>} />
          
          <Route path="*" element={<SideBar><Result status={404} title={'did not match any documents'} subTitle={'module not found'} /></SideBar>} />
        </Route>
      </Routes></Spin>
  </>
)};

export default App;














































