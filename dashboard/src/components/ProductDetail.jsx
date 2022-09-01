import React from 'react'

const ProductDetail = ({value}) => {
    let {name,id,productImg,price,description} = value;

  return (
    <div className='product-detail__container'>
        <div className="product-detail__photo">
            <img src={`https://zen-hogar.herokuapp.com/products/image/${productImg}`} alt={name} />
        </div>
        <div className="product-detail__info">
            <div className="product-detail__title">
                <h1>{name}</h1>
                <p>ID: {id}</p>
                <hr />
            </div>
            <div className="product-detail__price">
                <p>${price}</p>
            </div>
            <div className="product-detail__description">
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail