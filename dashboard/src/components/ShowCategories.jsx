import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'

function TotalCategories() {

    const [TotalCategories, setTotalCategories] = useState([]);
    useEffect(() => {
      fetch("/api/categories")
        .then((result) => result.json())
        .then((data) => {
          setTotalCategories(data.data);
          //console.log(data.data);
        });
    }, []);
    
    useEffect(() => {}, [TotalCategories]);
    
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
        <p className="products-title">Total de categorías</p>
      </div>
      <Table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>categoría</th>
        </tr>
      </thead>

      {TotalCategories.map (category  => {
     
  
        return(
       <tbody>
        <tr>
       
         <td>{category.id}</td>
         <td>{category.category}</td>
         
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
export default TotalCategories;