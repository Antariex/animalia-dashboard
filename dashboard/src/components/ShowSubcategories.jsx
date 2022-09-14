import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'

function TotalSubcategories() {

    const [TotalSubcategories, setTotalSubcategories] = useState([]);
    useEffect(() => {
      fetch("/api/subcategories")
        .then((result) => result.json())
        .then((data) => {
          setTotalSubcategories(data.data);
          //console.log(data.data);
        });
    }, []);
    
    useEffect(() => {}, [TotalSubcategories]);
    
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
        <p className="products-title">Total de subcategorías</p>
      </div>
      <Table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>subcategoría</th>
        </tr>
      </thead>

      {TotalSubcategories.map (subcategory  => {
     
  
        return(
       <tbody>
        <tr>
       
         <td>{subcategory.id}</td>
         <td>{subcategory.subcategory}</td>
         
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
export default TotalSubcategories;