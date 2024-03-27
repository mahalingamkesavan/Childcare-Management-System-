import axios from "axios";
import StorageKey from "../Variables/LocalStorageKey";

async function MainAxios(url, method, Data) {
   
    const Token = localStorage.getItem(StorageKey.Token);

    var config = {
        method: method,
        url: url,
        headers: { 'Authorization': 'Bearer ' + Token, 'Content-Type': 'application/json' },
        data: Data
    };
    
    
    var Result;

    await axios(config).then((response) => { Result = response.data; }).catch((error) =>{throw error})

    return Result;
}

export default MainAxios;

