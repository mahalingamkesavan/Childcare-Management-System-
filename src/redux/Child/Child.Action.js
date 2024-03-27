import { FETCH_CHILD_REQUEST, FETCH_CHILD_SUCCESS, FETCH_CHILD_FAILED } from "./Child.Type"

export const FetchChildRequest = () => {
    return {
        type: FETCH_CHILD_REQUEST,
        payload: null,
    };
};

export const fetchChildSuccess = (data) => {
    return {
        type: FETCH_CHILD_SUCCESS,
        payload: data,
    };
};

export const fetchchildFailed = (error) => {
    return {
        type: FETCH_CHILD_FAILED,
        payload: error,
    };
};

