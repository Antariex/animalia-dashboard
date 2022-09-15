import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'

function TotalSubcategories() {

    const [TotalSubcategories, setTotalSubcategories] = useState([]);
    useEffect(() => {
      fetch("/api/subcategories")
        .then((result) => result.json())
        .then((data) => {
          setTotalSubcategories(data.data);
        });
    }, []);

    useEffect(() => {}, [TotalSubcategories]);

    useEffect(() => {
      return () => console.log();
    });

    return (
      <div className="products-box">
      <div className="products-top">
        <p className="products-title">Todas las subcategorías de nuestros productos:</p>
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