import{FETCH_ENROLLMENT_REQUEST,FETCH_ENROLLMENT_SUCCESS,FETCH_ENROLLMENT_FAILED} from "./Enrollment.Type"

export const FetchEnrollmentRequest =() =>{
    return {
        type :FETCH_ENROLLMENT_REQUEST,
        payload :null,
    };
};

export const fetchEnrollmentSuccess =(data)=>{
    return {
        type :FETCH_ENROLLMENT_SUCCESS,
        payload:data,
    };
};
    

export const fetchEnrollmentFailed =(error) =>{
    return {
    type:FETCH_ENROLLMENT_FAILED,
    payload:error,
   };
};
