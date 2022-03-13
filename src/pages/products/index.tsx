import { useQuery } from 'react-query';
import ProductItem from '../../components/ProductItem';
import { fetcher, QueryKeys } from '../../queryClient';
import { Product } from '../../types';

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: 'GET',
      path: '/products',
    })
  );
  console.log('data', data);

  return (
    <div>
      상품목록
      <ul className="products">
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
