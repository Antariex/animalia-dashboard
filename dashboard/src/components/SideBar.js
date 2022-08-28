import React from 'react';
import logo from '../assets/images/logo.png';
//import image from '../assets/images/logo-DH.png';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <div className="container">
        <aside>
            <div className="top">
                <div className="logo">
                <img src={logo} alt="Animalia" title="Animalia - Lo mejor para tus mascotas"/>
                                    </div>
                <div className="close" id="closs-btn">
                    <span className="material-icons">close</span>
                </div>
            </div>

            <div className="sidebar">
                <a href="#">
                    <span className="material-icons">grid_view</span>
                    <h3>Dashboard</h3>
                </a>
                <a href="#">
                    <span className="material-icons">receipt_long</span>
                    <h3>Ventas</h3>
                </a>
                <a href="#">
                    <span className="material-icons">insights</span>
                    <h3>Destacados</h3>
                </a>
                            
                <a href="#">
                    <span className="material-icons">add</span>
                    <h3>Agregar producto</h3>
                </a>

                <a href="#">
                    <span className="material-icons">inventory</span>
                    <h3>Editar producto</h3>
                </a>

                <a href="#">
                    <span className="material-icons">delete</span>
                    <h3>Eliminar producto</h3>
                </a>
                <a href="#">
                    <span className="material-icons">logout</span>
                    <h3>Cerrar sesión</h3>
                </a>
            </div>
        </aside>
    </div>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;