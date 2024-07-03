import "./index.css";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomButton from "../CustomButton";

const Table = ({ classNameCustom, productsList, onDelete }) => {
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setCurrentId(id);
    setShow(true);
  };

  const handleDelete = () => {
    onDelete(currentId);
    handleClose();
  };

  return (
    <table className={classNameCustom}>
      <thead>
        <tr>
          <th>
            ID <PiArrowsDownUpThin />
          </th>
          <th>
            Category <PiArrowsDownUpThin />
          </th>
          <th>
            Name <PiArrowsDownUpThin />
          </th>
          <th>
            Quantity <PiArrowsDownUpThin />
          </th>
          <th>
            Price (₴) <PiArrowsDownUpThin />
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productsList.map((element) => (
          <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.category}</td>
            <td>{element.name}</td>
            <td>{element.quantity}</td>
            <td>{element.price}</td>
            <td className="edit">
              <BsFillPencilFill />
              <RiDeleteBin4Fill onClick={() => handleShow(element.id)} />
            </td>
          </tr>
        ))}
      </tbody>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Прийняти видалення</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ви впевнені що хочете видалити цей продукт?
        </Modal.Body>
        <Modal.Footer>
          <CustomButton className="cancel-delete" onClick={handleClose}>
            Cancel
          </CustomButton>
          <CustomButton className="submit-delete" onClick={handleDelete}>
            Delete
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </table>
  );
};

export default Table;