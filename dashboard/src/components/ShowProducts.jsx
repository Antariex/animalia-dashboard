import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

function TotalProducts() {

    const [TotalProducts, setTotalProducts] = useState([]);
    useEffect(() => {
      fetch("/api/products")
        .then((result) => result.json())
        .then((data) => {
          setTotalProducts(data.data);
        });
    }, []);

    useEffect(() => {}, [TotalProducts]);

    useEffect(() => {
      return () => console.log();
    });

    return (

      <div className="products-box">
      <div className="products-top">
        <p className="products-title">Todos nuestros productos:</p>
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
          <th>Stock</th>
        </tr>
      </thead>

      {TotalProducts.map (products  => {

        return(
       <tbody>
        <tr>

         <td>{products.id}</td>
         <td>{products.category}</td>
         <td>{products.subcategory}</td>
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
         <td> <Link
            to={`${products.id}`}
            style={{ textDecoration: "none", color: "#7380ec" }}
          >
            [Ver detalle]
          </Link></td>
         <td>{products.stock}</td>
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