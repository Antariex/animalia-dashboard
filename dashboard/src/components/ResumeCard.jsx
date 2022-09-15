import React from 'react'
import TotalCategories from './TotalCategories';
import TotalSubcategories from './TotalSubcategories';
import TotalProducts from "./TotalProducts";
import TotalUsers from './TotalUsers';
import LastUser from "./LastUser";
import LastProduct from "./LastProduct";
import ShowProductsByCategory from "./ShowProductsByCategory"
import ShowProductsBySubcategory from "./ShowProductsBySubcategory"
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


{/*a partir de acá esto agrego para probarambos componentes que siguen. Si se remueven no olvidar borrar los import también*/}
                <div className='resume-card__wrapper'>
            <br/>
                    <h2 className='resume-card__title'>OJO QUE UBIQUÉ ACÁ PARA PROBAR LOS COMPONENTES:</h2>
                    
                    <div >
          <ShowProductsByCategory />
          
                </div>

                <div >
          <ShowProductsBySubcategory />
          
                </div>


                </div>



                </div>
                </div>


  
    </>
    )
}
export default ResumeCard

