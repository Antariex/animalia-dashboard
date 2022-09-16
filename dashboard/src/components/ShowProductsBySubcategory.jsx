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
           
                    <>
                        
                        <p>Alimentos: {subcategories.alimentos}</p>
                        <p>Farmacia: {subcategories.farmacia}</p>
                        <p>Cuidados y Belleza: {subcategories.cuidadosYBelleza}</p>
                        <p>Juguetes: {subcategories.juguetes}</p>
                        <p>Otros Articulos: {subcategories.otrosArticulos}</p>

                 
                    </>
            </ul>
                    </div>
                </div>
        </div>
    )

}