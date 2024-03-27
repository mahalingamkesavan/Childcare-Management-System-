import React from 'react';
import { useState } from 'react';
import { ResetPassword } from '../../APIService/Authservicess';
import Reserpasswordform from "./UserCommanForm/reserpasswordform";

const PasswordReset = () => {
  
        const [data,setData]=useState({UserName:'',OldPassword:'',NewPassword:''})
        
       async function Submit(e) { 
               e.preventDefault(); 
               console.log(data);
               await ResetPassword(data);
       }
       
       function handle(params) {  
              const newdata={...data}
              newdata[params.target.id] = params.target.value
              setData(newdata);
            }

       return  <Reserpasswordform  data={setData} onChange={handle} onSubmit={(e) => { Submit(e) }} />
   
}

export default PasswordReset;
