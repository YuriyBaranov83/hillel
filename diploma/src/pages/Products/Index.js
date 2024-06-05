import "./Index.css";
import { ReactComponent as LogoOther } from "../../assets/logo.svg";
import Row from "../../components/Row/Index";
import Wrapper from "../../components/Wrapper/Index";
import ButtonLogin from "../../components/ButtonLogin/Index";
import { GrUserManager } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
import Title from "../../components/Title/Index";

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
    </div>
  );
};

export default Products;
