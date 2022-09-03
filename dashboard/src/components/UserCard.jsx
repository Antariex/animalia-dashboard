import React from 'react'
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

export default UserCard