import { useState, useEffect } from "react";
function LastProduct() {
  const [lastProduct, setLastProduct] = useState([]);
  useEffect(() => {
    console.log();
    fetch("/api/products")
      .then((result) => result.json())
      .then((data) => {
        setLastProduct(data.data[data.data.length - 1]);
        
      });
  }, []);

  useEffect(() => {
    console.log();
  }, [lastProduct]);

  useEffect(() => {
    return () => console.log();
  });

  return (
    <tbody>
      <tr>    
    <div className="lastUser-box">
        <div className="lastUser-top"></div>
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
      <td>{lastProduct.id}</td>
         <td>{lastProduct.category}</td>
         <td>{lastProduct.subcategory}</td>
         <td>{lastProduct.name}</td>
         <td>${lastProduct.price}</td>
         <td>${lastProduct.discount}</td>
        <td><img
        
          src={`${lastProduct.thumbnail}`}
    
          style={{ width: "100%" }}
        /></td>
        <td>{lastProduct.description}</td>
        <td>{lastProduct.stock}</td>
    </div>
    </tr>
    </tbody>
);
}
export default LastProduct;