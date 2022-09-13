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
    return () => console.log("%cse desmonto el componente", "color: red");
  });

  return (
    <div className="lastUser-box">
      <div className="lastUser-top">
        <p className="lastUser-title">Todos nuestros usuarios</p>
      </div>
     
      <thead>
        <tr>
          <th>Id</th>
          <th>Permiso</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Password</th>
          <th>Avatar</th>
        </tr>
      </thead>

      {totalUsers.map (users  => {
        // console.log(Object.keys(brands))
        // console.log(Object.values(brands))
        return(
       <tbody>
        <tr>
       
         <td>{users.id}</td>
         <td>{users.permission_id}</td>
         <td>{users.name}</td>
         <td>{users.user}</td>
         <td>{users.email}</td>
         <td>{users.address}</td>
         <td>{users.password}</td>
         <td>
            <img
                src={ users.thumbnail }
                className="img-thumbnail"
                style={{
                width: 50
                }}
                alt={users.name}
                
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