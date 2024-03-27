import { useEffect, useState } from 'react';

const GetChildById = () => {
  
  const [Child, setChild] = useState([]);

  const [value, setvalue] = useState();

  const params = { method: 'GET', headers: { 'Authorization': `Bearer ${localStorage.getItem("Token")}`, 'accept': 'application/json' } };

  const HandleSearch = async () => {
    
    await fetch(`https://localhost:7232/Child/GetChildById?id=${value}`, params)
      .then((response) => response.json())
      .then(json => {
        console.log(json);
        if (json.child !== null)
          setChild([json.child]);
        else
          setChild([]);
      })
      .catch(e => console.error(e));
  }
  useEffect(() => {
    console.log(Child);
  }, [Child])
  return (
    <div>
      <div>
        Enter Child id
      </div>
      <div>
        <input type={"text"} onChange={(e) => {
          setvalue(e.target.value);
        }}></input>
        <button onClick={HandleSearch}>Search</button>
      </div>
      <h1>Child's Data...</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>parentID</th>
            <th>gender</th>
            <th>dateOfBirth</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>status</th>

          </tr>
        </thead>
        <tbody>
          {
            Child.map(emp => {
              return (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.parentID}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.dateOfBirth}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.status}</td>
                </tr>)
            })}
        </tbody>
      </table>
    </div>
  );
}

export default GetChildById;

