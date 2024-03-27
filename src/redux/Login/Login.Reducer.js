import { FETCH_TOKEN_REQUEST, FETCH_TOKEN_FAILED, FETCH_TOKEN_SUCCESS } from "./Login.Type";

const initialState ={
    loading :false,
    data :null,
    selectedData :null,
    Message :null,
};

export const TokenReducer =( state =initialState,action) =>{

    switch (action.type) {
        case FETCH_TOKEN_REQUEST:{
            return{
                ...state,
                loading:true,
                Message :null,
                selectedData:null,
            };
        }
         case FETCH_TOKEN_SUCCESS :{
            return {
                ...state,
                data:action.payload,
                loading :false,
            };
           
         }   
         case FETCH_TOKEN_FAILED :{
            return {
                ...state,
                data:null,
                Message:action.payload,
                loading:false,
            };
         }
           
        default:
            return state;
    }
}