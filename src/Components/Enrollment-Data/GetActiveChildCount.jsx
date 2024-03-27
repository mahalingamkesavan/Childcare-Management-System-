import { useEffect, useState } from 'react'
import MainAxios from "../../redux/CommonAxios";
import HTTP_METHOD from "../../Variables/HTTPmethods";
import { Base_url } from '../../Variables/APIEndPoints';
import {GetActiveChildTotalCount} from "../../Variables/APIEndPoints";
import {ErrorMessage} from "../../Features/SuccessMessageToast"

function GetActiveChildCount() {

  const [childcount,setvalue]=useState(''); const url=`${Base_url}${GetActiveChildTotalCount}`;

  useEffect(() =>{ 
    
    const fetchDta= async () =>{
    
    await MainAxios(url,HTTP_METHOD.Get,"")
         
       .then(result =>setvalue(result)) 
    
       .catch(e =>{ErrorMessage(e.response.data.message)})
       
      }; fetchDta()  },[]);


   return childcount
  
}

export default GetActiveChildCount
