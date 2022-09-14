import { useEffect, useState } from 'react';

export default function TotalCategories() {
    const [countCategories, setCountCategories] = useState([]);
    useEffect(() => {
        const url = "/api/categories";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountCategories(data.meta.total)
            })
    }, []);

    return (
        <><div>
            {countCategories }
        </div>
        </>

    )

}