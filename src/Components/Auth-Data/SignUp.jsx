import React, { useState } from "react";
import { CreateNewUser } from "../../APIService/Authservicess";
import CommonForm from "./UserCommanForm/CommonForm";


export default function SignUp() {

    const [data, setData] = useState({ Username: '', Email: '', Password: '' })

    async function Submit(e) { e.preventDefault(); const responce = await CreateNewUser(data); }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata);
    }

    const formtitle ="Employee Registration"

    return <CommonForm formtitle={formtitle } data={setData} onChange={handle} onSubmit={(e) => { Submit(e) }} />

}
