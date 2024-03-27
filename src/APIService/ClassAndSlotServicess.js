import { SlotListLink,createslotLink,classlistLink,createclassLink } from "../Variables/APIEndPoints";
import { Base_url } from "../Variables/APIEndPoints";
import MainAxios from "../redux/CommonAxios";
import HTTP_METHOD from "../Variables/HTTPmethods";

export const GetClassList = async() =>{
   
            const url= Base_url+classlistLink; 
            
            var classdata=[];
            
            await MainAxios(url,HTTP_METHOD.Get,"").then( (res) =>{classdata=res} )

            return classdata;
}

export const GetSlotList = async() =>{
   
            const url=Base_url+SlotListLink; var slotdata=[];
            
            await MainAxios(url,HTTP_METHOD.Get,"").then( (res) =>{slotdata =res} )

            return slotdata;

}

export const CreateClass =async (data) =>{
    
            const url =Base_url+createclassLink;

            await MainAxios(url,HTTP_METHOD.Post,data)
                
            .then((res)=>{console.log(res);})
                
            . catch((error)=>console.log(error));
}

export const CreateSlot = async (data) =>{

    const url=Base_url+createslotLink;

    await MainAxios(url,HTTP_METHOD.Post,data)

    .then((res)=>console.log(res))

    .catch((error)=>console.log(error))
}