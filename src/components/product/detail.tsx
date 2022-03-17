import { Link } from "react-router-dom";
import { Product } from "../../types";

const ProductDetail = ({
  item: {
    id,
    category,
    description,
    image,
    price,
    rating: { rate },
    title,
  },
}: {
  item: Product;
}) => (
  <div className="product-detail">
    <Link to={`/products/${id}`}>
      <span className="product-detail__category">{category}</span>
      <p className="product-detail__title">{title}</p>
      <img className="product-detail__image" src={image} />
      <p className="product-detail__description">{description}</p>
      <span className="product-detail__price">${price}</span>
      <span className="product-detail__rating">{rate}</span>
    </Link>
  </div>
);

export default ProductDetail;
