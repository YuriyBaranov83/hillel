import React, { useState, useEffect } from "react";
import "./index.css";
import { ReactComponent as LogoOther } from "../../assets/logo.svg";
import { GrUserManager } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/Table";
import CustomButton from "../../components/CustomButton";
import { API_URL } from "../../constans";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProductsList(products);
    };
    getProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/products`);
      if (!response.ok) {
        throw new Error(`Помилка ${response.statusText}`);
      }
      const productsList = await response.json();
      return productsList;
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handlePreview = () => {
    navigate("/products-preview");
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/products/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Помилка при видаленні: ${response.statusText}`);
      }
      setProductsList((prevProductsList) => 
        prevProductsList.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="products">
      <div className="row-row">
        <LogoOther />
      </div>
      <div className="wrapper">
        <CustomButton
          type="button"
          className="button-products"
          onClick={handlePreview}
        >
          <GrUserManager />
          Preview
        </CustomButton>
        <CustomButton type="button" className="button-products">
          <FaPlus />
          Add product
        </CustomButton>
      </div>
      <h1 className="title">Products</h1>
      <Table 
        classNameCustom="products-table" 
        productsList={productsList} 
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Products;