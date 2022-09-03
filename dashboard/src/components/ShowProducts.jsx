import { render } from '@testing-library/react';
import { useCustomFetch } from '../hooks/useCustomFetch';
import Loading from './Loading';
import ProductCard from './ProductCard'

const ShowProducts = () => {
  const { data, isLoading, hasHerrors } = useCustomFetch('http://localhost:3000/controllers/api/products');
  const response = !!data && data

  return (
    <div className="products">
      {
        isLoading ?
          (
            <Loading />
          )
          :
          render() (
            response.products.map(product => {
              return <ProductCard key={product.id} {...product} />
            })
          )
      }
    </div>
  )
}

export default ShowProducts