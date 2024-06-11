import "./index.css";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin4Fill } from "react-icons/ri";

const Table = ({ classNameCustom, productsList }) => {
  return (
    <table className={classNameCustom}>
      <thead>
        <tr>
          <th>
            ID <PiArrowsDownUpThin />
          </th>
          <th>
            Category
            <PiArrowsDownUpThin />
          </th>
          <th>
            Name
            <PiArrowsDownUpThin />
          </th>
          <th>
            Quantity
            <PiArrowsDownUpThin />
          </th>
          <th>
            Price (₴)
            <PiArrowsDownUpThin />
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
              <RiDeleteBin4Fill />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;