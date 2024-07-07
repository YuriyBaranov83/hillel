import React from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../CustomButton";

const ModalDelete = ({ show, handleClose, handleDelete }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Підтвердження видалення</Modal.Title>
      </Modal.Header>
      <Modal.Body>Ви впевнені що хочете видалити цей продукт?</Modal.Body>
      <Modal.Footer>
        <CustomButton className="cancel-delete" onClick={handleClose}>
          Cancel
        </CustomButton>
        <CustomButton className="submit-delete" onClick={handleDelete}>
          Delete
        </CustomButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;
