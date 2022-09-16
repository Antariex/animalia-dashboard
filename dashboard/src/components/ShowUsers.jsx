import { useState, useEffect } from "react";

function Users() {
  const [totalUsers, settotalUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users")
    .then((result) => result.json())
    .then((data) => {
      settotalUsers(data.data);
      console.log(data.data);
    });
  }, []);

  useEffect(() => {}, [totalUsers]);

  useEffect(() => {
    return () => console.log();
  });

  return (
    <div className="lastUser-box">
      <div className="lastUser-top">
        <p className="lastUser-title">Todos nuestros usuarios registrados:</p>
      </div>

      <thead>
        <tr>
          <th>Id</th>
          <th>Permiso</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Avatar</th>
        </tr>
      </thead>

      {totalUsers.map (users  => {

        return(
       <tbody>
        <tr>

         <td>{users.id}</td>
         <td>{users.permission_id}</td>
         <td>{users.name}</td>
         <td>{users.user}</td>
         <td>{users.email}</td>
         <td>{users.address}</td>
         <td>
            <img
                src={`${users.imagen}`}
                className="img-thumbnail"
                style={{
                width: 50
                }}

                alt={users.avatar}

            />
        </td>
        </tr>
        </tbody>
      )
      })
    }
    </div>
  );

}
export default Users;