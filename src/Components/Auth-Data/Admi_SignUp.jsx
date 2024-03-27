import React, { useState } from "react";
import { CreateAdmin } from "../../APIService/Authservicess";
import CommonForm from "./UserCommanForm/CommonForm";


function AdminSingUp() {

    const [data, setData] = useState({ Username: '', Email: '', Password: '' })

    async function Submit(e) {
        e.preventDefault();
        console.log(data);
        await CreateAdmin(data);
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    const formtitle ="Admin Registration";

    return <CommonForm formtitle={formtitle } data={setData} onChange={handle} onSubmit={(e) => { Submit(e) }} />

}
export default AdminSingUp;

