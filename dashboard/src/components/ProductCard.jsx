import React from 'react'
import { NavLink } from 'react-router-dom';

const ProductCard = ({ id, price, name, productImg, discount, discountValue, Category, subCategory, stock }) => {
    console.log()
    return (
        <div className='product-card'>
            <div className='product-card__header'>
                
                {
                    discount ?
                        (
                            <div className='product-card__discount'>
                                <p>{`%${discountValue} OFF`}</p>
                            </div>
                        ) :
                        (
                            ''
                        )
                }
            </div>
            <div className='product-card__body'>
                <div>
                    <h3>{name}</h3>
                    <hr />
                </div>
                <p className='product-card__body--price'>${price}</p>
                <p>{`${Category.name} > ${subCategory.name}`}</p>
                <p>{`Cantidad en stock: ${stock}`}</p>
            </div>
            <div className='product-card_footer'>
                <NavLink to={`/products/${id}`}>
                    <span>Ver detalles</span>
                </NavLink>

            </div>
        </div>
    )
}

export default ProductCard