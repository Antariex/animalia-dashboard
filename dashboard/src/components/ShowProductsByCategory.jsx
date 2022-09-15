import { useEffect, useState } from 'react';

export default function CountByCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const url = "/api/products/countcategory";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                console.log(data)
            })
    }, []);

    return (
        <div>
                <div className="card bg-transparent pt-3">
                    <div className="card-body text-light">
            <ul>
                        <h4 className="card-title">Productos por categoría</h4>
                    
           
                    <>
                        <li>Perros: {categories.perros}</li>
                        <li>Gatos: {categories.gatos}</li>
                        <li>Roedores: {categories.roedores}</li>
                        <li>Peces: {categories.peces}</li>
                        <li>Ofertas: {categories.ofertas}</li>
                 
                    </>
            </ul>
                    </div>
                </div>
        </div>
    )

}