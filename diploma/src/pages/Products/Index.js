import { useState, useEffect } from "react";
import "./index.css";
import { ReactComponent as LogoOther } from "../../assets/logo.svg";
import { GrUserManager } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/Table";
import CustomButton from "../../components/CustomButton";
import { API_URL } from "../../constans";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import ModalDelete from "../../components/ModalDelete";
import Form from "../../components/Form";
import Spinner from "../../components/Spinner";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [modalMode, setModalMode] = useState('Add');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/products`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const productsList = await response.json();
      setProductsList(productsList);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); 
    }
  };

  const handlePreview = () => {
    navigate("/products-preview");
  };

  const handleDelete = async (id) => {
    setLoading(true); 
    try {
      const response = await fetch(`${API_URL}/api/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Error deleting: ${response.statusText}`);
      }
      await getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowAddModal = () => {
    setModalMode('Add');
    setCurrentProduct(null);
    setShowEditModal(true);
  };

  const handleEdit = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/products/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching product: ${response.statusText}`);
      }
      const product = await response.json();
      setCurrentProduct(product);
      setModalMode('Edit');
      setShowEditModal(true);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseEditModal = () => setShowEditModal(false);

  const handleFormSubmit = async (values, { setSubmitting }) => {
    setLoading(true); 
    try {
      const method = modalMode === 'Add' ? 'POST' : 'PUT';
      const url = modalMode === 'Add' ? `${API_URL}/api/products` : `${API_URL}/api/products/${currentProduct.id}`;
      
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(`Error ${modalMode === 'Add' ? 'adding' : 'updating'} product: ${response.statusText}`);
      }
      await getProducts();
      setSubmitting(false);
      handleCloseEditModal();
    } catch (error) {
      console.error(`Error ${modalMode === 'Add' ? 'adding' : 'updating'} product:`, error);
    } finally {
      setLoading(false); 
      setSubmitting(false);
    }
  };

  const handleShowDeleteModal = (id) => {
    setCurrentProduct(id);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleConfirmDelete = async () => {
    setLoading(true);
    try {
      await handleDelete(currentProduct);
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setLoading(false);
      handleCloseDeleteModal();
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
        <CustomButton
          type="button"
          className="button-products"
          onClick={handleShowAddModal}
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
      <Modal
        className="modal-window"
        show={showEditModal}
        handleClose={handleCloseEditModal}
        title={modalMode === 'Add' ? 'Add Product' : 'Edit Product'}
      >
        <Form
          initialValues={currentProduct || {
            category: "",
            name: "",
            quantity: "",
            price: "",
            description: "",
          }}
          onSubmit={handleFormSubmit}
          onCancel={handleCloseEditModal}
        />
      </Modal>
      <ModalDelete
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleDelete={handleConfirmDelete}
      />
      {loading && <Spinner />}
    </div>
  );
};

export default Products;