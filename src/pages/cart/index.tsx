import { useQuery } from "react-query";
import CartList from "../../components/cart";
import { GET_CART, CartType } from "../../graphql/cart";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

const CartPage = () => {
  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART));
  const cartItems = Object.values(data || {}) as CartType[];
  console.log(cartItems);
  if (!cartItems.length) return <div>장바구니가 비었어요</div>;
  return (
    <div>
      <h2>장바구니</h2>
      <CartList items={cartItems} />
    </div>
  );
};
export default CartPage;
