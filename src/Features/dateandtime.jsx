import { useState,useEffect } from 'react';

export const Dateandtime = () => {
 
    var [date,setdate]=useState(new Date()); 
    
    useEffect(()=>{
        var timer=setInterval(()=>setdate(new Date()),1000);
        return function cleanup() {clearInterval(timer) };
      },)

    return (
       <b style={{color:"white",paddingLeft:"40px"}}>
        { days[date.getDay()]+" , "+date.toLocaleDateString()+" ,"+date.toLocaleTimeString()}</b> 
  )
}


var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
