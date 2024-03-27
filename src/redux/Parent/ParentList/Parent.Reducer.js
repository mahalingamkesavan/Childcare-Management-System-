import {
    FETCH_PARENT_REQUEST,
    FETCH_PARENT_SUCCESS,
    FETCH_PARENT_FAILED,
} from "./Parent.Type";

const initialStateList = {
    loading: false,
    data: null,
    selectedData: null,
    Message: null,
};

export const ParentReducer = (state = initialStateList, action) => {
    
    switch (action.type) {

        case FETCH_PARENT_REQUEST: {
            return {
                ...state,
                loading: true,
                Message: null,
                selectedData: null,
            };
        }
        case FETCH_PARENT_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
            };

        }
        case FETCH_PARENT_FAILED: {
            return {
                ...state,
                data: null,
                Message: action.payload,
                loading: false,
            };
        }
        default: return state;
           
    }
}



