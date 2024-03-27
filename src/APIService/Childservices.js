import {GetChildListrequest } from "../Variables/APIEndPoints";
import { Base_url } from "../Variables/APIEndPoints";
import MainAxios from "../redux/CommonAxios";
import HTTP_METHOD from "../Variables/HTTPmethods";
import { FetchChildRequest, fetchChildSuccess, fetchchildFailed } from "../redux/Child/Child.Action";
import { ErrorMessage } from "../Features/SuccessMessageToast"; // SuccessMessage

export const GetChildList = async (disPatch, request) => {

    const url = `${Base_url}${GetChildListrequest}${request||null}`; var ChildData = [];

    disPatch(FetchChildRequest());

    await MainAxios(url, HTTP_METHOD.Get, "")

        .then(res => { disPatch(fetchChildSuccess(res?.childList)); ChildData = res?.childList })

        .catch((error) => { disPatch(fetchchildFailed(error)); ErrorMessage("Internal Server Error"); })

    return ChildData;
} 


