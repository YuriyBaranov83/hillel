import "./index.css";
import { ReactComponent as LogoOther } from "../../assets/logo.svg";
import { GrUserManager } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin4Fill } from "react-icons/ri";
import ButtonLogin from "../../components/ButtonLogin";
import Table from "../../components/Table";


const Products = () => {
  const productsList = [
    { id: 0, category: "PC", name: "Lenovo Y-50", quantity: 5, price: 25000.0 },
    { id: 1, category: "Clothes", name: "Nike M Nk Df Acd21", quantity: 22, price: 4000.0 },
    { id: 2, category: "Plumbing", name: "CERSANIT MITO 17", quantity: 555, price: 5000.0 },
  ];
  return (
    <div className="products">
      <div className="row">
        <LogoOther />
      </div>
      <div className="wrapper">
        <ButtonLogin type="button">
          <GrUserManager />
          Preview
        </ButtonLogin>
        <ButtonLogin type="button">
          <GoPlus />
          Add product
        </ButtonLogin>
      </div>
      <h1 className="title">Products</h1>
      <Table classNameCustom="products-table">
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
          {productsList.map((element,index) => {
            return (
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
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
