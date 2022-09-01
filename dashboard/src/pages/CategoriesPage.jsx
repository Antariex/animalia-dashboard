import React from 'react'
import ListCategories from '../components/ListCategories'
import Loading from '../components/Loading';
import { useCustomFetch } from '../hooks/useCustomFetch'

const CategoriesPage = () => {
    const { data, isLoading, hasErrors } = useCustomFetch('https://zen-hogar.herokuapp.com/api/categories/');
    return (
        <div className='container'>
            <h2>Categorías</h2>
            {
                isLoading ? (
                    <Loading />
                )
                    :
                    (
                        <div>
                            <ListCategories value={data} />
                        </div>
                    )
            }
        </div>
    )
}

export default CategoriesPage