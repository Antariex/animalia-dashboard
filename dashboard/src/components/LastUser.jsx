import { useState, useEffect } from "react";

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
              src={`${lastUser.imagen}`}
              style={{ width: "25%" }}
          /></td>
    </div>
    </tr>
    </tbody>
);
}
export default LastUser;