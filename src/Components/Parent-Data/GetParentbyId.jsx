import{ useState } from 'react';
import {Base_url} from "../../Variables/APIEndPoints"
const GetParentById =() =>
{
  const [parent,setParent]=useState([]);

  const [value, setvalue] = useState();

  const params = { method: 'GET', headers: {  'Authorization': `Bearer ${localStorage.getItem("Token")}`,  'accept': 'application/json'} };

  const HandleSearch = async () =>
    {
      var a = value;
      await fetch(`${Base_url}/GetParendById?id=${a}`, params)
      .then((responce) =>responce.json()
      .then( json =>
        {
          console.log(json);
          if(json.parent!==null)
          setParent([json.parent]);
          else{
          alert("Parent Data not found")
          setParent([]);}
        })
        .catch(e => console.error(e)));
  }
 
  return (
    <div>
      <div>
          Enter Parent id 
      </div>
      <div>
          <input type={"text"} onChange={(e) => {
            setvalue(e.target.value);
          }}></input>
          <button onClick={HandleSearch}>Search</button>
      </div>
      <h1>Parent Data...</h1>
          <table>
            <thead>
            <tr>
                 <th>id</th>
                 <th>phoneNumber</th>
                 <th>email</th>
                 <th>firstName</th>
                 <th>lastName</th>
                 <th>status</th>
               </tr>
              </thead>
              <tbody>
                 {
                 parent.map(emp => {
                  return (
                      <tr key={emp.id}>
                      <td>{emp.id}</td>
                      <td>{emp.phoneNumber}</td>
                      <td>{emp.email}</td>
                      <td>{emp.firstName}</td>
                      <td>{emp.lastName}</td>
                      <td>{emp.status}</td>
                      </tr>)
                      })}
               </tbody>
              </table>
           </div>
  )

}

export default GetParentById;
































































































