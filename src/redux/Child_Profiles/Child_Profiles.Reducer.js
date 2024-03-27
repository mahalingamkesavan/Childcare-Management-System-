import {FETCH_CHILDPROFILE_SUCCESS,FETCH_CHILDPROFILE_FAILED,FETCH_CHILDPROFILE_REQUEST} from "./Child_Profiles.Type";

const initialState ={
    loading :false,
    data :null,
    selectedData :null,
    Message :null,
};

export const ChildProfileReducer=(state =initialState,action) => {
    
    switch (action.type) {
        case FETCH_CHILDPROFILE_REQUEST: {
            return{
                ...state,
                loading:true,
                Message :null,
                selectedData:null,
            };
        }

        case FETCH_CHILDPROFILE_SUCCESS : {
            return {
                ...state,
                data:action.payload,
                loading :false,
            };
        }
        case FETCH_CHILDPROFILE_FAILED : {
            return {
                data:null,
                Message:action.payload,
                loading:false,
            }
        }
    
        default:
            return state;
    }
}