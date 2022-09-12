
import {useState, useEffect} from 'react';

function DetailRow() {
  const [totalProducts, settotalProducts] = useState([]);
  useEffect(() => {
    console.log("%cse monto el componente", "color: green");
    fetch("/api/products")
      .then((result) => result.json())
      .then((data) => {
        settotalProducts(data.products[data.products.length -1]);
      });
    
  }, []);
  
  useEffect(() => {
    console.log("%cse actualizo el componente", "color: blue");
  }, [totalProducts]);
  
 
  useEffect(() => {
    return () => console.log("%cse desmonto el componente", "color: red");
  });

  return (

    <div className="col-12 col-lg-6 p-0 container-DetailRow">
      <div className="DetailRowTop">Ultimo Producto Agregado </div>
      
      <div className="DetailRowImage">
        
        <img src= {"/img/products/" + totalProducts.image} style={{ width: "30%" }} alt="Imagen del ultimo producto agregado"/>
      </div>
      <div className="DetailRowContent px-4">
        <p>{totalProducts.name}</p>
        <p>{totalProducts.price}</p>
      </div>
      <p className="px-4">
      {totalProducts.description}
      </p>
    </div>
  );
}
export default DetailRow;
