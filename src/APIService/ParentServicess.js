import { RegistrationSuccessfull, InternalServerError,User,UpdatedSuccessfull } from "../Variables/ConstantVariable";
import {
    Base_url,
    RegistrationParent,
    GetParentListrequest,
    UpdateParentById,
    GetParentProfileUserName,
} from "../Variables/APIEndPoints";
import MainAxios from "../redux/CommonAxios";
import HTTP_METHOD from "../Variables/HTTPmethods";
import {
    FetchParentRequest,
    fetchParentSuccess,
    fetchParentFailed,
} from "../redux/Parent/ParentList/Parent.Action";
import {
    fetchParentProfileFailed,
    fetchParentProfileSuccess,
    fetchParentProfileRequest
} from "../redux/Parent/ParentProfile/ParentProfile.Action";
import { SuccessMessage, ErrorMessage } from "../Features/SuccessMessageToast";
import StorageKey from "../Variables/LocalStorageKey";

var response = "";

export const RegisterParent = async (data) => {

    const url = `${Base_url}${RegistrationParent}`;

    await MainAxios(url, HTTP_METHOD.Post, data)

        .then(res => {
            if (res.results.message === RegistrationSuccessfull) {
                SuccessMessage(res.results.message)
                localStorage.setItem(StorageKey.ParentId, res.id); response = res.results.message;

            }
            else { ErrorMessage(res.results.message); response = res.results.message; }

        }).catch((error) => {

            if (error.response.data.Message === InternalServerError) { ErrorMessage(error.response.data.message); }

            else { PrintvalidationError(error.response.data.errors); }
        })
    return response;
}

export const UpdateParentservice =async (data,handleCancel) =>{

    console.log(data);

    const url = `${Base_url}${UpdateParentById}`;

    await MainAxios(url, HTTP_METHOD.Put, data)
            
    .then(res => {

             if (res.results.message ===UpdatedSuccessfull) { SuccessMessage(res.results.message); window.location.reload();  }

             else { ErrorMessage(res.results.message); }

             handleCancel()
         })
         .catch(error => {

             if (error.response.data.Message === null) { ErrorMessage(error.response.data.Message); }

             else { PrintvalidationError(error.response.data.errors); }
         })
    
}

const PrintvalidationError = (obj) => {
    for (var key in obj) {
        for (let i = 0; i < obj[key].length; i++) {
            ErrorMessage(obj[key][i])
        }
    }

}

export async function GetParentList(disPatch, value) {

    var parentData = []; disPatch(FetchParentRequest());

    const url = `${Base_url}${GetParentListrequest}${value || null}`;

    await MainAxios(url, HTTP_METHOD.Get, "")

        .then(res => { parentData = res?.parent; disPatch(fetchParentSuccess(res?.parent)); })

        .catch((error) => { disPatch(fetchParentFailed(error.response.data)); ErrorMessage(InternalServerError); })

    return parentData;
}

export async function GetParentProfile(disPatch, data) {

    var parent = {}; var UserName;

    if (data?.role === User) UserName = data?.username;

    disPatch(fetchParentProfileRequest());

     const url = `${Base_url}${GetParentProfileUserName}${UserName}`;

    await MainAxios(url, HTTP_METHOD.Get, "")

        .then(res => {
            parent = res?.parent;
            disPatch(fetchParentProfileSuccess(res?.parent));

            if (res?.parent != null) { localStorage.setItem(StorageKey.ParentId, res?.parent.id); }
        })
        .catch((error) => { disPatch(fetchParentProfileFailed(error.response.data)); })

    return parent;

}
