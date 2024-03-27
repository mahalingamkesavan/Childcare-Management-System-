import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import { Base_url } from "../../Variables/APIEndPoints";
import { UpdateEnrollment_Admin } from "../../Variables/APIEndPoints";
import StorageKey from "../../Variables/LocalStorageKey";
import { UpdatedSuccessfull,InternalServerError } from "../../Variables/ConstantVariable";
import { SuccessMessage, ErrorMessage } from "../../Features/SuccessMessageToast";

export default async function EnrollmentApproval(records, status) {

    const url = `${Base_url}${UpdateEnrollment_Admin}`;

    console.log(url);
    
    const data = records;const Username=localStorage.getItem(StorageKey.Username);

    await MainAxios(url, HTTP_METHOD.Put, { ...data, CreateBy: Username, Admission_Approveby: Username, AdmissionStatus: status })
     
    .then((res) => {
           
            if (res.results.message === UpdatedSuccessfull) {
                SuccessMessage(res.results.message);
                window.location.reload();
            } else {
                 window.location.reload();
                ErrorMessage(res.results.message);
            }

        }).catch(error => {
            if (error.response.data.message === InternalServerError) {
                ErrorMessage(error.response.data.message);
            }
            else { PrintvalidationError(error.response.data.errors); }
        })

        const PrintvalidationError = (obj) => {
            for (var key in obj) {
                for (let i = 0; i < obj[key].length; i++) {
                    ErrorMessage(obj[key][i])
                }
            }
        
        }
}