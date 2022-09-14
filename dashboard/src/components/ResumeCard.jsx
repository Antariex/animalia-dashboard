import React from 'react'
import TotalProducts from "./TotalProducts";
import TotalUsers from './TotalUsers';
import LastUser from "./LastUser";
import LastProduct from "./LastProduct";
import ListCategories from './ShowCategories';
import { useParams } from "react-router-dom";

const ResumeCard = ({ value }) => {
    let { TotalProducts, TotalUsers, TotalCategories, TotalSubcategories } = value
    // let {categories} = totalProductsByCategory;

    return (
        <>
            <div className='resume-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de productos</h2>
                    <p>{TotalProducts}</p><span className="material-icons">insights</span>
                </div>
            </div>
            <div className='resume-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de usuarios</h2>
                    <p>{TotalUsers}</p><span className="material-icons">insights</span>
                </div>
            </div>
            <div className='resume-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de categorías</h2>
                    <p>{TotalCategories}</p><span className="material-icons">insights</span>
                </div>
            </div>
            <div className='resume-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de subcategorías</h2>
                    <p>{TotalSubcategories}</p><span className="material-icons">insights</span>
                </div>
            </div>

            
            <div className='resume-card__wrapper'>
            <br/>
                    <h2 className='resume-card__title'>Último usuario registrado:</h2>
                    <hr/>
                    <div >
          <LastUser />
          
          <div className='resume-card__wrapper'>
            <br/>
                    <h2 className='resume-card__title'>Último producto registrado:</h2>
                    <hr/>
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