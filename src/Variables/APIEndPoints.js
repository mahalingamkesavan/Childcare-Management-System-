
const Base_url = `https://cms-gateway.azurewebsites.net/gateway`;

// Auth Api end points

const login = "/Account/login";
const Register_Employee = "/Account/Register-Employee";
const Register_admin = "/Account/register-admin";
const Register_user = "/Account/Register-user";
const ResertPassword = "/Account/ResertPassword";
const GetUserProfile = "/Account/GetUserProfile?token";

// Parent Api end points

const DeleteParentById = `/Parent/DeleteParentById?id=`;
const RegistrationParent = `/Parent/RegistrationParent`;
const GetParentListrequest = `/Parent/GetParentList?request=`;
const GetParentProfileUserName = `/Parent/ParentProfile?LoginUserName=`;
const UpdateParentById = `/Parent/UpdateParentById`;

// Child Api end points

const DeleteChildById = `/Child/DeleteChildById?id=`;
const GetChildListrequest = `/Child/GetChildList?requestItem=`;
const RegistrationChild = `/Child/RegistrationChild`;
const UpdateChildById = "/Child/UpdateChildById";

// Enrollment Api end points

const GetChildProfileandParent = `/Enrollment/GetChildProfileandParent?request=`;
const RegistrationEnrollment = `/Enrollment/RegistrationEnrollment`;
const DeleteEnrollmentById = `/Enrollment/DeleteEnrollmentById?id=`;
const AdmissionApprovallList = "/Enrollment/AdmissionApprovallList";
const GetEnrollmentList = `/Enrollment/GetEnrollmentList?request=`;
const AdmissionRejectedList = `/Enrollment/AdmissionRejectedList`;
const GetActiveChildList = `/Enrollment/GetActiveChild`;
const GetActiveChildTotalCount = `/Enrollment/GetActiveChildCount`;
const AdmissionApprovalpending = `/Enrollment/AdmissionApprovalpending`;
const UpdateEnrollment_Admin = `/Enrollment/EnrollmentApproval_Admin`;
const UpdateEnrollmentById = `/Enrollment/UpdateEnrollmentById`;

const FileUploadAPILink = `https://localhost:7232/Files`;
const ParentChildUrl = `https://localhost:7232/ParentChilld/GetParentChildRelationship?id=`;

const SlotListLink = `/Slot/GetslotList`;
const createslotLink = `/Slot/Create-Slat`;

const classlistLink = `/Class/GetClassList`;
const createclassLink = `/Class/Create-Class`;


export {
    Base_url, login, Register_Employee, Register_admin, Register_user, ResertPassword, GetUserProfile,
    FileUploadAPILink, DeleteParentById, RegistrationParent, GetParentListrequest, GetParentProfileUserName,
    DeleteChildById, GetChildListrequest, RegistrationChild, UpdateChildById, UpdateParentById,
    GetChildProfileandParent, DeleteEnrollmentById, AdmissionApprovallList, RegistrationEnrollment, UpdateEnrollmentById
    ,GetEnrollmentList, AdmissionRejectedList, GetActiveChildList, GetActiveChildTotalCount, AdmissionApprovalpending, 
    UpdateEnrollment_Admin,ParentChildUrl, SlotListLink, createslotLink, classlistLink, createclassLink
}
