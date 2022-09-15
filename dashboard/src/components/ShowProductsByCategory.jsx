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
                    
           
                    <>
                        <p>Perros: {categories.perros}</p>
                        <p>Gatos: {categories.gatos}</p>
                        <p>Aves: {categories.aves}</p>
                        <p>Roedores: {categories.roedores}</p>
                        <p>Peces: {categories.peces}</p>
                        <p>Ofertas: {categories.ofertas}</p>
                 
                    </>
            </ul>
                    </div>
                </div>
        </div>
    )

}