import {
    FETCH_PARENT_REQUEST,
    FETCH_PARENT_SUCCESS,
    FETCH_PARENT_FAILED,
} from "./Parent.Type";

export const FetchParentRequest = () => {
    return {
        type: FETCH_PARENT_REQUEST,
        payload: null,
    };
};

export const fetchParentSuccess = (data) => {
    return {
        type: FETCH_PARENT_SUCCESS,
        payload: data,
    };
};

export const fetchParentFailed = (error) => {
    return {
        type: FETCH_PARENT_FAILED,
        payload: error,
    };
};

