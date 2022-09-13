
//contador numero total de productos

import React from "react";
import { useEffect, useState } from "react";


function TotalProducts() {

    const [totalProducts, setTotalProducts] = useState([]);
    useEffect(() => {
    //   console.log("%cse monto el componente", "color: green");
      fetch("/api/products")
        .then((result) => result.json())
        .then((data) => {
          setTotalProducts(data.products);
        });
    }, []);
    
    useEffect(() => {
       }, [totalProducts]);
    
    useEffect(() => {
      return () => console.log("%cse desmonto el componente", "color: red");
    });

  return (

      <p className="total">{totalProducts}</p>

  );
}
export default TotalProducts;
