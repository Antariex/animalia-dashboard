/*import React from 'react'
import ListCategories from '../components/ShowCategories'
import Loading from '../components/Loading';
import { useCustomFetch } from '../hooks/useCustomFetch'

const CategoriesPage = () => {
    const { data, isLoading, hasErrors } = useCustomFetch('/api/categories');
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

export default CategoriesPage*/

import React from 'react'
import ShowSubcategories from '../components/ShowSubcategories'

const SubcategoriesPage = () => {
  return (
    <div className='container'>
      <h2>Subcategorías</h2>

      <ShowSubcategories />
    </div>
  )
}

export default SubcategoriesPage