import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LastUser() {
  const [lastUser, setLastUser] = useState([]);
  useEffect(() => {
    console.log("%cse monto el componente", "color: green");
    fetch("/api/users")
      .then((result) => result.json())
      .then((data) => {
        setLastUser(data.data[data.data.length - 1]);
      });
  }, []);

  useEffect(() => {
    console.log("%cse actualizo el componente", "color: blue");
  }, [lastUser]);

  useEffect(() => {
    return () => console.log("%cse desmonto el componente", "color: red");
  });

  return (
    <tbody>
      <tr>    
    <div className="lastUser-box">
        <div className="lastUser-top"></div>
        <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Avatar</th>
        </tr>
      </thead>
        <td>{lastUser.id}</td>
        <td>{lastUser.name}</td>
        <td>{lastUser.user}</td>
        <td>{lastUser.email}</td>
        <td>{lastUser.address}</td>
        <td><img
                    src={`${lastUser.thumbnail}`}
              
                    style={{ width: "25%" }}
              /></td>
    </div>
    </tr>
    </tbody>
);
}
export default LastUser;