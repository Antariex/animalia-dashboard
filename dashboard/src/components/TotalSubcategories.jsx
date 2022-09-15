import { useEffect, useState } from 'react';

export default function TotalSubcategories() {
    const [countSubcategories, setCountSubcategories] = useState([]);
    useEffect(() => {
        const url = "/api/subcategories";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountSubcategories(data.meta.total)
            })
    }, []);

    return (
        <><div>
            {countSubcategories }
        </div>
        </>

    )

}