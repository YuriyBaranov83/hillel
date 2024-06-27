import React, { useState, useEffect } from "react";
import "./index.css";
import { ReactComponent as LogoOther } from "../../assets/logo.svg";
import { GrUserManager } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/Table";
import Button from "../../components/Button";

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProductsList(products);
    };

    getProducts();
  }, []);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://665f28621e9017dc16f31a57.mockapi.io/api/products"
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

  return (
    <div className="products">
      <div className="row">
        <LogoOther />
      </div>
      <div className="wrapper">
        <Button type="button" className="button-products">
          <GrUserManager />
          Preview
        </Button>
        <Button type="button" className="button-products">
          <FaPlus />
          Add product
        </Button>
      </div>
      <h1 className="title">Products</h1>
      <Table classNameCustom="products-table" productsList={productsList} />
    </div>
  );
};

export default Products;
