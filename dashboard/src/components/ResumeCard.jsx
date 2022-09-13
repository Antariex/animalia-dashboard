import React from 'react'
import TotalProducts from "./TotalProducts";
import TotalUsers from './TotalUsers';
import LastUser from "./LastUser";
import ListCategories from './ShowCategories';
import { useParams } from "react-router-dom";

const ResumeCard = ({ value }) => {
    let { TotalProducts, TotalUsers, TotalCategories, TotalSubCategories } = value
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
                    <p>{TotalSubCategories}</p><span className="material-icons">insights</span>
                </div>
            </div>

            <div className='resume-card width-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Último usuario registrado</h2>
                    <hr />
                    <div className="col ">
          <LastUser />
          </div>
                    <br/>
                    <br/>
                </div>

            </div>
            </>
    )
}

export default ResumeCard