import { toast } from "react-toastify";

export const SuccessMessage = (e) => { toast.success(e) };

export const ErrorMessage = (e) => { toast.error(e) };
