import React from 'react'

const ProductDetail = ({value}) => {
    let {name,id,productImg,price,description} = value;

  return (
    <div className='product-detail__container'>
        <div className="product-detail__photo">
            
        </div>
        <div className="product-detail__info">
            <div className="product-detail__title">
                <h2 style={{ fontSize: "28px", color: "#C9914B" }}>{name}</h2>
                <p>ID: {id}</p>
                
            </div>
            <div className="product-detail__price">
                <p style={{ color: "#135191", fontSize: "30px", fontWeight: "700"}}>${price}</p>
            </div>
            <div className="product-detail__description">
                <p style={{ color: "#3c3c3c", fontSize: "24px", padding: "50px", margin: "10px", textAlign: "justify"}}>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail