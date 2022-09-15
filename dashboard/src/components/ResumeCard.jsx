import React from 'react'
import TotalCategories from './TotalCategories';
import TotalSubcategories from './TotalSubcategories';
import TotalProducts from "./TotalProducts";
import TotalUsers from './TotalUsers';
import LastUser from "./LastUser";
import LastProduct from "./LastProduct";
function ResumeCard () {

    return (
        <>
            <div className='resume-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de productos</h2>
                    <p><TotalProducts /></p><span className="material-icons">inventory</span>
                </div>
                        <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de usuarios</h2>
                    <p><TotalUsers /></p><span className="material-icons">person</span>
                </div>
            </div>
            
            
            <div className='resume-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de categorías</h2>
                    <p><TotalCategories /></p><span className="material-icons">category</span>
                </div>

                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de subcategorías</h2>
                    <p><TotalSubcategories /></p><span className="material-icons">apps</span>
                </div>
            </div>
            

            <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Último usuario registrado:</h2>
                    
                    <div >
          <LastUser />
          
          <div className='resume-card__wrapper'>
            <br/>
                    <h2 className='resume-card__title'>Último producto registrado:</h2>
                    
                    <div >
          <LastProduct />
          
                </div>
                </div>


                </div>
                </div>
           


           
        </>
    )
}

export default ResumeCard