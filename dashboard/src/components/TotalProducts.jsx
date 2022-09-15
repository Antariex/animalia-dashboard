import { useEffect, useState } from 'react';

export default function TotalProducts() {
    const [countProducts, setCountProducts] = useState([]);
    useEffect(() => {
        const url = "/api/products";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountProducts(data.meta.totalProducts)
            })
    }, []);

    return (
        <><div>
            {countProducts }
        </div>
        </>

    )

}