import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LastUser() {
  const [lastUser, setLastUser] = useState([]);
  useEffect(() => {
    console.log();
    fetch("/api/users")
      .then((result) => result.json())
      .then((data) => {
        setLastUser(data.data[data.data.length - 1]);
      });
  }, []);

  useEffect(() => {
    console.log();
  }, [lastUser]);

  useEffect(() => {
    return () => console.log();
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
          <th>Permiso</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Avatar</th>
        </tr>
      </thead>
        <td>{lastUser.id}</td>
        <td>{lastUser.name}</td>
        <td>{lastUser.permission_id}</td>
        <td>{lastUser.user}</td>
        <td>{lastUser.email}</td>
        <td>{lastUser.address}</td>
        <td><img
        
                    src={`${lastUser.imagen}`}
              
                    style={{ width: "25%", borderRadius: "50px"}}
              /></td>
    </div>
    </tr>
    </tbody>
);
}
export default LastUser;