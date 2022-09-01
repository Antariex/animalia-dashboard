import { useCustomFetch } from '../hooks/useCustomFetch';
import Loading from './Loading';
import ProductCard from './ProductCard'

const ShowProducts = () => {
  const { data, isLoading, hasHerrors } = useCustomFetch('https://zen-hogar.herokuapp.com/api/products');
  const response = !!data && data

  return (
    <div className="products">
      {
        isLoading ?
          (
            <Loading />
          )
          :
          (
            response.products.map(product => {
              return <ProductCard key={product.id} {...product} />
            })
          )
      }
    </div>
  )
}

export default ShowProducts