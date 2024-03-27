import{FETCH_TOKEN_REQUEST,FETCH_TOKEN_SUCCESS,FETCH_TOKEN_FAILED} from "./Login.Type"

export const FetchTokenRequest =() =>{
    return {
        type :FETCH_TOKEN_REQUEST,
        payload :null,
    };
};

export const fetchTokenSuccess =(data)=>{
    return {
        type :FETCH_TOKEN_SUCCESS,
        payload:data,
    };
};

export const fetchTokenFailed =(error) =>{
    return {
    type:FETCH_TOKEN_FAILED,
    payload:error,
   };
};

