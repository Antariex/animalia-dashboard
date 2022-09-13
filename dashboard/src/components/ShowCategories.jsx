/*import React from 'react'
import { NavLink } from 'react-router-dom';

const ListCategories = ({value}) => {
    let {category} = value;
   return (
    <div>
        <ul className='category__main-list'>
            {
                category.map(category => {
                    return (
                        <li className='category__main-title'>
                            <NavLink to={'/'}>
                                <span>{category.name}</span>
                            </NavLink>
                            <ul className='category__sub-list'>
                                {
                                    category.subCategory.map(subCategory => {
                                        return (
                                            <li className='category__sub-title'>
                                                <NavLink to={'/'}>
                                                    <span>{subCategory.name}</span>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ListCategories
*/


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