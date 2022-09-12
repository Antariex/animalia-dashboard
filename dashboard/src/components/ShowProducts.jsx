/*import { render } from '@testing-library/react';
import { useCustomFetch } from '../hooks/useCustomFetch';
import Loading from './Loading';
import ProductCard from './ProductCard'

const ShowProducts = () => {
  const { data, isLoading, hasHerrors } = useCustomFetch('api/products');
  const response = !!data && data

  return (
    <div className="products">
      {
        isLoading ?
          (
            <Loading />
          )
          :
          render() (
            response.products.map(product => {
              return <ProductCard key={product.id} {...product} />
            })
            )
          }
    </div>
    )
  }
  
  export default ShowProducts
  */
 
 //A continuación basado en sneakers
 
 
 
 import { useEffect, useState } from "react";
 
 
 function TotalProducts() {
   
   const [totalProducts, setTotalProducts] = useState([]);
   useEffect(() => {
     fetch("/api/products")
     .then((result) => result.json())
     .then((data) => {
       setTotalProducts(data.data);
       //console.log(data.data);
      });
    }, []);
    
    useEffect(() => {}, [totalProducts]);
    useEffect(() => {
      return () => console.log("%cse desmonto el componente", "color: red");
    });
    
    return (
      /*<div className=" m-2 totalsBox">
      <p className="title">Total de productos</p>
      <p className="total">{totalProducts}</p>
      </div>*/
      //esto tomo de users
      <div className="products-box">
      <div className="products-top">
        <p className="products-title">Total de productos</p>
      </div>
     
      <thead>
        <tr>
          <th>Id</th>
          <th>categoría</th>
          <th>SubCategoría</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descuento</th>
          <th>Imagen</th>
          <th>Descripción</th>
        </tr>
      </thead>

      {totalProducts.map (products  => {
     
  
        return(
       <tbody>
        <tr>
       
         <td>{products.id}</td>
         <td>{products.category_id}</td>
         <td>{products.subcategory_id}</td>
         <td>{products.name}</td>
         <td>{products.price}</td>
         <td>{products.discount}</td>
         <td>
            <img
                src={ products.thumbnail }
                className="img-thumbmnail"
                style={{
                width: 50
                }}
                alt={products.name}
            />
        </td>
         <td>{products.description}</td>
        </tr>
        </tbody>
        )
      })
  }
      </div>
  );
}
export default TotalProducts;