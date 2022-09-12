import React from 'react'
import TotalProducts from "./TotalProducts";
import TotalUsers from './TotalUsers';
import DetailRow from './DetailRow';

const ResumeCard = ({ value }) => {
    let { totalProducts, totalUsers, totalProductsByCategory } = value
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
                    <p>6</p><span className="material-icons">insights</span>
                </div>
            </div>
            <div className='resume-card width-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de productos por categoria</h2>
                    <hr />
                </div>
            </div>
            <div className='resume-card width-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de subcategorias por categoria</h2>
                    <hr />

                </div>

            </div>
            </>
    )
}

export default ResumeCard