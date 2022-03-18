import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";

const ProductDetail = ({
  item: { id, description, imageUrl, price, title },
}: {
  item: Product;
}) => (
  <div className="product-detail">
    <Link to={`/products/${id}`}>
      <p className="product-detail__title">{title}</p>
      <img className="product-detail__image" src={imageUrl} />
      <p className="product-detail__description">{description}</p>
      <span className="product-detail__price">${price}</span>
    </Link>
  </div>
);

export default ProductDetail;
