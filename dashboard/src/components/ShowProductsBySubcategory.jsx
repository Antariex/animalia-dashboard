import { useEffect, useState } from 'react';

export default function CountBySubcategory() {
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        const url = "/api/products/countsubcategory";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSubcategories(data)
                console.log(data)
            })
    }, []);

    return (
        <div>
                <div className="card bg-transparent pt-3">
                    <div className="card-body text-light">
            <ul>
                        <h4 className="card-title">Productos por subcategoría</h4>
                    
           
                    <>
                        <li>Alimentos: {subcategories.alimentos}</li>
                        <li>Farmacia: {subcategories.farmacia}</li>
                        <li>cuidados y Belleza: {subcategories.cuidadosYBelleza}</li>
                        <li>Juguetes: {subcategories.juguetes}</li>
                        <li>Otros Articulos: {subcategories.otrosArticulos}</li>

                 
                    </>
            </ul>
                    </div>
                </div>
        </div>
    )

}