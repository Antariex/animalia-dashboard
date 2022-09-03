import React from 'react'
import { NavLink } from 'react-router-dom';

const UserDetailCard = ({value}) => {
    let {id,name,lastname,email,phone,profileImg} = value;
  return (
    <div className='user-detail__container'>
        <div className="user-detail__header">
            
        </div>
        <div className='user-detail__name'>
            <h3>{name + ' '+ lastname}</h3>
            <p>ID: #{id}</p>
            <hr />
        </div>
        <div className='user-detail__more-info'>
            <p>Email: {email}</p>
            <p>Celular: {phone}</p>
        </div>
        <div className='product-card_footer'>
                <NavLink to={`/products/${id}`}>
                    <span>Editar información</span>
                </NavLink>
                <hr />
                <NavLink to={`/products/${id}`}>
                    <span>Borrar la cuenta</span>
                </NavLink>

            </div>
    </div>
  )
}

export default UserDetailCard