import "./index.css";
import { ReactComponent as LogoOther } from "../../assets/logo.svg";
import { GrUserManager } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
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
      <Table classNameCustom="products-table" productsList={productsList} />
    </div>
  );
};

export default Products;
