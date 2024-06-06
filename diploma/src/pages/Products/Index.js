import "./Index.css";
import { ReactComponent as LogoOther } from "../../assets/logo.svg";
import { GrUserManager } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin4Fill } from "react-icons/ri";
import Row from "../../components/Row/Index";
import Wrapper from "../../components/Wrapper/Index";
import ButtonLogin from "../../components/ButtonLogin/Index";
import Title from "../../components/Title/Index";
import Table from "./components/Table/Index";

const Products = () => {
  return (
    <div className="products">
      <Row>
        <LogoOther />
      </Row>
      <Wrapper>
        <ButtonLogin type="button">
          <GrUserManager />
          Preview
        </ButtonLogin>
        <ButtonLogin type="button">
          <GoPlus />
          Add product
        </ButtonLogin>
      </Wrapper>
      <Title>Products</Title>
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
        <tr>
          <td>0</td>
          <td>PC</td>
          <td>Lenovo Y50-70</td>
          <td>5</td>
          <td>25,000.00</td>
          <td className="edit">
            <BsFillPencilFill />
            <RiDeleteBin4Fill />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Clothes</td>
          <td>Nike M Nk Df Acd21</td>
          <td>22</td>
          <td>4,000.00</td>
          <td className="edit">
            <BsFillPencilFill />
            <RiDeleteBin4Fill />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Plumbing</td>
          <td>CERSANIT MITO 17</td>
          <td>1337</td>
          <td>5,000.00</td>
          <td className="edit">
            <BsFillPencilFill />
            <RiDeleteBin4Fill />
          </td>
        </tr>
      </Table>
    </div>
  );
};

export default Products;
