import React, { useState, useEffect } from "react";
import "./index.css";
import { ReactComponent as LogoOther } from "../../assets/logo.svg";
import { GrUserManager } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/Table";
import CustomButton from "../../components/CustomButton";
import { API_URL } from "../../constans";
import { useNavigate } from "react-router-dom";
import ModalEdit from "../../components/ModalEdit";
import ModalDelete from "../../components/ModalDelete";
import ModalForm from "../../components/ModalForm";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/products`);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }
      const productsList = await response.json();
      setProductsList(productsList);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handlePreview = () => {
    navigate("/products-preview");
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Ошибка при удалении: ${response.statusText}`);
      }
      await getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleShowDeleteModal = (id) => {
    setCurrentId(id);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleConfirmDelete = () => {
    handleDelete(currentId);
    handleCloseDeleteModal();
  };

  const handleEdit = (id) => {
    console.log(`редагувати ID ${id}`);
    setShowEditModal(true);
  };

  const handleFormSubmit = (values, { setSubmitting }) => {
    console.log('Form values:', values);
    setSubmitting(false);
    handleCloseEditModal();
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
        <CustomButton
          type="button"
          className="button-products"
          onClick={handleShowEditModal}
        >
          <FaPlus />
          Add product
        </CustomButton>
      </div>
      <h1 className="title">Products</h1>
      <Table
        classNameCustom="products-table"
        productsList={productsList}
        onDelete={handleShowDeleteModal}
        onEdit={handleEdit} 
      />
      <ModalEdit
        show={showEditModal}
        handleClose={handleCloseEditModal}
        title="Add Product"
      >
        <ModalForm
          onSubmit={handleFormSubmit}
          onCancel={handleCloseEditModal}
        />
      </ModalEdit>
      <ModalDelete
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default Products;