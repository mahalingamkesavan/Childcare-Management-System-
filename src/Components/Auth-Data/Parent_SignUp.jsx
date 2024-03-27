import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateParent } from "../../APIService/Authservicess";
import CommonForm from "./UserCommanForm/CommonForm";

const ParentSignUp = () => {

    const [data, setData] = useState({ Username: '', Email: '', Password: '' })

    const nav = useNavigate();

    async function Submit(e) {

        e.preventDefault();

        const responce = await CreateParent(data);

        if (responce === "User created successfully!") { nav("/"); }
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata);
    }

    const formtitle ="User Registration"

    return <CommonForm formtitle={formtitle } data={setData} onChange={handle} onSubmit={(e) => { Submit(e) }} />

}

export default ParentSignUp;
