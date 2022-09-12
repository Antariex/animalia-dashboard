import React from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import UserDetailCard from '../components/UserDetailCard';
import { useCustomFetch } from '../hooks/useCustomFetch'

const UserDetails = () => {
    let { id } = useParams();
    let { data, isLoading, hasErrors } = useCustomFetch(`http:localhost:3000/api/users/${id}`)
    console.log(id)
    return (
        <>
            <div className='container'>
                <h2>Detalle de usuario</h2>

            </div>
            <div className='user-detail'>
                {
                    isLoading ?
                        (
                            <Loading />
                        )
                        :
                        (
                            <UserDetailCard value={data} />
                        )
                }
            </div>
        </>
    )
}

export default UserDetails