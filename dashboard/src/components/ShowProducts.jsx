import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'

function TotalProducts() {

    const [TotalProducts, setTotalProducts] = useState([]);
    useEffect(() => {
      fetch("/api/products")
        .then((result) => result.json())
        .then((data) => {
          setTotalProducts(data.data);
          //console.log(data.data);
        });
    }, []);
    
    useEffect(() => {}, [TotalProducts]);
    
    useEffect(() => {
      return () => console.log("%se desmonto el componente", "color: red");
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
      <Table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>categoría</th>
          <th>SubCategoría</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descuento</th>
          <th>Imagen</th>
          <th>Descripción</th>
        </tr>
      </thead>

      {TotalProducts.map (products  => {
     
        return(
       <tbody>
        <tr>
       
         <td>{products.id}</td>
         <td>{products.category_id}</td>
         <td>{products.subcategory_id}</td>
         <td>{products.name}</td>
         <td>${products.price}</td>
         <td>${products.discount}</td>
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
  </Table>
  <br/>
      </div>
  );
}
export default TotalProducts;