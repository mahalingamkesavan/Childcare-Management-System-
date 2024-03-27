import { FETCH_ENROLLMENT_REQUEST, FETCH_ENROLLMENT_FAILED, FETCH_ENROLLMENT_SUCCESS } from "./Enrollment.Type";

const initialState ={
    loading :false,
    data :null,
    selectedData :null,
    Message :null,
};

export const EnrollmentReducer =( state =initialState,action) =>{
    switch (action.type) {
        case FETCH_ENROLLMENT_REQUEST:{
            return{
                ...state,
                loading:true,
                Message :null,
                selectedData:null,
            };
        }
         case FETCH_ENROLLMENT_SUCCESS :{
            return {
                ...state,
                data:action.payload,
                loading :false,
            };
           
         }   
         case FETCH_ENROLLMENT_FAILED :{
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