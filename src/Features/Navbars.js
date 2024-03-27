import { Link } from "react-router-dom";
import {
    HomeOutlined,
    UserOutlined,
    DashboardOutlined,
    UnorderedListOutlined,
    PoweroffOutlined,
    FormOutlined,
    UserAddOutlined,
    UsergroupAddOutlined,
    CheckCircleOutlined,
    CloseSquareOutlined,
    EditFilled, 
  } from "@ant-design/icons";

export const AllNavbars = [
           
    { label: <h5>Home</h5>, key: "/home", icon: <HomeOutlined /> }, //0

          {
            label: <h5>Registration</h5>,
            icon: <DashboardOutlined />,
            children: [
              {
                label: <Link to={"/PostParent"}>Parent Registration</Link>,
                icon: <FormOutlined />,
                subkey: 11,
              },
              {
                label: <Link to={"/PostChild"}>Child Registration</Link>,
                icon: <FormOutlined />,
                subkey: 12,
              },
              {
                label: <Link to={"/PostEnrollment"}>Enrollment Registration</Link>,
                icon: <FormOutlined />,
                subkey: 13,
              },
              // {
              //   label: <Link to={"/FileUpload"}>Upload Image</Link>,
              //   icon: <UploadOutlined />,
              //   subkey: 14,
              // },
            ],
          },  //1

          {
            label: <h5>Enrollment Details</h5>,
            icon: <UnorderedListOutlined />,
            children: [
              {
                label: <Link to={"/ActiveChild"}>Child's Profile</Link>,
                key: "/ActiveChild",
                icon: <UsergroupAddOutlined />,
              },
              {
                label: <Link to={"/ApprovalList"}>Approval Data</Link>,
                key: "/ApprovalList",
                icon: <CheckCircleOutlined />,
              },
              {
                label: <Link to={"/RejectedList"}>Rejected data</Link>,
                key: "/RejectedList",
                icon: <CloseSquareOutlined />,
              },
            ],
          },  //2

          {
            label: <h5>Child's Profile</h5>,
            key: "/ChildProfile",
            icon: <UsergroupAddOutlined />,
          },  //3

          {
            label: <h5>Users List</h5>,
            icon: <UnorderedListOutlined />,
            children: [
              {
                label: <Link to={"/GetParentlist"}>Parent List</Link>,
                key: "/GetParentlist",
                icon: <UnorderedListOutlined />,
              },
              {
                label: <Link to={"/GetChilList"}>Child List</Link>,
                key: "/GetChilList",
                icon: <UnorderedListOutlined />,
              },
              {
                label: <Link to={"/GetEnrollmentList"}>Enrollment List</Link>,
                key: "/GetEnrollmentList",
                icon: <UnorderedListOutlined />,
              },
            ],
          },  //4

          {
            label: <h5>Create Login Profile's</h5>,
            key: "",
            icon: <UserAddOutlined />,
            children: [
              {
                label: (
                  <h5>
                    <Link to={"/CreateParentSignUpInAdmin"}>
                      <UserAddOutlined /> Create Parent Login
                    </Link>
                  </h5>
                ),
              },
              {
                label: (
                  <h5>
                    <Link to="/SignUp">
                      <UserAddOutlined /> Create Employee
                    </Link>
                  </h5>
                ),
              },
              {
                label: (
                  <h5>
                    <Link to="/AdminSignUp">
                      {" "}
                      <UserAddOutlined /> Create Admin
                    </Link>
                    Create Admin
                  </h5>
                ),
              },
            ],
          },  //5

          { label: <h5>Active Child</h5>, key: "/ChildProfile", icon: <UsergroupAddOutlined /> }, //6

          { label: <h5>Change Password</h5>, key: "/PasswordReset", icon: <EditFilled /> }, //7
        ];
 
export   const AuthNavbars=[
  { label: <Link to="/profile">Profile </Link>, key: "/profile", icon: <UserOutlined /> },
    
  { label: <Link to="/logOut">SignOut </Link>, key: "/logOut", icon: <PoweroffOutlined /> },
                ];