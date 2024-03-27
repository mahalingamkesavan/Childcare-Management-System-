import { useNavigate } from 'react-router-dom';
import  { useEffect } from "react";

export default function LogOut() 
{
    const nav = useNavigate();
    
    useEffect(() => { localStorage.clear();   window.location.reload(false); nav("/")   });
}