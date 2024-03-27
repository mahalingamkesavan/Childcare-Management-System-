import { Base_url, login, Register_Employee, Register_admin, Register_user, ResertPassword, GetUserProfile } from "../Variables/APIEndPoints";
import MainAxios from "../redux/CommonAxios";
import HTTP_METHOD from "../Variables/HTTPmethods";
import { FetchTokenRequest, fetchTokenSuccess, fetchTokenFailed } from "../redux/Login/Login.Action";
import StorageKey from "../Variables/LocalStorageKey";
import { SuccessMessage, ErrorMessage } from "../Features/SuccessMessageToast";
import { Usercreatedsuccessfully,NetworkError } from "../Variables/ConstantVariable";

export const LoginData = async (data) => {

    const url = `${Base_url}${login}`;

    await MainAxios(url, HTTP_METHOD.Post, data)

        .then(res => {

            localStorage.setItem(StorageKey.Token, res.token); localStorage.setItem(StorageKey.IsToken, true);
            localStorage.setItem(StorageKey.Username, res.username);
        })
        .catch(res => { 
            
            if(res.message ===NetworkError)  ErrorMessage(res.message)
            
            else  ErrorMessage(res.response.data.message);
            
            })
}

export async function CreateNewUser(data) {

    const url = `${Base_url}${Register_Employee}`; var response;

    await MainAxios(url, HTTP_METHOD.Post, data)

        .then(res => {

            if (res.message === Usercreatedsuccessfully) { SuccessMessage(res.message); response = res.message; }
        })

        .catch((error) => { ErrorMessage(error.response.data.message); response = error.response.data.message });

    return response;
}

export const CreateAdmin = async (data) => {

    const url = `${Base_url}${Register_admin}`;

    await MainAxios(url, HTTP_METHOD.Post, data)

        .then(res => SuccessMessage(res.message))

        .catch((error) => { ErrorMessage(error.response.data.message); })
}

export const CreateParent = async (data) => {

    const url = `${Base_url}${Register_user}`;

    await MainAxios(url, HTTP_METHOD.Post, data)

        .then(res => SuccessMessage(res.message))

        .catch((error) => { ErrorMessage(error.response.data.message); })
}

export const ResetPassword = async (data) => {

    const url = `${Base_url}${ResertPassword}`;

    await MainAxios(url, HTTP_METHOD.Put, data)

        .then((res) => SuccessMessage(res.message))

        .catch((error) => ErrorMessage(error.response.data.message));
}

export const UserProfile = async (disPatch) => {

    const url = `${Base_url}${GetUserProfile}`;

    disPatch(FetchTokenRequest()); var profiledata;

    await MainAxios(url, HTTP_METHOD.Get, "")

        .then(res => { disPatch(fetchTokenSuccess(res)); profiledata = res; })

        .catch(res => { disPatch(fetchTokenFailed(res.response.data.message)); ErrorMessage(res.response.data.message); })

        return profiledata;
}

