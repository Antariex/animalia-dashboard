import React from 'react';
import logo from '../assets/images/logo.png';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
<body>
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
                    <span className="material-icons">person_outline</span>
                    <h3>Usuarios</h3>
                </a>
                <a href="#">
                    <span className="material-icons">receipt_long</span>
                    <h3>Pedidos</h3>
                </a>
                <a href="#">
                    <span className="material-icons">insights</span>
                    <h3>Estadísticas</h3>
                </a>
                <a href="#">
                    <span className="material-icons">mail_outline</span>
                    <h3>Mensajes</h3>
                    <span className="contadorDeMensajes">6</span>
                </a>
                <a href="#">
                    <span className="material-icons">inventory</span>
                    <h3>Productos</h3>
                </a>
                <a href="#">
                    <span className="material-icons">report_gmailerrorred</span>
                    <h3>Informes</h3>
                </a>
                <a href="#">
                    <span className="material-icons">settings</span>
                    <h3>Configuración</h3>
                </a>
                <a href="#">
                    <span className="material-icons">add</span>
                    <h3>Agregar producto</h3>
                </a>
                <a href="#">
                    <span className="material-icons">logout</span>
                    <h3>Cerrar sesión</h3>
                </a>
            </div>
        </aside>
    </div>
</body>

            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;