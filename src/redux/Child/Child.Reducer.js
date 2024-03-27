import { FETCH_CHILD_REQUEST, FETCH_CHILD_FAILED, FETCH_CHILD_SUCCESS } from "./Child.Type"

const initialState ={
    loading :false,
    data :null,
    selectedData :null,
    Message :null,
};

export const ChildReducer =( state =initialState,action) =>
{
    switch (action.type) {
        case FETCH_CHILD_REQUEST:{
            return{
                ...state,
                loading:true,
                Message :null,
                selectedData:null,
            };
        }
         case FETCH_CHILD_SUCCESS :{
            return {
                ...state,
                data:action.payload,
                loading :false,
            };
           
         }   
         case FETCH_CHILD_FAILED :{
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