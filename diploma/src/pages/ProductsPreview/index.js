import React from "react";
import ProductCard from "../../components/ProductCard";
import { ReactComponent as LogoProd } from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import "./index.css";

const ProductsPreview = () => {
  const navigate = useNavigate();

  const productPreview = [
    { id: 0, color: "Aluminum Black", image: "https://cdn.pixabay.com/photo/2018/08/09/10/46/telephone-3594206_1280.jpg", name: "Old phone", quantity: 1, price: 25000.0 },
    { id: 1, color: "Aluminum Black", image: "https://cdn.pixabay.com/photo/2021/11/16/15/35/electronics-6801339_1280.jpg", name: "Laptop Lenovo Y50-70", quantity: 22, price: 4000.0 },
    { id: 2, color: "Aluminum Black", image: "https://yablyk.com/wp-content/uploads/2021/07/canon-77d.jpg", name: "Сamera Canon550D", quantity: 555, price: 5000.0 },
    { id: 3, color: "Aluminum Black", image: "https://cdn.pixabay.com/photo/2021/11/16/15/35/electronics-6801339_1280.jpg", name: "Laptop Lenovo Y50-70", quantity: 22, price: 4000.0 },
    { id: 4, color: "Aluminum Black", image: "https://yablyk.com/wp-content/uploads/2021/07/canon-77d.jpg", name: "Сamera Canon550D", quantity: 555, price: 5000.0 },
  ];

  const handleProductClick = (id) => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <div className="products-preview">
      <LogoProd className="logo-prod" />
      <div className="product-card-wrapper">
        {productPreview.map((product) => (
          
            <ProductCard 
              key={product.id} 
              onClick={() => handleProductClick(product.id)}
              product={product}
              readyTodelivery={"Готовий до відправки"}
              quantityProd={"Кількість: "}
            />
          
        ))}
      </div>
    </div>
  );
};

export default ProductsPreview;