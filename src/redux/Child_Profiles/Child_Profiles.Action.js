import {FETCH_CHILDPROFILE_SUCCESS,FETCH_CHILDPROFILE_FAILED,FETCH_CHILDPROFILE_REQUEST} from "./Child_Profiles.Type";

export const fetchchildprofilerequest =() =>{
    return {
        type :FETCH_CHILDPROFILE_REQUEST,
        payload :null,
    };
};

export const fetchchildprofileSuccess =(data)=>{
    return {
        type :FETCH_CHILDPROFILE_SUCCESS,
        payload:data,
    };
};
    

export const fetchchildprofileFailed =(error) =>{
    return {
    type:FETCH_CHILDPROFILE_FAILED,
    payload:error,
   };
};