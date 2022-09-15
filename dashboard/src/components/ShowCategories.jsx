import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
//import ShowProductsByCategory from './components/ShowProductsByCategory'
//<ShowProductsByCategory />


function TotalCategories() {

    const [TotalCategories, setTotalCategories] = useState([]);
    useEffect(() => {
      fetch("/api/categories")
      .then((result) => result.json())
        .then((data) => {
          setTotalCategories(data.data);

      
    
        });
    }, []);

    useEffect(() => {}, [TotalCategories]);

    useEffect(() => {
      return () => console.log();
    });

    return (
      
      <div className="products-box">
      <div className="products-top">
        <p className="products-title">Todas las categorías de nuestros productos:</p>
      </div>
      <Table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>categoría</th>
          <th>cantidad (productos)</th>
        </tr>
      </thead>
      {TotalCategories.map (category  => {

        return(
       <tbody>
        <tr>

         <td>{category.id}</td>
         <td>{category.category}</td>
         <td>{category.id}</td>
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

