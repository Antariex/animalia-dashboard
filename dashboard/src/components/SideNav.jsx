import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const SideNav = () => {
    return (
        <div className="container">
        <aside>

            <div className="sidebar">
                <div className="close" id="closs-btn">
                    <span className="material-icons">close</span>
                </div>

                <NavLink to={'/'}>
                <div className="logo">
                <img src={logo} alt="Animalia" title="Animalia - Lo mejor para tus mascotas"/>
                </div>
                </NavLink>
                <br/>
                <NavLink to={'/'}>
                    <span className="material-icons">grid_view</span>
                    <h3>Dashboard</h3>
                    </NavLink>

                <NavLink to={'products'}>
                        <span className="material-icons">inventory</span>
                    <h3>Productos</h3>
                    </NavLink>

                <NavLink to={'users'}>
                    <span className="material-icons">person</span>
                    <h3>Usuarios</h3>
                </NavLink>

                <NavLink to={'categories'}>
                    <span className="material-icons">category</span>
                    <h3>Categorías</h3>
                </NavLink>

            </div>
        </aside>
    </div>

    )
}

export default SideNav