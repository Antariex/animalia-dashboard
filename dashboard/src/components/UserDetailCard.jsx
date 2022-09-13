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

export default UserDetailCard