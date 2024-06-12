import "./index.css";
import { BsCart4 } from "react-icons/bs";

const ProductCard = ({ product, readyTodelivery, quantityProd }) => {
  return (
      <div className="product-card" key={product.id}>
        <div className="image-prod">
          <img src={product.image} alt="" />
        </div>
        <div className="name-prod">{product.name}</div>
        <div className="color-prod">{product.color}</div>
        <div className="price-prod">{product.price}</div>
        <div className="quantity-prod">
          {quantityProd}
          {product.quantity}
        </div>
        <div className="delivery-prod">
          <BsCart4 />
          <span>{readyTodelivery}</span>
        </div>
      </div>
  );
};

export default ProductCard;
