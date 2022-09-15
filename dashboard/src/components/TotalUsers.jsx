import { useEffect, useState } from 'react';

export default function TotalUsers() {
     const [countUsers, setCountUsers] = useState([]);
    useEffect(() => {
        const url = "/api/users";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountUsers(data.total)
            })
    }, []);

    return (
        <><div>
            {countUsers }
        </div>
        </>
    )
}