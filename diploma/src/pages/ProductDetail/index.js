import "./index.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../../constans";
import Spiner from "../../components/Spiner";
import { ReactComponent as LogoOther } from "../../assets/logo.svg";
import Button from "../../components/Button";
import { TiArrowBack } from "react-icons/ti";
import { MdOutlineCloudDone } from "react-icons/md";


const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products/${productId}`);
        if (!response.ok) {
          throw new Error(`Помилка: ${response.statusText}`);
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error("Помилка:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <Spiner />;
  }

  const handlePreviewClick = () => {
    navigate(`/products-preview`);
  };


  return (
    <div className="product-detail">
      <div className="product-detail-logo">
        <LogoOther />
      </div>
      <div className="product-detail-wrapper">
        <div className="product-detail-title">
          <Button onClick={handlePreviewClick}> 
            <TiArrowBack />
          </Button>
          <h1>{product.name}{product.color}</h1>
        </div>
        <div className="product-detail-block">
          <div className="product-detail-image">
            <img src={product.image} alt={`Product: ${product.name}`}/>
          </div>
          <div className="product-detail-summary">
            <div className={`availability-block ${product.quantity > 0 ? "available" : "not-available"}`}> 
              <MdOutlineCloudDone />
              {product.quantity > 0 ? "Є в наявності" : "Нема в наявності"}
            </div>
            <div className="product-detail-price">{product.price}₴</div>
            <div className="product-detail-quantity">Кількість: {product.quantity}</div>
          </div>
        </div>
        <div className="product-detail-seo">
          <h2>
            Опис <span>{product.name}{product.color}</span>
          </h2>
          <div>{product.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
