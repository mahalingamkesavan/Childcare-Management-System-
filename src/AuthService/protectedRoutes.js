import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import StorageKey from "../Variables/LocalStorageKey";


export default function PrivateRout() 
{
    const auth={"Token" :localStorage.getItem(StorageKey.IsToken)}
  
    return( auth.Token ? <Outlet/>:<Navigate to={"/"} /> )
}