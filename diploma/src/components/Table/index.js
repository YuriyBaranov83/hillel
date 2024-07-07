import "./index.css";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useState } from "react";
import ModalDelete from "../ModalDelete";

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
      <ModalDelete
        show={show}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </table>
  );
};

export default Table;