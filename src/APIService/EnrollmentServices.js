import {GetEnrollmentList } from "../Variables/APIEndPoints";
import { Base_url } from "../Variables/APIEndPoints";
import MainAxios from "../redux/CommonAxios";
import HTTP_METHOD from "../Variables/HTTPmethods";
import {FetchEnrollmentRequest,fetchEnrollmentSuccess,fetchEnrollmentFailed} from "../redux/Enrollment/Enrollment.Action";
import {  ErrorMessage } from "../Features/SuccessMessageToast"; // SuccessMessage
 
export const GetEnrollment = async (disPatch,request) => {

    const url = `${Base_url}${GetEnrollmentList}${request}`; var EnrollmentData = [];

    disPatch(FetchEnrollmentRequest());

    await MainAxios(url, HTTP_METHOD.Get, "")

        .then(res => { disPatch(fetchEnrollmentSuccess(res?.entrollmentslist)); EnrollmentData = res?.entrollmentslist })

        .catch((error) => { disPatch(fetchEnrollmentFailed(error.response.data.Message)); ErrorMessage(error.response.data.Message); })

    return EnrollmentData;
} 
