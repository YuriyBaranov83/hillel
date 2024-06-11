import "./index.css";
import { BsCart4 } from "react-icons/bs";
const ProductCard = ({ ProductPreviewList, readyTodelivery, quantityProd }) => {
  return (
    <div className="product-card-wrapper">
      {ProductPreviewList.map((element) => (
        <div className="product-card" key={element.id}>
          <div className="image-prod">
            <img src={element.image} alt="" />
          </div>
          <div className="name-prod">{element.name}</div>
          <div className="color-prod">{element.color}</div>
          <div className="price-prod">{element.price}</div>
          <div className="quantity-prod">
            {quantityProd}
            {element.quantity}
          </div>
          <div className="delivery-prod">
            <BsCart4 />
            <span>{readyTodelivery}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
