// contador número total de usuarios

/*import React from "react";
import { useEffect, useState } from "react";


function TotalUsers() {

    const [totalUsers, setTotalUsers] = useState([]);
    useEffect(() => {
       console.log("se monto el componente", "color: green");
      fetch("/api/users")
        .then((result) => result.json())
        .then((data) => {
          setTotalUsers(totalUsers.length);
           
        });
    }, []);
    
    useEffect(() => {
      console.log("se actualizo el componente", "color: blue");
    }, [totalUsers]);
    
 
    useEffect(() => {
      return () => console.log("se desmonto el componente", "color: red");
    });

  return (

      <p className="total">{totalUsers}</p>
  );
}
export default TotalUsers;

*/
//voy a probar con la lógica que traigo de lastUser a continuación. Lo que esa silenciado arriba es lo que había
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
    <div className="lastUser-box">
        <div className="lastUser-top">
        <p className="lastUser-id">Id</p>
        <p className="lastUser-name">{lastUser.id}</p>
        <p className="lastUser-title">Nombre</p>
        <p className="lastUser-name">{lastUser.name}</p>
        <p className="lastUser-title">Email</p>
            <p className="lastUser-email">{lastUser.email}</p>
        </div>
        <div className="lastUser-boxContent">
        <p className="lastUser-image">Imagen</p>
             <img
                    src={`${lastUser.thumbnail}`}
              
                    style={{ width: "25%" }}
              />
            <div className="lastUser-bottom">
              <Link
                    to={`/userDetail/${lastUser.id}`}
                    style={{ textDecoration: "none", color: "white" }}
              >
                    Visitá su perfil
              </Link>
            </div>
        </div>
    </div>
);
}
export default LastUser;