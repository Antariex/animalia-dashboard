import React from 'react'
import { useCustomFetch } from '../hooks/useCustomFetch';
import Loading from './Loading';
import UserCard from '../components/UserCard'

const ShowUsers = () => {
    const { data, isLoading, hasHerrors } = useCustomFetch('/api/users');
    const response = !!data && data
    return (
        <div className="users">
            {
                isLoading ?
                    (
                        <Loading />
                    )
                    :
                    (
                        response.users.map(user => {
                            return <UserCard key={user.id} {...user} />
                        })
                    )
            }
        </div>
    )
}

export default ShowUsers