import React from 'react';
import Category from './Category';

let categories = [
    {category: 'Perros'},
    {category: 'Gatos'},
    {category: 'Aves'},
    {category: 'Peces'},
    {category: 'Roedores'},
    {category: 'Ofertas'},
]

function CategoriesInDb(){
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categorías de productos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    categories.map((category,index)=>{
                                        return  <Category  {...category}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}
export default CategoriesInDb;