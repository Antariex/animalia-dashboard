/*import React from 'react'
import { NavLink } from 'react-router-dom'

const UserCard = ({ id, profileImg, name, lastname, email }) => {
    return (
        <div className="user-card">
            <div className="user-card__id">
                <span>ID: #{id}</span>
            </div>
            <div className="user-card__info">
                <div className="user-card__info-img">
                    
                </div>
                <div>
                    <span>{name} {lastname}</span>
                </div>
            </div>
            <div className="user-card__email">
                <span>{email}</span>
            </div>
            <div className="user-card__detail">
                <NavLink to={`/users/${id}`}>
                    <span>Ver detalles</span>
                </NavLink>
            </div>
        </div>
    )
}

export default UserCard*/



/*
import React from 'react'
import { NavLink } from 'react-router-dom';

const UserDetailCard = ({value}) => {
    let {id,permission_id,name,user,email,address,password,thumbnail} = value;
  return (
    <div className='user-detail__container'>
        <div className="user-detail__header">

        </div>
        <div className='user-detail__name'>
            <h3>{name + ' '}</h3>
            <p>ID: #{id}</p>
            <hr />
        </div>
        <div className='user-detail__more-info'>
            <p>Email: {email}</p>
        </div>
       
    </div>
  )
}

export default UserDetailCard*/



import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";


function UserDetail() {
  const [user, setUser] = useState([]);
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((result) => result.json())
      .then((data) => {
        setUser(data.data);
      });
  }, []);

  useEffect(() => {}, [user]);

  useEffect(() => {
    return () => console.log("%cse desmonto el componente", "color: red");
  });

  return (
    <div className="container mt-5">
        <div className="row justify-content-center ">
        <div className="col-12" align="center">
      <Card className="align-items-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${user.thumbnail}`} style={{ width: "12rem" }} />
        <Card.Body>
          <Card.Title className="rounded p-2" style={{ backgroundColor: "#AD1357", color: "white" }}>Perfil de usuario</Card.Title>
          <Card.Text>{user.name} {user.user}</Card.Text>
          
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
      </Card>
      </div> 
      </div>
    </div>
  );
}
export default UserDetail;
