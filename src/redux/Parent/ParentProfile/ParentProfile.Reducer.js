import {
    FETCH_PARENT_PROFILE_REQUEST,
    FETCH_PARENT_PROFILE_SUCCESS,
    FETCH_PARENT_PROFILE_FAILED,
} from "./ParentProfile.Type";

const initialState = {
    loading: false,
    data: null,
    selectedData: null,
    Message: null,
};

export const ParentProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_PARENT_PROFILE_REQUEST: {
            return {
                ...state,
                loading: true,
                Message: null,
                selectedData: null
            };
        }
        case FETCH_PARENT_PROFILE_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        }
        case FETCH_PARENT_PROFILE_FAILED: {
            return {
                ...state,
                data: null,
                Message: action.payload,
                loading: false,
            };
        }
        default:return state;
            
    }


}