/*
import React from 'react'
import { useCustomFetch } from '../hooks/useCustomFetch';
import Loading from './Loading';
import UserCard from '../components/UserCard'
const ShowUsers = () => {
    const { data, isLoading, hasHerrors } = useCustomFetch('/api/users');
    const response = !!data && data
    return (
        <div className="users">
            {
                isLoading ?
                    (
                        <Loading />
                    )
                    :
                    (
                        response.users.map(user => {
                            return <UserCard key={user.id} {...user} />
                        })
                    )
            }
        </div>
    )
}

export default ShowUsers

*/

//de sneakers

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
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Password</th>
        </tr>
      </thead>

      {totalUsers.map (users  => {
        // console.log(Object.keys(brands))
        // console.log(Object.values(brands))
        return(
       <tbody>
        <tr>
       
         <td>{users.name}</td>
         <td>{users.user}</td>
         <td>{users.email}</td>
         <td>{users.address}</td>
         <td>{users.password}</td>
        </tr>
        </tbody>
)
      })
     
}
  
    </div>
  );
}
export default Users;
