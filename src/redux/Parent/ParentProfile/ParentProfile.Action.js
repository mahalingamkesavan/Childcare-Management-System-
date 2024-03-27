import {
    FETCH_PARENT_PROFILE_FAILED,
    FETCH_PARENT_PROFILE_SUCCESS,
    FETCH_PARENT_PROFILE_REQUEST
} from "./ParentProfile.Type";

 export const fetchParentProfileRequest = () => {
            return {
                type: FETCH_PARENT_PROFILE_REQUEST,
                payload: null,
            };
 };

export const fetchParentProfileSuccess = (data) => {
            return {
                type: FETCH_PARENT_PROFILE_SUCCESS,
                payload: data,
            };
};

 export const fetchParentProfileFailed = (error) => {
            return {
                type: FETCH_PARENT_PROFILE_FAILED,
                payload: error,
            };
 };