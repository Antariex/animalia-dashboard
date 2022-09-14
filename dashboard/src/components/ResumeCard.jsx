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
    <div>
        <div className='resume-card'>
            <div className='resume-card__wrapper'>
                <h2 className='resume-card__title'>Total de productos:</h2>
                    <p><TotalProducts /></p><span className="material-icons">insights</span>
            </div>
        </div>

        <div className='resume-card'>
            <div className='resume-card__wrapper'>
                <h2 className='resume-card__title'>Total de usuarios:</h2>
                <p><TotalUsers /></p><span className="material-icons">insights</span>
            </div>
        </div>

        <div className='resume-card'>
            <div className='resume-card__wrapper'>
                <h2 className='resume-card__title'>Total de categorías:</h2>
                <p><TotalCategories /></p><span className="material-icons">insights</span>
            </div>
        </div>

        <div className='resume-card'>
            <div className='resume-card__wrapper'>
                <h2 className='resume-card__title'>Total de subcategorías:</h2>
                <p><TotalSubcategories /></p><span className="material-icons">insights</span>
            </div>
        </div>

        <div className='resume-card__wrapper'>
        <br/>
                <h2 className='resume-card__title'>Último usuario registrado:</h2>
                <LastUser />
        </div>

        <div className='resume-card__wrapper'>
        <br/>
                <h2 className='resume-card__title'>Último producto registrado:</h2>
               <LastProduct />
        </div>


    </div>
    </>
    )
}
export default ResumeCard

