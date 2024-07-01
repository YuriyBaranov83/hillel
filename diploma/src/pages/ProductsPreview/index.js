import ProductCard from "../../components/ProductCard";
import { ReactComponent as LogoProd } from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../constans";


import "./index.css";

const ProductsPreview = () => {
  const navigate = useNavigate();
  const [productPreview, setProductPreview] = useState([]);

  
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProductPreview(products);
    };
    getProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/products`
      );
      if (!response.ok) {
        throw new Error(`Помилка ${response.statusText}`);
      }
      const productsList = await response.json();
      return productsList;
    } catch (error) {
      console.error("Error", error);
    }
   
  };

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
              readyTodelivery={product.delivery ? "Готовий до відправки" : "Не готовий до відправки"}
              quantityProd={"Кількість: "}
              className={product.delivery ? "product-card" : "product-card not-ready"}
            />
          
        ))}
      </div>
    </div>
  );
};

export default ProductsPreview;